class Dequeue:

    def __init__(self):
        self.items = []
        self.length = 0

    def __len__(self):
        return self.length

    def addFront(self, item):
        self.items.insert(0, item)
        self.length += 1

    def removeFront(self):
        if self.length > 0:
            item = self.items.pop(0)
            self.length -= 1
            return item

    def addRear(self, item):
        self.items.append(item)
        self.length += 1

    def removeRear(self):
        if self.length > 0:
            item = self.items.pop()
            self.length -= 1
            return item

    def isEmpty(self):
        return self.length == 0

    def size(self):
        return self.length


if __name__ == "__main__":
    deq = Dequeue()
    deq.addFront(10)
    deq.addFront(20)
    deq.addFront(30)
    print(len(deq))
    print(deq.items)
    deq.addRear(40)
    print(deq.items)
    deq.removeRear()
    deq.removeFront()
    deq.removeRear()
    deq.removeFront()
    print(deq.items)
    print(len(deq))
