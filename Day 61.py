def isTeenager(age, hasPermission):
    return (age < 18 and not hasPermission) or (age == 18 and hasPermission)

def isValidCoupon(couponCode, totalAmount):
    return ((couponCode == "SALE" or couponCode == "BIGSALE") and totalAmount >= 50) or (couponCode == "LILSALE")