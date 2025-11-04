import { useCalParamsHistory, useDeleteCalParams, useRevertCalParams } from '@gql/configs/CalParams';
import type { CalParamsHistory as CalParamsHistoryType } from '@gql/configs/gen/graphql';
import { CommentConfirmButton } from '@Shared/CommentConfirmButton';
import { formatDate } from 'date-fns';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { useRef, useState } from 'react';

import { useCanEdit } from '@/components/atoms/auth';
import { useCalParamsHistoryVisible } from '@/components/atoms/calparams';
import { useServerConfigValue } from '@/components/atoms/config';
import { Trash } from '@/components/Icons';
import { useToast } from '@/Helpers/toast';

export function CalParamsHistory() {
  const [visible, setVisible] = useCalParamsHistoryVisible();
  const canEdit = useCanEdit();

  const toast = useToast();

  const [selection, setSelection] = useState<CalParamsHistoryType | null>(null);

  const [revertParams, { loading }] = useRevertCalParams();

  const close = () => {
    setVisible(false);
    setSelection(null);
  };

  const onRevertParams = async (comment: string | null) => {
    if (selection) {
      await revertParams({ variables: { pk: selection.pk, comment } });
      toast?.show({
        severity: 'success',
        summary: 'Reverted',
        detail: (
          <div>
            <div>Rolled back parameters:</div>
            <br />
            <div>{comment}</div>
          </div>
        ),
        life: 10000,
      });
      close();
    }
  };

  const footer = (
    <div className="modal-footer">
      <Button text severity="danger" label="Cancel" onClick={close} />
      <CommentConfirmButton
        label="Revert"
        disabled={!selection || !canEdit || loading}
        loading={loading}
        message="Comment:"
        onConfirm={onRevertParams}
        initialComment={
          selection
            ? `Reverted to parameters from ${formatDate(new Date(selection.createdAt), 'Pp')}\n\n${selection.comment}`
            : undefined
        }
      />
    </div>
  );

  return (
    <Dialog header="Revert to previous calibration parameters" visible={visible} onHide={close} footer={footer}>
      <CalParamsHistoryContent canEdit={canEdit} loading={loading} selection={selection} setSelection={setSelection} />
    </Dialog>
  );
}

function CalParamsHistoryContent({
  canEdit,
  selection,
  setSelection,
  loading: loadingProp,
}: {
  canEdit: boolean;
  selection: CalParamsHistoryType | null;
  setSelection: (_: CalParamsHistoryType | null) => void;
  loading: boolean;
}) {
  const { site } = useServerConfigValue();

  const { data: historyData, loading: historyLoading } = useCalParamsHistory(site);

  const [deleteParams, { loading: deleteLoading }] = useDeleteCalParams();

  const loading = loadingProp || historyLoading || deleteLoading;
  const disabled = loading || !canEdit;

  const isCurrentEntry = (entry: CalParamsHistoryType) => entry.pk === historyData?.calParamsHistory?.[0]?.pk;

  const tableData =
    historyData?.calParamsHistory?.map((entry) => ({
      ...entry,
      createdAt: new Date(entry.createdAt) as unknown as string,
    })) ?? [];

  return (
    <div className="cal-params-history-table">
      <DataTable
        value={tableData}
        selection={selection}
        onSelectionChange={(e) => setSelection(e.value as CalParamsHistoryType)}
        selectionMode="single"
        scrollable
        disabled={disabled}
        scrollHeight="flex"
        dataKey="pk"
        loading={loading}
        isDataSelectable={(e) => !isCurrentEntry(e.data as CalParamsHistoryType)}
        filterDisplay="row"
        emptyMessage="No calibration parameters history available."
      >
        <Column
          field="createdAt"
          header="Created"
          sortable
          dataType="date"
          body={(c: CalParamsHistoryType) => formatDate(new Date(c.createdAt), 'Pp')}
        />
        <Column
          field="comment"
          header="Comment"
          sortable
          bodyStyle={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}
        />
        <Column
          header="Actions"
          headerStyle={{ width: '5rem', textAlign: 'center' }}
          bodyStyle={{ textAlign: 'center', overflow: 'visible' }}
          body={(c: CalParamsHistoryType) =>
            isCurrentEntry(c) ? null : (
              <DeleteCalParamsButton onDelete={() => deleteParams({ variables: { pk: c.pk } })} />
            )
          }
        />
      </DataTable>
      <ConfirmPopup />
    </div>
  );
}

function DeleteCalParamsButton({ onDelete, tooltip }: { onDelete: () => void; tooltip?: string }) {
  const ref = useRef<Button>(null);

  return (
    <div className="cal-params-delete-button-wrapper">
      <Button
        ref={ref}
        icon={<Trash />}
        outlined
        severity="danger"
        tooltip={tooltip ?? 'Delete entry'}
        onClick={() =>
          confirmPopup({
            target: ref.current as unknown as HTMLElement,
            message: 'Are you sure you want to delete this entry?',
            accept: () => onDelete(),
          })
        }
      />
    </div>
  );
}
