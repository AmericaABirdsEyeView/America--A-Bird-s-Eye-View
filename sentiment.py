#!/usr/bin/env python
import collections
import math
import operator
import heapq
import random
import time
from itertools import chain
import re
from stemming import porter2
import utils
import sys



def tokenize(text):
    tokens = re.findall("[\w']+", text.lower())
    return tokens


class SentimentAnalyzer(object):
    def train(self, tweets):
        """
        Take a group of tweets, split them into classes, and train on the
        tweets. This method is only called when using the classifer to index
        tweets, and it is not used when evaluating the classifier.
        """
        # You probably don't need to edit this method.
        self.train_on_filtered(filter_classes(tweets))

    def train_on_filtered(self, filtered_tweets):
        """
        purpose: train a bayesian classifier on labeled tweets.
        parameters:
            filtered_tweets - a dictionary mapping class names to a list of
            tweets in that class
        returns: None
        """
        self.class_prob = {}
        self.term_prob = {}

        vects = {}
        for clas,tweets in filtered_tweets.iteritems():
            vects[clas] = [_vectorize(tweet['text']) for tweet in tweets]

        train_len = sum(len(tweets) for tweets in filtered_tweets.itervalues())
        flattened_vects = chain.from_iterable(vects.itervalues())
        terms = set(chain.from_iterable(flattened_vects))

        for clas,tweets in filtered_tweets.iteritems():
            self.class_prob[clas] = math.log(1.0*len(tweets)/train_len)
            self.term_prob[clas] = self._train_from_vects(vects[clas],terms)

    def _train_from_vects(self, vects, terms):
        word_counts = collections.defaultdict(lambda:1)
        for vect in vects:
            for word,count in vect.iteritems():
                word_counts[word]+=count
        total_words = sum(word_counts.itervalues())
        return {
            term : math.log(1.0*word_counts[term]/total_words)
            for term in terms
        }

    def sentiment(self, tweet):
        vect = _vectorize(tweet['text'])
        scores = {}
        for clas, prob in self.class_prob.iteritems():
            # if a term is not in the training data, the get() method will
            # return zero, and ignore the term.
            scores[clas] = prob + sum(
                count*self.term_prob[clas].get(term,0)
                for term, count in vect.iteritems())
        return max(scores.iteritems(),key=operator.itemgetter(1))[0]

def _vectorize(text):
    tf = collections.defaultdict(int)
    for token in tokenize(text):
        tf[token]+=1
    return tf


# taken from http://en.wikipedia.org/wiki/List_of_emoticons
POS_EMOTICONS = ">:] :-) :) :o) :] :c) :> =] =) :} :^)"
NEG_EMOTICONS = ">:[ :-( :( :-c :c :-< :< :-[ :[ :{ :-|| :'-( :'( :'-) :')"


def filter_classes(tweets):
    """
    purpose: return of dict of positive and negative tweets
    parameters: tweets is an iterator of tweet dictionaries
    returns: a dictionary mapping class names (like "positive" or
             "negative") to a list of tweets in that class.

    This method removes tweets with no recognized emoticon or with emoticons
    from two different classes.
    """
    emoticons = dict(
        positive = POS_EMOTICONS.split(),
        negative = NEG_EMOTICONS.split(),
    )
    filtered = collections.defaultdict(list)
    for tweet in tweets:
        tweet_class = None
        # sometimes html gets into the emoticons
        if 'text' not in tweet:
            continue
        text = tweet['text'].replace('&lt;','<').replace('&gt;','>')
        for clas,smilies in emoticons.iteritems():
            if any(smily in text for smily in smilies):
                if tweet_class:
                    # ignore tweets that fit in two classes
                    continue
                tweet_class = clas
        if tweet_class:
            filtered[tweet_class].append(tweet)

    return filtered

def split_train_eval(filtered):
    """
    purpose: Randomly seperate tweets into a training group and an evaluation group.
    parameters: filtered should be a dictionary mapping class names to a list of
                tweets in that class.
    returns: training group dict and an evaluation group dict (two-thirds of the
             tweets will go to evaluation and one-third will go to training)
    """
    smallest_class_size = min(len(tw) for tw in filtered.itervalues())
    cutoff = 2*smallest_class_size//3
    train_group, eval_group = {}, {}

    for clas,tweets in filtered.iteritems():
        # make the positive and negative classes the same size by throwing away
        # tweets from the larger class.
        picked = random.sample(tweets,smallest_class_size)
        train_group[clas] = picked[:cutoff]
        eval_group[clas] = picked[cutoff:]

    return train_group, eval_group


