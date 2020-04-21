def binary_search_iter(arr, ele):

    low = 0
    high = len(arr) - 1
    found = False
    while(high >= low):
        middle = (low + high) // 2
        print("looping-middle: ", middle)
        if arr[middle] == ele:
            found = True
            print("middle", middle)
            break
        elif arr[middle] > ele:
            high = middle - 1
            print("high: ", high)
        else:
            low = middle + 1
            print("low: ", low)
    return found


def binary_search_rec(arr, ele):

    if len(arr) < 1:
        return False

    low = 0
    high = len(arr) - 1
    middle = (low + high) // 2
    found = False
    if arr[middle] == ele:
        found = True
    elif arr[middle] > ele:
        return binary_search_rec(arr[:middle], ele)
    else:
        return binary_search_rec(arr[middle+1:], ele)

    return found


if __name__ == "__main__":
    print(binary_search_iter([1, 2, 3, 4, 5], 3))
    print(binary_search_rec([1, 2, 3, 4, 5], 5))
