def selectionSort(arr):

    for i in range(len(arr)-1, 0, -1):
        curr_max = arr[i]
        index = i
        for j in range(i):
            if arr[j] > curr_max:
                curr_max = arr[j]
                index = j

        temp = arr[i]
        arr[i] = curr_max
        arr[index] = temp

    return arr


if __name__ == "__main__":
    print(selectionSort([5, 4, 2, 3, 1]))
    print(selectionSort([10, 9, 8, 7, 6, 1, 2, 3, 4, 5]))
