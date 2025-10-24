import { Button, type ButtonProps } from 'primereact/button';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { InputTextarea } from 'primereact/inputtextarea';
import type { IconType } from 'primereact/utils';
import { type ReactNode, useId, useRef, useState } from 'react';

import { FloppyDisk } from '../Icons';
import { Title } from './Title/Title';

/**
 * Button with confirmation popup including comment input. When clicked, shows a popup asking for confirmation to save along with an input field for a comment.
 */
export function CommentConfirmButton({
  disabled,
  icon,
  initialComment,
  loading,
  message,
  tooltip,
  confirmLabel = 'Save',
  rejectLabel = 'Cancel',
  onConfirm,
}: {
  disabled?: boolean;
  icon?: IconType<ButtonProps>;
  initialComment?: string;
  loading?: boolean;
  message: string;
  tooltip: string;
  confirmLabel?: string;
  rejectLabel?: string;
  onConfirm: (comment: string | null) => void | Promise<void>;
}) {
  const confirmButtonRef = useRef<Button>(null);
  const id = useId();

  return (
    <>
      <Button
        ref={confirmButtonRef}
        className="comment-confirm-button"
        tooltip={tooltip}
        aria-label={tooltip}
        disabled={disabled}
        loading={loading}
        icon={icon ?? <FloppyDisk />}
        onClick={() =>
          confirmPopup({
            // @ts-expect-error group is not typed in primereact types
            group: `comment-confirm-${id}`,
            message: message,
            target: confirmButtonRef.current as unknown as HTMLElement,
          })
        }
      />
      <ConfirmPopup
        // @ts-expect-error group is not typed in primereact types
        group={`comment-confirm-${id}`}
        // eslint-disable-next-line @typescript-eslint/unbound-method
        content={({ hide, acceptBtnRef, rejectBtnRef, message }) => (
          <CommentConfirmPopup
            message={message}
            loading={loading}
            confirmLabel={confirmLabel}
            initialComment={initialComment}
            rejectLabel={rejectLabel}
            acceptBtnRef={acceptBtnRef}
            rejectBtnRef={rejectBtnRef}
            onConfirm={onConfirm}
            onHide={() => hide()}
          />
        )}
      />
    </>
  );
}

function CommentConfirmPopup({
  message,
  loading,
  confirmLabel,
  initialComment,
  rejectLabel,
  acceptBtnRef,
  rejectBtnRef,
  onConfirm,
  onHide,
}: {
  message: ReactNode;
  loading: boolean | undefined;
  confirmLabel: string;
  initialComment?: string;
  rejectLabel: string;
  acceptBtnRef: React.Ref<HTMLButtonElement>;
  rejectBtnRef: React.Ref<HTMLButtonElement>;
  onConfirm: (comment: string | null) => void | Promise<void>;
  onHide: () => void;
}) {
  const [comment, setComment] = useState(initialComment ?? '');

  return (
    <div className="confirm-button-popup">
      <Title title={message} />
      <InputTextarea
        placeholder="Enter a comment (optional)"
        value={comment}
        cols={50}
        rows={5}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="confirm-button-buttons">
        <Button
          size="small"
          severity="danger"
          text
          label={rejectLabel}
          onClick={onHide}
          ref={rejectBtnRef as React.Ref<Button>}
        />
        <Button
          size="small"
          label={confirmLabel}
          loading={loading}
          onClick={async () => {
            await onConfirm(comment.trim() || null);
            onHide();
          }}
          ref={acceptBtnRef as React.Ref<Button>}
        />
      </div>
    </div>
  );
}
