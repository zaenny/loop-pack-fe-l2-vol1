type Props = {
  label: string;
  amount: number;
  thumbnail?: string;
  option?: string;
  quantity?: number;
};

export function OrderLineRow({
  label,
  amount,
  thumbnail,
  option,
  quantity,
}: Props) {
  return (
    <div className="line">
      <span className="thumb">{thumbnail}</span>
      <div className="grow">
        <span>{label}</span>
        {option && quantity ? (
          <small>
            {option} · 수량 {quantity}
          </small>
        ) : null}
      </div>
      <strong style={{ color: 'var(--text-h)' }}>
        {amount.toLocaleString()}원
      </strong>
    </div>
  );
}
