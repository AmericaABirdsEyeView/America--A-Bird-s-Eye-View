import sys
import ujson
from collections import defaultdict



def countTweets():
    file = open('tweets.1.json','r')
    stateCounter = {"Alabama":0, "Alaska":0, "Arizona":0,"Arkansas":0,"California":0,"Colorado":0,"Connecticut":0,"Delaware":0,"Florida":0,"Georgia":0,"Hawaii":0,"Idaho":0,"Illinois":0,"Indiana":0,"Iowa":0,"Kansas":0,"Kentucky":0,"Louisiana":0,"Maine":0,"Maryland":0,"Massachusetts":0,"Michigan":0,"Minnesota":0,"Mississippi":0,"Missouri":0,"Montana":0,"Nebraska":0,"Nevada":0,"New Hampshire":0,"New Jersey":0,"New Mexico":0,"New York":0,"North Carolina":0,"North Dakota":0,"Ohio":0,"Oklahoma":0,"Oregon":0,"Pennsylvania":0,"Rhode Island":0,"South Carolina":0,"South Dakota":0,"Tennessee":0,"Texas":0,"Utah":0,"Vermont":0,"Virginia":0,"Washington":0,"West Virginia":0,"Wisconsin":0,"Wyoming":0}
    
    states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland',
    'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
    'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

    abbreviations = ['al','ak','az','ar','ca','co','ct','de','fl','ga','hi','id','il','in','ia','ks','ky','la','me','md','ma','mi','mn','ms','mo','mt','ne','nv','nh','nj','nm','ny','nc','nd','oh','ok','or','pa','ri','sc','sd','tn',
    'tx','ut','vt','va','wa','wv','wi','wy']
    count = 0
    for entry in file:
        tweet = ujson.loads(entry)
        if 'user' not in tweet:
            continue
        user = tweet.get('user')
        loc = user['location']
        for x in range(0,len(stateCounter)-1):
            if states[x].lower() in loc:# or abbreviations[x] in loc.lower():
                if x == 14:
                    print loc
                stateCounter[states[x]] = stateCounter[states[x]] + 1
    
    print stateCounter
    
def main():
    countTweets()


if __name__ == "__main__":
    main()                