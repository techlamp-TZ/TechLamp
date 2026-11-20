import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Field, controlClass, describedBy } from "@/components/forms/Field";

type Props = Omit<ComponentProps<"input">, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  fieldClassName?: string;
};

export function TextInput({ id, label, hint, error, optional, required, className, fieldClassName, ...rest }: Props) {
  return (
    <Field id={id} label={label} hint={hint} error={error} optional={optional} required={required} className={fieldClassName}>
      <input
        id={id}
        name={rest.name ?? id}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, !!hint, !!error)}
        className={cn(controlClass, className)}
        {...rest}
      />
    </Field>
  );
}
