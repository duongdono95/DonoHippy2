import { UniqueIdentifier } from "@dnd-kit/core";
import { useEffect, useState } from "react";
type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;
export const findContainer = (
  id: UniqueIdentifier,
  items: Items
) => {
  if (id in items) {
    return id;
  }

  return Object.keys(items).find((key) =>
    items[key].includes(id)
  );
};

export function getColor(id: UniqueIdentifier) {
  switch (String(id)[0]) {
    case "A":
      return "#7193f1";
    case "B":
      return "#ffda6c";
    case "C":
      return "#00bcd4";
    case "D":
      return "#ef769f";
  }

  return undefined;
}
export function useMountStatus() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => setIsMounted(true),
      500
    );

    return () => clearTimeout(timeout);
  }, []);

  return isMounted;
}
export const getIndex = (
  id: UniqueIdentifier,
  items: Items
) => {
  const container = findContainer(id, items);

  if (!container) {
    return -1;
  }

  const index = items[container].indexOf(id);

  return index;
};
