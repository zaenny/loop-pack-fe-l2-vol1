import type { Member } from './types';

type Props = {
  amount: number;
  member?: Member;
};

const VIP_DISCOUNT_RATE = 0.9;

// 여기저기서 쓰는 '공통' 금액 표시 컴포넌트.
export function Price({ amount, member }: Props) {
  const value =
    member?.grade === 'VIP' ? Math.round(amount * VIP_DISCOUNT_RATE) : amount;
  return <strong>{value.toLocaleString()}원</strong>;
}
