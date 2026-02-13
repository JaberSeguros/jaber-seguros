/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";
import type { ControllerRenderProps } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputWithIcon({
  Icon,
  placeholder,
  label,
  type,
  field,
  required = false,
}: {
  Icon: React.ReactNode;
  placeholder: string;
  label: string;
  type: string;
  // biome-ignore lint/suspicious/noExplicitAny: reusable controlled input accepts any form shape
  field: ControllerRenderProps<any, any>;
  required?: boolean;
}) {
  const id = useId();
  const { name, onBlur, onChange, ref, value, disabled } = field;
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id} className="flex items-center gap-1">
        {label}
        {required ? <span className="text-destructive">*</span> : null}
      </Label>
      <div className="relative">
        <Input
          className="peer ps-9"
          id={id}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          value={(value as string) ?? ""}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          {Icon}
        </div>
      </div>
    </div>
  );
}
