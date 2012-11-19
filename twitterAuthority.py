import ujson
import sys
from collections import defaultdict

def getRetweetCounts():
    retweetCount = {}
    retweetIndex = {}
    file = open('tweets.1.json','r')

    for entry in file:
        tweet = ujson.loads(entry)
        if 'retweeted_status' not in tweet:
            continue
        retweet = tweet.get('retweeted_status')
        count = retweet['retweet_count']
        tweetID = tweet['id']
        if tweetID not in retweetCount:
            retweetCount[tweetID] = count
            retweetIndex[tweet['id']] = retweet
        else:
            retweetCount[tweetID] = count
    
    file.close()
    #sortedCount = sorted(retweetCount.items(), key=lambda x: x[1], reverse=True)
    sortedCount = []
    for key, value in sorted(retweetCount.iteritems(), key=lambda (k,v): (v,k)):
        sortedCount.append(key)


    file2 = open('topRetweets.txt','w')
    file3 = open('retweetDicts.txt','w')
    
    ct=0
    for elem in sortedCount:
        ct = ct+1
        file2.write(str(elem))
        file2.write(str("\n"))
        file3.write(str(retweetIndex[elem]))
        file3.write(str("\n"))
        if ct == 20:
            file2.close()
            file3.close()
            break

def main():
    getRetweetCounts()


if __name__ == "__main__":
    main()                