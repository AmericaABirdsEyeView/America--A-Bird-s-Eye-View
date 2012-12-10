import ujson
import sys
from collections import defaultdict
import utils
from collections import Counter
import re




def getRetweetCounts(tweets):
    topTweets = []
    topURLS = []
    topHashTags = []
    retweetDict = {}
    for tweet in tweets:
        if 'text' not in tweet:
            continue
        text = tweet['text'] 
        if 'retweeted_status' not in tweet:
            continue
            
        retweet = tweet['retweeted_status']
        retweetDict[retweet["id"]] = retweet
   
        topTweets.append(retweet["id"])
        
        if 'entities' not in tweet:
            continue
            
        for URL in tweet['entities']['urls']:
            if URL['expanded_url'] == "None":
                    topURLS.append(URL['url'])
            topURLS.append(URL['expanded_url'])
            
        for HashTag in tweet['entities']['hashtags']:
            topHashTags.append(HashTag['text'].encode('UTF-8').lower())
    topTweets = Counter(topTweets)
    topURLS = Counter(topURLS)
    topHashTags = Counter(topHashTags)
        
    sortedTweets = []
    for key, value in sorted(topTweets.iteritems(), key=lambda (k,v): (v,k)):
        sortedTweets.insert(0,key)
        
       
        
    sortedURLS = []
    for key, value in sorted(topURLS.iteritems(), key=lambda (k,v): (v,k)):
        sortedURLS.insert(0,key)

    sortedHashTags = []        
    for key, value in sorted(topHashTags.iteritems(), key=lambda (k,v): (v,k)):
        sortedHashTags.insert(0,key)    
    
    
    file1 = open('topRetweets.json','w')
    count = 0
    for tweet in sortedTweets:
        if count == 10:
            break
        file1.write(ujson.dumps(retweetDict[tweet]))
        count += 1 
        file1.write('\n')
        
    file1.close
    
    file2 = open('topURLS.txt','w')
    count = 0 
    for URL in sortedURLS:
        if str(URL) == "None":
            continue
        if count == 10:
            break
        file2.write(str(URL))
        count += 1    
        file2.write('\n')
    file2.close()
    
    file3 = open('topHashTags.txt','w')
    count = 0
    for HashTag in sortedHashTags:
        if count == 10:
            break
        file3.write(str(HashTag))
        count += 1  
        file3.write('\n')
        
    file3.close()    
    

    

def main():
    tweets = utils.read_tweets()
    getRetweetCounts(tweets)


if __name__ == "__main__":
    main() 