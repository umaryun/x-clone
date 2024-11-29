def two_sum(arr, target):
    #define the start and the end
    # start = 0
    # end = len(arr) - 1
    # while start != end:
    #     if arr[start] + arr[end] == target:
    #         print(start, end, target)
    #         return
    #     else:
    #         start += 1
    #         end -= 1
    # print("NILL")
    for i in arr:
        answer = target - i
        if answer in arr:
            print(i, answer, target)
            return
    print("NILL")
        
two_sum([1,2,3,4,5], 8)