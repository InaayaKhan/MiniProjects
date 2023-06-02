def has_invalid_characters(string):
    valid = "abcdefghijklmnopqrstuvwxyz0123456789."
    
    # your code here
    for i in string:
        if i not in valid:
            return True
    return False

def is_valid(email):
    if email.count("@")==1:
        list1 = email.split("@")
        prefix, domain = list1
        if len(prefix)==0:
            return False
            
        if domain.count(".")!=1:
            return False
            
        list2 = domain.split(".")
        domain_name, extension = list2
        if len(domain_name)==0 or len(extension)==0:
            return False
            
        if has_invalid_characters(prefix):
            return False
    
        if has_invalid_characters(domain):
            return False
        
        return True
    else:
        return False
    
    

emails = [
    "test@example.com",
    "valid@gmail.com",
    "invalid@gmail",
    "invalid",
    "not an email",
    "invalid@email",
    "!@/",
    "test@@example.com",
    "test@.com",
    "test@site.",
    "@example.com",
    "an.example@test",
    "te#st@example.com",
    "test@exam!ple.com"
]

for email in emails:
    if is_valid(email):
        print(email + " is valid")
    else:
        print(email + " is invalid")    