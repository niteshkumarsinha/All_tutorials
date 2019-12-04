import sys

n = sys.argv[1]

data = []

for i in range(int(n)):
    a = len(data)
    b = sys.getsizeof(data)

    print("Length: {0:3d} ; Size in bytes: {1:4d}".format(a, b))
    data.append(i)
