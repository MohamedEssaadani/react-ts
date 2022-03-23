type RandomNumberType = {
  value: number;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "is Positive"} {isNegative && "is Negative"}{" "}
      {isZero && "is Zero"}
    </div>
  );
};

export default RandomNumber;
