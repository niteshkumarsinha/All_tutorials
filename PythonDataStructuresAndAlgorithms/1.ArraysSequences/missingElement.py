import random
import collections

# def find_missing_element(arr1, arr2):

#     random.shuffle(arr1)
#     arr1.remove(random.choice(arr1))
#     print(arr1)
#     print(arr2)
#     for num in arr2:
#         if num not in arr1:
#             print(num)


#using zip
def finder(arr1, arr2):
    arr1.sort()
    arr2.sort()

    for num1, num2 in zip(arr1, arr2):
        if num1 != num2:
            return num1

    return arr1[-1]

#Using Collections
def finder2(arr1, arr2):

    d = collections.defaultdict(int)

    for num in arr2:
        d[num] += 1

    for num in arr1:
        if d[num] == 0:
            return num
        
        else:
            d[num] -= 1


#Using Exclusive Or
def finder3(arr1, arr2):
    
    arr1.sort()
    arr2.sort()
    for num1, num2 in  zip(arr1, arr2):
        if num1 ^ num2 != 0:
            return num1



if __name__ == '__main__':
    #find_missing_element([1,2,3,4,5,6,7], [3,7,2,1,4,6])    
    print(finder3([1,2,3,4,5,6,7], [3,7,2,1,4,6]))
    