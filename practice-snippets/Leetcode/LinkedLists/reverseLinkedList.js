//Maintain 3 Pointers
//Initalise one with Prev with null, current and next for current's next
//Iterate over the list and
//1)Store the current's next pointer as reference
//2)Point current next to Previous
//3)assign current to Previous
//4)assign next to current node

const reverseList = function (head) {
  if (head === null) {
    return head;
  }

  let Previous = null;
  let current = head;

  while (current) {
    const Next = current.next;
    current.next = Previous;
    Previous = current;
    current = Next;
  }
  return Previous;
};
