def bubbleSort(arr):

    i = len(arr) - 1
    while(i >= 0):
        j = 0
        while (j < i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
            j += 1
        i -= 1
    return arr




if __name__ == "__main__":
    print(bubbleSort([1, 2, 4, 3, 2, 2]))
    print(bubbleSort([10, 9, 1, 12, 4, 24, 32, 23]))