def cond_probs(label, probs):
    terms = heapq.nlargest(10, probs[label].items(), key=operator.itemgetter(1))
    print label+" Conditional Probabilities"
    for term in terms:
        print "%s \t%.3f"%(term[0],math.e**term[1])
    print


def evaluate(analyzer, filtered_tweets):
    keys = filtered_tweets.keys()
    print 'actual\tclassified'
    print '\t'+('\t'.join(keys))
    for key in keys:
        results = collections.defaultdict(int)
        for tweet in filtered_tweets[key]:
            predicted = analyzer.sentiment(tweet)
            results[predicted]+= 1
        row = "\t".join(str(results[k]) for k in keys)
        print "%s\t%s"%(key,row)

def printTweets(tweets):
    count = 0
    reload(sys)
    sys.setdefaultencoding("utf-8")
    tweetOutput = open('unfilteredTweets.json', 'w')
    for tweet in tweets:
        count += 1
        if count % 100 == 0:
            if 'id' not in tweet or 'text' not in tweet:
                continue
            output = str(tweet['id']) + '\t'+ str(tweet['text']) + '\n'
            tweetOutput.write(output)
            #print str(tweet['id']) + '\t'+ str(tweet['text']) + '\n'
            
        else:
            continue
            
states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland',
    'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
    'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming',"District of Columbia","Hawaii"]

abbreviations = ['al','ak','az','ar','ca','co','ct','de','fl','ga','id','il','in','ia','ks','ky','la','me','md','ma','mi','mn','ms','mo','mt','ne','nv','nh','nj','nm','ny','nc','nd','oh','ok','or','pa','ri','sc','sd','tn',
    'tx','ut','vt','va','wa','wv','wi','wy','dc','hi']
   
            
def countTweets(tweets):
    count = 0
    stateCounter = {}
    for tweet in tweets:
        if 'user' not in tweet:
            continue
        user = tweet.get('user')
        if 'location' not in user:
            continue
        loc = user['location']
        if not loc:
            continue
        loc = tokenize(loc)
        for x in range(0,len(states)-1):
            if states[x].lower() in loc or abbreviations[x] in loc:
                
                if states[x].lower() == "washington" and states[x].lower() in loc:
                    indexW = loc.index("washington")
                    if 'd' not in loc:
                        indexD = -1
                    else: 
                        indexD = loc.index('d')
                        
                    if 'c' not in loc:
                        indexC = -1
                    else: 
                        indexC = loc.index('c')
                        
                    if 'dc' not in loc:
                        indexDC = -1
                    else: 
                        indexDC = loc.index('dc')
                        
                    if indexW-indexD == 1 and indexD-indexC == 1:
                        if "District of Columbia" not in stateCounter:
                            stateCounter["District of Columbia"] = [tweet]
                        else:        
                            stateCounter["District of Columbia"].append(tweet)
                    if indexW-indexDC == 1:
                        if "District of Columbia" not in stateCounter:
                            stateCounter["District of Columbia"] = [tweet]
                        else:        
                            stateCounter["District of Columbia"].append(tweet)

                if states[x] not in stateCounter:
                    stateCounter[states[x]] = [tweet]
                else:
                    stateCounter[states[x]].append(tweet)
    """
    TotalLocations = 0
    for state in states:
        TotalLocations += stateCounter[state]
        print state + "\t\t" + str(stateCounter[state])
    print "Total Locations"+'\t'+ str(TotalLocations)   
    """
    return stateCounter
            
            
def analyzeByState(analyzer,tweets):
    countedTweets = countTweets(tweets)
    tweetOutput = open('StateCounts.txt', 'w')  
    for state in states:
        if state not in countedTweets:
            positive = state + '|' + '0' + '|' + '0' + '\n'
            tweetOutput.write(positive)                
            continue
        positiveNum = 0
        negativeNum = 0
        #print state
        for tweet in countedTweets[state]:
            sentiment = analyzer.sentiment(tweet)
            if sentiment == 'positive':
                positiveNum += 1
            else:
                negativeNum += 1
        positive = state + '|' + str(positiveNum) + '|' + str(negativeNum) + '\n'
        tweetOutput.write(positive)
        
            
        
def main():
    tweets = utils.read_tweets()
    filtered = filter_classes(tweets)
    analyzer = SentimentAnalyzer()
    train_group, eval_group = split_train_eval(filtered)  
    train_group.update(eval_group)
    #for classy in train_group:
        #print classy + "\t" + str(len(train_group[classy]))
    analyzer.train_on_filtered(filtered)
    tweets = utils.read_tweets()
    analyzeByState(analyzer,tweets)
    



if __name__=="__main__":
    start_time = time.time()
    main()
    end_time = time.time()
    print 'done with sentiment after %.3f seconds'%(end_time-start_time)
