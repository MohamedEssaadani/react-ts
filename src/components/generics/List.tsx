type ListProps<T> = {
  listItems: T[];
  onClick: (value: T) => void;
};

const List = <T extends {}>({ listItems, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {listItems.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
