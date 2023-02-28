import { type HTMLAttributes, useId } from "react";

export type MeterProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  | "aria-labelledby"
  | "aria-valuemax"
  | "aria-valuemin"
  | "aria-valuenow"
  | "aria-valuetext"
  | "id"
  | "role"
> & {
  "aria-valuetext": string;
  label?: string;
  max?: number;
  min?: number;
  size?: number;
  unit?: string;
  value: number;
  valueLabel: string;
};

export const Meter = ({
  label,
  max = 100,
  min = 0,
  size = 300,
  unit,
  value = 0,
  valueLabel,
  ...props
}: MeterProps) => {
  const labelId = useId();
  const rootId = useId();

  const percentage = (value - min) / (max - min);

  const center = size / 2;
  const strokeWidth = (7 * size) / 150;
  const radius = center - strokeWidth;
  const circumference = 2 * radius * Math.PI;
  const arc = circumference * (270 / 360);
  const offset = circumference - Math.max(Math.min(percentage, 1), 0) * arc;

  return (
    <div
      aria-labelledby={label ? labelId : undefined}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      id={rootId}
      role="meter progressbar"
      {...props}
    >
      <svg
        className="select-none"
        fill="none"
        height={size}
        strokeWidth={strokeWidth}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
      >
        <circle
          className="stroke-current"
          cx={center}
          cy={center}
          r={radius}
          role="presentation"
          strokeDasharray={`${arc} ${circumference}`}
          strokeOpacity={0.2}
          transform={`rotate(135 ${center} ${center})`}
        />
        <circle
          className="stroke-current transition-all duration-500"
          cx={center}
          cy={center}
          r={radius}
          role="presentation"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(135 ${center} ${center})`}
        />
        {label && (
          <text
            className="fill-current opacity-50"
            fontSize={0.08 * size}
            id={labelId}
            role="presentation"
            textAnchor="middle"
            x={center}
            y={center - (9 * size) / 50}
          >
            {label}
          </text>
        )}
        {valueLabel && (
          <text
            className="fill-current"
            fontSize={(4 * size) / 15}
            role="presentation"
            textAnchor="middle"
            x={center}
            y={center + size / 15}
          >
            {valueLabel}
          </text>
        )}
        {unit && (
          <text
            className="fill-current opacity-50"
            fontSize={0.08 * size}
            role="presentation"
            textAnchor="middle"
            x={center}
            y={center + size / 5}
          >
            {unit}
          </text>
        )}
      </svg>
    </div>
  );
};
