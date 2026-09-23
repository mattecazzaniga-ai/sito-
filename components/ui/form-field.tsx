"use client";

import { useId, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-green/30";

function fieldBorder(hasError: boolean) {
  return hasError ? "border-green focus:border-green" : "border-neutral-300 focus:border-ink";
}

type BaseProps = {
  label: string;
  error?: string;
  required?: boolean;
  helperText?: string;
};

export function TextField({
  label,
  error,
  required,
  helperText,
  id,
  ...props
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = `${fieldId}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className="font-display text-xs font-semibold uppercase tracking-wide text-neutral-700">
        {label} {required ? <span className="text-green">*</span> : null}
      </label>
      <input
        id={fieldId}
        className={cn(fieldBase, fieldBorder(Boolean(error)))}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        required={required}
        {...props}
      />
      {helperText && !error ? <p className="text-xs text-neutral-500">{helperText}</p> : null}
      {error ? (
        <p id={errorId} role="alert" className="text-xs font-medium text-green">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SelectField({
  label,
  error,
  required,
  id,
  children,
  ...props
}: BaseProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = `${fieldId}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className="font-display text-xs font-semibold uppercase tracking-wide text-neutral-700">
        {label} {required ? <span className="text-green">*</span> : null}
      </label>
      <select
        id={fieldId}
        className={cn(fieldBase, fieldBorder(Boolean(error)), "cursor-pointer")}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        required={required}
        {...props}
      >
        {children}
      </select>
      {error ? (
        <p id={errorId} role="alert" className="text-xs font-medium text-green">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextareaField({
  label,
  error,
  required,
  id,
  ...props
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = `${fieldId}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className="font-display text-xs font-semibold uppercase tracking-wide text-neutral-700">
        {label} {required ? <span className="text-green">*</span> : null}
      </label>
      <textarea
        id={fieldId}
        className={cn(fieldBase, fieldBorder(Boolean(error)), "min-h-28 resize-y")}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        required={required}
        {...props}
      />
      {error ? (
        <p id={errorId} role="alert" className="text-xs font-medium text-green">
          {error}
        </p>
      ) : null}
    </div>
  );
}
