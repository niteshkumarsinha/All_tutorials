# def pair_sum(arr, sum):

#     pairs = []

#     for i in range(len(arr)):
#         for j in range(i+1,len(arr)):
#             if arr[i] + arr[j]  == sum:
#                 pairs.append((arr[i], arr[j]))

#     print(pairs)


def pair_sum(arr, k):
    if len(arr) < 2:
        return

    # Sets for tracking
    seen = set()
    output = set()

    for num in arr:
        target = k - num
        if target not in seen:
            seen.add(num)

        else:
            output.add((min(num, target), max(num, target)))

    return output


if __name__ == "__main__":
    print(pair_sum([6, 4, 3, 2, 6, 5, 9, 8, 3, 2, 1], 10))
