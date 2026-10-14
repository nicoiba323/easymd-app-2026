import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { useId } from 'react';
import { Icon, type IconName } from './Icon';

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');

/* ---------- Button ---------- */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'muted' | 'danger' | 'danger-text' | 'wellness' | 'success';
export type ButtonSize = 'sm' | 'md' | 'ml' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  loading?: boolean;
  icon?: IconName;
  iconSize?: number;
}

export function Button({ variant = 'primary', size = 'lg', full, loading, icon, iconSize, className, children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={cx('btn', `btn-${variant}`, `btn-${size}`, full && 'full', loading && 'is-loading', className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <Spinner /> : icon && <Icon name={icon} size={iconSize ?? (size === 'lg' ? 18 : 16)} />}
      {children}
    </button>
  );
}

export const Spinner = () => <span className="spinner" aria-hidden />;

/* ---------- IconButton (44 px circular) ---------- */
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  label: string;
  size?: number;
  count?: number;
  dot?: boolean;
  square?: boolean;
}
export function IconButton({ icon, label, size = 19, count, dot, square, className, ...rest }: IconButtonProps) {
  return (
    <button type="button" aria-label={label} className={cx('icon-btn', square && 'square strong', className)} {...rest}>
      <Icon name={icon} size={size} />
      {!!count && <span className="count-badge">{count}</span>}
      {dot && <span className="dot-badge" />}
    </button>
  );
}

/* ---------- Badge ---------- */
export type Tone = 'ok' | 'info' | 'warn' | 'danger' | 'neutral' | 'wellness' | 'soon';
export function Badge({ tone = 'ok', children, style }: { tone?: Tone; children: ReactNode; style?: CSSProperties }) {
  return <span className={`chip chip-${tone}`} style={style}>{children}</span>;
}

/* ---------- IconBox ---------- */
export function IconBox({ icon, size = 19, bg, fg, box = 'md', style }: { icon: IconName; size?: number; bg?: string; fg?: string; box?: 'sm' | 'md' | 'lg'; style?: CSSProperties }) {
  return (
    <span className={cx('icon-box', box !== 'md' && box)} style={{ background: bg, color: fg, ...style }}>
      <Icon name={icon} size={size} />
    </span>
  );
}

export function Avatar({ initials, size = 44, style }: { initials: string; size?: number; style?: CSSProperties }) {
  return <span className="avatar" style={{ width: size, height: size, fontSize: size >= 52 ? 16 : 15, ...style }}>{initials}</span>;
}

/* ---------- Segmented control (Tabs) ---------- */
export interface SegOption<T extends string> { id: T; label: string; icon?: IconName }
export function Segmented<T extends string>({ options, value, onChange, label, size, tall }: {
  options: SegOption<T>[]; value: T | null | undefined; onChange: (v: T) => void; label: string; size?: 'small'; tall?: boolean;
}) {
  return (
    <div className={cx('seg', size, tall && 'tall')} role="group" aria-label={label}>
      {options.map(o => (
        <button key={o.id} type="button" aria-pressed={value === o.id} onClick={() => onChange(o.id)}>
          {o.icon && <Icon name={o.icon} size={16} />}{o.label}
        </button>
      ))}
    </div>
  );
}

/* ---------- Fields ---------- */
export function FieldError({ children }: { children: ReactNode }) {
  return <span role="alert" className="field-error"><Icon name="warning-circle" size={15} style={{ marginTop: 1 }} />{children}</span>;
}

interface FieldProps {
  label: string;
  hint?: string;
  error?: string;
  children: (id: string, describedBy: string | undefined) => ReactNode;
  roomy?: boolean;
}
export function Field({ label, hint, error, children, roomy }: FieldProps) {
  const id = useId();
  const hintId = hint ? id + '-hint' : undefined;
  return (
    <div className={cx('field', roomy && 'roomy')}>
      <label className="field-label" htmlFor={id}>{label}</label>
      {children(id, hintId)}
      {hint && <span id={hintId} className="field-hint">{hint}</span>}
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

export function SearchBox({ label, placeholder, value, onChange }: { label: string; placeholder: string; value?: string; onChange?: (v: string) => void }) {
  return (
    <label className="search">
      <Icon name="magnifying-glass" size={18} />
      <input type="search" aria-label={label} placeholder={placeholder} value={value} onChange={e => onChange?.(e.target.value)} />
    </label>
  );
}

export function Toggle({ on, wide }: { on: boolean; wide?: boolean }) {
  return <span className={cx('toggle-track', on && 'on', wide && 'wide')} aria-hidden><span className="toggle-knob" /></span>;
}

export function CheckboxBox({ on }: { on: boolean }) {
  return <span className={cx('checkbox-box', on && 'on')} aria-hidden>{on && <Icon name="check" size={15} />}</span>;
}

/* ---------- States ---------- */
export function EmptyState({ icon, title, body, action, variant = 'boxed', iconColor = 'var(--subtle-foreground)', iconSize = 30 }: {
  icon: IconName; title?: string; body?: string; action?: ReactNode; variant?: 'boxed' | 'plain' | 'dashed'; iconColor?: string; iconSize?: number;
}) {
  return (
    <div className={cx('empty', variant !== 'plain' && variant)}>
      <Icon name={icon} size={iconSize} color={iconColor} />
      {title && <span className="empty-title">{title}</span>}
      {body && <span className="empty-body">{body}</span>}
      {action}
    </div>
  );
}

export function ErrorState({ title, body, onRetry }: { title: string; body?: string; onRetry: () => void }) {
  return (
    <div role="alert" className="empty boxed">
      <Icon name="cloud-slash" size={30} color="var(--danger)" />
      <span className="empty-title">{title}</span>
      {body && <span className="empty-body">{body}</span>}
      <Button variant="secondary" size="md" icon="arrow-clockwise" iconSize={15} onClick={onRetry}>Reintentar</Button>
    </div>
  );
}

export function SkeletonList({ height = 72, round, widths = ['60%', '40%'] }: { height?: number; round?: boolean; widths?: [string, string] }) {
  return (
    <div className="stack" style={{ gap: 10 }} aria-busy="true" aria-label="Cargando">
      {[1, 2, 3].map(k => (
        <div key={k} className="skel" style={{ height }}>
          <span className="skel-block" style={{ width: 40, height: 40, borderRadius: round ? '50%' : 12 }} />
          <span className="grow stack" style={{ gap: 8, justifyContent: 'center' }}>
            <span className="skel-block" style={{ height: 12, width: widths[0] }} />
            <span className="skel-block" style={{ height: 10, width: widths[1] }} />
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Rows ---------- */
export function NavRow({ icon, title, sub, onClick, iconColor = 'var(--navy-800)', fontSize = 15 }: {
  icon: IconName; title: string; sub?: string; onClick: () => void; iconColor?: string; fontSize?: number;
}) {
  return (
    <button type="button" onClick={onClick} className="tap card card-18 row">
      <Icon name={icon} size={20} color={iconColor} />
      <span className="grow stack">
        <span className="t-title" style={{ fontSize }}>{title}</span>
        {sub && <span className="t-muted">{sub}</span>}
      </span>
      <Icon name="caret-right" size={18} color="var(--subtle-foreground)" />
    </button>
  );
}
