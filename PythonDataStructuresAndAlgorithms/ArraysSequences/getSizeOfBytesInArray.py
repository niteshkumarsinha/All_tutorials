import sys
from ourDynamicArray import DynamicArray
# no. of elements
n = sys.argv[1]

# empty list
data = DynamicArray()

for i in range(int(n)):

    # no. of elements
    a = len(data)

    # actual size in bytes
    b = sys.getsizeof(data)

    #print("Length: {0:3d} ; Size in bytes: {1:4d}".format(a, b))

    data.append(i)

for i in range(len(data), 0, -1):
    print(i)
