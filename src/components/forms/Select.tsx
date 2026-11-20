import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Field, controlClass, describedBy } from "@/components/forms/Field";

type Props = Omit<ComponentProps<"select">, "id"> & {
  id: string;
  label: string;
  options: readonly { value: string; label: string }[];
  placeholder?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  fieldClassName?: string;
};

const chevron =
  "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%235b5855' stroke-width='1.6' stroke-linecap='round'/%3E%3C/svg%3E\")] bg-[length:12px_8px] bg-[position:right_16px_center] bg-no-repeat";

export function Select({ id, label, options, placeholder = "Select an option", hint, error, optional, required, className, fieldClassName, ...rest }: Props) {
  return (
    <Field id={id} label={label} hint={hint} error={error} optional={optional} required={required} className={fieldClassName}>
      <select
        id={id}
        name={rest.name ?? id}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, !!hint, !!error)}
        className={cn(controlClass, "appearance-none pr-10", chevron, className)}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Field>
  );
}
