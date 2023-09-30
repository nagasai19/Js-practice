//Maintain 2 Pointers
//Increase slow by 1 and fast by 2
//If they Intersect, then LL has a loop.

var hasCycle = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer && fastPointer?.next && fastPointer?.next?.next) {
    slowPointer = slowPointer?.next;
    fastPointer = fastPointer?.next?.next;
    if (slowPointer === fastPointer) {
      return true;
    }
  }
  return false;
};
