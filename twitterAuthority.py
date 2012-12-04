import ujson
import sys
from collections import defaultdict
import utils
import sentiment


def getRetweetCounts(tweets):
    retweetCount = {}
    retweetIndex = {}

    for tweet in tweets:
        if 'retweeted_status' not in tweet:
            continue
        retweet = tweet.get('retweeted_status')
        count = retweet['retweet_count']
        tweetID = tweet['id']
        if tweetID not in retweetCount:
            retweetCount[tweetID] = count
            retweetIndex[tweetID] = retweet
        else:
            retweetCount[tweetID] = count
    
    #sortedCount = sorted(retweetCount.items(), key=lambda x: x[1], reverse=True)
    sortedCount = []
    for key, value in sorted(retweetCount.iteritems(), key=lambda (k,v): (v,k), reverse=True):
        sortedCount.append(key)
    
    file2 = open('topRetweets.txt','w')
    file3 = open('retweetDicts.json','w')
    
    ct=0
    tweetedText = []
    for elem in sortedCount:
        if retweetIndex[elem]['text'] in tweetedText:
            continue        
        ct = ct+1
        file2.write(str(elem))
        file2.write(str("\n"))
        file3.write(ujson.dumps(retweetIndex[elem]))
        tweetedText.append(retweetIndex[elem]['text'])
        file3.write("\n")
        if ct == 10:
            file2.close()
            file3.close()
            break
            
def getSentiment(analyzer):
    file = open('retweetDicts.json','r')
    tweets = []
    positiveCount = 0
    negativeCount = 0
    for line in file:
        tweet = ujson.loads(line)
        sentiment = analyzer.sentiment(tweet)
        tweet['sentiment'] = sentiment
        tweets.append(tweet)
    file.close
    file3 = open('retweetSentiment.json','w')
    for tweet in tweets:
        file3.write(ujson.dumps(tweet))
        file3.write('\n')
            

def main():
    tweets = utils.read_tweets()
    getRetweetCounts(tweets)
    tweets1 = utils.read_tweets()
    filtered = sentiment.filter_classes(tweets1)
    analyzer = sentiment.SentimentAnalyzer()
    analyzer.train_on_filtered(filtered)
    #getSentiment(analyzer)
    



if __name__ == "__main__":
    main() 