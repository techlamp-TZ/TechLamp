import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Field, controlClass, describedBy } from "@/components/forms/Field";

type Props = Omit<ComponentProps<"textarea">, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  fieldClassName?: string;
};

export function TextArea({ id, label, hint, error, optional, required, className, fieldClassName, rows = 5, ...rest }: Props) {
  return (
    <Field id={id} label={label} hint={hint} error={error} optional={optional} required={required} className={fieldClassName}>
      <textarea
        id={id}
        name={rest.name ?? id}
        rows={rows}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, !!hint, !!error)}
        className={cn(controlClass, "resize-y py-3", className)}
        {...rest}
      />
    </Field>
  );
}
