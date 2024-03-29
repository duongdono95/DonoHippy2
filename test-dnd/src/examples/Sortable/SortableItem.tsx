import { useSortable } from "@dnd-kit/sortable";
import { Item } from "../../components";
import {
  getColor,
  useMountStatus,
} from "../../utilities/hooks";
import { UniqueIdentifier } from "@dnd-kit/core";
type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;
interface SortableItemProps {
  containerId: UniqueIdentifier;
  id: UniqueIdentifier;
  index: number;
  handle: boolean;
  disabled?: boolean;
  style(args: any): React.CSSProperties;
  getIndex(id: UniqueIdentifier, items: Items): number;
  renderItem(): React.ReactElement;
  wrapperStyle({
    index,
  }: {
    index: number;
  }): React.CSSProperties;
  items: Items;
}
export function SortableItem({
  disabled,
  id,
  index,
  handle,
  renderItem,
  style,
  containerId,
  getIndex,
  wrapperStyle,
  items,
}: SortableItemProps) {
  const {
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    isDragging,
    isSorting,
    over,
    overIndex,
    transform,
    transition,
  } = useSortable({
    id,
  });
  const mounted = useMountStatus();
  const mountedWhileDragging = isDragging && !mounted;

  return (
    <Item
      ref={disabled ? undefined : setNodeRef}
      value={id}
      dragging={isDragging}
      sorting={isSorting}
      handle={handle}
      handleProps={
        handle ? { ref: setActivatorNodeRef } : undefined
      }
      index={index}
      wrapperStyle={wrapperStyle({ index })}
      style={style({
        index,
        value: id,
        isDragging,
        isSorting,
        overIndex: over
          ? getIndex(over.id, items)
          : overIndex,
        containerId,
      })}
      color={getColor(id)}
      transition={transition}
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
      renderItem={renderItem}
    />
  );
}
