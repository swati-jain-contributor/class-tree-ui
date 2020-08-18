// export const rCourses =[];
export const rCourses =[
  {
     "title":"Text Mining with Bag-of-Words in R",
     "description":"Learn the bag of words technique for text mining with R.",
     "detailDescription":"It is estimated that over 70% of potentially usable business information is unstructured, often in the form of text data. Text mining provides a collection of techniques that allows us to derive actionable insights from unstructured data. In this course, we explore the basics of text mining using the bag of words method. The first three chapters introduce a variety of essential topics for analyzing and visualizing text data. The final chapter allows you to apply everything you've learned in a real-world case study to extract insights from employee reviews of two major tech companies.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Jumping into text mining with bag of words\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn the basics of using the bag of words method for analyzing text data.\n  ",
           "parts":[
              "What is text mining?",
              "Understanding text mining",
              "Quick taste of text mining",
              "Getting started",
              "Load some text",
              "Make the vector a VCorpus object (1)",
              "Make the vector a VCorpus object (2)",
              "Make a VCorpus from a data frame",
              "Cleaning and preprocessing text",
              "Common cleaning functions from tm",
              "Cleaning with qdap",
              "All about stop words",
              "Intro to word stemming and stem completion",
              "Word stemming and stem completion on a sentence",
              "Apply preprocessing steps to a corpus",
              "The TDM & DTM",
              "Understanding TDM and DTM",
              "Make a document-term matrix",
              "Make a term-document matrix"
           ]
        },
        {
           "title":"\n          Word clouds and more interesting visuals\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will teach you how to visualize text data in a way that's both informative and engaging.\n  ",
           "parts":[
              "Common text mining visuals",
              "Test your understanding of text mining",
              "Frequent terms with tm",
              "Frequent terms with qdap",
              "Intro to word clouds",
              "A simple word cloud",
              "Stop words and word clouds",
              "Plot the better word cloud",
              "Improve word cloud colors",
              "Use prebuilt color palettes",
              "Other word clouds and word networks",
              "Find common words",
              "Visualize common words",
              "Visualize dissimilar words",
              "Polarized tag cloud",
              "Visualize word networks",
              "Teaser: simple word clustering"
           ]
        },
        {
           "title":"\n          Adding to your tm skills\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn more basic text mining techniques based on the bag of words method.\n  ",
           "parts":[
              "Simple word clustering",
              "Test your understanding of text mining",
              "Distance matrix and dendrogram",
              "Make a dendrogram friendly TDM",
              "Put it all together: a text-based dendrogram",
              "Dendrogram aesthetics",
              "Using word association",
              "Getting past single words",
              "N-gram tokenization",
              "Changing n-grams",
              "How do bigrams affect word clouds?",
              "Different frequency criteria",
              "Changing frequency weights",
              "Capturing metadata in tm"
           ]
        },
        {
           "title":"\n          Battle of the tech giants for talent\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter ties everything together with a case study in text mining for HR analytics.\n  ",
           "parts":[
              "Amazon vs. Google",
              "Organizing a text mining project",
              "Step 1: Problem definition",
              "Step 2: Identifying the text sources",
              "Step 3: Text organization",
              "Text organization",
              "Working with Google reviews",
              "Steps 4 & 5: Feature extraction & analysis",
              "Feature extraction & analysis: amzn_pros",
              "Feature extraction & analysis: amzn_cons",
              "amzn_cons dendrogram",
              "Word association",
              "Quick review of Google reviews",
              "Cage match! Amazon vs. Google pro reviews",
              "Cage match, part 2! Negative reviews",
              "Step 6: Reach a conclusion",
              "Draw conclusions, insights, or recommendations",
              "Draw another conclusion, insight, or recommendation",
              "Finished!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "Text Mining with R"
     ]
  },
  {
     "title":"Introduction to Portfolio Analysis in R",
     "description":"Apply your finance and R skills to backtest, analyze, and optimize financial portfolios.",
     "detailDescription":"A golden rule in investing is to always test the portfolio strategy on historical data, and, once you are trading the strategy, to constantly monitor its performance. In this course, you will learn this by critically analyzing portfolio returns using the package PerformanceAnalytics. The course also shows how to estimate the portfolio weights that optimally balance risk and return. This is a data-driven course that combines portfolio theory with the practice in R, illustrated on real-life examples of equity portfolios and asset allocation problems. If you'd like to continue exploring the data after you've finished this course, the data used in the first three chapters can be obtained using the tseries-package. The code to get them can be found here. The data used in chapter 4 can be downloaded here.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          The building blocks\n        ",
           "index":"1",
           "description":"\n    Asset returns and portfolio weights; those are the building blocks of a portfolio return. This chapter is about computing those portfolio weights and returns in R.\n  ",
           "parts":[
              "Welcome to the course",
              "Getting a grasp of the basics",
              "Get a feel for the data",
              "The portfolio weights",
              "Calculating portfolio weights when component values are given",
              "The weights of an equally weighted portfolio",
              "The weights of a market capitalization-weighted portfolio",
              "The portfolio return",
              "Calculation of portfolio returns",
              "From simple to gross and multi-period returns",
              "The asymmetric impact of gains and losses",
              "PerformanceAnalytics",
              "Buy-and-hold versus (daily) rebalancing",
              "The time series of asset returns",
              "The time series of portfolio returns",
              "The time series of weights"
           ]
        },
        {
           "title":"\n          Analyzing performance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The history of portfolio returns reveals valuable information about how much the investor can expect to gain or lose. This chapter introduces the R functionality to analyze the investment performance based on a statistical analysis of the portfolio returns. It includes graphical analysis and the calculation of performance statistics expressing average return, risk, and risk-adjusted return over rolling estimation samples.\n  ",
           "parts":[
              "Dimensions of  portfolio performance",
              "Exploring the monthly S&P 500 returns",
              "The monthly mean and volatility",
              "The (annualized) Sharpe ratio",
              "Excess returns and the portfolio's Sharpe ratio",
              "Annualized mean and volatility",
              "Time-variation in  portfolio performance",
              "Effect of window length choice",
              "Rolling annualized mean and volatility",
              "Subperiod performance analysis and the function window",
              "Non-normality of the return distribution",
              "Balancing risk and reward",
              "Detecting non-normality using skewness and kurtosis",
              "Downside risk measures",
              "Drawdowns due to buying high, selling low"
           ]
        },
        {
           "title":"\n          Performance drivers\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In addition to studying portfolio performance based on the observed portfolio return series, it is relevant to determine how individual (expected) returns, volatilities, and correlations interact to determine the total portfolio performance.\n  ",
           "parts":[
              "Drivers in the case of two assets",
              "Driver 1: The assets' individual performance",
              "Driver 2: The choice of portfolio weights",
              "Driver 3: The correlation between the asset returns",
              "Interpreting correlation",
              "Using matrix notation",
              "Making a risk-reward scatter diagram",
              "The covariance matrix",
              "Matrix-based calculation of portfolio mean and variance",
              "Portfolio risk budget",
              "Who did it?"
           ]
        },
        {
           "title":"\n          Optimizing the portfolio\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We have up to now considered the portfolio weights as given. In this chapter, you learn how to determine in R the portfolio weights that are optimal in terms of achieving a target return with minimum variance, while satisfying constraints on the portfolio weights.\n  ",
           "parts":[
              "Modern portfolio theory  of Harry Markowitz",
              "Mean-variance based investing in DJIA stocks",
              "Exploring monthly returns of the 30 DJIA stocks",
              "Finding the mean-variance efficient portfolio",
              "Effect of the return target",
              "Imposing weight constraints",
              "The efficient frontier",
              "Computing the efficient frontier using a grid of target returns",
              "Interpreting the efficient frontier",
              "Properties of the efficient frontier",
              "The minimum variance and maximum Sharpe ratio portfolio",
              "In-sample vs.  out-of-sample evaluation",
              "Split-sample evaluation",
              "Out of sample performance evaluation",
              "It ain't over"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R for Finance"
     ],
     "tracks":[
        "Finance Fundamentals in R",
        "Quantitative Analyst with R"
     ]
  },
  {
     "title":"Credit Risk Modeling in R",
     "description":"Apply statistical modeling in a real-life setting using logistic regression and decision trees to model credit risk.",
     "detailDescription":"",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction and data preprocessing\n        ",
           "index":"1",
           "description":"\n    This chapter begins with a general introduction to credit risk models. We'll explore a real-life data set, then preprocess the data set such that it's in the appropriate format before applying the credit risk models.\n  ",
           "parts":[
              "Introduction and data structure",
              "Exploring the credit data",
              "Interpreting a CrossTable()",
              "Histograms and outliers",
              "Histograms",
              "Outliers",
              "Missing data and coarse classification",
              "Deleting missing data",
              "Replacing missing data",
              "Keeping missing data",
              "Data splitting and confusion matrices",
              "Splitting the data set",
              "Creating a confusion matrix"
           ]
        },
        {
           "title":"\n          Logistic regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Logistic regression is still a widely used method in credit risk modeling. In this chapter, you will learn how to apply logistic regression models on credit data in R.\n  ",
           "parts":[
              "Logistic regression: introduction",
              "Basic logistic regression",
              "Interpreting the odds for a categorical variable",
              "Multiple variables in a logistic regression model",
              "Interpreting significance levels",
              "Logistic regression:  predicting the probability of default",
              "Predicting the probability of default",
              "Making more discriminative models",
              "Evaluating the logistic regression model result",
              "Specifying a cut-off",
              "Comparing two cut-offs",
              "Wrap-up and remarks",
              "Comparing link functions for a given cut-off"
           ]
        },
        {
           "title":"\n          Decision trees\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Classification trees are another popular method in the world of credit risk modeling. In this chapter, you will learn how to build classification trees using credit data in R.\n  ",
           "parts":[
              "What is a decision tree?",
              "Computing the gain for a tree",
              "Changing one Gini...",
              "Building decision trees using the rpart()-package",
              "Undersampling the training set",
              "Changing the prior probabilities",
              "Including a loss matrix",
              "Pruning the decision tree",
              "Pruning the tree with changed prior probabilities",
              "Pruning the tree with the loss matrix",
              "Other tree options and  the construction of confusion matrices",
              "One final tree using more options",
              "Confusion matrices and accuracy of our final trees",
              "Optimizing the accuracy"
           ]
        },
        {
           "title":"\n          Evaluating a credit risk model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how you can evaluate and compare the results obtained through several credit risk models.\n  ",
           "parts":[
              "Finding the right cut-off: the strategy curve",
              "Computing a bad rate given a fixed acceptance rate",
              "The strategy table and strategy curve",
              "To tree or not to tree?",
              "The ROC-curve",
              "ROC-curves for comparison of logistic regression models",
              "ROC-curves for comparison of tree-based models",
              "Input selection based on the AUC",
              "Another round of pruning based on AUC",
              "Best of four",
              "Further model reduction?",
              "Course wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R for Finance"
     ],
     "tracks":[
        "Applied Finance in R",
        "Quantitative Analyst with R"
     ]
  },
  {
     "title":"Machine Learning with caret in R",
     "description":"This course teaches the big ideas in machine learning like how to build and evaluate predictive models.",
     "detailDescription":"Machine learning is the study and application of algorithms that learn from and make predictions on data. From search results to self-driving cars, it has manifested itself in all areas of our lives and is one of the most exciting and fast growing fields of research in the world of data science. This course teaches the big ideas in machine learning: how to build and evaluate predictive models, how to tune them for optimal performance, how to preprocess data for better results, and much more. The popular caret R package, which provides a consistent interface to all of R's most powerful machine learning facilities, is used throughout the course.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Regression models: fitting them and evaluating their performance\n        ",
           "index":"1",
           "description":"\n    In the first chapter of this course, you'll fit regression models with train() and evaluate their out-of-sample performance using cross-validation and root-mean-square error (RMSE).\n  ",
           "parts":[
              "Welcome to the Toolbox",
              "In-sample RMSE for linear regression",
              "In-sample RMSE for linear regression on diamonds",
              "Out-of-sample error measures",
              "Out-of-sample RMSE for linear regression",
              "Randomly order the data frame",
              "Try an 80/20 split",
              "Predict on test set",
              "Calculate test set RMSE by hand",
              "Comparing out-of-sample RMSE to in-sample RMSE",
              "Cross-validation",
              "Advantage of cross-validation",
              "10-fold cross-validation",
              "5-fold cross-validation",
              "5 x 5-fold cross-validation",
              "Making predictions on new data"
           ]
        },
        {
           "title":"\n          Classification models: fitting them and evaluating their performance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll fit classification models with train() and evaluate their out-of-sample performance using cross-validation and area under the curve (AUC).\n  ",
           "parts":[
              "Logistic regression on sonar",
              "Why a train/test split?",
              "Try a 60/40 split",
              "Fit a logistic regression model",
              "Confusion matrix",
              "Confusion matrix takeaways",
              "Calculate a confusion matrix",
              "Calculating accuracy",
              "Calculating true positive rate",
              "Calculating true negative rate",
              "Class probabilities and predictions",
              "Probabilities and classes",
              "Try another threshold",
              "From probabilites to confusion matrix",
              "Introducing the  ROC curve",
              "What's the value of a ROC curve?",
              "Plot an ROC curve",
              "Area under the  curve (AUC)",
              "Model, ROC, and AUC",
              "Customizing trainControl",
              "Using custom trainControl"
           ]
        },
        {
           "title":"\n          Tuning model parameters to improve performance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will use the train() function to tweak model parameters through cross-validation and grid search.\n  ",
           "parts":[
              "Random forests and wine",
              "Random forests vs. linear models",
              "Fit a random forest",
              "Explore a wider  model space",
              "Advantage of a longer tune length",
              "Try a longer tune length",
              "Custom tuning grids",
              "Advantages of a custom tuning grid",
              "Fit a random forest with custom tuning",
              "Introducing glmnet",
              "Advantage of glmnet",
              "Make a custom trainControl",
              "Fit glmnet with custom trainControl",
              "glmnet with custom tuning grid",
              "Why a custom tuning grid?",
              "glmnet with custom trainControl and tuning",
              "Interpreting glmnet plots"
           ]
        },
        {
           "title":"\n          Preprocessing your data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will practice using train() to preprocess data before fitting models, improving your ability to making accurate predictions.\n  ",
           "parts":[
              "Median imputation",
              "Median imputation vs. omitting rows",
              "Apply median imputation",
              "KNN imputation",
              "Comparing KNN imputation to median imputation",
              "Use KNN imputation",
              "Compare KNN and median imputation",
              "Multiple preprocessing methods",
              "Order of operations",
              "Combining preprocessing methods",
              "Handling low-information predictors",
              "Why remove near zero variance predictors?",
              "Remove near zero variance predictors",
              "preProcess() and nearZeroVar()",
              "Fit model on reduced blood-brain data",
              "Principle components analysis (PCA)",
              "Using PCA as an alternative to nearZeroVar()"
           ]
        },
        {
           "title":"\n          Selecting models: a case study in churn prediction\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter of this course, you'll learn how to use resamples() to compare multiple models and select (or ensemble) the best one(s).\n  ",
           "parts":[
              "Reusing a trainControl",
              "Why reuse a trainControl?",
              "Make custom train/test indices",
              "Reintroducing glmnet",
              "glmnet as a baseline model",
              "Fit the baseline model",
              "Reintroducing random forest",
              "Random forest drawback",
              "Random forest with custom trainControl",
              "Comparing models",
              "Matching train/test indices",
              "Create a resamples object",
              "More on resamples",
              "Create a box-and-whisker plot",
              "Create a scatterplot",
              "Ensembling models",
              "Summary"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R",
        "Intermediate R",
        "Correlation and Regression in R"
     ],
     "tracks":[
        "Machine Learning Fundamentals in R",
        "Machine Learning Scientist with R"
     ]
  },
  {
     "title":"Manipulating Time Series Data with xts and zoo in R",
     "description":"The xts and zoo packages make the task of managing and manipulating ordered observations fast and mistake free.",
     "detailDescription":"Time series are all around us, from server logs to high frequency financial data. Managing and manipulating ordered observations is central to all time series analysis. The xts and zoo packages provide a set of powerful tools to make this task fast and mistake free. In this course, you will learn everything from the basics of xts to advanced tips and tricks for working with time series data in R.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to eXtensible Time Series, using xts and zoo for time series\n        ",
           "index":"1",
           "description":"\n    xts and zoo are just two of the many different types of objects that exist in R. This chapter will introduce the basic objects in xts and zoo and their components, and offers examples of how to construct and examine the data.\n  ",
           "parts":[
              "Introducing xts and zoo objects",
              "What is an xts object?",
              "More than a matrix",
              "Your first xts object",
              "Deconstructing xts",
              "Time based indices",
              "Importing, exporting and  converting time series",
              "Converting xts objects",
              "Importing data",
              "Exporting xts objects"
           ]
        },
        {
           "title":"\n          First Order of Business - Basic Manipulations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you can create basic xts objects, it's time to see how powerful they can be. This chapter will cover the basics of one of the most useful features of xts: time based subsetting. From there you'll explore additional ways to extract data using time phrases, and conclude with how to do basic operations like adding and subtracting your xts objects.\n  ",
           "parts":[
              "Introducing  time based queries",
              "The ISO-8601 standard",
              "Querying for dates",
              "Extracting recurring intraday intervals",
              "Alternative  extraction techniques",
              "Row selection with time objects",
              "Update and replace elements",
              "Methods to find  periods in your data",
              "Find the first or last period of time",
              "Combining first and last",
              "Math operations  using xts",
              "Matrix arithmetic - add, subtract, multiply, and divide in time!",
              "Math with non-overlapping indexes"
           ]
        },
        {
           "title":"\n          Merging and modifying time series\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    One of the most important parts of working with time series data involves creating derived time series. To do this effectively, it is critical to keep track of dates and times. In this chapter you will look at how xts handles merging new columns and rows into existing data, how to deal with the inevitable missing observations in time series, and how to shift your series in time.\n  ",
           "parts":[
              "Merging time series",
              "Combining xts by column with merge",
              "Combining xts by row with rbind",
              "What types of data can be combined using merge?",
              "Handling missingness",
              "Fill missing values using last or previous observation",
              "NA interpolation using na.approx()",
              "Lags and differences",
              "Combine a leading and lagging time series",
              "Calculate a difference of a series using diff()",
              "What is the key difference in lag between xts and zoo"
           ]
        },
        {
           "title":"\n          Apply and aggregate by time\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now the fun begins! A very common usage pattern for time series is to calculate values for disjoint periods of time or aggregate values from a higher frequency to a lower frequency. For most series, you'll often want to see the weekly mean of a price or measurement. You may even find yourself looking at data that has different frequencies and you need to normalize to the lowest frequency. This chapter is where it all happens. Hang tight, and lets get going!\n  ",
           "parts":[
              "Apply functions by time",
              "Find intervals by time in xts",
              "Apply a function by time period(s)",
              "Using lapply() and split() to apply functions on intervals",
              "Selection by endpoints vs. split-lapply-rbind",
              "Converting periodicity",
              "Convert univariate series to OHLC data",
              "Convert a series to a lower frequency",
              "Rolling functions",
              "Calculate basic rolling value of series by month",
              "Calculate the rolling standard deviation of a time series"
           ]
        },
        {
           "title":"\n          Extra features of xts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you are comfortable with most of the core features, its time to explore some of the lesser known (but powerful!) aspects of working with xts. In this final chapter you will use the internals of the index to find repeating itervals, see how xts provides intuitive time zone support, and experiment with ways to explore your data by time - including identifying frequency and coverage in time. Let's finish this course!\n  ",
           "parts":[
              "Index, attributes,  and time zones",
              "Time via index()",
              "Class attributes - tclass, tzone, and tformat",
              "Time Zones (and why you should care!)",
              "Periods, periodicity  and timestamps",
              "Determining periodicity",
              "Find the number of periods in your data",
              "Secret index tools",
              "Modifying timestamps",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R for Finance"
     ],
     "tracks":[
        "Finance Fundamentals in R",
        "Quantitative Analyst with R",
        "Time Series with R"
     ]
  },
  {
     "title":"Case Study: Exploring Baseball Pitching Data in R",
     "description":"Use a rich baseball dataset from the MLB's Statcast system to practice your data exploration skills.",
     "detailDescription":"",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring pitch velocities\n        ",
           "index":"1",
           "description":"\n    Velocity is a key component in the arsenal of many pitchers. In this chapter, you will examine whether there was an uptick in Zack Greinke's velocity during his impressive July in 2015. The chapter will introduce how to deal with dates, plotting distributions with histograms, and using the very handy tapply() function.\n  ",
           "parts":[
              "Did Zack Greinke pitch differently in July?",
              "Clean the data",
              "Check dates",
              "Delimit dates",
              "Subsets and histograms",
              "Velocity distribution",
              "Fastball velocity distribution",
              "Distribution comparisons with color",
              "Describe the histogram",
              "Using tapply() for comparisons",
              "tapply() for velocity changes",
              "Game-by-game velocity changes",
              "Tidying the data frame",
              "A game-by-game line plot",
              "Adding jittered points",
              "Wrap-up"
           ]
        },
        {
           "title":"\n          Exploring pitch types\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Pitchers throw various types of pitches with different velocities and trajectories in order to make it more difficult for the batter to hit the ball. This chapter will introduce pitch types and make heavy use of tables to examine changes to pitch type choices by Greinke in July, as well as in other important situations.\n  ",
           "parts":[
              "Pitch mix",
              "Pitch mix tables",
              "Pitch mix table using prop.table()",
              "Pitch mix tables - July vs. other",
              "Describe fastball usage",
              "Pitch mix tables - changes in pitch type rates",
              "Describe pitch usage",
              "Ball-strike count and pitch usage",
              "Ball-strike count frequency",
              "Make a new variable",
              "Ball-strike count in July vs. other months",
              "Visualizing ball-strike count in July vs. other months",
              "Cross-tabulate pitch use in ball-strike counts",
              "Describe pitch count usage",
              "Pitch mix late in games",
              "Late game pitch mix - grouped barplots",
              "Describe late game pitching",
              "Wrap-up"
           ]
        },
        {
           "title":"\n          Exploring pitch locations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    As with velocity and pitch type, pitch location can play a key role in pitching success. This chapter leverages the rich information about location provided in the MLB Statcast data to visualize changes in Greinke's pitch location choice in July and in different ball-strike counts. You will also make use of the very important for loop in the context of plotting data.\n  ",
           "parts":[
              "Pitch location and Greinke's July",
              "Locational changes - summary",
              "Describe the locations",
              "Locational changes - visualization",
              "Locational changes - plotting a grid",
              "Binning locational data",
              "Grid percentage question",
              "For loops for plots",
              "For loops and plotting locational grid proportions",
              "Binned locational differences",
              "Plotting zone proportion differences",
              "Describe the figure",
              "Location and ball-strike count",
              "0-2 vs. 3-0 locational changes",
              "Plotting count-based locational differences",
              "Wrap-up"
           ]
        },
        {
           "title":"\n          Exploring batted ball outcomes\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll bring it all together. Minimizing damage on each pitch is the key to run prevention by the pitcher. Therefore, you will look closely at outcomes from pitches thrown by Greinke in different months. We'll also introduce the ggplot2 package to create high quality visualizations of hitter exit speed when Greinke throws to different locations.\n  ",
           "parts":[
              "Batted ball outcomes - contact rate",
              "Velocity impact on contact rate",
              "Pitch type impact on contact rate",
              "Velocity impact on contact by pitch type",
              "Greinke's out pitch?",
              "Describe 2-strike pitch usage",
              "Impact of pitch location on contact rate",
              "Using ggplot2",
              "Rethinking the use of for loops",
              "Contact rate with ggplot2",
              "Adding titles and axes to ggplot2 figure",
              "Making a heat map - visualizing hot and cold zones",
              "Adding text for contact rate values",
              "Batted ball outcomes - exit velocity",
              "Contact and exit speed",
              "Location and exit speed",
              "Plotting exit speed as a heat map",
              "Using tidy data and facets in ggplot2",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Intermediate R",
     "description":"Continue your journey to becoming an R ninja by learning about conditional statements, loops, and vector functions.",
     "detailDescription":"Intermediate R is the next stop on your journey in mastering the R programming language. In this R training, you will learn about conditional statements, loops, and functions to power your own R scripts. Next, make your R code more efficient and readable using the apply functions. Finally, the utilities chapter gets you up to speed with regular expressions in R, data structure manipulations, and times and dates. This course will allow you to take the next step in advancing your overall knowledge and capabilities while programming in R.",
     "time":"6 hours",
     "chapters":[
        {
           "title":"\n          Conditionals and Control Flow\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn about relational operators for comparing R objects, and logical operators like \"and\" and \"or\" for combining TRUE and FALSE values.  Then, you'll use this knowledge to build conditional statements.\n  ",
           "parts":[
              "Relational Operators",
              "Equality",
              "Greater and less than",
              "Compare vectors",
              "Compare matrices",
              "Logical Operators",
              "& and |",
              "& and | (2)",
              "Reverse the result: !",
              "Blend it all together",
              "Conditional Statements",
              "The if statement",
              "Add an else",
              "Customize further: else if",
              "Else if 2.0",
              "Take control!"
           ]
        },
        {
           "title":"\n          Loops\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Loops can come in handy on numerous occasions. While loops are like repeated if statements, the for loop is designed to iterate over all elements in a sequence. Learn about them in this chapter.\n  ",
           "parts":[
              "While loop",
              "Write a while loop",
              "Throw in more conditionals",
              "Stop the while loop: break",
              "Build a while loop from scratch",
              "For loop",
              "Loop over a vector",
              "Loop over a list",
              "Loop over a matrix",
              "Mix it up with control flow",
              "Next, you break it",
              "Build a for loop from scratch"
           ]
        },
        {
           "title":"\n          Functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Functions are an extremely important concept in almost every programming language, and R is no different. Learn what functions are and how to use them—then take charge by writing your own functions.\n  ",
           "parts":[
              "Introduction to Functions",
              "Function documentation",
              "Use a function",
              "Use a function (2)",
              "Use a function (3)",
              "Functions inside functions",
              "Required, or optional?",
              "Writing Functions",
              "Write your own function",
              "Write your own function (2)",
              "Write your own function (3)",
              "Function scoping",
              "R passes arguments by value",
              "R you functional?",
              "R you functional? (2)",
              "R Packages",
              "Load an R Package",
              "Different ways to load a package"
           ]
        },
        {
           "title":"\n          The apply family\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Whenever you're using a for loop, you may want to revise your code to see whether you can use the lapply function instead. Learn all about this intuitive way of applying a function over a list or a vector, and how to use its variants, sapply and vapply.\n  ",
           "parts":[
              "lapply",
              "Use lapply with a built-in R function",
              "Use lapply with your own function",
              "lapply and anonymous functions",
              "Use lapply with additional arguments",
              "Apply functions that return NULL",
              "sapply",
              "How to use sapply",
              "sapply with your own function",
              "sapply with function returning vector",
              "sapply can't simplify, now what?",
              "sapply with functions that return NULL",
              "Reverse engineering sapply",
              "vapply",
              "Use vapply",
              "Use vapply (2)",
              "From sapply to vapply"
           ]
        },
        {
           "title":"\n          Utilities\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Mastering R programming is not only about understanding its programming concepts. Having a solid understanding of a wide range of R functions is also important. This chapter introduces you to many useful functions for data structure manipulation, regular expressions, and working with times and dates.\n  ",
           "parts":[
              "Useful Functions",
              "Mathematical utilities",
              "Find the error",
              "Data Utilities",
              "Find the error (2)",
              "Beat Gauss using R",
              "Regular Expressions",
              "grepl & grep",
              "grepl & grep (2)",
              "sub & gsub",
              "sub & gsub (2)",
              "Times & Dates",
              "Right here, right now",
              "Create and format dates",
              "Create and format times",
              "Calculations with Dates",
              "Calculations with Times",
              "Time is of the essence"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "R Programming"
     ]
  },
  {
     "title":"Time Series Analysis in R",
     "description":"Learn the core techniques necessary to extract meaningful insights from time series data.",
     "detailDescription":"Many phenomena in our day-to-day lives, such as the movement of stock prices, are measured in intervals over a period of time. Time series analysis methods are extremely useful for analyzing these special data types. In this course, you will be introduced to some core time series analysis concepts and techniques.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploratory time series data analysis\n        ",
           "index":"1",
           "description":"\n    This chapter will give you insights on how to organize and visualize time series data in R. You will learn several simplifying assumptions that are widely used in time series analysis, and common characteristics of financial time series.\n  ",
           "parts":[
              "Welcome to the course!",
              "Exploring raw time series",
              "Basic time series plots",
              "What does the time index tell us?",
              "Sampling frequency",
              "Identifying the sampling frequency",
              "When is the sampling frequency exact?",
              "Missing values",
              "Basic time series objects",
              "Creating a time series object with ts()",
              "Testing whether an object is a time series",
              "Plotting a time series object"
           ]
        },
        {
           "title":"\n          Predicting the future\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will conduct some trend spotting, and learn the white noise (WN) model, the random walk (RW) model, and the definition of stationary processes.\n  ",
           "parts":[
              "Trend spotting!",
              "Random or not random?",
              "Name that trend",
              "Removing trends in variability via the logarithmic transformation",
              "Removing trends in level by differencing",
              "Removing seasonal trends with seasonal differencing",
              "The white noise (WN) model",
              "Simulate the white noise model",
              "Estimate the white noise model",
              "The random walk (RW) model",
              "Simulate the random walk model",
              "Simulate the random walk model with a drift",
              "Estimate the random walk model",
              "Stationary processes",
              "Stationary or not?",
              "Are the white noise model or the random walk model stationary?"
           ]
        },
        {
           "title":"\n          Correlation analysis and the autocorrelation function\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will review the correlation coefficient, use it to compare two time series, and also apply it to compare a time series with its past, as an autocorrelation. You will discover the autocorrelation function (ACF) and practice estimating and visualizing autocorrelations for time series data.\n  ",
           "parts":[
              "Scatterplots",
              "Asset prices vs. asset returns",
              "Characteristics of financial time series",
              "Plotting pairs of data",
              "Covariance and correlation",
              "Calculating sample covariances and correlations",
              "Guess the correlation coefficient",
              "Autocorrelation",
              "Calculating autocorrelations",
              "The autocorrelation function",
              "Visualizing the autocorrelation function"
           ]
        },
        {
           "title":"\n          Autoregression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn the autoregressive (AR) model and several of its basic properties. You will also practice simulating and estimating the AR model in R, and compare the AR model with the random walk (RW) model.\n  ",
           "parts":[
              "The autoregressive model",
              "Simulate the autoregressive model",
              "Estimate the autocorrelation function (ACF) for an autoregression",
              "Persistence and anti-persistence",
              "Compare the random walk (RW) and autoregressive (AR) models",
              "AR model estimation  and forecasting",
              "Estimate the autoregressive (AR) model",
              "Simple forecasts from an estimated AR model"
           ]
        },
        {
           "title":"\n          A simple moving average\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn the simple moving average (MA) model and several of its basic properties. You will also practice simulating and estimating the MA model in R, and compare the MA model with the autoregressive (AR) model.\n  ",
           "parts":[
              "The simple moving average model",
              "Simulate the simple moving average model",
              "Estimate the autocorrelation function (ACF) for a moving average",
              "MA model estimation  and forecasting",
              "Estimate the simple moving average model",
              "Simple forecasts from an estimated MA model",
              "Compare AR and  MA models",
              "AR vs MA models",
              "Name that model by time series plot",
              "Name that model by ACF plot",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "Quantitative Analyst with R",
        "Time Series with R"
     ]
  },
  {
     "title":"Importing and Managing Financial Data in R",
     "description":"Learn how to access financial data from local files as well as from internet sources.",
     "detailDescription":"If you've ever done anything with financial or economic time series, you know the data come in various shapes, sizes, and periodicities. Getting the data into R can be stressful and time-consuming, especially when you need to merge data from several different sources into one data set. This course will cover importing data from local files as well as from internet sources.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Introduction and downloading data\n        ",
           "index":"1",
           "description":"\n    A wealth of financial and economic data are available online. Learn how getSymbols() and Quandl() make it easy to access data from a variety of sources.\n  ",
           "parts":[
              "Welcome to the course!",
              "Introducing getSymbols()",
              "Data sources",
              "Make getSymbols() return the data it retrieves",
              "Introduction to Quandl",
              "Introducing Quandl()",
              "Return data type",
              "Finding data from  internet sources",
              "Find stock ticker from Yahoo Finance",
              "Download exchange rate data from Oanda",
              "Find and import Unemployment Rate data from FRED"
           ]
        },
        {
           "title":"\n          Extracting and transforming data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You've learned how to import data from online sources, now it's time to see how to extract columns from the imported data. After you've learned how to extract columns from a single object, you will explore how to import, transform, and extract data from multiple instruments.\n  ",
           "parts":[
              "Extracting columns from financial time series",
              "Extract one column from one instrument",
              "Extract multiple columns from one instrument",
              "Use getPrice to extract other columns",
              "Importing and transforming multiple instruments",
              "Use Quandl to download weekly returns data",
              "Combine many instruments into one object",
              "Extract the Close column from many instruments"
           ]
        },
        {
           "title":"\n          Managing data from multiple sources\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to simplify and streamline your workflow by taking advantage of the ability to customize default arguments to `getSymbols()`. You will see how to customize defaults by data source, and then how to customize defaults by symbol. You will also learn how to handle problematic instrument symbols.\n  ",
           "parts":[
              "Setting default arguments for getSymbols()",
              "Set a default data source",
              "Set default arguments for a getSymbols source",
              "Setting per-instrument default arguments",
              "Set default data source for one symbol",
              "Save and load symbol lookup table",
              "How *not* to specify the getSymbols() source",
              "Handling instrument symbols  that clash or are not  valid R names",
              "Access the object using get() or backticks",
              "Create valid name for one instrument",
              "Create valid names for multiple instruments"
           ]
        },
        {
           "title":"\n          Aligning data with different periodicities\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You've learned how to import, extract, and transform data from multiple data sources. You often have to manipulate data from different sources in order to combine them into a single data set. First, you will learn how to convert sparse, irregular data into a regular series.  Then you will review how to aggregate dense data to a lower frequency. Finally, you will learn how to handle issues with intra-day data.\n  ",
           "parts":[
              "Making irregular data  regular",
              "Create a zero-width and regular xts object",
              "Use merge to make an irregular index regular",
              "Aggregating to lower frequency",
              "Aggregate daily data and merge with monthly data",
              "Align series to first and last day of month",
              "Aggregate to weekly, ending on Wednesdays",
              "Aggregating and  combining  intraday data",
              "Combine data that have timezones",
              "Make irregular intraday-day data regular",
              "Fill missing values by trading day",
              "Aggregate irregular intraday-day data"
           ]
        },
        {
           "title":"\n          Importing text data, and adjusting for corporate actions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You've learned the core workflow of importing and manipulating financial data. Now you will see how to import data from text files of various formats. Then you will learn how to check data for weirdness and handle missing values. Finally, you will learn how to adjust stock prices for splits and dividends.\n  ",
           "parts":[
              "Importing text files",
              "Import well-formatted daily OHLC data",
              "Import text files in other formats",
              "Handle date and time in separate columns",
              "Read text file containing multiple instruments",
              "Checking for  weirdness",
              "Handle missing values",
              "Visualize imported data",
              "Cross reference sources",
              "Adjusting for corporate actions",
              "Adjust for stock splits and dividends",
              "Download split and dividend data",
              "Adjust univariate data for splits and dividends",
              "When to adjust data",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating Time Series Data with xts and zoo in R"
     ],
     "tracks":[
        "Finance Fundamentals in R",
        "Quantitative Analyst with R"
     ]
  },
  {
     "title":"Financial Trading in R",
     "description":"This course covers the basics of financial trading and how to use quantstrat to build signal-based trading strategies.",
     "detailDescription":"This course will cover the basics on financial trading and will give you an overview of how to use quantstrat to build signal-based trading strategies in R. It will teach you how to set up a quantstrat strategy, apply transformations of market data called indicators, create signals based on the interactions of those indicators, and even simulate orders. Lastly, it will explain how to analyze your results both from statistical and visual perspectives.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Trading basics\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn the definition of trading, the philosophies of trading, and the pitfalls that exist in trading. This chapter covers both momentum and oscillation trading, along with some phrases to identify these types of philosophies. You will learn about overfitting and how to avoid it, obtaining and plotting financial data, and using a well-known indicator in trading.\n  ",
           "parts":[
              "Why do people trade?",
              "Identifying types of trading philosophies - I",
              "Identifying types of trading philosophies - II",
              "Identifying types of trading philosophies - III",
              "Pitfalls of various trading systems",
              "How to prevent overfitting",
              "Getting financial data",
              "Plotting financial data",
              "Adding indicators to financial data",
              "Adding a moving average to financial data"
           ]
        },
        {
           "title":"\n          A boilerplate for quantstrat strategies\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Before building a strategy, the quantstrat package requires you to initialize some settings. In this chapter you will learn how this is done. You will cover a series of functions that deal with initializing a time zone, currency, the instruments you'll be working with, along with quantstrat's various frameworks that will allow it to perform analytics. Once this is done, you will have the knowledge to set up a quantstrat initialization file, and know how to change it.\n  ",
           "parts":[
              "Setting up a strategy I",
              "Understanding initialization settings - I",
              "Understanding initialization settings - II",
              "Setting up a strategy II",
              "Understanding initialization settings - III",
              "Understanding initialization settings - IV"
           ]
        },
        {
           "title":"\n          Indicators\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Indicators are crucial for your trading strategy. They are transformations of market data that allow a clearer understanding of its overall behavior, usually in exchange for lagging the market behavior. Here, you will be working with both trend types of indicators as well as oscillation indicators. You will also learn how to use pre-programmed indicators available in other libraries as well as implement one of your own.\n  ",
           "parts":[
              "Introduction to  indicators",
              "The SMA and RSI functions",
              "Visualize an indicator and guess its purpose - I",
              "Visualize an indicator and guess its purpose - II",
              "Indicator mechanics",
              "Implementing an indicator - I",
              "Implementing an indicator - II",
              "Implementing an indicator - III",
              "Indicator structure review",
              "Code your own indicator - I",
              "Code your own indicator - II",
              "Apply your own indicator"
           ]
        },
        {
           "title":"\n          Signals\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    When constructing a quantstrat strategy, you want to see how the market interacts with indicators and how indicators interact with each other. In this chapter you'll learn how indicators can generate signals in quantstrat. Signals are interactions of market data with indicators, or indicators with other indicators. There are four types of signals in quantstrat: sigComparison, sigCrossover, sigThreshold, and sigFormula. By the end of this chapter, you'll know all about these signals, what they do, and how to use them.\n  ",
           "parts":[
              "Introduction to signals",
              "Signal or not? - I",
              "Signal or not? - II",
              "sigComparison and sigCrossover",
              "Using sigComparison",
              "Using sigCrossover",
              "sigThreshold",
              "Using sigThreshold - I",
              "Using sigThreshold() - II",
              "sigFormula",
              "Using sigFormula()",
              "Combining signals - I",
              "Combining signals - II"
           ]
        },
        {
           "title":"\n          Rules\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to shape your trading transaction once you decide to execute on a signal. This chapter will cover a basic primer on rules, and how to enter and exit positions. You'll also learn how to send inputs to order-sizing functions. By the end of this chapter, you'll learn the gist of how rules function, and where you can continue learning about them.\n  ",
           "parts":[
              "Introduction to rules",
              "Using add.rule() to implement an exit rule",
              "Specifying sigcol in add.rule()",
              "Specifying sigval in add.rule()",
              "More rule mechanics",
              "Specifying orderqty in add.rule()",
              "Specifying ordertype in add.rule()",
              "Specifying orderside in add.rule()",
              "More rule mechanics II",
              "Specifying replace in add.rule()",
              "Specifying prefer in add.rule()",
              "Using add.rule() to implement an entry rule",
              "Order sizing functions",
              "Implementing a rule with an order sizing function"
           ]
        },
        {
           "title":"\n          Analyzing results\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    After a quantstrat strategy has been constructed, it's vital to know how to actually analyze the strategy's performance. This chapter details just that. You will learn how to read vital trade statistics, and view the performance of your trading strategy over time. You will also learn how to get a reward to risk ratio called the Sharpe ratio in two different ways. This is the last chapter.\n  ",
           "parts":[
              "Analyzing your strategy",
              "Running your strategy",
              "Profit factor",
              "Percent positive",
              "Visualizing your strategy",
              "Using chart.Posn()",
              "Adding an indicator to a chart.Posn() chart",
              "Additional analytics",
              "Cash Sharpe ratio",
              "Returns Sharpe ratio in quantstrat"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R for Finance"
     ],
     "tracks":[
        "Applied Finance in R",
        "Quantitative Analyst with R"
     ]
  },
  {
     "title":"Equity Valuation in R",
     "description":"Learn the fundamentals of valuing stocks.",
     "detailDescription":"How do we know when a stock is cheap or expensive? To do this, we need to compare the stock's price with its value. The price of the stock can be obtained by looking at various public sources, such as Yahoo Finance or Google Finance. The value of the stock though is much harder to identify. Every investor has to form his or her valuation of the stock. In this course, you will learn the fundamentals of valuing stocks using present value approaches, such as free cash flow to equity and dividend discount models, and valuation multiples. By the end of this course, you will be able to build your own valuation models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Present Value Approaches\n        ",
           "index":"1",
           "description":"\n    Many individuals and institutions invest in equities. To do so effectively, the investor must have a solid understanding of how the value of the equity compares to the stock price. In this course, we focus on fundamental concepts of equity valuation. We begin with a discussion of time value of money and then move on to the first of two discounted cash flow methods we will discuss - the free cash flow to equity valuation model.\n  ",
           "parts":[
              "Course Intro and Fundamental Valuation",
              "Time Value of Money",
              "Difference Between Valuing Enterprise and Equity Cash Flows",
              "The Free Cash Flow to Equity Model",
              "Calculating Operating Profit",
              "Calculate Free Cash Flow to Equity",
              "Calculating Terminal Value",
              "Calculating Equity Value",
              "Calculating Present Value of Free Cash Flow to Equity",
              "Calculate Present Value of Terminal Value",
              "Calculate Equity Value"
           ]
        },
        {
           "title":"\n          Perpetuity Growth Rate, Analyzing Projections, and Using a Dividend Discount Model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    One of the critical components of free cash flow to equity valuation is using reliable projections. In the first part of this chapter, we will discuss ways to analyze the projections to help us identify the right questions to ask. In the second part of this chapter, we will go through the second of our discounted cash flow models - the dividend discount model. In this approach, we discount expected dividends instead of free cash flows.\n  ",
           "parts":[
              "Analyzing the Projections",
              "Analyze Revenue Trends - Bar Chart",
              "Analyze Revenue Trends - Regression",
              "Perpetuity Growth Rate",
              "Calculate Retention Ratio",
              "Perpetuity Growth Rate Calculation",
              "Dividend Discount Model",
              "Valuing Preferred Stock",
              "Valuation Assuming No Dividends For First Few Years",
              "Valuation Assuming 2-Stages of Dividends"
           ]
        },
        {
           "title":"\n          Discount Rate / Cost of Capital Estimation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    To be able to discount cash flows, we need a discount rate. For the free cash flow to equity and dividend discount model, the cost of equity is the appropriate discount rate. In this chapter, we will discuss how each of the components of the cost of equity are calculated.\n  ",
           "parts":[
              "What is a discount rate?",
              "Risk and Return",
              "Calculating Returns",
              "Estimating Beta",
              "Unlevering Betas",
              "Hamada vs. Fernandez Formula",
              "Beta Unlevering Exercise",
              "Beta Relevering Exercise",
              "Risk-Free Rate and Equity Risk Premium",
              "Obtain Risk-Free Rate Data",
              "Calculate Historical Equity Risk Premium",
              "Calculate the Cost of Equity"
           ]
        },
        {
           "title":"\n          Relative Valuation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Relative valuation allows us to use the valuation of comparable companies to infer the value of our subject firm. In this chapter, we discuss how to identify comparable companies and how to calculate valuation multiples. We also show how to analyze the determinants of multiples.\n  ",
           "parts":[
              "Relative Valuation",
              "Identifying Comparable Firms",
              "Valuation Multiples",
              "Calculating Valuation Multiples",
              "Calculating the Relevant Multiple",
              "Implied Price",
              "Analyzing Determinants of Multiples",
              "Calculate ROE and P/B",
              "Plot P/B vs. ROE",
              "Strength of Relationship",
              "Implied Price Using Regression",
              "Difference in Implied Values"
           ]
        },
        {
           "title":"\n          Comprehensive Exercise\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter combines the lessons from Chapters 1 to 4 in a series of exercises. You will be asked to inspect the data and to value the firm using discounted cash flow and relative valuation approaches. At the end, you will combine the results in a summary table.\n  ",
           "parts":[
              "Fundamental Valuation: Analyzing Projections",
              "Visually Inspecting the Data",
              "Using Regression to Test the Projections",
              "Fundamental Valuation: Implementation",
              "Cost of Equity",
              "Calculate Value During Projection Period",
              "Calculate the Terminal Value",
              "Equity Value Per Free Cash Flow to Equity Model",
              "Equity Value per Dividend Discount Model",
              "Relative Valuation",
              "Equity Value Per Price-to-Earnings Multiples",
              "Combine valuation into a summary table",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Importing and Managing Financial Data in R"
     ],
     "tracks":[
        "Applied Finance in R"
     ]
  },
  {
     "title":"Spatial Statistics in R",
     "description":"Learn how to make sense of spatial data and deal with various classes of statistical problems associated with it.",
     "detailDescription":"Everything happens somewhere, and increasingly the place where all these things happen is being recorded in a database. There is some truth behind the oft-repeated statement that 80% of data have a spatial component. So what can we do with this spatial data? Spatial statistics, of course! Location is an important explanatory variable in so many things - be it a disease outbreak, an animal's choice of habitat, a traffic collision, or a vein of gold in the mountains - that we would be wise to include it whenever possible. This course will start you on your journey of spatial data analysis. You'll learn what classes of statistical problems present themselves with spatial data, and the basic techniques of how to deal with them. You'll see how to look at a mess of dots on a map and bring out meaningful insights.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction\n        ",
           "index":"1",
           "description":"\n    After a quick review of spatial statistics as a whole, you'll go through some point-pattern analysis. You'll learn how to recognize and test different types of spatial patterns.\n  ",
           "parts":[
              "Problems in spatial statistics",
              "Simple spatial principles",
              "Plotting areas",
              "Uniform in a circle",
              "Simulation and testing with spatstat",
              "Quadrat count test for uniformity",
              "Creating a uniform point pattern with spatstat",
              "Simulating clustered and inhibitory patterns",
              "Point pattern testing",
              "Further testing",
              "Nearest-neighbor distributions",
              "Other point pattern distribution functions",
              "Tree location pattern"
           ]
        },
        {
           "title":"\n          Point Pattern Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Point Pattern Analysis answers questions about why things appear where they do. The things could be trees, disease cases, crimes, lightning strikes - anything with a point location.\n  ",
           "parts":[
              "Bivariate point patterns",
              "Crime in Preston",
              "Violent crime proportion estimation",
              "Spatial segregation",
              "Bandwidth selection",
              "Segregation probabilities",
              "Mapping segregation",
              "Space-time data",
              "Sasquatch data",
              "Spatial pattern of bigfoot sightings",
              "Temporal pattern of bigfoot sightings",
              "Temporal pattern analysis",
              "Space-time clustering",
              "Preparing data for space-time clustering",
              "Monte-carlo test of space-time clustering",
              "Space-time clustering explanation"
           ]
        },
        {
           "title":"\n          Areal Statistics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    So much data is collected in administrative divisions that there are specialized techniques for analyzing them. This chapter presents several methods for exploring data in areas.\n  ",
           "parts":[
              "Areal statistics",
              "London EU referendum data",
              "Cartogram",
              "Spatial autocorrelation test",
              "Spatial health data",
              "London health data",
              "Binomial confidence intervals",
              "Exceedence probabilities",
              "Generalized linear models in space",
              "A Poisson GLM",
              "Residuals",
              "Correlation in spatial GLMs",
              "Fit a Bayesian GLM",
              "Adding a spatially autocorrelated effect",
              "Mapping the spatial effects"
           ]
        },
        {
           "title":"\n          Geostatistics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Originally developed for the mining industry, geostatistics covers the analysis of location-based measurement data. It enables model-based interpolation of measurements with uncertainty estimation.\n  ",
           "parts":[
              "Geostatistical data",
              "Canadian geochemical survey data",
              "Fitting a trend surface",
              "Predicting from a trend surface",
              "The variogram",
              "Variogram estimation",
              "Variogram with spatial trend",
              "Variogram model fitting",
              "Kriging predictions",
              "Filling in the gaps",
              "Making a prediction grid",
              "Gridded predictions",
              "Automatic kriging",
              "Auto-kriging at point locations",
              "Auto-kriging over a grid",
              "Last Words"
           ]
        }
     ],
     "prerequistes":[
        "Visualizing Geospatial Data in R",
        "Foundations of Probability in R"
     ],
     "tracks":[
        "Spatial Data with R"
     ]
  },
  {
     "title":"Introduction to Importing Data in R",
     "description":"In this course, you will learn to read CSV, XLS, and text files in R using tools like readxl and data.table.",
     "detailDescription":"Importing data into R should be the easiest step in your analysis. Unfortunately, that is almost never the case. Data can come in many formats, ranging from .csv and text files, to statistical software files, to databases and HTML data. Knowing which approach to use is key to getting started with the actual analysis. In this course, you’ll start by learning how to read .csv and text files in R. You will then cover the readr and data.table packages to easily and efficiently import flat file data. After that, you will learn how to read .xls files in R using readxl and gdata.",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          Importing data from flat files with utils\n        ",
           "index":"1",
           "description":"\n    A lot of data comes in the form of flat files: simple tabular text files. Learn how to import the common formats of flat file data with base R functions.\n  ",
           "parts":[
              "Introduction & read.csv",
              "read.csv",
              "stringsAsFactors",
              "Any changes?",
              "read.delim & read.table",
              "read.delim",
              "read.table",
              "Arguments",
              "Column classes",
              "Final Thoughts"
           ]
        },
        {
           "title":"\n          readr & data.table\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In addition to base R, there are dedicated packages to easily and efficiently import flat file data. We'll talk about two such packages: readr and data.table.\n  ",
           "parts":[
              "readr: read_csv & read_tsv",
              "read_csv",
              "read_tsv",
              "readr: read_delim",
              "read_delim",
              "skip and n_max",
              "col_types",
              "col_types with collectors",
              "data.table: fread",
              "fread",
              "fread: more advanced use",
              "Dedicated classes"
           ]
        },
        {
           "title":"\n          Importing Excel data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Excel is a widely used data analysis tool. If you prefer to do your analyses in R, though, you'll need an understanding of how to import  .csv data into R. This chapter will show you how to use readxl and gdata to do so.\n  ",
           "parts":[
              "readxl (1)",
              "List the sheets of an Excel file",
              "Import an Excel sheet",
              "Reading a workbook",
              "readxl (2)",
              "The col_names argument",
              "The skip argument",
              "gdata",
              "Import a local file",
              "read.xls() wraps around read.table()",
              "Work that Excel data!"
           ]
        },
        {
           "title":"\n          Reproducible Excel work with XLConnect\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Beyond importing data from Excel, you can take things one step further with XLConnect. Learn all about it and bridge the gap between R and Excel.\n  ",
           "parts":[
              "Reading sheets",
              "Connect to a workbook",
              "List and read Excel sheets",
              "Customize readWorksheet",
              "Adapting sheets",
              "Add worksheet",
              "Populate worksheet",
              "Renaming sheets",
              "Removing sheets"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "Importing & Cleaning Data with R"
     ]
  },
  {
     "title":"Introduction to Statistical Modeling in R",
     "description":"This course is designed to get you up to speed with the most important and powerful methodologies in statistics.",
     "detailDescription":"",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What is statistical modeling?\n        ",
           "index":"1",
           "description":"\n    This chapter explores what a statistical model is, R objects which build models, and the basic R notation, called formulas used for models.\n  ",
           "parts":[
              "Welcome to statistical modeling!",
              "A mathematical model",
              "Running experiments on the toy model",
              "From experimental results to a prediction",
              "R objects for statistical modeling",
              "Accessing data",
              "Starting with formulas",
              "Graphics with formulas"
           ]
        },
        {
           "title":"\n          Designing, training, and evaluating models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll start building models: specifying what variables models should relate to one another and training models on the available data. You'll also provide new inputs to models to generate the corresponding outputs.\n  ",
           "parts":[
              "Designing and training models",
              "Modeling running times",
              "Using the recursive partitioning model architecture",
              "Will they run again?",
              "Evaluating models",
              "From inputs to outputs",
              "Extrapolation",
              "Typical values of data"
           ]
        },
        {
           "title":"\n          Assessing prediction performance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter is about techniques for deciding whether an explanatory variable improves the prediction performance of a model. You'll use cross validation to compare different models.\n  ",
           "parts":[
              "Choosing explanatory variables",
              "Conceptual warm-up",
              "Running experience",
              "Prediction performance",
              "Where's the statistics?",
              "Cross validation",
              "Tidying up",
              "Testing and training datasets",
              "Repeating random trials",
              "To add or not to add (an explanatory variable)?"
           ]
        },
        {
           "title":"\n          Exploring data with models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter is about constructing models to explore masses of data, for instance to generate hypotheses about what factors are important in how a system works. You'll see how the recursive partitioning model architecture, which has an internal logic for selecting explanatory variables, can be used to explore potentially complex relationships among variables. The chapter also covers the evaluation of prediction performance in models where the response variable is categorical, that is, models used for classification.\n  ",
           "parts":[
              "Prediction error for categorical response variables",
              "The maximum error rate",
              "A non-null model",
              "A better model?",
              "Exploring data for relationships",
              "Evaluating a recursive partitioning model",
              "Exploring birth-weight data",
              "Exploring more broadly"
           ]
        },
        {
           "title":"\n          Covariates and effect size\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Real-world systems are complicated. To faithfully reflect that complexity, models can incorporate multiple explanatory variables. This chapter introduces the notion of covariates and how they allow you to model the effect of an explanatory variable while taking into account the effects of other variables.\n  ",
           "parts":[
              "Covariates",
              "House prices",
              "Crime and poverty",
              "Equal pay?",
              "Effect size",
              "Sex and death",
              "Comparing effect sizes",
              "How do GPAs compare?",
              "Housing units"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R",
        "Introduction to the Tidyverse"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Data Visualization in R",
     "description":"This course provides a comprehensive introduction to working with base graphics in R.",
     "detailDescription":"",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          A quick introduction to base R graphics\n        ",
           "index":"1",
           "description":"\n    This chapter gives a brief overview of some of the things you can do with base graphics in R. This graphics system is one of four available in R and it forms the basis for this course because it is both the easiest to learn and extremely useful both in preparing exploratory data visualizations to help you see what's in a dataset and in preparing explanatory data visualizations to help others see what we have found.\n  ",
           "parts":[
              "The world of data visualization",
              "Creating an exploratory plot array",
              "Creating an explanatory scatterplot",
              "The plot() function is generic",
              "A preview of some more and less useful techniques",
              "Adding details to a plot using point shapes, color, and reference lines",
              "Creating multiple plot arrays",
              "Avoid pie charts"
           ]
        },
        {
           "title":"\n          Different plot types\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces several Base R supported plot types that are particularly useful for visualizing important features in a dataset. We start with simple tools like histograms and density plots for characterizing one variable at a time, move on to scatter plots and other useful tools for showing how two variables relate, and finally introduce some tools for visualizing more complex relationships in our dataset.\n  ",
           "parts":[
              "Characterizing a single variable",
              "The hist() and truehist() functions",
              "Density plots as smoothed histograms",
              "Using the qqPlot() function to see many details in data",
              "Visualizing relations between two variables",
              "The sunflowerplot() function for repeated numerical data",
              "Useful options for the boxplot() function",
              "Using the mosaicplot() function",
              "Showing more complex relations between variables",
              "Using the bagplot() function",
              "Plotting correlation matrices with the corrplot() function",
              "Building and plotting rpart() models"
           ]
        },
        {
           "title":"\n          Adding details to plots\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Most base R graphics functions support many optional arguments and parameters that allow us to customize our plots to get exactly what we want. In this chapter, we will learn how to modify point shapes and sizes, line types and widths, add points and lines to plots, add explanatory text and generate multiple plot arrays.\n  ",
           "parts":[
              "The plot() function and its options",
              "Introduction to the par() function",
              "Exploring the type option",
              "The surprising utility of the type \"n\" option",
              "Adding lines and points to plots",
              "The lines() function and line types",
              "The points() function and point types",
              "Adding trend lines from linear regression models",
              "Adding text to plots",
              "Using the text() function to label plot features",
              "Adjusting text position, size, and font",
              "Rotating text with the srt argument",
              "Adding or modifying other plot details",
              "Using the legend() function",
              "Adding custom axes with the axis() function",
              "Using the supsmu() function to add smooth trend curves"
           ]
        },
        {
           "title":"\n          How much is too much?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    As we have seen, base R graphics provides tremendous flexibility in creating plots with multiple lines, points of different shapes and sizes, and added text, along with arrays of multiple plots. If we attempt to add too many details to a plot or too many plots to an array, however, the result can become too complicated to be useful. This chapter focuses on how to manage this visual complexity so the results remain useful to ourselves and to others.\n  ",
           "parts":[
              "Managing visual complexity",
              "Too much is too much",
              "Deciding how many scatterplots is too many",
              "How many words is too many?",
              "Creating plot arrays with the mfrow parameter",
              "The Anscombe quartet",
              "The utility of common scaling and individual titles",
              "Using multiple plots to give multiple views of a dataset",
              "Creating plot arrays with the layout() function",
              "Constructing and displaying layout matrices",
              "Creating a triangular array of plots",
              "Creating arrays with different sized plots"
           ]
        },
        {
           "title":"\n          Advanced plot customization and beyond\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This final chapter introduces a number of important topics, including the use of numerical plot details returned invisibly by functions like barplot() to enhance our plots, and saving plots to external files so they don't vanish when we end our current R session. This chapter also offers some guidelines for using color effectively in data visualizations, and it concludes with a brief introduction to the other three graphics systems in R.\n  ",
           "parts":[
              "Creating and saving more complex plots",
              "Some plot functions also return useful information",
              "Using the symbols() function to display relations between more than two variables",
              "Saving plot results as files",
              "Using color effectively",
              "Iliinsky and Steele's 12 recommended colors",
              "Using color to enhance a bubbleplot",
              "Using color to enhance stacked barplots",
              "Other graphics systems in R",
              "The tabplot package and grid graphics",
              "A lattice graphics example",
              "A ggplot2 graphics example"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[
        "Data Visualization with R"
     ]
  },
  {
     "title":"Intermediate Statistical Modeling in R",
     "description":"In this follow-up course, you will expand your stat modeling skills from the introduction and dive into more advanced concepts.",
     "detailDescription":"Statistical Modeling in R is a multi-part course designed to get you up to speed with the most important and powerful methodologies in statistics. In this intermediate course 2, we'll take a look at effect size and interaction, the concepts of total and partial change, sampling variability and mathematical transforms, and the implications of something called collinearity. This course has been written from scratch, specifically for DataCamp users. As you'll see, by using computing and concepts from machine learning, we'll be able to leapfrog many of the marginal and esoteric topics encountered in traditional 'regression' courses.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Effect size and interaction\n        ",
           "index":"1",
           "description":"\n    Effect sizes were introduced in Part 1 of this course series as a way to quantify how each explanatory variable is connected to the response. In this chapter, you'll meet some high-level tools that make it easier to calculate and visualize effect sizes. You'll see how to extend the notion of effect size to models with a categorical response variable. And you'll start to use interactions in constructing models to reflect the way that one explanatory variable can influence the effect size of another explanatory variable on the response.\n  ",
           "parts":[
              "Multiple explanatory variables",
              "Graphing a model of house prices",
              "Body-mass index (BMI)",
              "Categorical response variables",
              "Eager runners",
              "Who are the mellow runners?",
              "Smoking and survival",
              "Interactions among explanatory variables",
              "With and without an interaction term",
              "Working together",
              "Mileage and age interacting",
              "Interactions and effect size",
              "Optimal temperature"
           ]
        },
        {
           "title":"\n          Total and partial change\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In many circumstances, an effect size tells you exactly what you need to know: how much the model output will change when one, and only one, explanatory variable changes. This is called partial change. In other situations, you will want to look at total change, which combines the effects of two or more explanatory variables. You'll also see an additional, but limited way of quantifying the extent to which the explanatory variables influence the response: R-squared. Finally, we'll describe the notion of degrees of freedom, a way of describing the complexity of a model.\n  ",
           "parts":[
              "Total and partial change",
              "Another bedroom?",
              "Calculating total change",
              "Car prices",
              "R-squared",
              "Calculating R-squared",
              "Warming in Minneapolis?",
              "R-squared goes up",
              "Degrees of freedom",
              "Rules for counting",
              "Is bigger R-squared better? (1)",
              "Is bigger R-squared better? (2)",
              "Accidental \"perfection\""
           ]
        },
        {
           "title":"\n          Sampling variability and mathematical transforms\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter examines the precision with which a model can estimate an effect size. The lack of precision comes from sampling variability, which can be quantified using resampling and bootstrapping. You'll also see some ways to improve precision using mathematical transformations of variables.\n  ",
           "parts":[
              "Bootstrapping and precision",
              "A bootstrap trial",
              "From a bootstrap ensemble to the standard error",
              "Example: fireplaces",
              "Scales and transformations",
              "Typical values of data",
              "Exponential growth",
              "Prediction with log transforms",
              "Confidence intervals on log-transformed models"
           ]
        },
        {
           "title":"\n          Variables working together\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you'll learn about why you'd want to avoid collinearity, a common phenomenon in statistical modeling. You'll wrap up the course by discussing some of the ways models can be improved by involving the modeler in the design of the data collecting process.\n  ",
           "parts":[
              "Confidence and collinearity",
              "Collinearity and inflation (1)",
              "Collinearity and inflation (2)",
              "Inflation and interaction",
              "Modeling SAT scores",
              "Start modeling!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Statistical Modeling in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Intermediate Importing Data in R",
     "description":"Parse data in any format. Whether it's flat files, statistical software, databases, or data right from the web.",
     "detailDescription":"In this course, you will take a deeper dive into the wide range of data formats out there. More specifically, you'll learn how to import data from relational databases and how to import and work with data coming from the web. Finally, you'll get hands-on experience with importing data from statistical software packages such as SAS, STATA, and SPSS.",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          Importing data from databases (Part 1)\n        ",
           "index":"1",
           "description":"\n    Many companies store their information in relational databases. The R community has also developed R packages to get data from these architectures. You'll learn how to connect to a database and how to retrieve data from it.\n  ",
           "parts":[
              "Connect to a database",
              "Establish a connection",
              "Inspect the connection",
              "Import table data",
              "List the database tables",
              "Import users",
              "Import all tables",
              "How do the tables relate?"
           ]
        },
        {
           "title":"\n          Importing data from databases (Part 2)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Importing an entire table from a database while you might only need a tiny bit of information seems like a lot of unncessary work. In this chapter, you'll learn about SQL queries, which will help you make things more efficient by performing some computations on the database side.\n  ",
           "parts":[
              "SQL Queries from inside R",
              "Query tweater (1)",
              "Query tweater (2)",
              "Query tweater (3)",
              "Query tweater (4)",
              "Join the query madness!",
              "DBI internals",
              "Send - Fetch - Clear",
              "Be polite and ..."
           ]
        },
        {
           "title":"\n          Importing data from the web (Part 1)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    More and more of the information that data scientists are using resides on the web. Importing this data into R requires an understanding of the protocols used on the web. In this chapter, you'll get a crash course in HTTP and learn to perform your own HTTP requests from inside R.\n  ",
           "parts":[
              "HTTP",
              "Import flat files from the web",
              "Secure importing",
              "Downloading files",
              "Import Excel files from the web",
              "Downloading any file, secure or not",
              "Reading a text file from the web",
              "HTTP? httr! (1)",
              "HTTP? httr! (2)"
           ]
        },
        {
           "title":"\n          Importing data from the web (Part 2)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Importing data from the web is one thing; actually being able to extract useful information is another. Learn more about the JSON format to get one step closer to web domination.\n  ",
           "parts":[
              "APIs & JSON",
              "From JSON to R",
              "Quandl API",
              "OMDb API",
              "JSON & jsonlite",
              "JSON practice (1)",
              "JSON practice (2)",
              "toJSON()",
              "Minify and prettify"
           ]
        },
        {
           "title":"\n          Importing data from statistical software packages\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Next to R, there are also other commonly used statistical software packages: SAS, STATA and SPSS. Each of them has their own file format. Learn how to use the haven and foreign packages to get them into R with remarkable ease!\n  ",
           "parts":[
              "haven",
              "Import SAS data with haven",
              "Import STATA data with haven",
              "What does the graphic tell?",
              "Import SPSS data with haven",
              "Factorize, round two",
              "foreign",
              "Import STATA data with foreign (1)",
              "Import STATA data with foreign (2)",
              "Do you know your data?",
              "Import SPSS data with foreign (1)",
              "Excursion: Correlation",
              "Import SPSS data with foreign (2)"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Importing Data in R"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "Importing & Cleaning Data with R"
     ]
  },
  {
     "title":"Bond Valuation and Analysis in R",
     "description":"Learn to use R to develop models to evaluate and analyze bonds as well as protect them from interest rate changes.",
     "detailDescription":"",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction and Plain Vanilla Bond Valuation\n        ",
           "index":"1",
           "description":"\n    The fixed income market is large and filled with complex instruments. In this course, we focus on plain vanilla bonds to build solid fundamentals you will need to tackle more complex fixed income instruments.  In this chapter, we demonstrate the mechanics of valuing bonds by focusing on an annual coupon, fixed rate, fixed maturity, and option-free bond.\n  ",
           "parts":[
              "Introduction",
              "Price vs. value",
              "Time value of money",
              "Computing a bond's future value",
              "Computing a bond's present value",
              "Bond valuation",
              "Laying out the bond's cash flows",
              "Discounting bond cash flows with a known yield",
              "Convert your code into a function",
              "Convert your code into a bond valuation function"
           ]
        },
        {
           "title":"\n          Yield to Maturity\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Estimating Yield To Maturity - The YTM measures the expected return to bond investors if they hold the bond until maturity. This number summarizes the compensation investors demand for the risk they are bearing by investing in a particular bond. We will discuss how one can estimate YTM of a bond.\n  ",
           "parts":[
              "Price-yield relationship",
              "Credit ratings",
              "The yield on the Moody's Baa index",
              "Value the 5% bond using the Baa yield you found",
              "Plotting the price/yield relationship",
              "Components of yield",
              "Risk-free yield",
              "Plotting US Treasury yields",
              "Plotting the investment grade spread",
              "Estimating the yield of a bond",
              "Finding a bond's yield",
              "Use uniroot function to find YTM"
           ]
        },
        {
           "title":"\n          Duration and Convexity\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Interest rate risk is the biggest risk that bond investors face. When interest rates rise, bond prices fall. Because of this, much attention is paid to how sensitive a particular bond's price is to changes in interest rates. In this chapter, we start the discussion with a simple measure of bond price volatility - the Price Value of a Basis Point. Then, we discuss duration and convexity, which  are two common measures that are used to manage interest rate risk.\n  ",
           "parts":[
              "Bond price volatility and the price value of a basis point",
              "Price value of a basis point",
              "Calculate PV01 of a 10% bond",
              "Duration",
              "Duration of a zero-coupon bond",
              "Calculate approximate duration for a bond",
              "Estimating effect on bond price using duration",
              "Convexity",
              "Calculate approximate convexity for a bond",
              "Estimating effect of convexity on bond price",
              "Estimating the bond price using duration and convexity"
           ]
        },
        {
           "title":"\n          Comprehensive Example\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We will put all of the techniques that the student has learned from Chapters One through Three into one comprehensive example. The student will be asked to value a bond by using the yield on a comparable bond and estimate the bond's duration and convexity.\n  ",
           "parts":[
              "Summarizing the main lessons",
              "Find AAA bond yields as of September 30, 2016",
              "Bond valuation",
              "Alternative cash flow vector code",
              "Duration and convexity",
              "Direction of price change",
              "Calculate duration",
              "Calculate convexity measure",
              "The estimated price change using duration and convexity",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Importing and Managing Financial Data in R"
     ],
     "tracks":[
        "Applied Finance in R",
        "Quantitative Analyst with R"
     ]
  },
  {
     "title":"Intermediate Portfolio Analysis in R",
     "description":"Advance you R finance skills to backtest, analyze, and optimize financial portfolios.",
     "detailDescription":"This course builds on the fundamental concepts from Introduction to Portfolio Analysis in R and explores advanced concepts in the portfolio optimization process. It is critical for an analyst or portfolio manager to understand all aspects of the portfolio optimization problem to make informed decisions. In this course, you will learn a quantitative approach to apply the principles of modern portfolio theory to specify a portfolio, define constraints and objectives, solve the problem, and analyze the results. This course will use the R package PortfolioAnalytics to solve portfolio optimization problems with complex constraints and objectives that mirror real world problems.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Introduction and Portfolio Theory\n        ",
           "index":"1",
           "description":"\n    This chapter will give you a brief review of Modern Portfolio Theory and introduce you to the PortfolioAnalytics package by solving a couple portfolio optimization problems.\n  ",
           "parts":[
              "Welcome to the course!",
              "Load the PortfolioAnalytics package",
              "Solve a simple portfolio optimization problem",
              "Visualize results",
              "Modern Portfolio Theory objective",
              "Defining risk",
              "Challenges of portfolio optimization",
              "Quadratic utility",
              "Maximize quadratic utility function",
              "Introduction to PortfolioAnalytics",
              "Key design goals"
           ]
        },
        {
           "title":"\n          Portfolio Optimization Workflow\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The focus of this chapter is a detailed overview of the recommended workflow for solving portfolio optimization problems with PortfolioAnalytics. You will learn how to create a portfolio specification, add constraints, objectives, run the optimization, and analyze the results of the optimization output.\n  ",
           "parts":[
              "Portfolio specification, constraints, and objectives",
              "Create a portfolio specification",
              "Add constraints",
              "Add objectives",
              "Running optimizations",
              "Single-Period optimization",
              "Optimization with periodic rebalancing",
              "Global solvers",
              "Analyzing optimization results",
              "Objective measure values",
              "Optimal weights"
           ]
        },
        {
           "title":"\n          Objective Functions and Moment Estimation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about estimating moments, characteristics of the distribution of asset returns, as well as custom objective functions.\n  ",
           "parts":[
              "Introduction to moments",
              "Sample moment estimates",
              "Advanced moment estimates",
              "Method for estimating moments",
              "Custom moment functions",
              "Define a custom moment function",
              "Optimization with custom moment function",
              "Objective functions",
              "Custom objective function",
              "Optimization with custom objective function"
           ]
        },
        {
           "title":"\n          Application\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter of the course, you will solve a portfolio optimization problem that mimics a real world real world example of constructing a portfolio of hedge fund strategy with different style definitions.\n  ",
           "parts":[
              "Application",
              "Compute benchmark returns",
              "Define the portfolio optimization problem",
              "Benchmark",
              "Optimization backtest",
              "Backtest with periodic rebalancing",
              "Refine constraints and objectives",
              "Do improved estimates lead to improved performance?",
              "Analyze results and compare to benchmark",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Portfolio Analysis in R"
     ],
     "tracks":[
        "Finance Fundamentals in R",
        "Quantitative Analyst with R"
     ]
  },
  {
     "title":"Foundations of Inference",
     "description":"Learn how to draw conclusions about a population from a sample of data via a process known as statistical inference.",
     "detailDescription":"One of the foundational aspects of statistical analysis is inference, or the process of drawing conclusions about a larger population from a sample of data. Although counter intuitive, the standard practice is to attempt to disprove a research claim that is not of interest. For example, to show that one medical treatment is better than another, we can assume that the two treatments lead to equal survival rates only to then be disproved by the data. Additionally, we introduce the idea of a p-value, or the degree of disagreement between the data and the hypothesis. We also dive into confidence intervals, which measure the magnitude of the effect of interest (e.g. how much better one treatment is than another).",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to ideas of inference\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will investigate how repeated samples taken from a population can vary.  It is the variability in samples that allow you to make claims about the population of interest.  It is important to remember that the research claims of interest focus on the population while the information available comes only from the sample data.\n  ",
           "parts":[
              "Welcome to the course!",
              "Hypotheses (1)",
              "Hypotheses (2)",
              "Randomized distributions",
              "Working with the NHANES data",
              "Calculating statistic of interest",
              "Randomized data under null model of independence",
              "Randomized statistics and dotplot",
              "Randomization density",
              "Using the randomization distribution",
              "Do the data come from the population?",
              "What can you conclude?",
              "Study conclusions"
           ]
        },
        {
           "title":"\n          Completing a randomization test: gender discrimination\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will gain the tools and knowledge to complete a full hypothesis test.  That is, given a dataset, you will know whether or not is appropriate to reject the null hypothesis in favor of the research claim of interest.\n  ",
           "parts":[
              "Example: gender discrimination",
              "Gender discrimination hypotheses",
              "Summarizing gender discrimination",
              "Step-by-step through the permutation",
              "Randomizing gender discrimination",
              "Distribution of statistics",
              "Reflecting on analysis",
              "Critical region",
              "Two-sided critical region",
              "Why 0.05?",
              "How does sample size affect results?",
              "Sample size in randomization distribution",
              "Sample size for critical region",
              "What is a p-value?",
              "Calculating the p-values",
              "Practice calculating p-values",
              "Calculating two-sided p-values",
              "Summary of gender discrimination"
           ]
        },
        {
           "title":"\n          Hypothesis testing errors: opportunity cost\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will continue learning about hypothesis testing with a new example and the same structure of randomization tests.  In this chapter, however, the focus will be on different errors (type I and type II), how they are made, when one is worse than another, and how things like sample size and effect size impact the error rates.\n  ",
           "parts":[
              "Example: opportunity cost",
              "Summarizing opportunity cost (1)",
              "Plotting opportunity cost",
              "Randomizing opportunity cost",
              "Summarizing opportunity cost (2)",
              "Opportunity cost conclusion",
              "Errors and their consequences",
              "Different choice of error rate",
              "Errors for two-sided hypotheses",
              "p-value for two-sided hypotheses: opportunity costs",
              "Summary of opportunity costs"
           ]
        },
        {
           "title":"\n          Confidence intervals\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    As a complement to hypothesis testing, confidence intervals allow you to estimate a population parameter.  Recall that your interest is always in some characteristic of the population, but you only have incomplete information to estimate the parameter using sample data.  Here, the parameter is the true proportion of successes in a population.  Bootstrapping is used to estimate the variability needed to form the confidence interval.\n  ",
           "parts":[
              "Parameters and confidence intervals",
              "What is the parameter?",
              "Hypothesis test or confidence interval?",
              "Bootstrapping",
              "Resampling from a sample",
              "Visualizing the variability of p-hat",
              "Always resample the original number of observations",
              "Variability in p-hat",
              "Empirical Rule",
              "Bootstrap t-confidence interval",
              "Bootstrap percentile interval",
              "Interpreting CIs and technical conditions",
              "Sample size effects on bootstrap CIs",
              "Sample proportion value effects on bootstrap CIs",
              "Percentile effects on bootstrap CIs",
              "Summary of statistical inference"
           ]
        }
     ],
     "prerequistes":[
        "Correlation and Regression in R"
     ],
     "tracks":[
        "Statistical Inference with R",
        "Statistician with R"
     ]
  },
  {
     "title":"Unsupervised Learning in R",
     "description":"This course provides an intro to clustering and dimensionality reduction in R from a machine learning perspective.",
     "detailDescription":"Many times in machine learning, the goal is to find patterns in data without trying to make predictions. This is called unsupervised learning. One common use case of unsupervised learning is grouping consumers based on demographics and purchasing history to deploy targeted marketing campaigns. Another example is wanting to describe the unmeasured factors that most influence crime differences between cities. This course provides a basic introduction to clustering and dimensionality reduction in R from a machine learning perspective, so that you can get from data to insights as quickly as possible.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Unsupervised learning in R\n        ",
           "index":"1",
           "description":"\n    The k-means algorithm is one common approach to clustering. Learn how the algorithm works under the hood, implement k-means clustering in R, visualize and interpret the results, and select the number of clusters when it's not known ahead of time. By the end of the chapter, you'll have applied k-means clustering to a fun \"real-world\" dataset!\n  ",
           "parts":[
              "Welcome to the course!",
              "Identify clustering problems",
              "Introduction to k-means clustering",
              "k-means clustering",
              "Results of kmeans()",
              "Visualizing and interpreting results of kmeans()",
              "How k-means works and practical matters",
              "Handling random algorithms",
              "Selecting number of clusters",
              "Introduction to the Pokemon data",
              "Practical matters: working with real data",
              "Review of k-means clustering"
           ]
        },
        {
           "title":"\n          Hierarchical clustering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Hierarchical clustering is another popular method for clustering. The goal of this chapter is to go over how it works, how to use it, and how it compares to k-means clustering.\n  ",
           "parts":[
              "Introduction to hierarchical clustering",
              "Hierarchical clustering with results",
              "Selecting number of clusters",
              "Interpreting dendrogram",
              "Cutting the tree",
              "Clustering linkage and practical matters",
              "Linkage methods",
              "Comparing linkage methods",
              "Practical matters: scaling",
              "Comparing kmeans() and hclust()",
              "Review of hierarchical clustering"
           ]
        },
        {
           "title":"\n          Dimensionality reduction with PCA\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Principal component analysis, or PCA, is a common approach to dimensionality reduction. Learn exactly what PCA does, visualize the results of PCA with biplots and scree plots, and deal with practical issues such as centering and scaling the data before performing PCA.\n  ",
           "parts":[
              "Introduction to PCA",
              "PCA using prcomp()",
              "Results of PCA",
              "Additional results of PCA",
              "Visualizing and interpreting PCA results",
              "Interpreting biplots (1)",
              "Interpreting biplots (2)",
              "Variance explained",
              "Visualize variance explained",
              "Practical issues with PCA",
              "Practical issues: scaling",
              "Additional uses of PCA and wrap-up"
           ]
        },
        {
           "title":"\n          Putting it all together with a case study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The goal of this chapter is to guide you through a complete analysis using the unsupervised learning techniques covered in the first three chapters. You'll extend what you've learned by combining PCA as a preprocessing step to clustering using data that consist of measurements of cell nuclei of human breast masses.\n  ",
           "parts":[
              "Introduction to the case study",
              "Preparing the data",
              "Exploratory data analysis",
              "Performing PCA",
              "Interpreting PCA results",
              "Variance explained",
              "PCA review and next steps",
              "Communicating PCA results",
              "Hierarchical clustering of case data",
              "Results of hierarchical clustering",
              "Selecting number of clusters",
              "k-means clustering and comparing results",
              "Clustering on PCA results",
              "Wrap-up and review"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[
        "Data Scientist with R",
        "Machine Learning Fundamentals in R",
        "Machine Learning Scientist with R",
        "Unsupervised Machine Learning with R"
     ]
  },
  {
     "title":"Exploratory Data Analysis in R",
     "description":"Learn how to use graphical and numerical techniques to begin uncovering the structure of your data.",
     "detailDescription":"When your dataset is represented as a table or a database, it's difficult to observe much about it beyond its size and the types of variables it contains. In this course, you'll learn how to use graphical and numerical techniques to begin uncovering the structure of your data. Which variables suggest interesting relationships? Which observations are unusual? By the end of the course, you'll be able to answer these questions and more, while generating graphics that are both insightful and beautiful.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring Categorical Data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn how to create graphical and numerical summaries of two categorical variables.\n  ",
           "parts":[
              "Exploring categorical data",
              "Bar chart expectations",
              "Contingency table review",
              "Dropping levels",
              "Side-by-side barcharts",
              "Bar chart interpretation",
              "Counts vs. proportions",
              "Conditional proportions",
              "Counts vs. proportions (2)",
              "Distribution of one variable",
              "Marginal barchart",
              "Conditional barchart",
              "Improve piechart"
           ]
        },
        {
           "title":"\n          Exploring Numerical Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to graphically summarize numerical data.\n  ",
           "parts":[
              "Exploring numerical data",
              "Faceted histogram",
              "Boxplots and density plots",
              "Compare distribution via plots",
              "Distribution of one variable",
              "Marginal and conditional histograms",
              "Marginal and conditional histograms interpretation",
              "Three binwidths",
              "Three binwidths interpretation",
              "Box plots",
              "Box plots for outliers",
              "Plot selection",
              "Visualization in higher dimensions",
              "3 variable plot",
              "Interpret 3 var plot"
           ]
        },
        {
           "title":"\n          Numerical Summaries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that we've looked at exploring categorical and numerical data, you'll learn some useful statistics for describing distributions of data.\n  ",
           "parts":[
              "Measures of center",
              "Choice of center measure",
              "Calculate center measures",
              "Measures of variability",
              "Choice of spread measure",
              "Calculate spread measures",
              "Choose measures for center and spread",
              "Shape and transformations",
              "Describe the shape",
              "Transformations",
              "Outliers",
              "Identify outliers"
           ]
        },
        {
           "title":"\n          Case Study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Apply what you've learned to explore and summarize a real world dataset in this case study of email spam.\n  ",
           "parts":[
              "Introducing the data",
              "Spam and num_char",
              "Spam and num_char interpretation",
              "Spam and !!!",
              "Spam and !!! interpretation",
              "Check-in 1",
              "Collapsing levels",
              "Image and spam interpretation",
              "Data Integrity",
              "Answering questions with chains",
              "Check-in 2",
              "What's in a number?",
              "What's in a number interpretation",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data in R"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "Statistician with R",
        "Statistics Fundamentals with R"
     ]
  },
  {
     "title":"Introduction to Data in R",
     "description":"Learn the language of data, study types, sampling strategies, and experimental design.",
     "detailDescription":"Scientists seek to answer questions using rigorous methods and careful observations. These observations—collected from the likes of field notes, surveys, and experiments—form the backbone of a statistical investigation and are called data. Statistics is the study of how best to collect, analyze, and draw conclusions from data. It is helpful to put statistics in the context of a general process of investigation: 1) identify a question or problem; 2) collect relevant data on the topic; 3) analyze the data; and 4) form a conclusion. In this course, you'll focus on the first two steps of the process.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Language of data\n        ",
           "index":"1",
           "description":"\n    This chapter introduces terminology of datasets and data frames in R.\n  ",
           "parts":[
              "Welcome to the course!",
              "Loading data into R",
              "Types of variables",
              "Identify variable types",
              "Categorical data in R: factors",
              "Filtering based on a factor",
              "Complete filtering based on a factor",
              "Discretize a variable",
              "Discretize a different variable",
              "Combining levels of a different factor",
              "Visualizing numerical data",
              "Visualizing numerical and categorical data"
           ]
        },
        {
           "title":"\n          Study types and cautionary tales\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about observational studies and experiments, scope of inference, and Simpson's paradox.\n  ",
           "parts":[
              "Observational studies and experiments",
              "Identify type of study: Reading speed and font",
              "Identify type of study: Countries",
              "Random sampling and random assignment",
              "Random sampling or random assignment?",
              "Identify the scope of inference of study",
              "Simpson's paradox",
              "Number of males and females admitted",
              "Proportion of males admitted overall",
              "Proportion of males admitted for each department",
              "Admission rates for males across departments",
              "Recap: Simpson's paradox",
              "Identify type of study: Countries [new]"
           ]
        },
        {
           "title":"\n          Sampling strategies and experimental design\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter defines various sampling strategies and their benefits/drawbacks as well as principles of experimental design.\n  ",
           "parts":[
              "Sampling strategies",
              "Sampling strategies, determine which",
              "Sampling strategies, choose worst",
              "Sampling in R",
              "Simple random sample in R",
              "Stratified sample in R",
              "Compare SRS vs. stratified sample",
              "Principles of experimental design",
              "Identifying components of a study",
              "Experimental design terminology",
              "Connect blocking and stratifying"
           ]
        },
        {
           "title":"\n          Case study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Apply terminology, principles, and R code learned in the first three chapters of this course to a case study looking at how the physical appearance of instructors impacts their students' course evaluations.\n  ",
           "parts":[
              "Beauty in the classroom",
              "Inspect the data",
              "Identify type of study",
              "Sampling / experimental attributes",
              "Variables in the data",
              "Identify variable types",
              "Recode a variable",
              "Create a scatterplot",
              "Create a scatterplot, with an added layer",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Statistician with R",
        "Statistics Fundamentals with R"
     ]
  },
  {
     "title":"Foundations of Probability in R",
     "description":"In this course, you'll learn about the concepts of random variables, distributions, and conditioning.",
     "detailDescription":"Probability is the study of making predictions about random phenomena. In this course, you'll learn about the concepts of random variables, distributions, and conditioning, using the example of coin flips. You'll also gain intuition for how to solve probability problems through random simulation. These principles will help you understand statistical inference and can be applied to draw conclusions from data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The binomial distribution\n        ",
           "index":"1",
           "description":"\n    One of the simplest and most common examples of a random phenomenon is a coin flip: an event that is either \"yes\" or \"no\" with some probability. Here you'll learn about the binomial distribution, which describes the behavior of a combination of yes/no trials and how to predict and simulate its behavior.\n  ",
           "parts":[
              "Flipping coins in R",
              "Simulating coin flips",
              "Simulating draws from a binomial",
              "Density and cumulative density",
              "Calculating density of a binomial",
              "Calculating cumulative density of a binomial",
              "Varying the number of trials",
              "Expected value and variance",
              "Calculating the expected value",
              "Calculating the variance"
           ]
        },
        {
           "title":"\n          Laws of probability\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn to combine multiple probabilities, such as the probability two events both happen or that at least one happens, and confirm each with random simulations. You'll also learn some of the properties of adding and multiplying random variables.\n  ",
           "parts":[
              "Probability of event A and event B",
              "Solving for probability of A and B",
              "Simulating the probability of A and B",
              "Simulating the probability of A, B, and C",
              "Probability of A or B",
              "Solving for probability of A or B",
              "Simulating probability of A or B",
              "Probability either variable is less than or equal to 4",
              "Multiplying random variables",
              "Expected value of multiplying a random variable",
              "Simulating multiplying a random variable",
              "Variance of a multiplied random variable",
              "Adding two random variables",
              "Solving for the sum of two binomial variables",
              "Simulating adding two binomial variables",
              "Simulating variance of sum of two binomial variables"
           ]
        },
        {
           "title":"\n          Bayesian statistics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Bayesian statistics is a mathematically rigorous method for updating your beliefs based on evidence. In this chapter, you'll learn to apply Bayes' theorem to draw conclusions about whether a coin is fair or biased, and back it up with simulations.\n  ",
           "parts":[
              "Updating with evidence",
              "Updating",
              "Updating with simulation",
              "Updating after 16 heads",
              "Updating with simulation after 16 heads",
              "Prior probability",
              "Updating with priors",
              "Updating with three coins",
              "Bayes' theorem",
              "Updating with Bayes theorem",
              "Updating for other outcomes",
              "More updating with priors"
           ]
        },
        {
           "title":"\n          Related distributions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    So far we've been talking about the binomial distribution, but this is one of many probability distributions a random variable can take. In this chapter we'll introduce three more that are related to the binomial: the normal, the Poisson, and the geometric.\n  ",
           "parts":[
              "The normal distribution",
              "Approximating a binomial to the normal",
              "Simulating from the binomial and the normal",
              "Comparing the cumulative density of the binomial",
              "Comparing the distributions of the normal and binomial for low n",
              "The Poisson distribution",
              "Approximating a binomial with a Poisson",
              "Simulating from a Poisson and a binomial",
              "Density of the Poisson distribution",
              "Sum of two Poisson variables",
              "The geometric distribution",
              "Waiting for first coin flip",
              "Using replicate() for simulation",
              "Simulating from the geometric distribution",
              "Probability of a machine lasting X days",
              "Graphing the probability that a machine still works"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[
        "Probability and Distributions with R",
        "Statistician with R"
     ]
  },
  {
     "title":"Life Insurance Products Valuation in R",
     "description":"Learn the basics of cash flow valuation, work with human mortality data and build life insurance products in R.",
     "detailDescription":"Understanding the basic principles of life insurance products is essential for your personal financial planning, ranging from taking out a mortgage to designing your retirement plan and seeking financial protection for the risk of dying early. In this course, you'll study the time value of money and you’ll work with human mortality data to derive demographic markers (such as the life expectancy). Combining the basics of cash flow valuation with the calculation of survival and death probabilities in R will allow you to construct insightful tools to design life insurance products. You'll come out of this course understanding the valuation of life contingent claims: life annuities, which provide an income upon survival, and life insurance products, which pay a benefit upon death of the policyholder.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Valuation of Cash Flows\n        ",
           "index":"1",
           "description":"\n    Learn the basics of cash flow vectors and their valuation with discount factors. You will then evaluate investments based on their net present value and build your own mortgage calculator. Finally, you will learn about fixed and variable interest rates; and annual and monthly rates.\n  ",
           "parts":[
              "Cash flows and discounting",
              "Present value of a cash flow",
              "Net present value of investments",
              "Valuation",
              "Anywhere, anytime?",
              "Actuarial equivalence",
              "Saving for university",
              "Deposits of the saving plan",
              "Change of period and term structure",
              "The interest rates they are a-changin'",
              "From yearly to monthly interest rate",
              "Monthly mortgage loan payments"
           ]
        },
        {
           "title":"\n          Life Tables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Life tables play a vital role in life insurance products. In this chapter you will work with data sets from the Human Mortality Database by building meaningful visualizations to study the evolution of mortality data over age and time. You will also use survival and death probabilities.\n  ",
           "parts":[
              "Random future lifetime",
              "Like it's 1999!",
              "Visualizing one year of mortality data",
              "Men versus women",
              "Binomial experiments",
              "How likely is Cynthia to live to 100?",
              "The number of deaths",
              "Calculating probabilities",
              "Multiplication rules!",
              "Deferred mortality probabilities",
              "Calculating life expectancies",
              "Curtate vs complete life expectancy",
              "Plotting life expectancies by age",
              "Dynamics",
              "Mortality rates over time",
              "Cohort survival probabilities"
           ]
        },
        {
           "title":"\n          Life Annuities\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will now act as an actuary working in a life insurance company. Learn about the basics of life annuity products and their valuation by working on cases ranging from simple life annuities to retirement plans.\n  ",
           "parts":[
              "The basics",
              "To survive or not to survive",
              "Short- and long-term",
              "The whole, temporary and deferred life annuity",
              "Ages, interest rates and the whole life annuity",
              "A function to price a life annuity",
              "Immediate vs due",
              "Temporary vs lifelong",
              "Guaranteed payments",
              "Pension calculations ignoring mortality",
              "Pension calculations accounting for mortality",
              "On premium payments and retirement plans",
              "A retirement plan for Miss Cathleen",
              "From single to annual premium",
              "A good deal? Outliving your life expectancy"
           ]
        },
        {
           "title":"\n          Life Insurances\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will now deal with life insurance contracts. Learn how these products are relevant in your financial planning by designing whole life, temporary and endowment insurances.\n  ",
           "parts":[
              "The basics",
              "Lucy and Kevin’s mortgage protection",
              "Take it easy: a simple life insurance",
              "The whole, temporary and deferred life insurance",
              "Life annuity vs life insurance",
              "Whole life insurance",
              "Temporary life insurance",
              "Deferred life insurance",
              "Combined benefits",
              "A life insurance plan for Miss Cathleen",
              "Best of both worlds – the endowment insurance",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Foundations of Probability in R"
     ],
     "tracks":[
        "Applied Finance in R"
     ]
  },
  {
     "title":"Visualizing Geospatial Data in R",
     "description":"Learn to read, explore, and manipulate spatial data then use your skills to create informative maps using R.",
     "detailDescription":"",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basic mapping with ggplot2 and ggmap\n        ",
           "index":"1",
           "description":"\n    We'll dive in by displaying some spatial data -- property sales in a small US town -- using ggplot2 and we'll introduce you to the ggmap package as a quick way to add spatial context to your plots.  We'll talk about what makes spatial data special and introduce you to the common types of spatial data we'll be working with throughout the course.\n  ",
           "parts":[
              "Introduction to spatial data",
              "Grabbing a background map",
              "Putting it all together",
              "Insight through aesthetics",
              "Useful get_map() and ggmap() options",
              "Different maps",
              "Leveraging ggplot2's strengths",
              "A quick alternative",
              "Common types of spatial data",
              "Drawing polygons",
              "Choropleth map",
              "Raster data as a heatmap"
           ]
        },
        {
           "title":"\n          Point and polygon data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You can get a long way with spatial data stored in data frames, but it makes life easier if they are stored in special spatial objects.  In this chapter we'll introduce you to the spatial object classes provided by the sp package, particularly for point and polygon data. You'll learn how to explore and subset these objects by exploring a world map. The reward for learning about these object classes:  we'll show you the package tmap which requires spatial objects as input, but makes creating maps really easy! You'll finish up by making a map of the world's population.\n  ",
           "parts":[
              "Introducing sp objects",
              "Let's take a look at a spatial object",
              "What's inside a spatial object?",
              "A more complicated spatial object",
              "sp and S4",
              "Walking the hierarchy",
              "Further down the rabbit hole",
              "More sp classes and methods",
              "Subsetting by index",
              "Accessing data in sp objects",
              "Subsetting based on data attributes",
              "tmap, a package that works with sp objects",
              "Introduction to tmap",
              "Building a plot in layers",
              "Why is Greenland so big?",
              "Saving a tmap plot"
           ]
        },
        {
           "title":"\n          Raster data and color\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    While the sp package provides some classes for raster data, the raster package provides more useful classes.  You'll be introduced to these classes and their advantages and then learn to display them. The examples continue with the theme of population from Chapter 2, but you'll look at some much finer detail datasets, both spatially and demographically. In the second half of the chapter you'll learn about color -- an essential part of any visual display, but especially important for maps.\n  ",
           "parts":[
              "The raster package",
              "What's a raster object?",
              "Some useful methods",
              "A more complicated object",
              "A package that uses Raster objects",
              "Color scales",
              "Pick the right palette",
              "Adding a custom continuous color palette to ggplot2 plots",
              "Custom palette in tmap",
              "More about color scales",
              "An interval scale example",
              "A diverging scale example",
              "A qualitative example"
           ]
        },
        {
           "title":"\n          Data import and projections\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll follow the creation of a visualization from raw spatial data files to adding a credit to a map.  Along the way, you'll learn how to read spatial data into R, more about projections and coordinate reference systems, how to add additional data to a spatial object, and some tips for polishing your maps.\n  ",
           "parts":[
              "Reading in spatial data",
              "Reading in a shapefile",
              "Reading in a raster file",
              "Getting data using a package",
              "Coordinate reference systems",
              "Merging data from different CRS/projections",
              "Converting from one CRS/projection to another",
              "Adding data to spatial objects",
              "The wrong way",
              "Checking data will match",
              "Merging data attributes",
              "A first plot",
              "Polishing a map",
              "Subsetting the neighborhoods",
              "Adding neighborhood labels",
              "Tidying up the legend and some final tweaks",
              "Wrap up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R",
        "Introduction to Data Visualization with ggplot2"
     ],
     "tracks":[
        "Spatial Data with R"
     ]
  },
  {
     "title":"Sentiment Analysis in R",
     "description":"Learn sentiment analysis by identifying positive and negative language, specific emotional intent and making compelling visualizations.",
     "detailDescription":"Add sentiment analysis to your text mining toolkit! Sentiment analysis is used by text miners in marketing, politics, customer service and elsewhere. In this course you will learn to identify positive and negative language, specific emotional intent, and make compelling visualizations. You will end the course by applying your sentiment analysis skills to Airbnb reviews to learn what makes for a good rental.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Fast & dirty: Polarity scoring\n        ",
           "index":"1",
           "description":"\n    In the first chapter, you will learn how to apply qdap's sentiment function called  polarity() . \n  ",
           "parts":[
              "Let's talk about our feelings",
              "Jump right in! Visualize polarity",
              "TM refresher (I)",
              "TM refresher (II)",
              "How many words do YOU know?  Zipf's law & subjectivity lexicon",
              "What is a subjectivity lexicon?",
              "Where can you observe Zipf's law?",
              "Polarity on actual text",
              "Explore qdap's polarity & built-in lexicon",
              "Happy songs!",
              "LOL, this song is wicked good",
              "Stressed Out!"
           ]
        },
        {
           "title":"\n          Sentiment analysis the tidytext way\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the second chapter you will explore 3 subjectivity lexicons from tidytext.  Then you will do an inner join to score some text.\n  ",
           "parts":[
              "Plutchik's wheel of emotion, polarity vs. sentiment",
              "One theory of emotion",
              "DTM vs. tidytext matrix",
              "Getting Sentiment Lexicons",
              "Bing lexicon with an inner join explanation",
              "Bing tidy polarity: Simple example",
              "Bing tidy polarity: Count & spread the white whale",
              "Bing tidy polarity: Call me Ishmael (with ggplot2)!",
              "AFINN & NRC methodologies in more detail",
              "AFINN: I'm your Huckleberry",
              "The wonderful wizard of NRC"
           ]
        },
        {
           "title":"\n          Visualizing sentiment\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Make compelling visuals with your sentiment output.\n  ",
           "parts":[
              "Parlor trick or worthwhile?",
              "Real insight?",
              "Unhappy ending? Chronological polarity",
              "Word impact, frequency analysis",
              "Introspection using sentiment analysis",
              "Divide & conquer: Using polarity for a comparison cloud",
              "Emotional introspection",
              "Compare & contrast stacked bar chart",
              "Interpreting visualizations",
              "Kernel density plot",
              "Box plot",
              "Radar chart",
              "Treemaps for groups of documents"
           ]
        },
        {
           "title":"\n          Case study: Airbnb reviews\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Is your property a good rental?  What do people look for in a good rental?\n  ",
           "parts":[
              "Refresher on the text mining workflow",
              "Step 1: What do you want to know?",
              "Step 2: Identify Text Sources",
              "Quickly examine the basic polarity",
              "Step 3: Organize (& clean) the text",
              "Create Polarity Based Corpora",
              "Create a Tidy Text Tibble!",
              "Compare Tidy Sentiment to Qdap Polarity",
              "Step 4: Feature Extraction & Step 5: Time for analysis... almost there!",
              "Assessing author effort",
              "Comparison Cloud",
              "Scaled Comparison Cloud",
              "Step 6: Reach a conclusion",
              "Confirm an expected conclusion",
              "Choose a less expected insight",
              "Your turn!"
           ]
        }
     ],
     "prerequistes":[
        "Text Mining with Bag-of-Words in R"
     ],
     "tracks":[
        "Text Mining with R"
     ]
  },
  {
     "title":"Correlation and Regression in R",
     "description":"Learn how to describe relationships between two numerical quantities and characterize these relationships graphically.",
     "detailDescription":"Ultimately, data analysis is about understanding relationships among variables. Exploring data with multiple variables requires new, more complex tools, but enables a richer set of comparisons. In this course, you will learn how to describe relationships between two numerical quantities. You will characterize these relationships graphically, in the form of summary statistics, and through simple linear regression models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Visualizing two variables\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn techniques for exploring bivariate relationships.\n  ",
           "parts":[
              "Visualizing bivariate relationships",
              "Scatterplots",
              "Boxplots as discretized/conditioned scatterplots",
              "Characterizing bivariate relationships",
              "Creating scatterplots",
              "Characterizing scatterplots",
              "Transformations",
              "Outliers",
              "Identifying outliers"
           ]
        },
        {
           "title":"\n          Correlation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces correlation as a means of quantifying bivariate relationships.\n  ",
           "parts":[
              "Quantifying the strength of bivariate relationships",
              "Understanding correlation scale",
              "Understanding correlation sign",
              "Computing correlation",
              "The Anscombe dataset",
              "Exploring Anscombe",
              "Perception of correlation",
              "Perception of correlation (2)",
              "Interpretation of Correlation",
              "Interpreting correlation in context",
              "Correlation and causation",
              "Spurious correlations",
              "Spurious correlation in random data"
           ]
        },
        {
           "title":"\n          Simple linear regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    With the notion of correlation under your belt, we'll now turn our attention to simple linear models in this chapter.\n  ",
           "parts":[
              "Visualization of  Linear Models",
              "The \"best fit\" line",
              "Uniqueness of least squares regression line",
              "Understanding Linear Models",
              "Regression model terminology",
              "Regression model output terminology",
              "Fitting a linear model \"by hand\"",
              "Regression vs. regression to the mean",
              "Regression to the mean",
              "\"Regression\" in the parlance of our time"
           ]
        },
        {
           "title":"\n          Interpreting regression models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter looks at how to interpret the coefficients in a regression model.\n  ",
           "parts":[
              "Interpretation of Regression",
              "Interpretation of coefficients",
              "Interpretation in context",
              "Fitting simple linear models",
              "Units and scale",
              "Your linear model object",
              "The lm summary output",
              "Fitted values and residuals",
              "Tidying your linear model",
              "Using your linear model",
              "Making predictions",
              "Adding a regression line to a plot manually"
           ]
        },
        {
           "title":"\n          Model Fit\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you'll learn how to assess the \"fit\" of a simple linear regression model.\n  ",
           "parts":[
              "Assessing Model Fit",
              "RMSE",
              "Standard error of residuals",
              "Comparing model fits",
              "Assessing simple linear model fit",
              "Interpretation of R^2",
              "Linear vs. average",
              "Unusual Points",
              "Leverage",
              "Influence",
              "Dealing with Outliers",
              "Removing outliers",
              "High leverage points",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Exploratory Data Analysis in R"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "Statistician with R",
        "Statistics Fundamentals with R"
     ]
  },
  {
     "title":"ARIMA Models in R",
     "description":"Become an expert in fitting ARIMA (autoregressive integrated moving average) models to time series data using R.",
     "detailDescription":"In this course, you will become an expert in fitting ARIMA models to time series data using R. First, you will explore the nature of time series data using the tools in the R stats package. Next, you learn how to fit various ARMA models to simulated data (where you will know the correct model) using the R package astsa. Once you have mastered the basics, you will learn how to fit integrated ARMA models, or ARIMA models to various real data sets. You will learn how to check the validity of an ARIMA model and you will learn how to forecast time series data. Finally, you will learn how to fit ARIMA models to seasonal data, including forecasting using the astsa package.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Time Series Data and Models\n        ",
           "index":"1",
           "description":"\n    You will  investigate the nature of time series data and learn the basics of ARMA models that can explain the behavior of such data.  You will learn the basic R commands needed to help set up raw time series data to a form that can be analyzed using ARMA models.\n  ",
           "parts":[
              "First things first",
              "Data play",
              "Elements of time series",
              "Stationarity and  nonstationarity",
              "Differencing",
              "Detrending data",
              "Dealing with trend and heteroscedasticity",
              "Stationary time series: ARMA",
              "Simulating ARMA models"
           ]
        },
        {
           "title":"\n          Fitting ARMA models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will discover the wonderful world of ARMA models and how to fit these models to time series data. You will learn how to identify a model, how to choose the correct model, and how to verify a model once you fit it to data.  You will learn how to use R time series commands from the stats and astsa packages.\n  ",
           "parts":[
              "AR and MA models",
              "Fitting an AR(1) model",
              "Fitting an AR(2) model",
              "Fitting an MA(1) model",
              "AR and MA together",
              "Fitting an ARMA model",
              "Identify an ARMA model",
              "Model choice and  residual analysis",
              "Model choice - I",
              "Model choice - II",
              "Residual analysis - I",
              "Residual analysis - II",
              "ARMA get in"
           ]
        },
        {
           "title":"\n          ARIMA Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you know how to fit ARMA models to stationary time series, you will learn about integrated ARMA (ARIMA) models for nonstationary time series.  You will fit the models to real data using R time series commands from the stats and astsa packages.\n  ",
           "parts":[
              "ARIMA - integrated ARMA",
              "ARIMA - plug and play",
              "Simulated ARIMA",
              "Global warming",
              "ARIMA diagnostics",
              "Diagnostics - simulated overfitting",
              "Diagnostics - global temperatures",
              "Forecasting ARIMA",
              "Forecasting simulated ARIMA",
              "Forecasting global temperatures"
           ]
        },
        {
           "title":"\n          Seasonal ARIMA\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will learn how to fit and forecast seasonal time series data using seasonal ARIMA models. This is accomplished using what you learned in the previous chapters and by learning how to extend the R time series commands available in the stats and astsa packages.\n  ",
           "parts":[
              "Pure seasonal models",
              "P/ACF of pure seasonal models",
              "Fit a pure seasonal model",
              "Mixed seasonal models",
              "Fit a mixed seasonal model",
              "Data analysis - unemployment I",
              "Data analysis - unemployment II",
              "Data analysis - commodity prices",
              "Data analysis - birth rate",
              "Forecasting seasonal ARIMA",
              "Forecasting monthly unemployment",
              "How hard is it to forecast commodity prices?",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Time Series Analysis in R"
     ],
     "tracks":[
        "Quantitative Analyst with R",
        "Time Series with R"
     ]
  },
  {
     "title":"Case Studies: Manipulating Time Series Data in R",
     "description":"Strengthen your knowledge of the topics covered in Manipulating Time Series in R using real case study data.",
     "detailDescription":"In this course, you will strengthen your knowledge of time series topics through interactive exercises and interesting datasets. You’ll explore a variety of datasets about Boston, including data on flights, weather, economic trends, and local sports teams.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Flight Data\n        ",
           "index":"1",
           "description":"\n    You've been hired to understand the travel needs of tourists visiting the Boston area. As your first assignment on the job, you'll practice the  skills you've learned for time series data manipulation in R by exploring  data on flights arriving at Boston's Logan International Airport (BOS)  using xts & zoo.\n  ",
           "parts":[
              "Review xts fundamentals",
              "Identify the time series",
              "Flight data",
              "Pick out the xts object",
              "Encoding your flight data",
              "Manipulating and visualizing your data",
              "Exploring your flight data",
              "Visualize flight data",
              "Calculate time series trends",
              "Saving and exporting xts objects",
              "Assessing flight trends",
              "Saving time - I",
              "Saving time - II"
           ]
        },
        {
           "title":"\n          Weather Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll expand your time series data library to include weather data in the Boston area. Before you can conduct any analysis, you'll need to do some data manipulation, including merging multiple xts objects  and isolating certain periods of the data. It's a great opportunity for  more practice!\n  ",
           "parts":[
              "Merging time series data by row",
              "Exploring temperature data",
              "Next steps - I",
              "Merging using rbind()",
              "Visualizing Boston winters",
              "Merging time series data by column",
              "Subsetting and adjusting periodicity",
              "Generating a monthly average",
              "Using merge() and plotting over time",
              "Are flight delays related to temperature?",
              "Time series data workflow",
              "Next steps - II",
              "Expanding your data",
              "Are flight delays related to visibility or wind?"
           ]
        },
        {
           "title":"\n          Economic Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now it's time to go further afield. In addition to flight delays, your client is interested in how Boston's tourism industry is affected by economic trends. You'll need to manipulate some time series data on economic indicators,  including GDP per capita and unemployment in the United States in general and  Massachusetts (MA) in particular.\n  ",
           "parts":[
              "Handling missingness",
              "Exploring economic data",
              "Replace missing data - I",
              "Replace missing data - II",
              "Estimating missing GDP",
              "Lagging and differencing",
              "Exploring unemployment data",
              "Lagging unemployment",
              "Differencing unemployment",
              "Rolling functions",
              "Add a discrete rolling sum to GDP data",
              "Add a continuous rolling average to unemployment data",
              "Manipulating MA unemployment data"
           ]
        },
        {
           "title":"\n          Sports Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Having exhausted other options, your client now believes Boston's tourism industry must be related to the success of local sports teams. In your final task on this project, your supervisor has asked you to assemble some time series data on Boston's sports teams over the past few years.\n  ",
           "parts":[
              "Advanced features of xts",
              "Encoding and plotting Red Sox data",
              "Calculate a closing average",
              "Calculate and plot a seasonal average",
              "Calculate and plot a rolling average",
              "Indexing commands in xts",
              "Extract weekend games",
              "Calculate a rolling average across all sports",
              "Viewing sports trends",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating Time Series Data with xts and zoo in R"
     ],
     "tracks":[
        "Quantitative Analyst with R",
        "Time Series with R"
     ]
  },
  {
     "title":"Scalable Data Processing in R",
     "description":"Learn how to write scalable code for working with big data in R using the bigmemory and iotools packages.",
     "detailDescription":"Datasets are often larger than available RAM, which causes problems for R programmers since by default all the variables are stored in memory. You’ll learn tools for processing, exploring, and analyzing data directly from disk. You’ll also implement the split-apply-combine approach and learn how to write scalable code using the bigmemory and iotools packages. In this course, you'll make use of the Federal Housing Finance Agency's data, a publicly available data set chronicling all mortgages that were held or securitized by both Federal National Mortgage Association (Fannie Mae) and Federal Home Loan Mortgage Corporation (Freddie Mac) from 2009-2015.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Working with increasingly large data sets\n        ",
           "index":"1",
           "description":"\n    In this chapter, we cover the reasons you need to apply new techniques when data sets are larger than available RAM.  We show that importing and exporting data using the base R functions can be slow and some easy ways to remedy this. Finally, we introduce the bigmemory package. \n  ",
           "parts":[
              "What is Scalable Data Processing?",
              "Why is your code slow?",
              "How does processing time vary by data size?",
              "Working with \"Out-of-Core\" Objects using the Bigmemory Project",
              "Reading a big.matrix object",
              "Attaching a big.matrix object",
              "Creating tables with big.matrix objects",
              "Data summary using bigsummary",
              "References vs. Copies",
              "Copying matrices and big matrices"
           ]
        },
        {
           "title":"\n          Processing and Analyzing Data with bigmemory\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you've got some experience using bigmemory, we're going to go through some simple data exploration and analysis techniques. In particular, we'll see how to create tables and implement the split-apply-combine approach.\n  ",
           "parts":[
              "The Bigmemory Suite of Packages",
              "Tabulating using bigtable",
              "Borrower Race and Ethnicity by Year (I)",
              "Split-Apply-Combine",
              "Female Proportion Borrowing",
              "Split",
              "Apply",
              "Combine",
              "Visualize your results using the tidyverse",
              "Visualizing Female Proportion Borrowing",
              "The Borrower Income Ratio",
              "Tidy Big Tables",
              "Limitations of bigmemory",
              "Where should you use bigmemory?"
           ]
        },
        {
           "title":"\n          Working with iotools\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We'll use the iotools package that can process both numeric and string data, and introduce the concept of chunk-wise processing.\n\n  ",
           "parts":[
              "Introduction to chunk-wise processing",
              "Can you split-compute-combine it?",
              "Foldable operations (I)",
              "Foldable operations (II)",
              "A first look at iotools: Importing data",
              "Compare read.delim() and read.delim.raw()",
              "Reading raw data and turning it into a data structure",
              "chunk.apply",
              "Reading chunks in as a matrix",
              "Reading chunks in as a data.frame",
              "Parallelizing calls to chunk.apply"
           ]
        },
        {
           "title":"\n          Case Study: A Preliminary Analysis of the Housing Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapters, we've introduced the housing data and shown how to compute with data that is about as big, or bigger than, the amount of RAM on a single machine. In this chapter, we'll go through a preliminary analysis of the data, comparing various trends over time.\n  ",
           "parts":[
              "Overview of types of analysis for this chapter",
              "Race and Ethnic Representation in the Mortgage Data",
              "Comparing the Borrower Race/Ethnicity and their Proportions",
              "Are the data missing at random?",
              "Looking for Predictable Missingness",
              "A little more about missingness",
              "Analyzing the Housing Data",
              "Borrower Race and Ethnicity by Year (II)",
              "Visualizing the Adjusted Demographic Trends",
              "Relative change in demographic trend",
              "Borrower Lending Trends: City vs. Rural",
              "Borrower Region by Year",
              "Who is securing federally guaranteed loans?",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Writing Efficient R Code"
     ],
     "tracks":[
        "Big Data with R"
     ]
  },
  {
     "title":"Visualizing Time Series Data in R",
     "description":"Learn how to visualize time series in R, then practice with a stock-picking case study.",
     "detailDescription":"As the saying goes, “A chart is worth a thousand words”. This is why visualization is the most used and powerful way to get a better understanding of your data. After this course you will have a very good overview of R time series visualisation capabilities and you will be able to better decide which model to choose for subsequent analysis. You will be able to also convey the message you want to deliver in an efficient and beautiful way.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          R Time Series Visualization Tools\n        ",
           "index":"1",
           "description":"\n    This chapter will introduce you to basic R time series visualization tools.\n  ",
           "parts":[
              "Refresher on xts and  the plot() function Arnaud Amsellem The R Trader",
              "plot() function quiz",
              "plot() function - basic parameters",
              "plot() function - basic parameters (2)",
              "Control graphic parameters",
              "Graphic parameters quiz",
              "Other useful  visualizing functions",
              "Adding an extra series to an existing chart",
              "Highlighting events in a time series",
              "Highlighting a specific period in a time series",
              "A fancy stock chart",
              "A fancy stock chart (2)"
           ]
        },
        {
           "title":"\n          Univariate Time Series\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Univariate plots are designed to learn as much as possible about the distribution, central tendency and spread of the data at hand. In this chapter you will be presented with some visual tools used to diagnose univariate times series.\n  ",
           "parts":[
              "Univariate time series  analysis",
              "Representing a univariate time series",
              "Other visualization  tools",
              "Histogram of returns",
              "Box and whisker plot",
              "Autocorrelation",
              "q-q plot",
              "How to use everything  we learned so far?",
              "A comprehensive time series diagnostic",
              "A comprehensive time series diagnostic (2)",
              "Time Series quiz",
              "Stock quiz"
           ]
        },
        {
           "title":"\n          Multivariate Time Series\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    What to do if you have to deal with multivariate time series? In this chapter, you will learn how to identify patterns in the distribution, central tendency and spread over pairs or groups of data.\n  ",
           "parts":[
              "Dealing with higher dimensions",
              "Two time series grouped or stacked",
              "Visualizing bivariate relationships",
              "Multivariate time series",
              "Correlation matrix",
              "Scatterplots for multiple pairs of data",
              "Correlation plot",
              "Higher dimension time series",
              "Correlation matrix as heatmap",
              "Wrap up quiz"
           ]
        },
        {
           "title":"\n          Case study: Visually selecting a stock that improves your existing portfolio\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Let's put everything you learned so far in practice! Imagine you already own a portfolio of stocks and you have some spare cash to invest, how can you wisely select a new stock to invest your additional cash? Analyzing the statistical properties of individual stocks vs. an existing portfolio is a good way of approaching the problem.\n  ",
           "parts":[
              "Case study presentation",
              "Current portfolio description",
              "Existing portfolio quiz",
              "New stocks",
              "New stocks description",
              "New stocks description (2)",
              "Portfolio quiz",
              "Compare old and new portfolios",
              "A more accurate comparison of portfolios",
              "Wrap up quiz",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating Time Series Data with xts and zoo in R"
     ],
     "tracks":[
        "Quantitative Analyst with R",
        "Time Series with R"
     ]
  },
  {
     "title":"Writing Efficient R Code",
     "description":"Learn to write faster R code, discover benchmarking and profiling, and unlock the secrets of parallel programming.",
     "detailDescription":"The beauty of R is that it is built for performing data analysis. The downside is that sometimes R can be slow, thereby obstructing our analysis. For this reason, it is essential to become familiar with the main techniques for speeding up your analysis, so you can reduce computational time and get insights as quickly as possible.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The Art of Benchmarking\n        ",
           "index":"1",
           "description":"\n    In order to make your code go faster, you need to know how long it takes to run. This chapter introduces the idea of benchmarking your code.\n  ",
           "parts":[
              "Welcome!",
              "R version",
              "Benchmarking",
              "Comparing read times of CSV and RDS files",
              "Operational differences: \"<-\" and \"=\"",
              "Elapsed time",
              "Relative time",
              "How good is your machine?",
              "DataCamp hardware",
              "Benchmark DataCamp's machine"
           ]
        },
        {
           "title":"\n          Fine Tuning: Efficient Base R\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    R is flexible because you can often solve a single problem in many different ways. Some ways can be several orders of magnitude faster than the others. This chapter teaches you how to write fast base R code.\n  ",
           "parts":[
              "Memory allocation",
              "Why is this piece of code slow?",
              "Timings - growing a vector",
              "Timings - pre-allocation",
              "Importance of vectorizing your code",
              "Vectorized code: multiplication",
              "Vectorized code: calculating a log-sum",
              "Data frames and matrices",
              "Data frames vs matrices",
              "Data frames and matrices - column selection",
              "Selecting a row in a data frame",
              "Row timings"
           ]
        },
        {
           "title":"\n          Diagnosing Problems: Code Profiling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Profiling helps you locate the bottlenecks in your code. This chapter teaches you how to visualize the bottlenecks using the `profvis` package.\n  ",
           "parts":[
              "What is code profiling",
              "Profiling a function",
              "Where's the hold-up?",
              "Profvis in action",
              "Profvis: Larger example",
              "Change the data frame to a matrix",
              "Calculating row sums",
              "Use && instead of &",
              "Monopoly overview"
           ]
        },
        {
           "title":"\n          Turbo Charged Code: Parallel Programming\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Some problems can be solved faster using multiple cores on your machine. This chapter shows you how to write R code that runs in parallel.\n  ",
           "parts":[
              "CPUs - why do we have more than one",
              "How many cores does this machine have?",
              "What sort of problems benefit from parallel computing?",
              "Can this loop run in parallel (1)?",
              "Can this loop run in parallel (2)?",
              "The parallel package - parApply",
              "Moving to parallel programming",
              "Moving to parApply",
              "The parallel package - parSapply",
              "Using parSapply()",
              "Timings parSapply()",
              "You can write efficient R code!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "Big Data with R",
        "R Programmer",
        "R Programming"
     ]
  },
  {
     "title":"Introduction to R for Finance",
     "description":"Learn essential data structures such as lists and data frames and apply that knowledge directly to financial examples.",
     "detailDescription":"In this finance-oriented introduction to R, you will learn essential data structures such as lists and data frames and have the chance to apply that knowledge to real-world financial examples. By the end of the course, you will be comfortable with the basics of manipulating your data to perform financial analysis in R.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The Basics\n        ",
           "index":"1",
           "description":"\n    Get comfortable with the very basics of R and learn how to use it as a calculator. Also, create your first variables in R and explore some of the base data types such as numerics and characters.\n  ",
           "parts":[
              "Welcome to Introduction to R for Finance!",
              "Your first R script",
              "Arithmetic in R (1)",
              "Arithmetic in R (2)",
              "Assignment and variables (1)",
              "Assignment and variables (2)",
              "Financial returns",
              "Financial returns (1)",
              "Financial returns (2)",
              "Basic data types",
              "Data type exploration",
              "What's that data type?"
           ]
        },
        {
           "title":"\n          Vectors and Matrices\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn all about vectors and matrices using historical stock prices for companies like Apple and IBM. You will then be able to feel confident creating, naming, manipulating, and selecting from vectors and matrices.\n  ",
           "parts":[
              "What is a vector?",
              "c()ombine",
              "Coerce it",
              "Vector names()",
              "Visualize your vector",
              "Vector manipulation",
              "Weighted average (1)",
              "Weighted average (2)",
              "Weighted average (3)",
              "Vector subsetting",
              "Matrix - a 2D vector",
              "Create a matrix!",
              "Matrix <- bind vectors",
              "Visualize your matrix",
              "cor()relation",
              "Matrix subsetting"
           ]
        },
        {
           "title":"\n          Data Frames\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Arguably the most important data structure in R, the data frame is what most of your data will take the form of. It combines the structure of a matrix with the flexibility of having different types of data in each column.\n  ",
           "parts":[
              "What is a data frame?",
              "Create your first data.frame()",
              "What goes in a data frame?",
              "Making head()s and tail()s of your data with some str()ucture",
              "Naming your columns / rows",
              "Data frame manipulation",
              "Accessing and subsetting data frames (1)",
              "Accessing and subsetting data frames (2)",
              "Accessing and subsetting data frames (3)",
              "Adding new columns",
              "Present value",
              "Present value of projected cash flows (1)",
              "Present value of projected cash flows (2)"
           ]
        },
        {
           "title":"\n          Factors\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Questions with answers that fall into a limited number of categories can be classified as factors. In this chapter, you will use bond credit ratings to learn all about creating, ordering, and subsetting factors.\n  ",
           "parts":[
              "What is a factor?",
              "Create a factor",
              "Factor levels",
              "Factor summary",
              "Visualize your factor",
              "Bucketing a numeric variable into a factor",
              "Ordering and subsetting factors",
              "Create an ordered factor",
              "Subsetting a factor",
              "stringsAsFactors"
           ]
        },
        {
           "title":"\n          Lists\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Wouldn't it be nice if there was a way to hold related vectors, matrices, or data frames together in R? In this final chapter, you will explore lists and many of their interesting features by building a small portfolio of stocks.\n  ",
           "parts":[
              "What is a list?",
              "Create a list",
              "Named lists",
              "Access elements in a list",
              "Adding to a list",
              "Removing from a list",
              "A few list creating functions",
              "Split it",
              "Split-Apply-Combine",
              "Attributes",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Finance Fundamentals in R",
        "Quantitative Analyst with R"
     ]
  },
  {
     "title":"Object-Oriented Programming with S3 and R6 in R",
     "description":"Manage the complexity in your code using object-oriented programming with the S3 and R6 systems.",
     "detailDescription":"Object-oriented programming (OOP) lets you specify relationships between functions and the objects that they can act on, helping you manage complexity in your code. This is an intermediate level course, providing an introduction to OOP, using the S3 and R6 systems. S3 is a great day-to-day R programming tool that simplifies some of the functions that you write. R6 is especially useful for industry-specific analyses, working with web APIs, and building GUIs. The course concludes with an interview with Winston Chang, creator of the R6 package.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Object-Oriented Programming\n        ",
           "index":"1",
           "description":"\n    Learn what object-oriented programming (OOP) consists of, when to use it, and what OOP systems are available in R.  You'll also learn how R identifies different types of variable, using classes, types, and modes.\n  ",
           "parts":[
              "What is Object-Oriented Programming?",
              "Should I OOP?",
              "You've Already Been Working With Objects",
              "The Nine Systems",
              "Which Systems Should I Use?",
              "How does R Distinguish Variables?",
              "What's my type?",
              "Assigning Classes",
              "Make it Classy (1)",
              "Make it Classy (2)"
           ]
        },
        {
           "title":"\n          Using S3\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    S3 is a very simple object-oriented system that lets you define different behavior for functions, depending upon their input argument. This chapter explains how to use S3, and how generics and methods work.\n  ",
           "parts":[
              "Generics and Methods or Function Overload",
              "What's in a Name?",
              "Creating a Generic Function",
              "Creating an S3 Method (1)",
              "Creating an S3 method (2)",
              "Methodical Thinking",
              "Finding Available Methods (1)",
              "Finding Available Methods (2)",
              "Method Lookup for  Primitive Generics",
              "Method Lookup for Primitive Generics",
              "Who is Calling?",
              "Too Much Class",
              "Very Classy",
              "Writing the Next Method"
           ]
        },
        {
           "title":"\n          Using R6\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to define R6 classes, and to create R6 objects.  You'll also learn about the structure of R6 classes, and how to separate the user interface from the implementation details.\n  ",
           "parts":[
              "The Object Factory",
              "Specifying the Microwave Oven Class",
              "Making Microwave Ovens",
              "Hiding Complexity with Encapsulation",
              "Learning to Cook",
              "Close the Door",
              "First Thing's First",
              "Getting and Setting with Active Bindings",
              "Read the Rating",
              "Control the Power"
           ]
        },
        {
           "title":"\n          R6 Inheritance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to inherit from an R6 class, and how the relationship between parent and child classes works.\n  ",
           "parts":[
              "Propagating Functionality with Inheritance",
              "Specifying a Fancy Microwave Oven",
              "Who's the Daddy?",
              "Making a Fancy Microwave Oven",
              "Embrace, Extend, Override",
              "Extending the Cooking Capabilities",
              "Overriding the Cooking Capabilities",
              "Multiple Levels of Inheritance",
              "Exposing your Parent",
              "Over-Overriding the Cooking Capabilities",
              "Remembering Your Origins"
           ]
        },
        {
           "title":"\n          Advanced R6 Usage\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Complete your mastery of R6 by learning about advanced topics such as copying by reference, shared fields, cloning objects, and finalizing objects. The chapter concludes with an interview with Winston Chang, creator of the R6 package.\n  ",
           "parts":[
              "Environments, Reference Behavior, & Shared Fields",
              "Working with Environments (1)",
              "Working with Environments (2)",
              "Static Electricity",
              "Cloning R6 Objects",
              "Attack of the Clones (1)",
              "Attack of the Clones (2)",
              "Shut it Down",
              "The Final Countdown",
              "This is the End (of an R6 Object)",
              "Interview with Winston Chang"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Writing Functions in R"
     ],
     "tracks":[
        "R Programmer"
     ]
  },
  {
     "title":"Supervised Learning in R: Classification",
     "description":"In this course you will learn the basics of machine learning for classification.",
     "detailDescription":"This beginner-level introduction to machine learning covers four of the most common classification algorithms. You will come away with a basic understanding of how each algorithm approaches a learning task, as well as learn the R functions needed to apply these tools to your own work.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Chapter 1: k-Nearest Neighbors (kNN)\n        ",
           "index":"1",
           "description":"\n    As the kNN algorithm literally \"learns by example\" it is a case in point for starting to understand supervised machine learning. This chapter will introduce classification while working through the application of kNN to self-driving vehicle road sign recognition.\n  ",
           "parts":[
              "Classification with Nearest Neighbors",
              "Recognizing a road sign with kNN",
              "Thinking like kNN",
              "Exploring the traffic sign dataset",
              "Classifying a collection of road signs",
              "What about the 'k' in kNN?",
              "Understanding the impact of 'k'",
              "Testing other 'k' values",
              "Seeing how the neighbors voted",
              "Data preparation for kNN",
              "Why normalize data?"
           ]
        },
        {
           "title":"\n          Chapter 2: Naive Bayes\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Naive Bayes uses principles from the field of statistics to make predictions. This chapter will introduce the basics of Bayesian methods while exploring how to apply these techniques to iPhone-like destination suggestions.\n  ",
           "parts":[
              "Understanding Bayesian methods",
              "Computing probabilities",
              "Understanding dependent events",
              "A simple Naive Bayes location model",
              "Examining \"raw\" probabilities",
              "Understanding independence",
              "Understanding NB's \"naivety\"",
              "Who are you calling naive?",
              "A more sophisticated location model",
              "Preparing for unforeseen circumstances",
              "Understanding the Laplace correction",
              "Applying Naive Bayes to other problems",
              "Handling numeric predictors"
           ]
        },
        {
           "title":"\n          Chapter 3: Logistic Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Logistic regression involves fitting a curve to numeric data to make predictions about binary events. Arguably one of the most widely used machine learning methods, this chapter will provide an overview of the technique while illustrating how to apply it to fundraising data.\n  ",
           "parts":[
              "Making binary predictions with regression",
              "Building simple logistic regression models",
              "Making a binary prediction",
              "The limitations of accuracy",
              "Model performance tradeoffs",
              "Calculating ROC Curves and AUC",
              "Comparing ROC curves",
              "Dummy variables, missing data, and interactions",
              "Coding categorical features",
              "Handling missing data",
              "Understanding missing value indicators",
              "Building a more sophisticated model",
              "Automatic feature selection",
              "The dangers of stepwise regression",
              "Building a stepwise regression model"
           ]
        },
        {
           "title":"\n          Chapter 4: Classification Trees\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Classification trees use flowchart-like structures to make decisions. Because humans can readily understand these tree structures, classification trees are useful when transparency is needed, such as in loan approval. We'll use the Lending Club dataset to simulate this scenario.\n  ",
           "parts":[
              "Making decisions with trees",
              "Building a simple decision tree",
              "Visualizing classification trees",
              "Understanding the tree's decisions",
              "Growing larger classification trees",
              "Why do some branches split?",
              "Creating random test datasets",
              "Building and evaluating a larger tree",
              "Conducting a fair performance evaluation",
              "Tending to classification trees",
              "Preventing overgrown trees",
              "Creating a nicely pruned tree",
              "Why do trees benefit from pruning?",
              "Seeing the forest from the trees",
              "Understanding random forests",
              "Building a random forest model"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "Data Scientist with R",
        "Machine Learning Fundamentals in R",
        "Machine Learning Scientist with R"
     ]
  },
  {
     "title":"Intermediate R for Finance",
     "description":"Learn about how dates work in R, and explore the world of if statements, loops, and functions using financial examples.",
     "detailDescription":"If you enjoyed the Introduction to R for Finance course, then you will love Intermediate R for Finance. Here, you will first learn the basics about how dates work in R, an important skill for the rest of the course. Your next step will be to explore the world of if statements, loops, and functions. These are powerful ideas that are essential to any financial data scientist's toolkit. Finally, we will spend some time working with the family of apply functions as a vectorized alternative to loops. And of course, all examples will be finance related! Enjoy!",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Dates\n        ",
           "index":"1",
           "description":"\n    Welcome! Before we go deeper into the world of R, it will be nice to have an understanding of how dates and times are created. This chapter will teach you enough to begin working with dates, but only scratches the surface of what you can do with them.\n  ",
           "parts":[
              "An introduction to  dates in R",
              "What day is it?",
              "From char to date",
              "Many dates",
              "Date formats and  extractor functions",
              "Date formats (1)",
              "Date formats (2)",
              "Subtraction of dates",
              "months() and weekdays() and quarters(), oh my!"
           ]
        },
        {
           "title":"\n          If Statements and Operators\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Imagine you own stock in a company. If the stock goes above a certain price, you might want to sell. If the stock drops below a certain price, you might want to buy it while it's cheap! This kind of thinking can be implemented using operators and if statements. In this chapter, you will learn all about them, and create a program that tells you to buy or sell a stock.\n  ",
           "parts":[
              "Relational operators",
              "Relational practice",
              "Vectorized operations",
              "Logical operators",
              "And / Or",
              "Not!",
              "Logicals and subset()",
              "All together now!",
              "If statements",
              "If this",
              "If this, Else that",
              "If this, Else If that, Else that other thing",
              "Can you If inside an If?",
              "ifelse()"
           ]
        },
        {
           "title":"\n          Loops\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Loops can be useful for doing the same operation to each element of your data structure. In this chapter you will learn all about repeat, while, and for loops!\n  ",
           "parts":[
              "Repeat loops",
              "Repeat, repeat, repeat",
              "When to break?",
              "While loops",
              "While with a print",
              "While with a plot",
              "Break it",
              "For loops",
              "Loop over a vector",
              "Loop over data frame rows",
              "Loop over matrix elements",
              "Break and next"
           ]
        },
        {
           "title":"\n          Functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    If data structures like data frames and vectors are how you hold your data, functions are how you tell R what to do with your data. In this chapter, you will learn about using built-in functions, creating your own unique functions, and you will finish off with a brief introduction to packages.\n  ",
           "parts":[
              "What are functions?",
              "Function help and documentation",
              "Optional arguments",
              "Functions in functions",
              "Writing functions",
              "Your first function",
              "Multiple arguments (1)",
              "Multiple arguments (2)",
              "Function scope (1)",
              "Function scope (2)",
              "Packages",
              "tidyquant package"
           ]
        },
        {
           "title":"\n          Apply\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A popular alternative to loops in R are the apply functions. These are often more readable than loops, and are incredibly useful for scaling the data science workflow to perform a complicated calculation on any number of observations. Learn about them here!\n  ",
           "parts":[
              "Why use apply?",
              "lapply() on a list",
              "lapply() on a data frame",
              "FUN arguments",
              "sapply() - simplify it!",
              "sapply() VS lapply()",
              "Failing to simplify",
              "vapply() - specify  your output!",
              "vapply() VS sapply()",
              "More vapply()",
              "Anonymous functions",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R for Finance"
     ],
     "tracks":[
        "Finance Fundamentals in R",
        "Quantitative Analyst with R"
     ]
  },
  {
     "title":"Working with Web Data in R",
     "description":"Learn how to efficiently import data from the web into R.",
     "detailDescription":"Most of the useful data in the world, from economic data to news content to geographic information, lives somewhere on the internet - and this course will teach you how to access it. You'll explore how to work with APIs (computer-readable interfaces to websites), access data from Wikipedia and other sources, and build your own simple API client. For those occasions where APIs are not available, you'll find out how to use R to scrape information out of web pages. In the process you'll learn how to get data out of even the most stubborn website, and how to turn it into a format ready for further analysis. The packages you'll use and learn your way around are rvest, httr, xml2 and jsonlite, along with particular API client packages like WikipediR and pageviews.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Downloading Files and Using API Clients\n        ",
           "index":"1",
           "description":"\n    Sometimes getting data off the internet is very, very simple - it's stored in a format that R can handle and just lives on a server somewhere, or it's in a more complex format and perhaps part of an API but there's an R package designed to make using it a piece of cake. This chapter will explore how to download and read in static files, and how to use APIs when pre-existing clients are available.\n  ",
           "parts":[
              "Introduction: Working With Web Data in R",
              "Downloading files and reading them into R",
              "Saving raw files to disk",
              "Saving formatted files to disk",
              "Understanding Application Programming Interfaces",
              "API test",
              "Using API clients",
              "Access tokens and APIs",
              "Using access tokens"
           ]
        },
        {
           "title":"\n          Using httr to interact with APIs directly\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    If an API client doesn't exist, it's up to you to communicate directly with the API. But don't worry, the package `httr` makes this really straightforward. In this chapter you'll learn how to make web requests from R, how to examine the responses you get back and some best practices for doing this in a responsible way.\n  ",
           "parts":[
              "GET and POST requests in theory",
              "GET requests in practice",
              "POST requests in practice",
              "Extracting the response",
              "Multiple Choice: GET and POST requests",
              "Graceful httr",
              "Handling http failures",
              "Constructing queries (Part I)",
              "Constructing queries (Part II)",
              "Respectful API usage",
              "Using user agents",
              "Rate-limiting",
              "Tying it all together"
           ]
        },
        {
           "title":"\n          Handling JSON and XML\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Sometimes data is a TSV or nice plaintext output. Sometimes it's XML and/or JSON. This chapter walks you through what JSON and XML are, how to convert them into R-like objects, and how to extract data from them. You'll practice by examining the revision history for a Wikipedia article retrieved from the Wikipedia API using httr, xml2 and jsonlite.\n  ",
           "parts":[
              "JSON",
              "Can you spot JSON?",
              "Parsing JSON",
              "Manipulating JSON",
              "Manipulating parsed JSON",
              "Reformatting JSON",
              "XML structure",
              "Do you understand XML structure?",
              "Examining XML documents",
              "XPATHs",
              "Extracting XML data",
              "Extracting XML attributes",
              "Wrapup: returning nice API output"
           ]
        },
        {
           "title":"\n          Web scraping with XPATHs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that we've covered the low-hanging fruit (\"it has an API, and a client\", \"it has an API\") it's time to talk about what to do when a website doesn't have any access mechanisms at all - when you have to rely on web scraping. This chapter will introduce you to the rvest web-scraping package, and  build on your previous knowledge of XML manipulation and XPATHs.\n  ",
           "parts":[
              "Web scraping 101",
              "Reading HTML",
              "Extracting nodes by XPATH",
              "HTML structure",
              "Extracting names",
              "Extracting values",
              "Test: HTML reading and extraction",
              "Reformatting Data",
              "Extracting tables",
              "Cleaning a data frame"
           ]
        },
        {
           "title":"\n          CSS Web Scraping and Final Case Study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    CSS path-based web scraping is a far-more-pleasant alternative to using XPATHs.  You'll start this chapter by learning about CSS, and how to leverage it for web scraping.   Then, you'll work through a final case study that combines everything you've learnt so  far to write a function that queries an API, parses the response and returns data in a nice form.\n  ",
           "parts":[
              "CSS web scraping in theory",
              "Using CSS to scrape nodes",
              "Scraping names",
              "Scraping text",
              "Test: CSS web scraping",
              "Final case study: Introduction",
              "API calls",
              "Extracting information",
              "Normalising information",
              "Reproducibility",
              "Wrap Up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "R Programmer"
     ]
  },
  {
     "title":"Tree-Based Models in R",
     "description":"In this course, you'll learn how to use tree-based models and ensembles for regression and classification.",
     "detailDescription":"In this course you'll learn how to work with tree-based models in R. This course covers everything from using a single tree for regression or classification to more advanced ensemble methods. You'll learn to implement bagged trees, Random Forests, and boosted trees using the Gradient Boosting Machine, or GBM. These powerful techinques will allow you to create high performance regression and classification models for your data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Classification Trees\n        ",
           "index":"1",
           "description":"\n    This chapter covers supervised machine learning with classification trees.\n  ",
           "parts":[
              "Welcome to the course!",
              "Build a classification tree",
              "Introduction to classification trees",
              "Advantages of tree-based methods",
              "Prediction with a classification tree",
              "Overview of the modeling process",
              "Train/test split",
              "Train a classification tree model",
              "Evaluating classification model performance",
              "Compute confusion matrix",
              "Splitting criterion in trees",
              "Compare models with a different splitting criterion"
           ]
        },
        {
           "title":"\n          Regression Trees\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn how to use a single tree for regression, instead of classification.\n  ",
           "parts":[
              "Introduction to regression trees",
              "Classification vs. regression",
              "Split the data",
              "Train a regression tree model",
              "Performance metrics for regression",
              "Evaluate a regression tree model",
              "What are the hyperparameters for a decision tree",
              "Tuning the model",
              "Grid search for model selection",
              "Generate a grid of hyperparameter values",
              "Generate a grid of models",
              "Evaluate the grid"
           ]
        },
        {
           "title":"\n          Bagged Trees\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about Bagged Trees, an ensemble method, that uses a combination of trees (instead of only one).\n  ",
           "parts":[
              "Introduction to bagged trees",
              "Advantages of bagged trees",
              "Train a bagged tree model",
              "Evaluating the bagged tree performance",
              "Prediction and confusion matrix",
              "Predict on a test set and compute AUC",
              "Using caret for cross-validating models",
              "Cross-validate a bagged tree model in caret",
              "Generate predictions from the caret model",
              "Compare test set performance to CV performance"
           ]
        },
        {
           "title":"\n          Random Forests\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about the Random Forest algorithm, another tree-based ensemble method.  Random Forest is a modified version of bagged trees with better performance. Here you'll learn how to train, tune and evaluate Random Forest models in R.\n  ",
           "parts":[
              "Introduction to Random Forest",
              "Bagged trees vs. Random Forest",
              "Train a Random Forest model",
              "Understanding Random Forest model output",
              "Evaluate out-of-bag error",
              "Evaluate model performance on a test set",
              "OOB error vs. test set error",
              "Advantage of OOB error",
              "Evaluate test set AUC",
              "Tuning a Random Forest model",
              "Tuning a Random Forest via  mtry",
              "Tuning a Random Forest via tree depth"
           ]
        },
        {
           "title":"\n          Boosted Trees\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will see the boosting methodology with a focus on the Gradient Boosting Machine (GBM) algorithm, another popular tree-based ensemble method. Here you'll learn how to train, tune and evaluate GBM models in R.\n\n  ",
           "parts":[
              "Introduction to boosting",
              "Bagged trees vs. boosted trees",
              "Train a GBM model",
              "Understanding GBM model output",
              "Prediction using a GBM model",
              "Evaluate test set AUC",
              "GBM hyperparameters",
              "Early stopping in GBMs",
              "OOB vs CV-based early stopping",
              "Model comparison via ROC Curve & AUC",
              "Compare all models based on AUC",
              "Plot & compare ROC curves"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[
        "Machine Learning Scientist with R",
        "Supervised Machine Learning in R"
     ]
  },
  {
     "title":"Data Visualization with lattice in R",
     "description":"Learn to visualize multivariate datasets using lattice graphics.",
     "detailDescription":"Visualization is an essential component of interactive data analysis in R. Traditional (base) graphics is powerful, but limited in its ability to deal with multivariate data. Trellis graphics is the natural successor to traditional graphics, extending its simple philosophy to gracefully handle common multivariable data visualization tasks. This course introduces the lattice package, which implements Trellis graphics for R, and illustrates its basic use.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basic plotting with lattice\n        ",
           "index":"1",
           "description":"\n    Introduction to some basic plotting functions in lattice. Draw histograms, scatter plots, density plots, and box and whisker plots.\n  ",
           "parts":[
              "Introduction",
              "Formula interface in histogram() and xyplot()",
              "Create a histogram",
              "Create a scatterplot",
              "Differences between base R graphics and lattice histogram",
              "Optional arguments",
              "Y-axis value in histogram()",
              "Labels",
              "Density plots",
              "Box and whisker plots and reordering levels",
              "Box and whisker plot",
              "Whisker extents and outliers"
           ]
        },
        {
           "title":"\n          Conditioning and the formula interface\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    These exercises will teach you to create \"conditioned\" plots  consisting of multiple panels using the formula interface.\n  ",
           "parts":[
              "Conditioning",
              "A conditioned plot of the airquality dataset",
              "Conditioning in density plots",
              "Data summary and transformation, grouping",
              "Superposition in density plots",
              "Enhancing the legend",
              "Incorporating external data sources",
              "Conditioned scatter plot",
              "The as.table argument",
              "Custom strips labels for box and whisker plots",
              "The trellis object",
              "Modifying strip labels",
              "Matrix-like subsetting"
           ]
        },
        {
           "title":"\n          Controlling scales and graphical parameters\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to control and customize axis limits and visual appearance.\n  ",
           "parts":[
              "Combining scales",
              "Explicit limits",
              "Per-panel explicit limits",
              "Customizing axis annotation",
              "Logarithmic scales",
              "Annotating logarithmic scales",
              "Finding patterns by sex",
              "Log scales in economic data",
              "Graphical parameters",
              "ggplot2 styling with par.settings",
              "Changing graphical parameters in histogram",
              "Changing plotting characters",
              "Using simpleTheme()",
              "Changing plotting characters revisited",
              "Changing parameters in grouped density plot"
           ]
        },
        {
           "title":"\n          Customizing plots using panel functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn to use panel and prepanel functions to enhance existing displays or create new ones.\n  ",
           "parts":[
              "Panel Functions",
              "Scatter plot with rugs",
              "Alternative panel function - panel.violin()",
              "Alternative panel functions - panel.smoothScatter()",
              "Prepanel Functions to control limits",
              "Prepanel functions with scales",
              "Optional arguments of default panel functions",
              "Interaction plot of residuals",
              "Optional arguments of panel.bwplot()",
              "Using emojis as plotting symbols"
           ]
        },
        {
           "title":"\n          Extensions and the lattice ecosystem\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The lattice package is not just meant to be used as a standalone collection of plotting functions. Rather, it is a framework that is used as a base by many other packages. Some of these are very specialized and beyond the scope of this course. Here we give a brief survey of extensions that are generally useful to enhance displays or create new ones.\n  ",
           "parts":[
              "New methods",
              "The xyplot() method for time series objects",
              "The xyplot() method with panel.horizonplot()",
              "New high-level functions",
              "Map projections",
              "Confidence bands using the segplot() function",
              "Hexagonal binning of bivariate data",
              "Manipulation of trellis objects",
              "The directlabels package",
              "Adding ggplot2-style layers"
           ]
        }
     ],
     "prerequistes":[
        "Data Visualization in R"
     ],
     "tracks":[
        "Data Visualization with R"
     ]
  },
  {
     "title":"String Manipulation with stringr in R",
     "description":"Learn how to pull character strings apart, put them back together and use the stringr package.",
     "detailDescription":"Character strings can turn up in all stages of a data science project. You might have to clean messy string input before analysis, extract data that is embedded in text or automatically turn numeric results into a sentence to include in a report. Perhaps the strings themselves are the data of interest, and you need to detect and match patterns within them. This course will help you master these tasks by teaching you how to pull strings apart, put them back together and use stringr to detect, extract, match and split strings using regular expressions, a powerful way to express patterns.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          String basics\n        ",
           "index":"1",
           "description":"\n    You'll start with some basics: how to enter strings in R, how to control how numbers are transformed to strings, and finally how to combine strings together to produce output that combines text and nicely formatted numbers.\n  ",
           "parts":[
              "Welcome!",
              "Quotes",
              "What you see isn't always what you have",
              "Escape sequences",
              "Turning numbers into strings",
              "Using format() with numbers",
              "Controlling other aspects of the string",
              "formatC()",
              "Putting strings together",
              "Annotation of numbers",
              "A very simple table",
              "Let's order pizza!"
           ]
        },
        {
           "title":"\n          Introduction to stringr\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Time to meet stringr! You'll start by learning about some stringr functions that are very similar to some base R functions, then how to detect specific patterns in strings, how to split strings apart and how to find and replace parts of strings.\n  ",
           "parts":[
              "Introducing stringr",
              "Putting strings together with stringr",
              "String length",
              "Extracting substrings",
              "Hunting for matches",
              "Detecting matches",
              "Subsetting strings based on match",
              "Counting matches",
              "Splitting strings",
              "Parsing strings into variables",
              "Some simple text statistics",
              "Replacing matches in strings",
              "Replacing to tidy strings",
              "Review",
              "Final challenges"
           ]
        },
        {
           "title":"\n          Pattern matching with regular expressions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn about regular expressions, a language for describing patterns in strings.  By combining regular expressions with the stringr functions you'll greatly increase your power to manipulate strings.\n  ",
           "parts":[
              "Regular expressions",
              "Matching the start or end of the string",
              "Matching any character",
              "Combining with stringr functions",
              "More regular expressions",
              "Alternation",
              "Character classes",
              "Repetition",
              "Shortcuts",
              "Hunting for phone numbers",
              "Extracting age and gender from accident narratives",
              "Parsing age and gender into pieces"
           ]
        },
        {
           "title":"\n          More advanced matching and manipulation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now for two advanced ways to use regular expressions along with stringr: selecting parts of a match (a.k.a capturing) and referring back to parts of a match (a.k.a back-referencing).  You'll also learn to deal with and strings or patterns that contain Unicode characters (e.g. é).\n  ",
           "parts":[
              "Capturing",
              "Capturing parts of a pattern",
              "Pulling out parts of a phone number",
              "Extracting age and gender again",
              "Backreferences",
              "Using backreferences in patterns",
              "Replacing with regular expressions",
              "Replacing with backreferences",
              "Unicode and pattern matching",
              "Matching a specific code point or code groups",
              "Matching a single grapheme"
           ]
        },
        {
           "title":"\n          Case studies\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Practice your string manipulation skills on a couple of case studies.  You'll also learn a few new skills, reading strings into R and handling problems of case (e.g. A versus a).\n  ",
           "parts":[
              "Case study",
              "Getting the play into R",
              "Identifying the lines, take 1",
              "Identifying the lines, take 2",
              "A case study on case",
              "Changing case to ease matching",
              "Ignoring case when matching",
              "Fixing case problems",
              "Wrapping up",
              "An interview with Hadley Wickham"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "R Programmer",
        "Text Mining with R"
     ]
  },
  {
     "title":"Inference for Linear Regression in R",
     "description":"In this course you'll learn how to perform inference using linear models.",
     "detailDescription":"Previously, you learned the fundamentals of both statistical inference and linear models; now, the next step is to put them together. This course gives you a chance to think about how different samples can produce different linear models, where your goal is to understand the underlying population model. From the estimated linear model, you will learn how to create interval estimates for the effect size as well as how to determine if the effect is significant. Prediction intervals for the response variable will be contrasted with estimates of the average response. Throughout the course, you'll gain more practice with the dplyr and ggplot2 packages, and you will learn about the broom package for tidying models; all three packages are invaluable in data science.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Inferential ideas\n        ",
           "index":"1",
           "description":"\n    In the first chapter, you will understand how and why to perform inferential (instead of descriptive only) analysis on a regression model.\n  ",
           "parts":[
              "Variability in regression lines",
              "Regression output: example I",
              "First random sample, second random sample",
              "Superimpose lines",
              "Research question",
              "Regression hypothesis",
              "Variability of coefficients",
              "Original population - change sample size",
              "Hypothetical population - less variability around the line",
              "Hypothetical population - less variability in x direction",
              "What changes the variability of the coefficients?"
           ]
        },
        {
           "title":"\n          Simulation-based inference for the slope parameter\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn about the ideas of the sampling distribution using simulation methods for regression models.\n  ",
           "parts":[
              "Simulation-based Inference",
              "Null sampling distribution of the slope",
              "SE of the slope",
              "p-value",
              "Inference on slope",
              "Simulation-based CI for slope",
              "Bootstrapping the data",
              "SE method - bootstrap CI for slope",
              "Percentile method - bootstrap CI for slope",
              "Inference from randomization and bootstrapped distributions"
           ]
        },
        {
           "title":"\n          t-Based Inference For the Slope Parameter\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn about how to use the t-distribution to perform inference in linear regression models. You will also learn about how to create prediction intervals for the response variable.\n  ",
           "parts":[
              "Mathematical approximation",
              "How do the theoretical results play a role?",
              "t-statistic",
              "Working with R-output (1)",
              "Working with R-output (2)",
              "Comparing randomization inference and t-inference",
              "Intervals in regression",
              "CI using t-theory",
              "Comparing randomization CIs and t-based CIs",
              "Different types of Intervals",
              "Confidence intervals for the average response at specific values",
              "Confidence intervals for the average response for all observations",
              "Prediction intervals for the individual response"
           ]
        },
        {
           "title":"\n          Technical Conditions in linear regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Additionally, you will consider the technical conditions that are important when using linear models to make claims about a larger population.\n  ",
           "parts":[
              "Technical conditions for linear regression",
              "Violation of LINE conditions (1)",
              "Violation of LINE conditions (2)",
              "Using residuals (1)",
              "Using residuals (2)",
              "Why do we need the LINE assumptions?",
              "Effect of an outlier",
              "Estimation with and without outlier",
              "Inference with and without outlier (t-test)",
              "Inference with and without outlier (randomization)",
              "Moving forward when model assumptions are violated",
              "Adjusting for non-linear relationship",
              "Adjusting for non-constant errors",
              "Adjusting for non-normal errors"
           ]
        },
        {
           "title":"\n          Building on Inference in Simple Linear Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter covers topics that build on the basic ideas of inference in linear models, including multicollinearity and inference for multiple regression models.\n  ",
           "parts":[
              "Inference on transformed variables",
              "Transformed model",
              "Interpreting transformed coefficients",
              "Multicollinearity",
              "LA Homes, multicollinearity (1)",
              "LA Homes, multicollinearity (2)",
              "LA Homes, multicollinearity (3)",
              "Multiple linear regression",
              "Inference on coefficients",
              "Interpreting coefficients",
              "Summary"
           ]
        }
     ],
     "prerequistes":[
        "Foundations of Inference",
        "Multiple and Logistic Regression in R"
     ],
     "tracks":[
        "Statistical Inference with R"
     ]
  },
  {
     "title":"Forecasting in R",
     "description":"Learn how to make predictions about the future using time series forecasting in R.",
     "detailDescription":"Forecasting involves making predictions about the future. It is required in many situations: deciding whether to build another power generation plant in the next ten years requires forecasts of future demand; scheduling staff in a call centre next week requires forecasts of call volumes; stocking an inventory requires forecasts of stock requirements. Forecasts can be required several years in advance (for the case of capital investments), or only a few minutes beforehand (for telecommunication routing). Whatever the circumstances or time horizons involved, forecasting is an important aid to effective and efficient planning. This course provides an introduction to time series forecasting using R.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Exploring and visualizing time series in R\n        ",
           "index":"1",
           "description":"\n    The first thing to do in any data analysis task is to plot the data. Graphs enable many features of the data to be visualized, including patterns, unusual observations, and changes over time. The features that are seen in plots of the data must then be incorporated, as far as possible, into the forecasting methods to be used.\n  ",
           "parts":[
              "Welcome to  Forecasting Using R",
              "Creating time series objects in R",
              "Time series plots",
              "Seasonal plots",
              "Trends, seasonality,  and cyclicity",
              "Autocorrelation of non-seasonal time series",
              "Autocorrelation of seasonal and cyclic time series",
              "Match the ACF to the time series",
              "White noise",
              "Stock prices and white noise"
           ]
        },
        {
           "title":"\n          Benchmark methods and forecast accuracy\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn general tools that are useful for many different forecasting situations. It will describe some methods for benchmark forecasting, methods for checking whether a forecasting method has adequately utilized the available information, and methods for measuring forecast accuracy. Each of the tools discussed in this chapter will be used repeatedly in subsequent chapters as you develop and explore a range of forecasting methods.\n  ",
           "parts":[
              "Forecasts and  potential futures",
              "Naive forecasting methods",
              "Fitted values  and residuals",
              "Checking time series residuals",
              "Training and  test sets",
              "Evaluating forecast accuracy of non-seasonal methods",
              "Evaluating forecast accuracy of seasonal methods",
              "Do I have a good forecasting model?",
              "Time series  cross-validation",
              "Using tsCV() for time series cross-validation"
           ]
        },
        {
           "title":"\n          Exponential smoothing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Forecasts produced using exponential smoothing methods are weighted averages of past observations, with the weights decaying exponentially as the observations get older. In other words, the more recent the observation, the higher the associated weight. This framework generates reliable forecasts quickly and for a wide range of time series, which is a great advantage and of major importance to applications in business.\n  ",
           "parts":[
              "Exponentially  weighted forecasts",
              "Simple exponential smoothing",
              "SES vs naive",
              "Exponential smoothing  methods with trend",
              "Holt's trend methods",
              "Exponential smoothing  methods with  trend and seasonality",
              "Holt-Winters with monthly data",
              "Holt-Winters method with daily data",
              "State space models for exponential smoothing",
              "Automatic forecasting with exponential smoothing",
              "ETS vs seasonal naive",
              "Match the models to the time series",
              "When does ETS fail?"
           ]
        },
        {
           "title":"\n          Forecasting with ARIMA models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    ARIMA models provide another approach to time series forecasting. Exponential smoothing and ARIMA models are the two most widely-used approaches to time series forecasting, and provide complementary approaches to the problem. While exponential smoothing models are based on a description of the trend and seasonality in the data, ARIMA models aim to describe the autocorrelations in the data.\n  ",
           "parts":[
              "Transformations for  variance stabilization",
              "Box-Cox transformations for time series",
              "Non-seasonal differencing for stationarity",
              "Seasonal differencing for stationarity",
              "ARIMA models",
              "Automatic ARIMA models for non-seasonal time series",
              "Forecasting with ARIMA models",
              "Comparing auto.arima() and ets() on non-seasonal data",
              "Seasonal  ARIMA models",
              "Automatic ARIMA models for seasonal time series",
              "Exploring auto.arima() options",
              "Comparing auto.arima() and ets() on seasonal data"
           ]
        },
        {
           "title":"\n          Advanced methods\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The time series models in the previous chapters work well for many time series, but they are often not good for weekly or hourly data, and they do not allow for the inclusion of other information such as the effects of holidays, competitor activity, changes in the law, etc. In this chapter, you will look at some methods that handle more complicated seasonality, and you consider how to extend ARIMA models in order to allow other information to be included in the them.\n  ",
           "parts":[
              "Dynamic  regression",
              "Forecasting sales allowing for advertising expenditure",
              "Forecasting electricity demand",
              "Dynamic harmonic  regression",
              "Forecasting weekly data",
              "Harmonic regression for multiple seasonality",
              "Forecasting call bookings",
              "TBATS models",
              "TBATS models for electricity demand",
              "Your future in  forecasting!"
           ]
        }
     ],
     "prerequistes":[
        "Time Series Analysis in R"
     ],
     "tracks":[
        "Quantitative Analyst with R",
        "Time Series with R"
     ]
  },
  {
     "title":"Introduction to Spark with sparklyr in R",
     "description":"Learn how to analyze huge datasets using Apache Spark and R using the sparklyr package.",
     "detailDescription":"R is mostly optimized to help you write data analysis code quickly and readably. Apache Spark is designed to analyze huge datasets quickly. The sparklyr package lets you write dplyr R code that runs on a Spark cluster, giving you the best of both worlds. This course teaches you how to manipulate Spark DataFrames using both the dplyr interface and the native interface to Spark, as well as trying machine learning techniques. Throughout the course, you'll explore the Million Song Dataset.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Light My Fire: Starting To Use Spark With dplyr Syntax\n        ",
           "index":"1",
           "description":"\n    In which you learn how Spark and R complement each other, how to get data to and from Spark, and how to manipulate Spark data frames using dplyr syntax.\n  ",
           "parts":[
              "Getting started",
              "Made for each other",
              "Here be dragons",
              "The connect-work-disconnect pattern",
              "Copying data into Spark",
              "Big data, tiny tibble",
              "Exploring the structure of tibbles",
              "Selecting columns",
              "Filtering rows",
              "Arranging rows",
              "Mutating columns",
              "Summarizing columns"
           ]
        },
        {
           "title":"\n          Tools of the Trade: Advanced dplyr Usage\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In which you learn more about using the dplyr interface to Spark, including advanced field selection, calculating groupwise statistics, and joining data frames.\n  ",
           "parts":[
              "Leveling up",
              "Mother's little helper (1)",
              "Mother's little helper (2)",
              "Selecting unique rows",
              "Common people",
              "Collecting data back from Spark",
              "Storing intermediate results",
              "Groups: great for music, great for data",
              "Groups of mutants",
              "Advanced Selection II: The SQL",
              "Left joins",
              "Anti joins",
              "Semi joins"
           ]
        },
        {
           "title":"\n          Going Native: Use The Native Interface to Manipulate Spark DataFrames\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In which you learn about Spark's machine learning data transformation features, and functionality for manipulating native DataFrames.\n  ",
           "parts":[
              "Two new interfaces",
              "Popcorn double feature",
              "Transforming continuous variables to logical",
              "Transforming continuous variables into categorical (1)",
              "Transforming continuous variables into categorical (2)",
              "More than words: tokenization (1)",
              "More than words: tokenization (2)",
              "More than words: tokenization (3)",
              "Sorting vs. arranging",
              "Exploring Spark data types",
              "Shrinking the data by sampling",
              "Training/testing partitions"
           ]
        },
        {
           "title":"\n          Case Study: Learning to be a Machine: Running Machine Learning Models on Spark\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A case study in which you learn to use sparklyr's machine learning routines, by predicting the year in which a song was released.\n  ",
           "parts":[
              "Machine learning on Spark",
              "Machine learning functions",
              "(Hey you) What's that sound?",
              "Working with parquet files",
              "Come together",
              "Partitioning data with a group effect",
              "Gradient boosted trees: modeling",
              "Gradient boosted trees: prediction",
              "Gradient boosted trees: visualization",
              "Random Forest: modeling",
              "Random Forest: prediction",
              "Random Forest: visualization",
              "Comparing model performance"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "Big Data with R",
        "Machine Learning Scientist with R"
     ]
  },
  {
     "title":"Quantitative Risk Management in R",
     "description":"Work with risk-factor return series, study their empirical properties, and make estimates of value-at-risk.",
     "detailDescription":"In Quantitative Risk Management (QRM), you will build models to understand the risks of financial portfolios. This is a vital task across the banking, insurance and asset management industries. The first step in the model building process is to collect data on the underlying risk factors that affect portfolio value and analyze their behavior. In this course, you will learn how to work with risk-factor return series, study the empirical properties or so-called \"stylized facts\" of these data - including their typical non-normality and volatility, and make estimates of value-at-risk for a portfolio.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Exploring market risk-factor data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn how to form return series, aggregate them over longer periods and plot them in different ways. You will look at examples using the qrmdata package.\n  ",
           "parts":[
              "Welcome to the course!",
              "Exploring risk-factor time series: equity indexes",
              "Exploring risk-factor time series: individual equities",
              "Exploring risk-factor data: exchange rates",
              "Risk-factor returns",
              "Exploring return series",
              "Different ways of plotting risk-factor and return series",
              "Aggregating log-returns",
              "Aggregating log-return series",
              "A test on aggregation of log-returns",
              "Exploring other kinds of risk factors",
              "Commodities data",
              "Interest-rate data"
           ]
        },
        {
           "title":"\n          Real world returns are riskier than normal\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about graphical and numerical tests of normality, apply them to different datasets, and consider the alternative Student t model.\n  ",
           "parts":[
              "The normal distribution",
              "Graphical methods for assessing normality",
              "Testing for normality",
              "Q-Q plots for assessing normality",
              "Skewness, kurtosis and the Jarque-Bera test",
              "Numerical tests of normality",
              "Testing normality for longer time horizons",
              "Overlapping returns",
              "Reviewing knowledge of normal distributions and returns",
              "The Student t distribution",
              "Fitting t distribution to data",
              "Testing FX returns for normality",
              "Testing interest-rate returns for normality",
              "Testing gold price returns for normality"
           ]
        },
        {
           "title":"\n          Real world returns are volatile and correlated\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about volatility and how to detect it using act plots. You will learn how to apply Ljung-Box tests for serial correlation and estimate cross correlations.\n  ",
           "parts":[
              "Characteristics of volatile return series",
              "Spotting a volatile time series",
              "Estimating serial correlations",
              "Using acf plots to reveal volatility",
              "The Ljung-Box test",
              "Applying Ljung-Box tests to return data",
              "Applying Ljung-Box tests to longer-interval returns",
              "Looking at the extremes in volatile return series",
              "Extreme values in volatile time series",
              "Cross correlations between risk-factor return series",
              "The stylized facts of return series",
              "Volatility and correlation of FX returns",
              "Volatility and correlation of interest-rate data",
              "Reviewing knowledge of volatility and correlation"
           ]
        },
        {
           "title":"\n          Estimating portfolio value-at-risk (VaR)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, the concept of value-at-risk and simple methods of estimating VaR based on historical simulation are introduced.\n  ",
           "parts":[
              "Value-at-risk and expected shortfall",
              "Computing VaR and ES for normal distribution",
              "International equity portfolio",
              "Examining risk factors for international equity portfolio",
              "Historical simulation",
              "Estimating VaR and ES",
              "Option portfolio and Black Scholes",
              "Compute Black-Scholes price of an option",
              "Equity and implied volatility risk factors",
              "Historical simulation for the option example",
              "Historical simulation of losses for option portfolio",
              "Estimating VaR and ES for option portfolio",
              "Computing VaR for weekly losses",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating Time Series Data with xts and zoo in R"
     ],
     "tracks":[
        "Applied Finance in R",
        "Quantitative Analyst with R"
     ]
  },
  {
     "title":"Case Study: Exploratory Data Analysis in R",
     "description":"Use data manipulation and visualization skills to explore the historical voting of the United Nations General Assembly.",
     "detailDescription":"Once you've started learning tools for data manipulation and visualization like dplyr and ggplot2, this course gives you a chance to use them in action on a real dataset. You'll explore the historical voting of the United Nations General Assembly, including analyzing differences in voting between countries, across time, and among international issues. In the process you'll gain more practice with the dplyr and ggplot2 packages, learn about the broom package for tidying model output, and experience the kind of start-to-finish exploratory analysis common in data science.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Data cleaning and summarizing with dplyr\n        ",
           "index":"1",
           "description":"\n    The best way to learn data wrangling skills is to apply them to a specific case study. Here you'll learn how to clean and filter the United Nations voting dataset using the dplyr package, and how to summarize it into smaller, interpretable units.\n  ",
           "parts":[
              "The United Nations Voting Dataset",
              "Filtering rows",
              "Adding a year column",
              "Adding a country column",
              "Grouping and summarizing",
              "Summarizing the full dataset",
              "Summarizing by year",
              "Summarizing by country",
              "Sorting and filtering summarized data",
              "Sorting by percentage of \"yes\" votes",
              "Filtering summarized output"
           ]
        },
        {
           "title":"\n          Data visualization with ggplot2\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Once you've cleaned and summarized data, you'll want to visualize them to understand trends and extract insights. Here you'll use the ggplot2 package to explore trends in United Nations voting within each country over time.\n  ",
           "parts":[
              "Visualization with ggplot2",
              "Choosing an aesthetic",
              "Plotting a line over time",
              "Other ggplot2 layers",
              "Visualizing by country",
              "Summarizing by year and country",
              "Plotting just the UK over time",
              "Plotting multiple countries",
              "Faceting by country",
              "Faceting the time series",
              "Faceting with free y-axis",
              "Choose your own countries"
           ]
        },
        {
           "title":"\n          Tidy modeling with broom\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    While visualization helps you understand one country at a time, statistical modeling lets you quantify trends across many countries and interpret them together. Here you'll learn to use the tidyr, purrr, and broom packages to fit linear models to each country, and understand and compare their outputs.\n  ",
           "parts":[
              "Linear regression",
              "Linear regression on the United States",
              "Finding the slope of a linear regression",
              "Finding the p-value of a linear regression",
              "Tidying models with broom",
              "Tidying a linear regression model",
              "Combining models for multiple countries",
              "Nesting for multiple models",
              "Nesting a data frame",
              "List columns",
              "Unnesting",
              "Fitting multiple models",
              "Performing linear regression on each nested dataset",
              "Tidy each linear regression model",
              "Unnesting a data frame",
              "Working with many tidy models",
              "Filtering model terms",
              "Filtering for significant countries",
              "Sorting by slope"
           ]
        },
        {
           "title":"\n          Joining and tidying\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn to combine multiple related datasets, such as incorporating information about each resolution's topic into your vote analysis. You'll also learn how to turn untidy data into tidy data, and see how tidy data can guide your exploration of topics and countries over time.\n  ",
           "parts":[
              "Joining datasets",
              "Joining datasets with inner_join",
              "Filtering the joined dataset",
              "Visualizing colonialism votes",
              "Tidy data",
              "Tidy data observations",
              "Using gather to tidy a dataset",
              "Recoding the topics",
              "Summarize by country, year, and topic",
              "Visualizing trends in topics for one country",
              "Tidy modeling by topic and country",
              "Nesting by topic and country",
              "Interpreting tidy models",
              "Steepest trends by topic",
              "Checking models visually",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data Visualization with ggplot2"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Manipulation with R",
        "Data Scientist with R"
     ]
  },
  {
     "title":"Case Studies: Building Web Applications with Shiny in R",
     "description":"Practice your Shiny skills while building some fun Shiny apps for real-life scenarios!",
     "detailDescription":"After learning the basics of using Shiny to build web applications, this course takes you to the next level by putting your newly acquired skills into practice. You'll get experience developing fun and realistic Shiny apps for different common use cases, such as using Shiny to explore a dataset, generate a customized plot, and even create a word cloud. With all this practice and new knowledge, you will be well-equipped to develop Shiny apps for your own use.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Shiny review\n        ",
           "index":"1",
           "description":"\n    In the first chapter, you'll review the essentials of Shiny development. You'll get reintroduced to the basic structure of a Shiny application, as well as some core Shiny concepts such as inputs, outputs, and reactivity. Completing this chapter will help refresh your Shiny knowledge and ensure you have the required skills to develop Shiny apps for real-life scenarios.\n  ",
           "parts":[
              "Introduction",
              "Simple text",
              "Formatted text",
              "Adding structure to your app",
              "Inputs and outputs",
              "Adding inputs",
              "Adding placeholders for outputs",
              "Constructing output objects",
              "Reactivity 101",
              "Reactivity: simple reactive variable",
              "Reactivity: composed reactive variable",
              "Reactive contexts"
           ]
        },
        {
           "title":"\n          Make the perfect plot using Shiny\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Imagine you're preparing a figure for a manuscript using R. You spend a lot of time recreating the same plot over and over again by rerunning the same code but changing small parameters each time. The size of the points, the color of the points, the plot title, the data shown on the plot—these criteria all have to be just right before publishing the figure. To save you from the hassle of rerunning the code many times, you will learn how to create a Shiny app to make a customizable plot.\n  ",
           "parts":[
              "Make the perfect plot using Shiny",
              "Explore the Gapminder data",
              "More exploration of the Gapminder data",
              "Adding simple inputs to modify a plot",
              "Add a plot title: text input",
              "Change the point size: numeric input",
              "Fit a smooth curve: checkbox input",
              "More input types",
              "Add colours to your plot: radio buttons",
              "Add a continent selector: select input",
              "Add a year filter: numeric slider input",
              "Advanced  features to improve your plot",
              "Add colours to your plot: color input",
              "Making your plot larger",
              "Make your plot interactive"
           ]
        },
        {
           "title":"\n          Explore a dataset interactively with Shiny\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Let’s say your supervisor is impressed by the plot you created with Shiny and now wants to get familiar with the dataset you used in the plot. They don't want to simply have a raw data file, they want an interactive environment where they can view the data, filter it, and download it. This chapter will guide you in creating such an application—a Shiny app for exploring the Gapminder dataset.\n  ",
           "parts":[
              "Explore a dataset with Shiny",
              "See the data in a table",
              "Filter by life expectancy",
              "Select a continent to view",
              "Allow \"All\" continents to be viewed",
              "More ways to view data: plot and download",
              "Plot the data",
              "Download the filtered data",
              "Reactive variables",
              "Reactive variables reduce code duplication",
              "More benefits of reactive variables",
              "Visual enhancements",
              "Make the table interactive",
              "Place different outputs on different tabs",
              "Add CSS to modify the look of the app"
           ]
        },
        {
           "title":"\n          Create your own word cloud in Shiny\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Your friend really likes word clouds and has written an R function to generate them. They want to share this function with all their friends, but not all of them know how to use R. You offer to help by building a Shiny app that uses their function to let people create their own word clouds. This will allow all their friends—even the ones who are unfamiliar with R—to generate word clouds using a point-and-click interface. This chapter will guide you through the steps required to build this app.\n  ",
           "parts":[
              "Word clouds in  Shiny",
              "Word cloud Shiny app",
              "Change the word cloud parameters",
              "Add a layout",
              "Adding word sources",
              "Use your own words",
              "Upload a text file (ui)",
              "Upload a text file (server)",
              "Combining all the  word sources",
              "Choose the data source (ui)",
              "Choose the data source (server)",
              "Conditionally show or hide required inputs",
              "Fine tune the  reactivity",
              "Don't continuously create new word clouds",
              "Reactivity: effects of isolation",
              "Create a new word cloud on demand",
              "Wrap-up: Go and make  your own apps!"
           ]
        }
     ],
     "prerequistes":[
        "Building Web Applications with Shiny in R"
     ],
     "tracks":[
        "Shiny Fundamentals with R"
     ]
  },
  {
     "title":"Multiple and Logistic Regression in R",
     "description":"In this course you'll learn to add multiple variables to linear models and to use logistic regression for classification.",
     "detailDescription":"In this course you'll take your skills with simple linear regression to the next level. By learning multiple and logistic regression techniques you will gain the skills to model and predict both numeric and categorical outcomes using multiple input variables. You'll also learn how to fit, visualize, and interpret these models. Then you'll apply your skills to learn about Italian restaurants in New York City!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Parallel Slopes\n        ",
           "index":"1",
           "description":"\n    In this chapter you'll learn about the class of linear models called \"parallel slopes models.\" These include one numeric and one categorical explanatory variable.\n  ",
           "parts":[
              "What if you have two groups?",
              "Fitting a parallel slopes model",
              "Reasoning about two intercepts",
              "Visualizing parallel slopes models",
              "Using geom_line() and augment()",
              "Interpreting parallel slopes coefficients",
              "Intercept interpretation",
              "Common slope interpretation",
              "Three ways to describe a model",
              "Syntax from math",
              "Syntax from plot"
           ]
        },
        {
           "title":"\n          Evaluating and extending parallel slopes model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter covers model evaluation. By looking at different properties of the model, including the adjusted R-squared, you'll learn to compare models so that you can select the best one. You'll also learn about interaction terms in linear models.\n  ",
           "parts":[
              "Model fit, residuals, and prediction",
              "R-squared vs. adjusted R-squared",
              "Prediction",
              "Understanding interaction",
              "Thought experiments",
              "Fitting a model with interaction",
              "Visualizing interaction models",
              "Simpson's Paradox",
              "Consequences of Simpson's paradox",
              "Simpson's paradox in action"
           ]
        },
        {
           "title":"\n          Multiple Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will show you how to add two, three, and even more numeric explanatory variables to a linear model.\n  ",
           "parts":[
              "Adding a numerical explanatory variable",
              "Fitting a MLR model",
              "Tiling the plane",
              "Models in 3D",
              "Conditional interpretation of coefficients",
              "Coefficient magnitude",
              "Practicing interpretation",
              "Adding a third (categorical) variable",
              "Visualizing parallel planes",
              "Parallel plane interpretation",
              "Higher dimensions",
              "Interpretation of coefficient in a big model"
           ]
        },
        {
           "title":"\n          Logistic Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn about using logistic regression, a generalized linear model (GLM), to predict a binary outcome and classify observations.\n  ",
           "parts":[
              "What is logistic regression?",
              "Fitting a line to a binary response",
              "Fitting a line to a binary response (2)",
              "Fitting a model",
              "Visualizing logistic regression",
              "Using geom_smooth()",
              "Using bins",
              "Three scales approach to interpretation",
              "Odds scale",
              "Log-odds scale",
              "Interpretation of logistic regression",
              "Using a logistic model",
              "Making probabilistic predictions",
              "Making binary predictions"
           ]
        },
        {
           "title":"\n          Case Study: Italian restaurants in NYC\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Explore the relationship between price and the quality of food, service, and decor for Italian restaurants in NYC.\n  ",
           "parts":[
              "Italian restaurants in NYC",
              "Exploratory data analysis",
              "SLR models",
              "Incorporating another variable",
              "Parallel lines with location",
              "A plane in 3D",
              "Higher dimensions",
              "Parallel planes with location",
              "Interpretation of location coefficient",
              "Impact of location",
              "Full model",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Correlation and Regression in R"
     ],
     "tracks":[
        "Machine Learning Scientist with R",
        "Statistician with R",
        "Statistics Fundamentals with R",
        "Supervised Machine Learning in R"
     ]
  },
  {
     "title":"Supervised Learning in R: Regression",
     "description":"In this course you will learn how to predict future events using linear regression, generalized additive models, random forests, and xgboost.",
     "detailDescription":"From a machine learning perspective, regression is the task of predicting numerical outcomes from various inputs. In this course, you'll learn about different regression models, how to train these models in R, how to evaluate the models you train and use them to make predictions.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What is Regression?\n        ",
           "index":"1",
           "description":"\n    In this chapter we introduce the concept of regression from a machine learning point of view. We will present the fundamental regression method: linear regression. We will show how to fit a linear regression model and to make predictions from the model.\n  ",
           "parts":[
              "Welcome and Introduction",
              "Identify the regression tasks",
              "Linear regression - the fundamental method",
              "Code a simple one-variable regression",
              "Examining a model",
              "Predicting once you fit a model",
              "Predicting from the unemployment model",
              "Multivariate linear regression (Part 1)",
              "Multivariate linear regression (Part 2)",
              "Wrapping up linear regression"
           ]
        },
        {
           "title":"\n          Training and Evaluating Regression Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that we have learned how to fit basic linear regression models, we will learn how to evaluate how well our models perform. We will review evaluating a model graphically, and look at two basic metrics for regression models. We will also learn how to train a model that will perform well in the wild, not just on training data. Although we will demonstrate these techniques using linear regression, all these concepts apply to models fit with any regression algorithm.\n  ",
           "parts":[
              "Evaluating a model graphically",
              "Graphically evaluate the unemployment model",
              "The gain curve to evaluate the unemployment model",
              "Root Mean Squared Error (RMSE)",
              "Calculate RMSE",
              "R-Squared",
              "Calculate R-Squared",
              "Correlation and R-squared",
              "Properly Training a Model",
              "Generating a random test/train split",
              "Train a model using test/train split",
              "Evaluate a model using test/train split",
              "Create a cross validation plan",
              "Evaluate a modeling procedure using n-fold cross-validation"
           ]
        },
        {
           "title":"\n          Issues to Consider\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Before moving on to more sophisticated regression techniques, we will look at some other modeling issues: modeling with categorical inputs, interactions between variables, and when you might consider transforming inputs and outputs before modeling. While more sophisticated regression techniques manage some of these issues automatically, it's important to be aware of them, in order to understand which methods best handle various issues -- and which issues you must still manage yourself.\n  ",
           "parts":[
              "Categorical inputs",
              "Examining the structure of categorical inputs",
              "Modeling with categorical inputs",
              "Interactions",
              "Modeling an interaction",
              "Modeling an interaction (2)",
              "Transforming the response before modeling",
              "Relative error",
              "Modeling log-transformed monetary output",
              "Comparing RMSE and root-mean-squared Relative Error",
              "Transforming inputs before modeling",
              "Input transforms: the \"hockey stick\"",
              "Input transforms: the \"hockey stick\" (2)"
           ]
        },
        {
           "title":"\n          Dealing with Non-Linear Responses\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that we have mastered linear models, we will begin to look at techniques for modeling situations that don't meet the assumptions of linearity. This includes predicting probabilities and frequencies (values bounded between 0 and 1); predicting counts (nonnegative integer values, and associated rates); and responses that have a non-linear but additive relationship to the inputs. These algorithms are variations on the standard linear model.\n  ",
           "parts":[
              "Logistic regression to predict probabilities",
              "Fit a model of sparrow survival probability",
              "Predict sparrow survival",
              "Poisson and quasipoisson regression to predict counts",
              "Poisson or quasipoisson",
              "Fit a model to predict bike rental counts",
              "Predict bike rentals on new data",
              "Visualize the bike rental predictions",
              "GAM to learn non-linear transforms",
              "Writing formulas for GAM models",
              "Writing formulas for GAM models (2)",
              "Model soybean growth with GAM",
              "Predict with the soybean model on test data"
           ]
        },
        {
           "title":"\n          Tree-Based Methods\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we will look at modeling algorithms that do not assume linearity or additivity, and that can learn limited types of interactions among input variables. These algorithms are *tree-based* methods that work by combining ensembles of *decision trees* that are learned from the training data.\n  ",
           "parts":[
              "The intuition behind tree-based methods",
              "Predicting with a decision tree",
              "Random forests",
              "Build a random forest model for bike rentals",
              "Predict bike rentals with the random forest model",
              "Visualize random forest bike model predictions",
              "One-Hot-Encoding Categorical Variables",
              "vtreat on a small example",
              "Novel levels",
              "vtreat the bike rental data",
              "Gradient boosting machines",
              "Find the right number of trees for a gradient boosting machine",
              "Fit an xgboost bike rental model and predict",
              "Evaluate the xgboost bike rental model",
              "Visualize the xgboost bike rental model"
           ]
        }
     ],
     "prerequistes":[
        "Correlation and Regression in R"
     ],
     "tracks":[
        "Data Scientist with R",
        "Machine Learning Fundamentals in R",
        "Machine Learning Scientist with R"
     ]
  },
  {
     "title":"Introduction to R",
     "description":"Master the basics of data analysis by manipulating common data structures such as vectors, matrices, and data frames.",
     "detailDescription":"In Introduction to R, you will master the basics of this widely used open source language, including factors, lists, and data frames. With the knowledge gained in this course, you will be ready to undertake your first very own data analysis. Oracle estimated over 2 million R users worldwide in 2012, cementing R as a leading programming language in statistics and data science. Every year, the number of R users grows by about 40%, and an increasing number of organizations are using it in their day-to-day activities. Begin your journey to learn R with us today!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"Intro to basics",
           "index":"1",
           "description":"Take your first steps with R. In this chapter, you will learn how to use the console as a calculator and how to assign variables. You will also get to know the basic data types in R. Let's get started.",
           "parts":[
              "How it works",
              "Arithmetic with R",
              "Variable assignment",
              "Variable assignment (2)",
              "Variable assignment (3)",
              "Apples and oranges",
              "Basic data types in R",
              "What's that data type?"
           ]
        },
        {
           "title":"Matrices",
           "index":"3",
           "description":"In this chapter, you will learn how to work with matrices in R. By the end of the chapter, you will be able to create matrices and understand how to do basic computations with them. You will analyze the box office numbers of the Star Wars movies and learn how to use matrices in R. May the force be with you!",
           "parts":[
              "What's a matrix?",
              "Analyze matrices, you shall",
              "Naming a matrix",
              "Calculating the worldwide box office",
              "Adding a column for the Worldwide box office",
              "Adding a row",
              "The total box office revenue for the entire saga",
              "Selection of matrix elements",
              "A little arithmetic with matrices",
              "A little arithmetic with matrices (2)"
           ]
        },
        {
           "title":"Data frames",
           "index":"5",
           "description":"Most datasets you will be working with will be stored as data frames. By the end of this chapter, you will be able to create a data frame, select interesting parts of a data frame, and order a data frame according to certain variables.",
           "parts":[
              "What's a data frame?",
              "Quick, have a look at your data set",
              "Have a look at the structure",
              "Creating a data frame",
              "Creating a data frame (2)",
              "Selection of data frame elements",
              "Selection of data frame elements (2)",
              "Only planets with rings",
              "Only planets with rings (2)",
              "Only planets with rings but shorter",
              "Sorting",
              "Sorting your data frame"
           ]
        },
        {
           "title":"Vectors",
           "index":"2",
           "description":"We take you on a trip to Vegas, where you will learn how to analyze your gambling results using vectors in R. After completing this chapter, you will be able to create vectors in R, name them, select elements from them, and compare different vectors.",
           "parts":[
              "Create a vector",
              "Create a vector (2)",
              "Create a vector (3)",
              "Naming a vector",
              "Naming a vector (2)",
              "Calculating total winnings",
              "Calculating total winnings (2)",
              "Calculating total winnings (3)",
              "Comparing total winnings",
              "Vector selection: the good times",
              "Vector selection: the good times (2)",
              "Vector selection: the good times (3)",
              "Vector selection: the good times (4)",
              "Selection by comparison - Step 1",
              "Selection by comparison - Step 2",
              "Advanced selection"
           ]
        },
        {
           "title":"Factors",
           "index":"4",
           "description":"Data often falls into a limited number of categories. For example, human hair color can be categorized as black, brown, blond, red, grey, or white—and perhaps a few more options for people who color their hair. In R, categorical data is stored in factors. Factors are very important in data analysis, so start learning how to create, subset, and compare them now.",
           "parts":[
              "What's a factor and why would you use it?",
              "What's a factor and why would you use it? (2)",
              "What's a factor and why would you use it? (3)",
              "Factor levels",
              "Summarizing a factor",
              "Battle of the sexes",
              "Ordered factors",
              "Ordered factors (2)",
              "Comparing ordered factors"
           ]
        },
        {
           "title":"Lists",
           "index":"6",
           "description":"As opposed to vectors, lists can hold components of different types, just as your to-do lists can contain different categories of tasks. This chapter will teach you how to create, name, and subset these lists.",
           "parts":[
              "Lists, why would you need them?",
              "Lists, why would you need them? (2)",
              "Creating a list",
              "Creating a named list",
              "Creating a named list (2)",
              "Selecting elements from a list",
              "Creating a new list for another movie"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "R Programming"
     ]
  },
  {
     "title":"Introduction to R",
     "description":"Master the basics of data analysis by manipulating common data structures such as vectors, matrices, and data frames.",
     "detailDescription":"In Introduction to R, you will master the basics of this widely used open source language, including factors, lists, and data frames. With the knowledge gained in this course, you will be ready to undertake your first very own data analysis. Oracle estimated over 2 million R users worldwide in 2012, cementing R as a leading programming language in statistics and data science. Every year, the number of R users grows by about 40%, and an increasing number of organizations are using it in their day-to-day activities. Begin your journey to learn R with us today!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"Intro to basics",
           "index":"1",
           "description":"Take your first steps with R. In this chapter, you will learn how to use the console as a calculator and how to assign variables. You will also get to know the basic data types in R. Let's get started.",
           "parts":[
              "How it works",
              "Arithmetic with R",
              "Variable assignment",
              "Variable assignment (2)",
              "Variable assignment (3)",
              "Apples and oranges",
              "Basic data types in R",
              "What's that data type?"
           ]
        },
        {
           "title":"Matrices",
           "index":"3",
           "description":"In this chapter, you will learn how to work with matrices in R. By the end of the chapter, you will be able to create matrices and understand how to do basic computations with them. You will analyze the box office numbers of the Star Wars movies and learn how to use matrices in R. May the force be with you!",
           "parts":[
              "What's a matrix?",
              "Analyze matrices, you shall",
              "Naming a matrix",
              "Calculating the worldwide box office",
              "Adding a column for the Worldwide box office",
              "Adding a row",
              "The total box office revenue for the entire saga",
              "Selection of matrix elements",
              "A little arithmetic with matrices",
              "A little arithmetic with matrices (2)"
           ]
        },
        {
           "title":"Data frames",
           "index":"5",
           "description":"Most datasets you will be working with will be stored as data frames. By the end of this chapter, you will be able to create a data frame, select interesting parts of a data frame, and order a data frame according to certain variables.",
           "parts":[
              "What's a data frame?",
              "Quick, have a look at your data set",
              "Have a look at the structure",
              "Creating a data frame",
              "Creating a data frame (2)",
              "Selection of data frame elements",
              "Selection of data frame elements (2)",
              "Only planets with rings",
              "Only planets with rings (2)",
              "Only planets with rings but shorter",
              "Sorting",
              "Sorting your data frame"
           ]
        },
        {
           "title":"Vectors",
           "index":"2",
           "description":"We take you on a trip to Vegas, where you will learn how to analyze your gambling results using vectors in R. After completing this chapter, you will be able to create vectors in R, name them, select elements from them, and compare different vectors.",
           "parts":[
              "Create a vector",
              "Create a vector (2)",
              "Create a vector (3)",
              "Naming a vector",
              "Naming a vector (2)",
              "Calculating total winnings",
              "Calculating total winnings (2)",
              "Calculating total winnings (3)",
              "Comparing total winnings",
              "Vector selection: the good times",
              "Vector selection: the good times (2)",
              "Vector selection: the good times (3)",
              "Vector selection: the good times (4)",
              "Selection by comparison - Step 1",
              "Selection by comparison - Step 2",
              "Advanced selection"
           ]
        },
        {
           "title":"Factors",
           "index":"4",
           "description":"Data often falls into a limited number of categories. For example, human hair color can be categorized as black, brown, blond, red, grey, or white—and perhaps a few more options for people who color their hair. In R, categorical data is stored in factors. Factors are very important in data analysis, so start learning how to create, subset, and compare them now.",
           "parts":[
              "What's a factor and why would you use it?",
              "What's a factor and why would you use it? (2)",
              "What's a factor and why would you use it? (3)",
              "Factor levels",
              "Summarizing a factor",
              "Battle of the sexes",
              "Ordered factors",
              "Ordered factors (2)",
              "Comparing ordered factors"
           ]
        },
        {
           "title":"Lists",
           "index":"6",
           "description":"As opposed to vectors, lists can hold components of different types, just as your to-do lists can contain different categories of tasks. This chapter will teach you how to create, name, and subset these lists.",
           "parts":[
              "Lists, why would you need them?",
              "Lists, why would you need them? (2)",
              "Creating a list",
              "Creating a named list",
              "Creating a named list (2)",
              "Selecting elements from a list",
              "Creating a new list for another movie"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "R Programming"
     ]
  },
  {
     "title":"Fundamentals of Bayesian Data Analysis in R",
     "description":"Learn what Bayesian data analysis is, how it works, and why it is a useful tool to have in your data science toolbox.",
     "detailDescription":"Bayesian data analysis is an approach to statistical modeling and machine learning that is becoming more and more popular. It provides a uniform framework to build problem specific models that can be used for both statistical inference and for prediction. This course will introduce you to Bayesian data analysis: What it is, how it works, and why it is a useful tool to have in your data science toolbox.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What is Bayesian Data Analysis?\n        ",
           "index":"1",
           "description":"\n    This chapter will introduce you to Bayesian data analysis and give you a feel for how it works.\n  ",
           "parts":[
              "A first taste of Bayes",
              "Unknowns and ice creams",
              "Let's try some Bayesian data analysis",
              "Coin flips with prop_model",
              "Zombie drugs with prop_model",
              "Samples and posterior summaries",
              "Looking at samples from prop_model",
              "Summarizing the zombie drug experiment",
              "You've done some Bayesian data analysis!"
           ]
        },
        {
           "title":"\n          How does Bayesian inference work?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we will take a detailed look at the foundations of Bayesian inference.\n  ",
           "parts":[
              "The parts needed for Bayesian inference",
              "Take a generative model for a spin",
              "Take the binomial distribution for a spin",
              "Using a generative model",
              "How many visitors could your site get (1)?",
              "Representing uncertainty with priors",
              "Adding a prior to the model",
              "Bayesian models and conditioning",
              "Update a Bayesian model with data",
              "How many visitors could your site get (3)?",
              "What have we done?"
           ]
        },
        {
           "title":"\n          Why use Bayesian Data Analysis?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will show you four reasons why Bayesian data analysis is a useful tool to have in your data science tool belt.\n  ",
           "parts":[
              "Four good things with Bayes",
              "Explore using the Beta distribution as a prior",
              "Pick the prior that best captures the information",
              "Change the model to use an informative prior",
              "Contrasts and comparisons",
              "Fit the model using another dataset",
              "Calculating the posterior difference",
              "Decision analysis",
              "A small decision analysis 1",
              "A small decision analysis 2",
              "Change anything and everything",
              "The Poisson distribution",
              "Clicks per day instead of clicks per ad",
              "Bayes is optimal, kind of..."
           ]
        },
        {
           "title":"\n          Bayesian inference with Bayes' theorem\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn what Bayes theorem is all about and how to use it for statistical inference.\n  ",
           "parts":[
              "Probability rules",
              "Cards and the sum rule",
              "Cards and the product rule",
              "Calculating likelihoods",
              "From rbinom to dbinom",
              "Calculating probabilities with dbinom",
              "Bayesian calculation",
              "Calculating a joint distribution",
              "Conditioning on the data (again)",
              "A conditional shortcut",
              "Bayes' theorem",
              "A Poisson model description"
           ]
        },
        {
           "title":"\n          More parameters, more data, and more Bayes\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about using the Normal distribution to analyze continuous data and try out a tool for practical Bayesian analysis in R.\n  ",
           "parts":[
              "The temperature in a Normal lake",
              "rnorm, dnorm, and the weight of newborns",
              "A Bayesian model of water temperature",
              "A Bayesian model of Zombie IQ",
              "Eyeballing the mean IQ of zombies?",
              "Answering the question: Should I have a beach party?",
              "Sampling from the zombie posterior",
              "But how smart will the next zombie be?",
              "A practical tool: BEST",
              "The BEST models and zombies on a diet",
              "BEST is robust",
              "What have you learned? What did we miss?"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[
        "Machine Learning Scientist with R",
        "Statistician with R"
     ]
  },
  {
     "title":"Inference for Numerical Data in R",
     "description":"In this course you'll learn techniques for performing statistical inference on numerical data.",
     "detailDescription":"In this course, you'll learn how to use statistical techniques to make inferences and estimations using numerical data. This course uses two approaches to these common tasks. The first makes use of bootstrapping and permutation to create resample based tests and confidence intervals. The second uses theoretical results and the t-distribution to achieve the same result. You'll learn how (and when) to perform a t-test, create a confidence interval, and do an ANOVA!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Bootstrapping for estimating a parameter\n        ",
           "index":"1",
           "description":"\n    In this chapter you'll use bootstrapping techniques to estimate a single parameter from a numerical distribution.\n  ",
           "parts":[
              "Welcome to the course!",
              "Generate bootstrap distribution for median",
              "Review percentile and standard error methods",
              "Calculate bootstrap interval using both methods",
              "Which method more appropriate: percentile or SE?",
              "Doctor visits during pregnancy",
              "Average number of doctor's visits",
              "SD of number of doctor's visits",
              "Re-centering a bootstrap distribution",
              "Test for median price of 1 BR apartments in Manhattan",
              "Conclude the hypothesis test on median",
              "Test for average weight of babies"
           ]
        },
        {
           "title":"\n          Introducing the t-distribution\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll use Central Limit Theorem based techniques to estimate a single parameter from a numerical distribution. You will do this using the t-distribution.\n  ",
           "parts":[
              "t-distribution",
              "When to t?",
              "Probabilities under the t-distribution",
              "Cutoffs under the t-distribution",
              "Estimating a mean with a t-interval",
              "Average commute time of Americans",
              "Average number of hours worked",
              "t-interval for paired data",
              "t-interval at various levels",
              "Understanding confidence intervals",
              "Testing a mean with a t-test",
              "Estimate the median difference in textbook prices",
              "Test for a difference in median test scores",
              "Interpret the p-value"
           ]
        },
        {
           "title":"\n          Inference for difference in two parameters\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll extend what you have learned so far to use both simulation and CLT based techniques for inference on the difference between two parameters from two independent numerical distributions.\n  ",
           "parts":[
              "Hypothesis testing for comparing two means",
              "Evaluating the effectiveness of stem cell treatment",
              "Evaluating the effectiveness of stem cell treatment (cont.)",
              "Conclusion of the hypothesis test",
              "Evaluating the relationship between smoking during pregnancy and birth weight",
              "Bootstrap CI for difference in two means",
              "Quantifying the relationship between smoking during pregnancy and birth weight",
              "Median lengths of pregnancies for smoking and non-smoking mothers",
              "Comparing means with a t-test",
              "Hourly pay vs. citizenship status",
              "Estimating the difference of two means using a t-interval"
           ]
        },
        {
           "title":"\n          Comparing many means\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will use ANOVA (analysis of variance) to test for a difference in means across many groups.\n  ",
           "parts":[
              "Vocabulary score vary between vs. (self identified) social class",
              "EDA for vocabulary score vs. social class",
              "Comparing many means, visually",
              "ANOVA",
              "ANOVA for vocabulary score vs. (self identified) social class",
              "Conditions for ANOVA",
              "Checking the normality condition",
              "Checking the constant variance condition",
              "Post-hoc testing",
              "Calculate alpha*",
              "Compare pairwise means",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Foundations of Inference"
     ],
     "tracks":[
        "Statistical Inference with R"
     ]
  },
  {
     "title":"Introduction to the Tidyverse",
     "description":"Get started on the path to exploring and visualizing your own data with the tidyverse, a powerful and popular collection of data science tools within R.",
     "detailDescription":"This is an introduction to the programming language R, focused on a powerful set of tools known as the Tidyverse. You'll learn the intertwined processes of data manipulation and visualization using the tools dplyr and ggplot2. You'll learn to manipulate data by filtering, sorting, and summarizing a real dataset of historical country data in order to answer exploratory questions. You'll then learn to turn this processed data into informative line plots, bar plots, histograms, and more with the ggplot2 package. You’ll get a taste of the value of exploratory data analysis and the power of Tidyverse tools. This is a suitable introduction for those who have no previous experience in R and are interested in performing data analysis.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Data wrangling\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn to do three things with a table: filter for particular observations, arrange the observations in a desired order, and mutate to add or change a column. You'll see how each of these steps allows you to answer questions about your data.\n  ",
           "parts":[
              "The gapminder dataset",
              "Loading the gapminder and dplyr packages",
              "Understanding a data frame",
              "The filter verb",
              "Filtering for one year",
              "Filtering for one country and one year",
              "The arrange verb",
              "Arranging observations by life expectancy",
              "Filtering and arranging",
              "The mutate verb",
              "Using mutate to change or create a column",
              "Combining filter, mutate, and arrange"
           ]
        },
        {
           "title":"\n          Data visualization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Often a better way to understand and present data as a graph. In this chapter, you'll learn the essential skills of data visualization using the ggplot2 package, and you'll see how the dplyr and ggplot2 packages work closely together to create informative graphs.\n  ",
           "parts":[
              "Visualizing with ggplot2",
              "Variable assignment",
              "Comparing population and GDP per capita",
              "Comparing population and life expectancy",
              "Log scales",
              "Putting the x-axis on a log scale",
              "Putting the x- and y- axes on a log scale",
              "Additional aesthetics",
              "Adding color to a scatter plot",
              "Adding size and color to a plot",
              "Faceting",
              "Creating a subgraph for each continent",
              "Faceting by year"
           ]
        },
        {
           "title":"\n          Grouping and summarizing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    So far you've been answering questions about individual country-year pairs, but you may be interested in aggregations of the data, such as the average life expectancy of all countries within each year. Here you'll learn to use the group by and summarize verbs, which collapse large datasets into manageable summaries.\n  ",
           "parts":[
              "The summarize verb",
              "Summarizing the median life expectancy",
              "Summarizing the median life expectancy in 1957",
              "Summarizing multiple variables in 1957",
              "The group_by verb",
              "Summarizing by year",
              "Summarizing by continent",
              "Summarizing by continent and year",
              "Visualizing summarized data",
              "Visualizing median life expectancy over time",
              "Visualizing median GDP per capita per continent over time",
              "Comparing median life expectancy and median GDP per continent in 2007"
           ]
        },
        {
           "title":"\n          Types of visualizations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to create line plots, bar plots, histograms, and boxplots. You'll see how each plot requires different methods of data manipulation and preparation, and you’ll understand how each of these plot types plays a different role in data analysis.\n  ",
           "parts":[
              "Line plots",
              "Visualizing median GDP per capita over time",
              "Visualizing median GDP per capita by continent over time",
              "Bar plots",
              "Visualizing median GDP per capita by continent",
              "Visualizing GDP per capita by country in Oceania",
              "Histograms",
              "Visualizing population",
              "Visualizing population with x-axis on a log scale",
              "Boxplots",
              "Comparing GDP per capita across continents",
              "Adding a title to your graph",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "R Programmer",
        "Tidyverse Fundamentals with R"
     ]
  },
  {
     "title":"Data Manipulation with data.table in R",
     "description":"Master core concepts about data manipulation such as filtering, selecting and calculating groupwise statistics using data.table.",
     "detailDescription":"The data.table package provides a high-performance version of base R's data.frame with syntax and feature enhancements for ease of use, convenience and programming speed. This course shows you how to create, subset, and manipulate data.tables. You'll also learn about the database-inspired features of data.tables, including built-in groupwise operations. The course concludes with fast methods of importing and exporting tabular text data such as CSV files. Upon completion of the course, you will be able to use data.table in R for a more efficient manipulation and analysis process. Throughout the course you'll explore the San Francisco Bay Area bike share trip dataset from 2014.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to data.table\n        ",
           "index":"1",
           "description":"\n    This chapter introduces data.tables as a drop-in replacement for data.frames and shows how to use data.table's i argument to filter rows. \n  ",
           "parts":[
              "Welcome to the course!",
              "data.table pop quiz",
              "Creating a data.table",
              "Introducing bikes data",
              "Filtering rows in a data.table",
              "Filtering rows using positive integers",
              "Filtering rows using negative integers",
              "Filtering rows using logical vectors",
              "Helpers for filtering",
              "I %like% data.tables",
              "Filtering with %in%",
              "Filtering with %between% and %chin%"
           ]
        },
        {
           "title":"\n          Selecting and Computing on Columns\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Just as the i argument lets you filter rows, the j argument of data.table lets you select columns and also perform computations. The syntax is far more convenient and flexible when compared to data.frames. \n  ",
           "parts":[
              "Selecting columns from a data.table",
              "Selecting a single column",
              "Selecting columns by name",
              "Deselecting specific columns",
              "Computing on columns the data.table way",
              "Computing in j (I)",
              "Computing in j (II)",
              "Advanced computations in j",
              "Computing in j (III)",
              "Combining i and j"
           ]
        },
        {
           "title":"\n          Groupwise Operations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces data.table's by argument that lets you perform computations by groups.  By the end of this chapter, you will master the concise DT[i, j, by] syntax of data.table. \n  ",
           "parts":[
              "Computations by groups",
              "Computing stats by groups (I)",
              "Computing stats by groups (II)",
              "Computing multiple stats",
              "Chaining data.table expressions",
              "Ordering rows",
              "What are the top 5 destinations?",
              "What is the most popular destination from each start station?",
              "Combining i, j, and by (I)",
              "Computations in j using .SD",
              "Using .SD (I)",
              "Using .SD (II)"
           ]
        },
        {
           "title":"\n          Reference Semantics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will learn about a unique feature of data.table in this chapter: modifying existing data.tables in place. Modifying data.tables in place makes your operations incredibly fast and is easy to learn. \n  ",
           "parts":[
              "Adding and updating columns by reference",
              "Adding a new column",
              "Updating an existing column (I)",
              "Updating an existing column (II)",
              "Grouped aggregations",
              "Adding columns by group",
              "Updating columns by group",
              "Advanced aggregations",
              "Adding multiple columns (I)",
              "Adding multiple columns (II)",
              "Combining i, j, and by (II)"
           ]
        },
        {
           "title":"\n          Importing and Exporting Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Not only does the data.table package help you perform incredibly fast computations, it can also help you read and write data to disk with amazing speeds. This chapter focuses on data.table's fread() and fwrite() functions which let you import and export flat files quickly and easily!  \n  ",
           "parts":[
              "Fast data reading with fread()",
              "Fast reading from disk",
              "Importing a CSV file",
              "Importing selected columns",
              "Importing selected rows",
              "Advanced file reading",
              "Reading large integers",
              "Specifying column classes",
              "Dealing with empty and incomplete lines",
              "Dealing with missing values",
              "Fast data writing with fwrite()",
              "Writing files to disk",
              "Writing date and time columns",
              "Fast writing to disk"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Manipulation with R"
     ]
  },
  {
     "title":"Developing R Packages",
     "description":"Create and share your own R Packages!",
     "detailDescription":"In this course, you will learn the end-to-end process for creating an R package from scratch. You will start off by creating the basic structure for your package, and adding in important details like functions and metadata. Once the basic components of your package are in place, you will learn about how to document your package, and why this is important for creating quality packages that other people - as well as your future self - can use with ease. Once you have created the components of your package, you will learn how to test they work properly, by creating tests, running checks, and building your package. By the end of this course you can expect to have all the necessary skills to create and share your own R packages.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The R Package Structure\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn the basics of creating an R package.  You will learn about the structure of R packages, set up a package, and write a function and include it in your package.  You will also learn about the metadata stored in the DESCRIPTION and NAMESPACE files.\n  ",
           "parts":[
              "Introduction to package building",
              "The structure of an R package",
              "Contents of an R package",
              "Writing a simple function",
              "Including functions in a package",
              "Description and Namespace files",
              "Package names",
              "Writing a DESCRIPTION file",
              "Detailing authors, maintainers and contributors",
              "Optional directories",
              "The use_* functions",
              "Best practice for structuring code"
           ]
        },
        {
           "title":"\n          Documenting Packages\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to document your package.  You will learn why documentation is important, and how to provide documentation for your package, its functions, and other components.  You will also learn about what it means to export a function and how to implement this in your package.\n  ",
           "parts":[
              "Introduction to roxygen2",
              "A simple function header",
              "Documenting function arguments",
              "Importing other packages",
              "How to export functions?",
              "Export best practice",
              "Exporting functions",
              "Documenting other elements",
              "Adding examples",
              "Documenting function return values",
              "Additional documentation",
              "Minimum level of documentation",
              "Documenting a package",
              "Adding package documentation",
              "Documenting data objects",
              "Creating man files"
           ]
        },
        {
           "title":"\n          Checking and Building R Packages\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about how to run checks to ensure that your R package is correctly structured and can be installed.  You will learn how to correct common problems, and get your package ready to be built so it can be shared with others.  \n  ",
           "parts":[
              "Why check an R package?",
              "What does a \"check\" check?",
              "Running a check",
              "Errors, warnings and notes",
              "Undocumented parameters",
              "Undefined global variables",
              "Differences in package dependencies",
              "Depends or imports?",
              "Adding a dependency",
              "Adding the import to the description",
              "Building packages with continuous integration",
              "Building an R package",
              "Setting a package up for using Travis"
           ]
        },
        {
           "title":"\n          Adding Unit Tests to R Packages\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, you will learn how to add tests to your package to ensure your code runs as expected if the package is updated or changes. You will look at how to test functions to ensure they produce expected values, and also how to test for other aspects of functionality such as expected errors.  Once you've written tests for your functions, you'll finally learn how to run your tests and what to do in the case of a failing test.\n  ",
           "parts":[
              "What are unit tests and why write them?",
              "Setting up the test structure",
              "Writing an individual test",
              "Testing for equality",
              "Testing errors and warnings",
              "Testing errors",
              "Testing warnings",
              "Testing specific output and non-exported functions",
              "Testing non-exported functions",
              "Testing specific output",
              "Grouping and running tests",
              "Grouping tests",
              "Executing unit tests",
              "Understanding a test failure",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Writing Functions in R"
     ],
     "tracks":[
        "R Programmer"
     ]
  },
  {
     "title":"Communicating with Data in the Tidyverse",
     "description":"Leverage the power of tidyverse tools to create publication-quality graphics and custom-styled reports that communicate your results.",
     "detailDescription":"They say that a picture is worth a thousand words. Indeed, successfully promoting your data analysis is not only a matter of accurate and effective graphics, but also of aesthetics and uniqueness. This course teaches you how to leverage the power of ggplot2 themes for producing publication-quality graphics that stick out from the mass of boilerplate plots out there. It shows you how to tweak and get the most out of ggplot2 in order to produce unconventional plots that draw attention on social media. In the end, you will combine that knowledge to produce a slick and custom-styled report with RMarkdown and CSS – all of that within the powerful tidyverse.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Custom ggplot2 themes\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will have a first look at the data you're going to work with throughout this course: the relationship between weekly working hours and monetary compensation in European countries, according to the International Labour Organization (ILO). After that, you'll dive right in and discover a stunning correlation by employing an exploratory visualization. You will then apply a custom look to that graphic – you'll turn an ordinary plot into an aesthetically pleasing and unique data visualization.\n  ",
           "parts":[
              "Introduction to the data",
              "Join the two data sets together",
              "Change variable types",
              "Filtering and plotting the data",
              "Filter the data for plotting",
              "Some summary statistics",
              "A basic scatter plot",
              "Add labels to the plot",
              "Custom ggplot2 themes",
              "Apply a default theme",
              "Change the appearance of titles",
              "Alter background color and add margins"
           ]
        },
        {
           "title":"\n          Creating a custom and unique visualization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Barcharts, scatter plots, and histograms are probably the most common and effective data visualizations. Yet, sometimes, there are even better ways to visually highlight the finding you want to communicate to your audience. So-called \"dot plots\" make us better grasp and understand changes in data: development over time, for example. In this chapter, you'll build a custom and unique visualization that emphasizes and explains exactly one aspect of the story you want to tell.\n  ",
           "parts":[
              "Visualizing aspects of data with facets",
              "Prepare the data set for the faceted plot",
              "Add facets to the plot",
              "Define your own theme function",
              "Apply the new theme function to the plot",
              "A custom plot to emphasize change",
              "A basic dot plot",
              "Add arrows to the lines in the plot",
              "Add some labels to each country",
              "Polishing the dot plot",
              "The fct_reorder function",
              "Reordering elements in the plot",
              "Correct ugly label positions",
              "Finalizing the plot for different audiences and devices",
              "Change the viewport so labels don't overlap with plot border",
              "Optimizing the plot for mobile devices"
           ]
        },
        {
           "title":"\n           Introduction to RMarkdown\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Back in the old days, researchers and data analysts used to generate plots in R and then tediously copy them into their LaTeX or Word documents. Nowadays, whole reports can be produced and reproduced from within R and RStudio, using the RMarkdown language – combining R chunks, formatted prose, tables and plots. In this chapter, you'll take your previous findings, results, and graphics and integrate them into such a report to tell the story that needs to be told.\n  ",
           "parts":[
              "What is RMarkdown?",
              "When is a document reproducible?",
              "Introduction to the RMarkdown exercise interface",
              "Formatting with Markdown",
              "Give your document a structure",
              "Change formatting of text snippets",
              "R code in RMarkdown documents",
              "Specify packages in the first code chunk",
              "R code chunk options",
              "Inline code statements",
              "Images in RMarkdown files",
              "Adjusting figure options, optimizing them for mobile devices.",
              "Add auxiliary images"
           ]
        },
        {
           "title":"\n          Customizing your RMarkdown report\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Your boss, your client, or your professor usually expects your results to be accurate and presented in a clear and concise structure. However, coming up with a nicely formatted and unique report on top of that is certainly a plus and RMarkdown can be customized to accomplish this. In this last chapter, you'll take your report from the last chapter and brand it with your own custom and unique style.\n\n  ",
           "parts":[
              "Advanced YAML settings",
              "Change the overall appearance of your report",
              "Add a table of contents",
              "More YAML hacks",
              "Custom stylesheets",
              "CSS selectors",
              "Change style attributes of text elements",
              "Reference the style sheet",
              "Beautiful tables",
              "Beautify a table with kable",
              "Repetition: CSS",
              "Summary"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Data Analyst with R",
        "Tidyverse Fundamentals with R"
     ]
  },
  {
     "title":"Inference for Categorical Data in R",
     "description":"In this course you'll learn how to leverage statistical techniques for working with categorical data.",
     "detailDescription":"Categorical data is all around us. It's in the latest opinion polling numbers, in the data that lead to new breakthroughs in genomics, and in the troves of data that internet companies collect to sell products to you. In this course you'll learn techniques for parsing the signal from the noise; tools for identifying when structure in this data represents interesting phenomena and when it is just random noise.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Inference for a single parameter\n        ",
           "index":"1",
           "description":"\n    In this chapter you will learn how to perform statistical inference on a single parameter that describes categorical data. This includes both resampling based methods and approximation based methods for a single proportion.\n  ",
           "parts":[
              "The General Social Survey",
              "Exploring consci",
              "Generating via bootstrap",
              "Constructing a CI",
              "Why more bootstraps?",
              "Interpreting a Confidence Interval",
              "CIs and confidence level",
              "SE with less data",
              "SE with different p",
              "The approximation shortcut",
              "CI via approximation",
              "Methods compared"
           ]
        },
        {
           "title":"\n          Proportions: testing and power\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter dives deeper into performing hypothesis tests and creating confidence intervals for a single parameter. Then, you'll learn how to perform inference on a difference between two proportions. Finally, this chapter wraps up with an exploration of what happens when you know the null hypothesis is true.\n  ",
           "parts":[
              "Hypothesis test for a proportion",
              "Life after death",
              "Generating from H0",
              "Testing a claim",
              "Making a decision",
              "Intervals for differences",
              "Death penalty and sex",
              "Hypothesis test on the difference in proportions",
              "Interpreting the test",
              "Hypothesis tests and confidence intervals",
              "Statistical errors",
              "When the null is true",
              "When the null is true: decision"
           ]
        },
        {
           "title":"\n          Comparing many parameters: independence\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This part of the course will teach you how to use both resampling methods and classical methods to test for the indepence of two categorical variables. This chapter covers how to perform a Chi-squared test.\n  ",
           "parts":[
              "Contingency tables",
              "Politics and Space",
              "Understanding contingency tables",
              "From tidy to table to tidy",
              "Chi-squared test statistic",
              "A single permuted Chi-sq",
              "Building two null distributions",
              "Is the data consistent with the model?",
              "Alternate method: the chi-squared distribution",
              "Checking conditions",
              "The geography of happiness",
              "A p-value two ways",
              "Intervals for the chi-squared distribution"
           ]
        },
        {
           "title":"\n          Comparing many parameters: goodness of fit\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The course wraps up with two case studies using election data. Here, you'll learn how to use a Chi-squared test to check goodness-of-fit. You'll study election results from Iran and Iowa and test if Benford's law applies to these datasets.\n  ",
           "parts":[
              "Case study: election fraud",
              "Getting to know the Iran data",
              "Who won?",
              "Breaking it down by province",
              "Extracting the first digit I",
              "Goodness of fit",
              "Goodness of fit test",
              "A p-value, two ways",
              "Is this evidence of fraud?",
              "And now to US",
              "Getting to know the Iowa data",
              "Extracting the first digit II",
              "Testing Iowa",
              "Fraud in Iowa?",
              "Election fraud in Iran and Iowa: debrief"
           ]
        }
     ],
     "prerequistes":[
        "Foundations of Inference"
     ],
     "tracks":[
        "Statistical Inference with R",
        "Statistician with R"
     ]
  },
  {
     "title":"Visualizing Big Data with Trelliscope in R",
     "description":"Learn how to visualize big data in R using ggplot2 and trelliscopejs.",
     "detailDescription":"Having honed your visualization skills by learning ggplot2, it's now time to tackle larger datasets. In this course, you will learn several techniques for visualizing big data, with particular focus on the scalable visualization technique of faceting. You will learn how to put this technique into action using the Trelliscope approach as implemented in the trelliscopejs R package. Trelliscope plugs seamlessly into standard R workflows and produces interactive visualizations that allow you to visually explore your data in detail. By the end of this course, you will be able to easily create interactive exploratory displays of large datasets that will help you and your colleagues gain new insights into your data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          General strategies for visualizing big data\n        ",
           "index":"1",
           "description":"\n    Learn different strategies for plotting big data using ggplot2, including calculating and plotting summary statistics, various techniques to deal with overplotting, and principles of small multiples with faceting, which leads into Trelliscope.\n  ",
           "parts":[
              "Visualizing summaries",
              "Daily ride counts",
              "Distribution of cab fare amount",
              "Distribution of payment type",
              "Adding more detail to summaries",
              "Relationship between trip duration and total fare",
              "Faceting daily rides",
              "Tip amount distribution faceted by payment type",
              "Visualizing subsets",
              "Comparing fare distribution by payment type",
              "Visualizing all subsets"
           ]
        },
        {
           "title":"\n          ggplot2 + TrelliscopeJS\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapter you saw how faceting can be used as a powerful technique for visualizing a lot of data that can be naturally partitioned in some meaningful way. Now, using the trelliscopejs package with ggplot2, you will learn how to create faceted visualizations when the number of partitions in the data becomes too large to effectively view in a single screen.\n  ",
           "parts":[
              "Faceting with TrelliscopeJS",
              "Trelliscope faceting gapminder by country",
              "Interacting with the TrelliscopeJS displays",
              "Interacting with the display",
              "Additional TrelliscopeJS features",
              "Customizing the gapminder display",
              "Examining the new cognostics",
              "Adding your own cognostics",
              "Adding custom cognostics",
              "Interpreting custom cognostics"
           ]
        },
        {
           "title":"\n          Trelliscope in the Tidyverse\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The ggplot2 + trelliscopejs interface is easy to use, but trelliscopejs also provides a faceted plotting mechanism that gives you much more flexibility in what plotting system you use and how to specify cognostics. You will learn all about that in this chapter!\n  ",
           "parts":[
              "Trelliscope in the Tidyverse",
              "Grouping and nesting",
              "Stock price display",
              "Exploring the display",
              "Cognostics",
              "Adding cognostics",
              "Cognostics from nested data frames",
              "Navigating stock plots with new cognostics",
              "Trelliscope options",
              "Customizing the stock display",
              "Visualizing databases of images",
              "Visualizing Pokemon",
              "The most powerful Pokemon"
           ]
        },
        {
           "title":"\n          Case Study: Exploring Montreal BIXI Bike Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The Montreal BIXI bike network provides open data for every bike ride, including the date, time, duration, and start and end stations of the ride. In this chapter, you will analyze data from over 4 million bike rides in 2017, going between 546 stations. There are many interesting exploratory questions to ask from this data and you will create exploratory visualizations ranging from summary statistics to detailed Trelliscope visualizations that will give you interesting insight into the data.\n  ",
           "parts":[
              "Montreal BIXI Bike Data",
              "Number of daily rides",
              "Examining time-of-day",
              "Effect of membership and weekday",
              "Summary visualization recap",
              "Daily plots",
              "Looking at all days",
              "Top 100 Routes dataset",
              "Augmenting the data: Route summary statistics",
              "Visualizing the data: Counts by hour-of-day",
              "Evaluating the visualization",
              "Au revoir"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Big Data with R",
        "Interactive Data Visualization in R"
     ]
  },
  {
     "title":"Dimensionality Reduction in R",
     "description":"Develop your intuition for when to reduce dimensionality in your data, and master the fundamentals of how to do so in R.",
     "detailDescription":"Real-world datasets often include values for dozens, hundreds, or even thousands of variables. Our minds cannot efficiently process such high-dimensional datasets to come up with useful, actionable insights. How do you deal with these multi-dimensional swarms of data points? How do you uncover and visualize hidden patterns in the data? In this course, you'll learn how to answer these questions by mastering three fundamental dimensionality reduction techniques - Principal component analysis (PCA), non-negative matrix factorisation (NNMF), and exploratory factor analysis (EFA).",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Principal component analysis (PCA)\n        ",
           "index":"1",
           "description":"\n    As a data scientist, you'll frequently have to deal with messy and high-dimensional datasets. In this chapter, you'll learn how to use Principal Component Analysis (PCA) to effectively reduce the dimensionality of such datasets so that it becomes easier to extract actionable insights from them.\n  ",
           "parts":[
              "The Curse of Dimensionality",
              "Why reduce dimensionality?",
              "Exploring multivariate data",
              "Getting PCA to work with FactoMineR",
              "PCA with FactoMineR",
              "Exploring PCA()",
              "PCA with ade4",
              "Interpreting and visualising PCA models",
              "Plotting cos2",
              "Plotting contributions",
              "Biplots and their ellipsoids",
              "Proximity of variables in a 2-D PCA plot"
           ]
        },
        {
           "title":"\n          Advanced PCA & Non-negative matrix factorization (NNMF)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here, you'll build on your knowledge of PCA by tackling more advanced applications, such as dealing with missing data. You'll also become familiar with another essential dimensionality reduction technique called Non-negative matrix factorization (NNMF) and how to use it in R.\n  ",
           "parts":[
              "Determining the right number of PCs",
              "The Kaiser-Guttman rule and the Scree test",
              "Parallel Analysis with paran()",
              "Performing PCA on datasets with missing values",
              "Why is mean imputation problematic?",
              "Estimating missing values with missMDA",
              "N-NMF and topic detection with nmf()",
              "Topic detection with N-NMF: Part I",
              "Topic detection with N-NMF: Part II",
              "Trying different N-NMF algorithms"
           ]
        },
        {
           "title":"\n          Exploratory factor analysis (EFA)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Become familiar with exploratory factor analysis (EFA), another dimensionality reduction technique that is a natural extension to PCA.\n  ",
           "parts":[
              "Intro to EFA",
              "EFA's model",
              "The Humor Styles Questionnaire dataset",
              "Intro to EFA: Data factorability",
              "How Factorable is our Dataset?",
              "Move on or step out of EFA?",
              "Extraction methods",
              "EFA with MinRes and MLE",
              "EFA with Principal Axis Factoring",
              "Choosing the right number of factors",
              "Determining the number of factors",
              "Taking the actual decision"
           ]
        },
        {
           "title":"\n          Advanced EFA\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Round out your mastery of dimensionality reduction in R by extending your knowledge of EFA to cover more advanced applications.\n  ",
           "parts":[
              "Interpretation of EFA and factor rotation",
              "Rotating the extracted factors",
              "Which rotation method to choose?",
              "Interpretation of EFA and path diagrams",
              "Interpreting humor styles and visual aid",
              "Humor Styles and hidden factors",
              "EFA: Case study",
              "Factorability check",
              "Extracting and choosing the number of factors",
              "Factor rotation and interpretation",
              "Congratulations!",
              "When do we use each method?"
           ]
        }
     ],
     "prerequistes":[
        "Unsupervised Learning in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Spatial Analysis with sf and raster in R",
     "description":"Analyze spatial data using the sf and raster packages.",
     "detailDescription":"There has never been a better time to use R for spatial analysis! The brand new sf package has made working with vector data in R a breeze and the raster package provides a set of powerful and intuitive tools to work gridded data like satellite imagery. Instead of the painful process of performing your spatial analysis in GIS systems like ArcGIS or QGIS and then shuffling your results into another system for analysis you can move your entire spatial analysis workflow into R. In this course you will learn why the sf package is rapidly taking over spatial analysis in R. You will read in spatial data, manipulate vectors using the dplyr package and learn how to work with coordinate reference systems. You'll also learn how to perform geoprocessing of vectors including buffering, spatial joins, computing intersections, simplifying and measuring distance. With rasters you will aggregate, reclassify, crop, mask and extract. The last chapter of the course is devoted to showing you how to make maps in R with the ggplot2 and tmap packages and performing a fun mini-analysis that brings together all your new skills.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Vector and Raster Spatial Data in R\n        ",
           "index":"1",
           "description":"\n    An introduction to import/export, learning the formats and getting to know spatial data. Some discussion of why we're using sf rather than sp.\n  ",
           "parts":[
              "Reading vector and raster data into R",
              "Reading vector data",
              "Reading raster data",
              "Getting to know your vector data",
              "sf objects are data frames",
              "Geometry is stored in list-columns",
              "Extracting geometric information from your vector layers",
              "First look at plotting vector spatial objects",
              "Getting to know your raster data",
              "Learning about your raster objects",
              "Accessing raster data values",
              "Plot your raster object"
           ]
        },
        {
           "title":"\n          Preparing layers for spatial analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this lesson you will learn how to prepare layers so that you can conduct spatial analysis. This includes ensuring that the layers all share the same coordinate reference system.\n  ",
           "parts":[
              "A quick refresher on the coordinate reference system",
              "Vector and raster coordinate systems",
              "Transform your layers to a common CRS",
              "Plot vector and raster together",
              "Manipulating vector layers with dplyr",
              "Dropping geometry from a data frame",
              "Join spatial and non-spatial data",
              "Simplify the neighborhood boundaries",
              "Converting sf objects into sp objects and coordinates",
              "Converting sf objects to sp objects",
              "Converting to and from coordinates",
              "Manipulating raster layers",
              "Change the raster grid cell size using aggregate",
              "Change values and handle missing values in rasters"
           ]
        },
        {
           "title":"\n          Conducting spatial analysis with the sf and raster packages\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you have learned about sf and raster objects and have prepared your layers for analysis we can begin conducting true spatial analysis. Both sf and raster have a suite of functions that allow you to do single-layer kinds of analysis like buffering and computing hulls as well as multi-layer operations like intersections, overlaps, masking and clipping. \n  ",
           "parts":[
              "Buffers and centroids",
              "Buffer layers",
              "Compute polygon centroids",
              "Bounding boxes, dissolve features and create a convex hull",
              "Create a bounding box around vector data",
              "Dissolve multiple features into one",
              "Compute a convex hull around vectors",
              "Multi-layer geoprocessing and relationships",
              "Spatial joins",
              "Spatial relationships",
              "Measuring distance between features",
              "Geoprocessing with rasters",
              "Limit rasters to focus areas",
              "Crop a raster based on another spatial object",
              "Extract raster values by location",
              "Raster math with overlay"
           ]
        },
        {
           "title":"\n          Combine your new skills into a mini-analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You are now ready to combine your skills into a mini-analysis. The goal is to evaluate whether the average canopy density by NYC neighborhood is correlated with the number of trees by neighborhood and to create a nice plot of the result.\n  ",
           "parts":[
              "Compute tree  density and average tree canopy by neighborhood",
              "Compute tree density by neighborhood (I)",
              "Compute tree density by neighborhood (II)",
              "Compute average tree canopy by neighborhood",
              "First look at results with ggplot2",
              "Create plots using ggplot2",
              "Create a map using ggplot2",
              "Create final, polished maps with tmap",
              "Create a map using tmap",
              "Use tmap to create a final pretty map",
              "Wrap-up video"
           ]
        }
     ],
     "prerequistes":[
        "Visualizing Geospatial Data in R"
     ],
     "tracks":[
        "Spatial Data with R"
     ]
  },
  {
     "title":"Building Dashboards with flexdashboard",
     "description":"In this course you'll learn how to create static and interactive dashboards using flexdashboard and shiny.",
     "detailDescription":"Communication is a key part of the data science process. Dashboards are a popular way to present data in a cohesive visual display. In this course you'll learn how to assemble your results into a polished dashboard using the flexdashboard package. This can be as simple as adding a few lines of R Markdown to your existing code, or as rich as a fully interactive Shiny-powered experience. You will learn about the spectrum of dashboard creation tools available in R and complete this course with the ability to produce a professional quality dashboard.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Dashboard Layouts\n        ",
           "index":"1",
           "description":"\n    In this chapter you will learn how R Markdown and the flexdashboard package are used to create a dashboard, and how to customize the layout of components on your dashboard.\n  ",
           "parts":[
              "Welcome to the course!",
              "Components of a dashboard",
              "Anatomy of a flexdashboard",
              "Generating a dashboard",
              "Adding charts",
              "Layout basics",
              "Column widths",
              "Row orientation",
              "Advanced layouts",
              "Tabsets",
              "Pages",
              "Menus"
           ]
        },
        {
           "title":"\n          Data Visualization for Dashboards\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will introduce the many options for including data visualizations in your dashboard. You'll learn about how to optimize your plots for display on the web.\n  ",
           "parts":[
              "Graphs",
              "Static Graph",
              "Graph Sizing",
              "Web-friendly visualizations",
              "Static vs. web-friendly",
              "Make a plot web-friendly",
              "Explore web-friendly features",
              "htmlwidgets",
              "Add a leaflet map",
              "Add a leaflet map directly from dataframe"
           ]
        },
        {
           "title":"\n          Dashboard Components\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn about other components that will allow you to create a complete dashboard. This includes ways to present everything from a single value to a complete dataset.\n  ",
           "parts":[
              "Highlighting Single Values",
              "Create value box",
              "Create gauge",
              "Color indicators",
              "Linking",
              "Dashboard Tables",
              "Static table",
              "Web-friendly table",
              "DT::datatable",
              "Text for Dashboards",
              "Captions",
              "Captions with Inline Code",
              "Storyboards",
              "Storyboard Commentary"
           ]
        },
        {
           "title":"\n          Adding Interactivity with Shiny\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will demonstrate how you can use Shiny to make your dashboard interactive. You'll keep working with the San Francisco bike sharing data and build a dashboard for exploring this data set.\n  ",
           "parts":[
              "Incorporating Shiny into Dashboards",
              "What adding Shiny to a flexdashboard means",
              "Converting our flexdashboard to use Shiny",
              "The Reactive Dataframe Pattern",
              "Adding Sidebar",
              "Adding User Input",
              "Making the Dataframe Reactive",
              "Making a Chart React to Inputs",
              "Making All Charts React to Inputs",
              "Customized Inputs for Charts",
              "Apply Input to Single Chart",
              "Move Input to Chart Box",
              "Create Global Input Sidebar",
              "Course Recap"
           ]
        }
     ],
     "prerequistes":[
        "Building Web Applications with Shiny in R"
     ],
     "tracks":[
        "Shiny Fundamentals with R"
     ]
  },
  {
     "title":"Interactive Data Visualization with plotly in R",
     "description":"Learn to create interactive graphics entirely in R with plotly.",
     "detailDescription":"Interactive graphics allow you to manipulate plotted data to gain further insight. As an example, an interactive graphic would allow you to zoom in on a subset of your data without the need to create a new plot. In this course, you will learn how to create and customize interactive graphics in plotly using the R programming language. Along the way, you will review data visualization best practices and be introduced to new plot types such as scatterplot matrices and binned scatterplots.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to plotly\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will receive an introduction to basic graphics with plotly. You will create your first interactive graphics, displaying both univariate and bivariate distributions. Additionally, you will discover how to easily convert ggplot2 graphics to interactive plotly graphics. \n  ",
           "parts":[
              "What is plotly?",
              "A follow-up on the course intro",
              "Converting a ggplot2 scatterplot",
              "Univariate graphics",
              "Histograms",
              "Bar charts",
              "Bivariate graphics",
              "A first scatterplot",
              "A first stacked bar chart",
              "Boxplots"
           ]
        },
        {
           "title":"\n          Styling and customizing your graphics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to customize the appearance of your graphics and use opacity, symbol, and color to clarify your message. You will also learn how to transform axes, label your axes, and customize the hover information of your graphs.\n  ",
           "parts":[
              "Customize your traces",
              "Color and opacity",
              "Alternative color formats",
              "Size and symbol",
              "Thoughtful use of color",
              "Adding a third variable",
              "Beyond color: Symbols",
              "Transforming a color scale",
              "Hover info",
              "Removing a piece of hover info",
              "Adding to hoverinfo",
              "Custom hoverinfo",
              "Customizing your layout",
              "Polishing a scatterplot",
              "Matching a theme"
           ]
        },
        {
           "title":"\n          Advanced charts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you move past basic plotly charts to explore more-complex relationships and larger datasets. You will learn how to layer traces, create faceted charts and scatterplot matrices, and create binned scatterplots.\n  ",
           "parts":[
              "Layering traces",
              "Adding a linear smoother",
              "Overlayed density plots",
              "Subplots",
              "Manual faceting",
              "Automated faceting",
              "Plot and axis titles",
              "Polishing axis titles",
              "Scatterplot matrices",
              "Your first SPLOM",
              "Customizing color",
              "Tweaking the appearance",
              "Binned scatterplots",
              "Binning a scatterplot"
           ]
        },
        {
           "title":"\n          Case Study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, you use your plotly toolkit to explore the results of the 2018 United States midterm elections, learning how to create maps in plotly along the way.\n  ",
           "parts":[
              "Introduction to the 2018 election data",
              "Did voters turn out?",
              "Adding a reference line",
              "Which state had the highest turnout?",
              "How much was spent on Senate races?",
              "Which candidate spent the most?",
              "Choropleth maps",
              "Mapping change in voter turnout",
              "Mapping Senate winners",
              "Adding points to a map",
              "Geo layout",
              "From polygons to maps",
              "Mapping Senate winners, redux",
              "A county-level choropleth map",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Interactive Data Visualization in R"
     ]
  },
  {
     "title":"Cluster Analysis in R",
     "description":"Develop a strong intuition for how hierarchical and k-means clustering work and learn how to apply them to extract insights from your data.",
     "detailDescription":"Cluster analysis is a powerful toolkit in the data science workbench. It is used to find groups of observations (clusters) that share similar characteristics. These similarities can inform all kinds of business decisions; for example, in marketing, it is used to identify distinct groups of customers for which advertisements can be tailored. In this course, you will learn about two commonly used clustering methods - hierarchical clustering and k-means clustering. You won't just learn how to use these methods, you'll build a strong intuition for how they work and how to interpret their results. You'll develop this intuition by exploring three different datasets: soccer player positions, wholesale customer spending data, and longitudinal occupational wage data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Calculating distance between observations\n        ",
           "index":"1",
           "description":"\n    Cluster analysis seeks to find groups of observations that are similar to one another, but the identified groups are different from each other. This similarity/difference is captured by the metric called distance. In this chapter, you will learn how to calculate the distance between observations for both continuous and categorical features. You will also develop an intuition for how the scales of your features can affect distance.\n  ",
           "parts":[
              "What is cluster analysis?",
              "When to cluster?",
              "Distance between two observations",
              "Calculate & plot the distance between two players",
              "Using the dist() function",
              "Who are the closest players?",
              "The importance of scale",
              "Effects of scale",
              "When to scale data?",
              "Measuring distance for categorical data",
              "Calculating distance between categorical variables",
              "The closest observation to a pair"
           ]
        },
        {
           "title":"\n          Hierarchical clustering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will help you answer the last question from chapter 1 - how do you find groups of similar observations (clusters) in your data using the distances that you have calculated? You will learn about the fundamental principles of hierarchical clustering - the linkage criteria and the dendrogram plot - and how both are used to build clusters. You will also explore data from a  wholesale distributor in order to perform market segmentation of clients using their spending habits.\n  ",
           "parts":[
              "Comparing more than two observations",
              "Calculating linkage",
              "Revisited: The closest observation to a pair",
              "Capturing K clusters",
              "Assign cluster membership",
              "Exploring the clusters",
              "Validating the clusters",
              "Visualizing the dendrogram",
              "Comparing average, single & complete linkage",
              "Height of the tree",
              "Cutting the tree",
              "Clusters based on height",
              "Exploring the branches cut from the tree",
              "What do we know about our clusters?",
              "Making sense of the clusters",
              "Segment wholesale customers",
              "Explore wholesale customer clusters",
              "Interpreting the wholesale customer clusters"
           ]
        },
        {
           "title":"\n          K-means clustering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will build an understanding of the principles behind the k-means algorithm,  learn how to select the right k when it isn't previously known, and revisit the wholesale data from a different perspective.  \n  ",
           "parts":[
              "Introduction to K-means",
              "K-means on a soccer field",
              "K-means on a soccer field (part 2)",
              "Evaluating different values of K by eye",
              "Many K's many models",
              "Elbow (Scree) plot",
              "Interpreting the elbow plot",
              "Silhouette analysis: observation level performance",
              "Silhouette analysis",
              "Making sense of the K-means clusters",
              "Revisiting wholesale data: \"Best\" k",
              "Revisiting wholesale data: Exploration"
           ]
        },
        {
           "title":"\n          Case Study: National Occupational mean wage\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will apply the skills you have learned to explore how the average salary amongst professions have changed over time.  \n  ",
           "parts":[
              "Occupational wage data",
              "Initial exploration of the data",
              "Hierarchical clustering: Occupation trees",
              "Hierarchical clustering: Preparing for exploration",
              "Hierarchical clustering: Plotting occupational clusters",
              "Reviewing the HC results",
              "K-means: Elbow analysis",
              "K-means: Average Silhouette Widths",
              "The \"best\" number of clusters",
              "Review K-means results"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "Data Scientist with R",
        "Machine Learning Scientist with R",
        "Unsupervised Machine Learning with R"
     ]
  },
  {
     "title":"Foundations of Functional Programming with purrr",
     "description":"Learn to easily summarize and manipulate lists using the purrr package.",
     "detailDescription":"Lists can be difficult to both understand and manipulate, but they can pack a ton of information and are very powerful. In this course, you will learn to easily extract, summarize, and manipulate lists and how to export the data to your desired object, be it another list, a vector, or even something else! Throughout the course, you will work with the purrr package and a variety of datasets from the repurrrsive package, including data from Star Wars and Wes Anderson films and data collected about GitHub users and GitHub repos. Following this course, your list skills will be purrrfect!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Simplifying Iteration and Lists With purrr\n        ",
           "index":"1",
           "description":"\n    Iteration is a powerful way to make the computer do the work for you. It can also be an area of coding where it is easy to make lots of typos and simple mistakes. The purrr package helps simplify iteration so you can focus on the next step, instead of finding typos.\n  ",
           "parts":[
              "The power of iteration",
              "Introduction to iteration",
              "Iteration with purrr",
              "More iteration with for loops",
              "More iteration with purrr",
              "Subsetting lists; it's not that hard!",
              "Subsetting lists",
              "Subsetting list elements",
              "The many flavors of map()",
              "map() argument alternatives",
              "map_*"
           ]
        },
        {
           "title":"\n          More complex iterations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    purrr is much more than a for loop; it works well with pipes, we can use it to run models and simulate data, and make nested loops!\n  ",
           "parts":[
              "Working with unnamed lists",
              "Names & pipe refresher",
              "Setting names",
              "Pipes in map()",
              "More map()",
              "Simulating Data with Purrr",
              "Run a linear model",
              "map_chr()",
              "map_dbl() and map_int()",
              "map2() and pmap()",
              "Simulating data with multiple inputs using map2()",
              "Simulating data 3+ inputs with pmap()"
           ]
        },
        {
           "title":"\n          Troubleshooting lists with purrr\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Like anything in R, understanding how to troubleshoot issues is an important skill set. This can be particularly important with lists, where finding the problem can be tricky.\n  ",
           "parts":[
              "How to purrr safely()",
              "safely() replace with NA",
              "Convert data to numeric with purrr",
              "Finding the problem areas",
              "Another way to possibly() purrr",
              "Replace safely() with possibly()",
              "Convert values with possibly()",
              "purrr is a walk() in the park",
              "Comparing walk() vs no walk() outputs",
              "walk() for printing cleaner list outputs"
           ]
        },
        {
           "title":"\n          Problem solving with purrr\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you have the building blocks, we will start tackling some more complex data problems with purrr.\n  ",
           "parts":[
              "Using purrr in your workflow",
              "Name review",
              "Setting names",
              "Asking questions from a list",
              "Even more complex problems",
              "Questions about gh_repos",
              "Graphs in purrr",
              "ggplot() refresher",
              "purrr and scatterplots",
              "purrr and histograms",
              "Wrap Up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Intermediate Tidyverse Toolbox"
     ]
  },
  {
     "title":"Joining Data with data.table in R",
     "description":"This course will show you how to combine and merge datasets with data.table.",
     "detailDescription":"In the real world, data sets typically come split across many tables while most data analysis functions in R are designed to work with single tables of data. In this course, you'll learn how to effectively combine data sets into single tables using data.table. You'll learn how to add columns from one table to another table, how to filter a table based on observations in another table, and how to identify records across multiple tables matching complex criteria. Along the way, you'll learn how to troubleshoot failed join operations and best practices for working with complex data sets. After completing this course you'll be well on your way to be a data.table master!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Joining Multiple data.tables \n        ",
           "index":"1",
           "description":"\n    This chapter will show you how to perform simple joins that will enable you to combine information spread across multiple tables.\n  ",
           "parts":[
              "Welcome to the course",
              "Exploring data.tables",
              "Identifying join keys",
              "Multiple data.tables, multiple keys",
              "The merge function",
              "Inner join",
              "Full join",
              "Left and right joins",
              "Left join",
              "Right join",
              "Mastering simple joins"
           ]
        },
        {
           "title":"\n          Joins Using data.table Syntax\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will perform joins using the data.table syntax, set and view data.table keys, and perform anti-joins.\n  ",
           "parts":[
              "Joins using data.table syntax",
              "Right join with the data.table syntax",
              "Inner join with the data.table syntax",
              "Anti-joins",
              "Setting and viewing data.table keys",
              "Setting keys",
              "Getting keys",
              "Incorporating joins into your data.table workflow",
              "Exploring the Australian population",
              "Finding multiple matches",
              "Exploring world life expectancy"
           ]
        },
        {
           "title":"\n          Diagnosing and Fixing Common Join Problems\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will discuss common problems and errors encountered when performing data.table joins and show you how to troubleshoot and avoid them.\n  ",
           "parts":[
              "Complex keys",
              "Keys with different names",
              "Multi-column keys",
              "Multi-key, single-key",
              "Tricky columns",
              "Column name suffixes",
              "Joining a data.frame",
              "Duplicate matches",
              "Joining with missing values",
              "Filtering duplicates",
              "Joining and filtering duplicates"
           ]
        },
        {
           "title":"\n          Concatenating and Reshaping data.tables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the last chapter of this course you'll learn how to concatenate observations from multiple tables together, how to identify observations present in one table but not another, and how to reshape tables between long and wide formats.\n  ",
           "parts":[
              "Concatenating two or more data.tables",
              "Concatenating data.table variables",
              "Concatenating a list of data.tables",
              "Set operations",
              "Identifying observations shared by multiple tables",
              "Removing duplicates while combining tables",
              "Identifying observations unique to a table",
              "Melting data.tables",
              "Melting a wide table",
              "More melts",
              "Casting data.tables",
              "Casting a long table",
              "Casting multiple columns",
              "Splitting by multiple groups"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with data.table in R"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Manipulation with R"
     ]
  },
  {
     "title":"ChIP-seq with Bioconductor in R",
     "description":"Learn how to analyse and interpret ChIP-seq data with the help of Bioconductor using a human cancer dataset.",
     "detailDescription":"ChIP-seq analysis is an important branch of bioinformatics. It provides a window into the machinery that makes the cells in our bodies tick. Whether it is a brain cell helping you to read this web page or an immune cell patrolling your body for microorganisms that would make you sick, they all carry the same genome. What differentiates them are the genes that are active at any given time. Which genes these are is determined by a complex system of proteins that can activate and deactivate genes. When this regulatory machinery gets out of control, it can lead to cancer and other debilitating diseases. ChIP-seq analysis allows us to understand the function of regulatory proteins, how they can contribute to disease and can provide insights into how we may be able to intervene to prevent cells from spinning out of control. In this course, you will explore a real dataset while learning how to process and analyze ChIP-seq data in R.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to ChIP-seq\n        ",
           "index":"1",
           "description":"\n    Introduction to ChIP-seq experiments. Why are they interesting? What sort of phenomena can be studied with ChIP-seq and what can we learn from these experiments.\n  ",
           "parts":[
              "What is ChIP-seq?",
              "ChIP-seq recap",
              "Sequencing data",
              "Peak calls",
              "ChIP-seq Workflow",
              "Heat map",
              "Genes that make a difference",
              "ChIP-seq results summary",
              "Understanding ChIP-seq data"
           ]
        },
        {
           "title":"\n          Back to Basics - Preparing ChIP-seq data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now the ChIP-seq analysis begins in earnest. This chapter introduces Bioconductor tools to import and clean the data.\n  ",
           "parts":[
              "Importing data",
              "Reading BAM files",
              "Reading BED files",
              "Taking a closer look at peaks",
              "Plotting a region in detail",
              "Adding Annotations",
              "Cleaning ChIP-seq data",
              "Removing blacklisted regions",
              "Filtering reads",
              "Compare filtered data to raw reads",
              "Assessing enrichment",
              "Computing coverage",
              "Peaks vs background"
           ]
        },
        {
           "title":"\n          Comparing ChIP-seq samples\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces techniques to identify and visualise differences between ChIP-seq samples.\n  ",
           "parts":[
              "Introduction to differential binding",
              "Do these samples look the same to you?",
              "Clustering samples",
              "Visualising differences in protein binding",
              "Testing for differential binding",
              "Loading Read Counts",
              "Setting-up the model",
              "Fitting the model",
              "Revisiting PCA and Heat map",
              "A closer look at differential binding",
              "MA plot",
              "Volcano plot",
              "Summarising differences in protein binding"
           ]
        },
        {
           "title":"\n          From Peaks to Genes to Function\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Being able to identify differential binding between groups of samples is great, but what does it mean?  This chapter discusses strategies to interpret differential binding results to go from peak calls to biologically meaningful insights.\n  ",
           "parts":[
              "Interpreting ChIP-seq peaks",
              "Consolidating peaks",
              "Using Annotations",
              "Annotating peaks",
              "Which peaks are different?",
              "Interpreting Gene lists",
              "Associating peaks with genes",
              "Finding common themes",
              "Understanding the impact on pathways",
              "A closer look at pathways",
              "Advanced ChIP-seq analyses"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Introduction to Bioconductor in R"
     ],
     "tracks":[
        "Analyzing Genomic Data in R"
     ]
  },
  {
     "title":"Optimizing R Code with Rcpp",
     "description":"Use C++ to dramatically boost the performance of your R code.",
     "detailDescription":"R is a great language for data science, but sometimes the code can be slow to run. Combining the comfort of R with the speed of a compiled language is a great way to reclaim the performance your code deserves. C++ is a modern, high performance language that is simple enough to learn in the context of accelerating R code. With the help of the Rcpp package, C++ integrates very neatly with R. You will learn how to create and manipulate typical R objects (vectors and lists), and write your own C++ functions to dramatically boost the performance of your R code.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction\n        ",
           "index":"1",
           "description":"\n    Writing, benchmarking, and debugging your first C++ code.\n  ",
           "parts":[
              "Welcome to the course",
              "Benchmarking with microbenchmark",
              "Simple C++ Expressions with evalCpp",
              "Conversion between numbers using cast",
              "Inline functions with cppFunction",
              "First function",
              "Euclidean distance from 0",
              "Debugging",
              "Print to the console",
              "Error messages"
           ]
        },
        {
           "title":"\n          Functions and Control Flow\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Writing functions, controlling the flow with if and else, and learning to use the three kinds of loops in C++.\n  ",
           "parts":[
              "C++ functions belong to C++ files",
              "What happens when you compile this C++ file",
              "Boiler plate",
              "Writing functions in C++",
              "First function - again",
              "Exported and unexported functions",
              "R code in C++ files",
              "if and if/else",
              "For loops",
              "Calculating square roots with a for loop",
              "Breaking out of a for loop",
              "While loops",
              "Calculating square roots with a while loop",
              "Do it again: do-while loop"
           ]
        },
        {
           "title":"\n          Vector classes\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Manipulate and compute with Rcpp and native C++ vectors.\n  ",
           "parts":[
              "Rcpp classes and vectors",
              "First and last  values of a vector",
              "Indexing a vector",
              "Sum of double vector",
              "Creating vectors",
              "Sequence of integers",
              "Create vector with given values",
              "Vector cloning",
              "Weighted mean",
              "Weighted mean (C++ version)",
              "Handling of missing values",
              "Vectors from the STL",
              "Don't change the size of Rcpp vectors",
              "STL vectors"
           ]
        },
        {
           "title":"\n          Case Studies\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Use random numbers and write algorithms for applied time series models.\n  ",
           "parts":[
              "Random number generation",
              "Scalar random number generation",
              "Sampling from a mixture of distributions (I)",
              "Sampling from a mixture of distributions (II)",
              "Rolling operations",
              "Rolling means",
              "Rolling means (in C++)",
              "Last observation carried forward",
              "Mean carried forward",
              "Auto regressive model",
              "Simulate AR(p) model",
              "Simulate  MA(q) model",
              "ARMA (p, q) model",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Writing Functions in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Working with Dates and Times in R",
     "description":"Learn the essentials of parsing, manipulating and computing with dates and times in R.",
     "detailDescription":"Dates and times are abundant in data and essential for answering questions that start with when, how long, or how often. However, they can be tricky, as they come in a variety of formats and can behave in unintuitive ways. This course teaches you the essentials of parsing, manipulating, and computing with dates and times in R. By the end, you'll have mastered the lubridate package, a member of the tidyverse, specifically designed to handle dates and times. You'll also have applied your new skills to explore how often R versions are released, when the weather is good in Auckland (the birthplace of R), and how long monarchs ruled in Britain.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Dates and Times in R\n        ",
           "index":"1",
           "description":"\n    R doesn't know something is a date or time unless you tell it.  In this  chapter you'll learn about some of the ways R stores dates and times by exploring how often R versions are released, and how quickly people  download them.  You'll also get a sneak peek at what you'll learn in the  following chapters.\n  ",
           "parts":[
              "Introduction to dates",
              "Recognizing ISO 8601 dates",
              "Specifying dates",
              "Automatic import",
              "Why use dates?",
              "Plotting",
              "Arithmetic and logical operators",
              "What about times?",
              "Getting datetimes into R",
              "Datetimes behave nicely too",
              "Why lubridate?"
           ]
        },
        {
           "title":"\n          Parsing and Manipulating Dates and Times with lubridate\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Dates and times come in a huge assortment of formats, so your first hurdle is often to parse the format you have into an R datetime. This chapter  teaches you to import dates and times with the lubridate package. You'll also learn how to extract parts of a datetime. You'll practice by exploring the weather in R's birthplace, Auckland NZ.\n  ",
           "parts":[
              "Parsing dates with lubridate",
              "Selecting the right parsing function",
              "Specifying an order with `parse_date_time()`",
              "Weather in Auckland",
              "Import daily weather data",
              "Import hourly weather data",
              "Extracting parts of a datetime",
              "What can you extract?",
              "Adding useful labels",
              "Extracting for plotting",
              "Extracting for filtering and summarizing",
              "Rounding datetimes",
              "Practice rounding",
              "Rounding with the weather data"
           ]
        },
        {
           "title":"\n          Arithmetic with Dates and Times\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Getting datetimes into R is just the first step.  Now that you know how to parse datetimes, you need to learn how to do calculations with them.  In this chapter, you'll learn the different ways of representing spans of time with lubridate and how to leverage them to do arithmetic on datetimes. By the end of the chapter, you'll have calculated how long it's been since the first man stepped on the moon, generated sequences of dates to help schedule reminders, calculated when an eclipse occurs, and explored the reigns of monarch's of England (and which ones might have seen Halley's comet!).\n  ",
           "parts":[
              "Taking differences of datetimes",
              "How long has it been?",
              "How many seconds are in a day?",
              "Time spans.",
              "Adding or subtracting a time span to a datetime",
              "Duration or Period?",
              "Arithmetic with timespans",
              "Generating sequences of datetimes",
              "The tricky thing about months",
              "Intervals",
              "Examining intervals. Reigns of kings and queens",
              "Comparing intervals and datetimes",
              "Converting to durations and periods"
           ]
        },
        {
           "title":"\n          Problems in practice\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You now know most of what you need to tackle data that includes dates and  times, but there are a few other problems you might encounter in practice. In this final chapter you'll learn a little more about these problems by returning to some of the earlier data examples and learning how to  handle time zones, deal with times when you don't care about dates, parse dates quickly, and output dates and times.  \n  ",
           "parts":[
              "Time zones",
              "Setting the timezone",
              "Viewing in a timezone",
              "Timezones in the weather data",
              "Times without dates",
              "More on importing and exporting datetimes",
              "Fast parsing with fasttime",
              "Fast parsing with lubridate::fast_strptime",
              "Outputting pretty dates and times",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "Data Scientist with R",
        "R Programmer"
     ]
  },
  {
     "title":"Mixture Models in R",
     "description":"Learn mixture models: a convenient and formal statistical framework for probabilistic clustering and classification.",
     "detailDescription":"Mixture modeling is a way of representing populations when we are interested in their heterogeneity. Mixture models use familiar probability distributions (e.g. Gaussian, Poisson, Binomial) to provide a convenient yet formal statistical framework for clustering and classification. Unlike standard clustering approaches, we can estimate the probability of belonging to a cluster and make inference about the sub-populations. For example, in the context of marketing, you may want to cluster different customer groups and find their respective probabilities of purchasing specific products to better target them with custom promotions. When applying natural language processing to a large set of documents, you may want to cluster documents into different topics and understand how important each topic is across each document. In this course, you will learn what Mixture Models are, how they are estimated, and when it is appropriate to apply them!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Mixture Models\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will be introduced to fundamental concepts in model-based clustering and how this approach differs from other clustering techniques. You will learn the generating process of Gaussian Mixture Models as well as how to visualize the clusters.\n  ",
           "parts":[
              "Introduction to model-based clustering",
              "Clustering approaches",
              "Explore gender data",
              "Gaussian distribution",
              "Sampling a Gaussian distribution",
              "(not so good) Estimations of the mean and sd",
              "Gaussian mixture models (GMM)",
              "Simulate a mixture of two Gaussian distributions",
              "Plot histogram of Gaussian Mixture",
              "Mixture of three Gaussian distributions"
           ]
        },
        {
           "title":"\n          Structure of Mixture Models and Parameters Estimation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will be introduced to the main structure of Mixture Models, how to address different data with this approach and how to estimate the parameters involved. To accomplish the estimation, you will learn an iterative method called Expectation-Maximization algorithm.\n  ",
           "parts":[
              "Structure of mixture models",
              "Which probability distribution?",
              "Handwritten digits dataset",
              "Parameters estimation",
              "Estimation given the probabilities",
              "Calculating the probabilities",
              "EM algorithm",
              "Expectation function",
              "Maximization function",
              "Apply the two steps",
              "Plot the estimated clusters"
           ]
        },
        {
           "title":"\n          Mixture of Gaussians with `flexmix`\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter shows how to fit Gaussian Mixture Models in 1 and 2 dimensions with `flexmix` package. The data used is formed by 10.000 observations of people with their weight, height, body mass index and informed gender.\n  ",
           "parts":[
              "Univariate Gaussian Mixture Models",
              "Number of clusters",
              "Number of parameters",
              "Univariate Gaussian Mixture Models with flexmix",
              "Univariate case with flexmix",
              "Extracting Parameters for Univariate Case",
              "Visualizing Univariate Gaussian Mixture Model",
              "Compare the results",
              "Bivariate Gaussian Mixture Models",
              "Cross-term from covariance matrix",
              "Parameters in the bivariate case",
              "Bivariate Gaussian Mixture Models with flexmix",
              "Fit the model with cross-terms",
              "Get the components",
              "Create the ellipses",
              "Visualize the clusters"
           ]
        },
        {
           "title":"\n          Mixture Models Beyond Gaussians\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this module, you will learn how Mixture Models extends to consider probability distributions different from the Gaussian and how these models are fitted with `flexmix`. The datasets used are handwritten digits images and the number of crimes in Chicago city. For the first dataset you will find clusters that summarize the handwritten digits and for the second dataset, you will find clusters of communities where is more or less dangerous to live in.\n  ",
           "parts":[
              "Bernoulli Mixture Models",
              "Binary images",
              "How many values?",
              "Bernoulli Mixture Models with flexmix",
              "Handwritten digits with `flexmix`",
              "Poisson Mixture Models",
              "Discover the lambda",
              "Sample from Poisson distribution",
              "Poisson Mixture Models with flexmix",
              "Crimes data with `flexmix`"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Introduction to the Tidyverse",
        "Foundations of Probability in R"
     ],
     "tracks":[
        "Probability and Distributions with R"
     ]
  },
  {
     "title":"Analyzing Survey Data in R",
     "description":"Learn survey design using common design structures followed by visualizing and analyzing survey results.",
     "detailDescription":"You've taken a survey (or 1000) before, right? Have you ever wondered what goes into designing a survey and how survey responses are turned into actionable insights? Of course you have! In Analyzing Survey Data in R, you will work with surveys from A to Z, starting with common survey design structures, such as clustering and stratification, and will continue through to visualizing and analyzing survey results. You will model survey data from the National Health and Nutrition Examination Survey using R's survey and tidyverse packages. Following the course, you will be able to successfully interpret survey results and finally find the answers to life's burning questions!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to survey data\n        ",
           "index":"1",
           "description":"\n    Our exploration of survey data will begin with survey weights.  In this chapter, we will learn what survey weights are and why they are so important in survey data analysis.  Another unique feature of survey data are how they were collected via clustering and stratification.  We'll practice specifying and exploring these sampling features for several survey datasets.\n  ",
           "parts":[
              "What are survey weights?",
              "Survey weights",
              "Visualizing the weights",
              "Specifying elements of the design in R",
              "Designs in R",
              "Stratified designs in R",
              "Cluster designs in R",
              "Comparing survey weights of different designs",
              "Visualizing the impact of survey weights",
              "NHANES weights",
              "Tying it all together!"
           ]
        },
        {
           "title":"\n          Exploring categorical data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that we have a handle of survey weights, we will practice incorporating those weights into our analysis of categorical data in this chapter.  We'll conduct descriptive inference by calculating summary statistics, building summary tables, and constructing bar graphs.  For analytic inference, we will learn to run chi-squared tests.\n  ",
           "parts":[
              "Visualizing a categorical variable",
              "Summarizing a categorical variable",
              "Interpreting frequency tables",
              "Graphing a categorical variable",
              "Exploring two categorical variables",
              "Creating contingency tables",
              "Building segments bar graphs",
              "Summarizing with svytotal()",
              "Interpreting svymean()",
              "Inference for categorical variables",
              "Running a chi squared test",
              "Tying it all together!"
           ]
        },
        {
           "title":"\n          Exploring quantitative data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Of course not all survey data are categorical and so in this chapter, we will explore analyzing quantitative survey data.  We will learn to compute survey-weighted statistics, such as the mean and quantiles. For data visualization, we'll construct bar-graphs, histograms and density plots.  We will close out the chapter by conducting analytic inference with survey-weighted t-tests.\n  ",
           "parts":[
              "Summarizing quantitative data",
              "Survey statistics",
              "Estimating quantiles",
              "Visualizing quantitative data",
              "Bar plots of survey-weighted means",
              "Output of svyby()",
              "Bar plots with error",
              "Survey-weighted histograms",
              "Survey-weighted density plots",
              "Inference for quantitative data",
              "Survey-weighted t-test",
              "Tying it all together!"
           ]
        },
        {
           "title":"\n          Modeling quantitative data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    To model survey data also requires careful consideration of how the data were collected.  We will start our modeling chapter by learning how to incorporate survey weights into scatter plots through aesthetics such as size, color, and transparency.  We'll model the survey data with linear regression and will explore how to incorporate categorical predictors and polynomial terms into our models.\n  ",
           "parts":[
              "Visualization with scatter plots",
              "Bubble plots",
              "Survey-weighted scatter plots",
              "Use of color in scatter plots",
              "Visualizing trends",
              "Line of best fit",
              "Trend lines",
              "Modeling survey data",
              "Regression model",
              "Regression inference",
              "More complex modeling",
              "Multiple linear regression",
              "Tying it all together",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse",
        "Foundations of Inference"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Bayesian Regression Modeling with rstanarm",
     "description":"Learn how to leverage Bayesian estimation methods to make better inferences about linear regression models.",
     "detailDescription":"Bayesian estimation offers a flexible alternative to modeling techniques where the inferences depend on p-values. In this course, you’ll learn how to estimate linear regression models using Bayesian methods and the rstanarm package. You’ll be introduced to prior distributions, posterior predictive model checking, and model comparisons within the Bayesian framework. You’ll also learn how to use your estimated model to make predictions for new data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Bayesian Linear Models\n        ",
           "index":"1",
           "description":"\n    A review of frequentist regression using lm(), an introduction to Bayesian regression using stan_glm(), and a comparison of the respective outputs.\n  ",
           "parts":[
              "Non-Bayesian Linear Regression",
              "Exploring the data",
              "Fitting a frequentist linear regression",
              "Bayesian Linear Regression",
              "Fitting a Bayesian linear regression",
              "Convergence criteria",
              "Assessing model convergence",
              "Comparing frequentist and Bayesian methods",
              "Difference between frequentists and Bayesians",
              "Creating credible intervals"
           ]
        },
        {
           "title":"\n          Modifying a Bayesian Model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to modify your Bayesian model including changing the number and length of chains, changing prior distributions, and adding predictors.\n  ",
           "parts":[
              "What's in a Bayesian Model?",
              "Altering chains",
              "Do I have enough iterations?",
              "Prior Distributions",
              "Determine Prior Distributions",
              "Calculate Adjusted Scales",
              "Unadjusted Priors",
              "User Specified Priors",
              "Changing Priors",
              "Specifying informative priors",
              "Consequences of informative priors",
              "Tuning Model for Stability",
              "Altering the Estimation"
           ]
        },
        {
           "title":"\n          Assessing Model Fit\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we'll learn how to determine if our estimated model fits our data and how to compare competing models.\n  ",
           "parts":[
              "Using the R Squared Statistic",
              "Calculating Frequentist R-squared",
              "R-squared for a Bayesian Model",
              "Posterior Predictive Model Checks",
              "Predicted score distributions",
              "Distributions for a single observation",
              "Model Fit With Posterior Predictive Model Checks",
              "R-squared Posterior",
              "Posterior Predictive Testing",
              "Bayesian Model Comparisons",
              "Calculating the LOO estimate",
              "Comparing models"
           ]
        },
        {
           "title":"\n          Presenting and Using a Bayesian Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we'll learn how to use the estimated model to create visualizations of your model and make predictions for new data.\n  ",
           "parts":[
              "Visualizing a Bayesian Model",
              "Plotting a Bayesian model",
              "Plotting Model Uncertainty",
              "Making Predictions",
              "Popularity for Observed Songs",
              "Popularity for New Songs",
              "Visualizing Predictions",
              "Format prediction posteriors",
              "Visualize New Predictions",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Multiple and Logistic Regression in R",
        "Bayesian Modeling with RJAGS",
        "Introduction to Data Visualization with ggplot2"
     ],
     "tracks":[
        "Machine Learning Scientist with R"
     ]
  },
  {
     "title":"Intermediate Functional Programming with purrr",
     "description":"Continue learning with purrr to create robust, clean, and easy to maintain iterative code.",
     "detailDescription":"Have you ever been wondering what the purrr description (“A functional programming toolkit for R”) refers to? Then, you’ve come to the right place! This course will walk you through the functional programming part of purrr - in other words, you will learn how to take full advantage of the flexibility offered by the .f in map(.x, .f) to iterate other lists, vectors and data.frame with a robust, clean, and easy to maintain code. During this course, you will learn how to write your own mappers (or lambda functions), and how to use predicates and adverbs. Finally, this new knowledge will be applied to a use case, so that you’ll be able to see how you can use this newly acquired knowledge on a concrete example of a simple nested list, how to extract, keep or discard elements, how to compose functions to manipulate and parse results from this list, how to integrate purrr workflow inside other functions, how to avoid copy and pasting with purrr functional tools.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Programming with purrr\n        ",
           "index":"1",
           "description":"\n    Do lambda functions, mappers, and predicates sound scary to you? Fear no more! After refreshing your purrr memory, we will dive into functional programming 101, discover anonymous functions and predicates, and see how we can use them to clean and explore data. \n  ",
           "parts":[
              "purrr basics - a refresher",
              "Refreshing your purrr memory",
              "Another purrr refresher",
              "Introduction to mappers",
              "Creating lambda functions",
              "Lambda functions",
              "Using mappers to clean up your data",
              "Clean up your data with keep",
              "Split up with keep() and discard()",
              "Predicates",
              "What is a predicate?",
              "Exploring data with predicates"
           ]
        },
        {
           "title":"\n          Functional programming: from theory to practice\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Ready to go deeper with functional programming and purrr? In this chapter, we'll discover the concept of functional programming, explore error handling using including safely() and possibly(), and introduce the function compact() for cleaning your code.\n  ",
           "parts":[
              "Functional programming in R",
              "Everything that happens is a function call",
              "Identifying pure functions",
              "Tools for functional programming in purrr",
              "Safe iterations",
              "Create a function",
              "Using possibly()",
              "A possibly() version of read_lines()",
              "Everything in one call",
              "Handling adverb results",
              "Purrrfecting our function",
              "Extracting status codes with GET()"
           ]
        },
        {
           "title":"\n          Better code with purrr\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we'll use purrr to write code that is clearer, cleaner, and easier to maintain. We'll learn how to write clean functions with compose() and negate().  We'll also use partial() to compose functions by \"prefilling\" arguments from existing functions. Lastly, we'll introduce list-columns, which are a convenient data structure that helps us write clean code using the Tidyverse.\n  ",
           "parts":[
              "Why cleaner code?",
              "How to write compose()",
              "Back to the office",
              "Building functions with compose() and negate()",
              "Build a function",
              "Count the NA",
              "Prefilling functions",
              "A content extractor",
              "Another extractor",
              "List columns",
              "About list-columns",
              "Create a list-column data.frame"
           ]
        },
        {
           "title":"\n          Case study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We'll wrap up everything we know about purrr in a case study. Here, we'll use purrr to analyze data that has been scraped from Twitter. We'll use clean code to organize the data and then we'll identify Twitter influencers from the 2018 RStudio conference.\n  ",
           "parts":[
              "Discovering the dataset",
              "Playing with tweets, round 1",
              "Identify profiles",
              "Extracting information from the dataset",
              "Counting favorites",
              "Extracting mentions",
              "Manipulating URLs",
              "Analyzing URLs",
              "Playing with URLs",
              "Identifying influencers",
              "Splitting the dataset",
              "We have a winner!",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Foundations of Functional Programming with purrr"
     ],
     "tracks":[
        "Intermediate Tidyverse Toolbox"
     ]
  },
  {
     "title":"Factor Analysis in R",
     "description":"Explore latent variables, such as personality using exploratory and confirmatory factor analyses.",
     "detailDescription":"The world is full of unobservable variables that can't be directly measured. You might be interested in a construct such as math ability, personality traits, or workplace climate. When investigating constructs like these, it's critically important to have a model that matches your theories and data. This course will help you understand dimensionality and show you how to conduct exploratory and confirmatory factor analyses. With these statistical techniques in your toolkit, you'll be able to develop, refine, and share your measures. These analyses are foundational for diverse fields including psychology, education, political science, economics, and linguistics.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Evaluating your measure with factor analysis\n        ",
           "index":"1",
           "description":"\n    In Chapter 1, you will learn how to conduct an EFA to examine the statistical properties of a measure designed around one construct.\n  ",
           "parts":[
              "Introduction to Exploratory Factor Analysis (EFA)",
              "Starting out with a unidimensional EFA",
              "Viewing and visualizing the factor loadings",
              "Interpreting individuals' factor scores",
              "Overview of the measure development process",
              "Descriptive statistics of your dataset",
              "Splitting your dataset",
              "Comparing the halves of your dataset",
              "Measure features: Correlations and reliability",
              "Viewing and testing correlations",
              "Internal reliability",
              "When to use EFA"
           ]
        },
        {
           "title":"\n          Multidimensional EFA\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will show you how to extend the single-factor EFA you learned in Chapter 1 to multidimensional data.\n  ",
           "parts":[
              "Determining dimensionality",
              "Splitting the BFI dataset",
              "Calculating eigenvalues",
              "Creating a scree plot",
              "Interpreting the scree plot",
              "Understanding multidimensional data",
              "Conducting a multidimensional EFA",
              "Interpreting the results",
              "Investigating model fit",
              "Interpret absolute model fit statistics",
              "Selecting the best model"
           ]
        },
        {
           "title":"\n          Confirmatory Factor Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will cover conducting CFAs with the sem package. Both theory-driven and EFA-driven CFA structures will be covered.\n  ",
           "parts":[
              "Setting up a CFA",
              "Creating CFA syntax from EFA results",
              "Creating CFA syntax from theory",
              "Understanding the sem() syntax",
              "Components of sem() syntax",
              "Run a CFA and interpret loadings",
              "Examine item loadings",
              "Investigating model fit",
              "Absolute fit statistics",
              "Relative fit statistics"
           ]
        },
        {
           "title":"\n          Refining your measure and/or model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will reinforce the difference between EFAs and CFAs and offer suggestions for improving your model and/or measure.\n  ",
           "parts":[
              "EFA vs. CFA revisited",
              "Differences in estimated factor loadings",
              "Plotting differences in persons' factor scores",
              "Adding loadings to improve fit",
              "Add loadings to improve fit",
              "Compare original model to model with added loadings",
              "Evaluate added loadings with relative fit stats",
              "Improving fit by removing loadings",
              "Remove loadings to improve fit",
              "Compare original model to model with deleted loadings",
              "Evaluate deleted loadings with relative fit stats",
              "Wrap-Up Video"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Foundations of Inference"
     ],
     "tracks":[
        "Unsupervised Machine Learning with R"
     ]
  },
  {
     "title":"Categorical Data in the Tidyverse",
     "description":"Get ready to categorize! In this course, you will work with non-numerical data, such as job titles or survey responses, using the Tidyverse landscape.",
     "detailDescription":"As a data scientist, you will often find yourself working with non-numerical data, such as job titles, survey responses, or demographic information. R has a special way of representing them, called factors, and this course will help you master working with them using the tidyverse package forcats. We’ll also work with other tidyverse packages, including ggplot2, dplyr, stringr, and tidyr and use real world datasets, such as the fivethirtyeight flight dataset and Kaggle’s State of Data Science and ML Survey. Following this course, you’ll be able to identify and manipulate factor variables, quickly and efficiently visualize your data, and effectively communicate your results. Get ready to categorize!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Factor Variables\n        ",
           "index":"1",
           "description":"\n    In this chapter, you’ll learn all about factors. You’ll discover the difference between categorical and ordinal variables, how R represents them, and how to inspect them to find the number and names of the levels. Finally, you’ll find how forcats, a tidyverse package, can improve your plots by letting you quickly reorder variables by their frequency.\n  ",
           "parts":[
              "Introduction to qualitative variables",
              "Recognizing factor variables",
              "Qualitative variables in theory",
              "Understanding your qualitative variables",
              "Getting number of levels",
              "Examining number of levels",
              "Examining levels",
              "Making better plots",
              "Reordering a variable by its frequency",
              "Ordering one variable by another"
           ]
        },
        {
           "title":"\n          Manipulating Factor Variables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You’ll continue to dive into the forcats package, learning how to change the order and names of levels and even collapse them into one another.\n  ",
           "parts":[
              "Reordering factors",
              "Changing the order of factor levels",
              "Tricks of fct_relevel()",
              "Renaming factor levels",
              "Distinguishing between forcats functions",
              "Renaming a few levels",
              "When you have a typo",
              "Collapsing factor levels",
              "Manually collapsing levels",
              "Lumping variables by proportion",
              "Preserving the most common levels"
           ]
        },
        {
           "title":"\n          Creating Factor Variables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Having gotten a good grasp of forcats, you’ll expand out to the rest of the tidyverse, learning and reviewing functions from dplyr, tidyr, and stringr. You’ll refine graphs with ggplot2 by changing axes to percentage scales, editing the layout of the text, and more.\n  ",
           "parts":[
              "Examining common themed variables",
              "Grouping and reshaping similar columns",
              "Summarizing data",
              "Creating an initial plot",
              "Tricks of ggplot2",
              "Editing plot text",
              "Reordering graphs",
              "Changing and creating variables with case_when()",
              "case_when() with single variable",
              "case_when() from multiple columns"
           ]
        },
        {
           "title":"\n          Case Study on Flight Etiquette\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you’ll take all that you’ve learned and apply it in a case study. You’ll learn more about working with strings and summarizing data, then replicate a publication quality 538 plot.\n  ",
           "parts":[
              "Case study introduction",
              "Changing characters to factors",
              "Tidying data",
              "Data preparation and regex",
              "Cleaning up strings",
              "Dichotomizing variables",
              "Summarizing data",
              "Recreating the plot",
              "Creating an initial plot",
              "Fixing labels",
              "Flipping things around",
              "Finalizing the chart",
              "End of course recap"
           ]
        }
     ],
     "prerequistes":[
        "Working with Data in the Tidyverse"
     ],
     "tracks":[
        "Data Analyst with R",
        "Tidyverse Fundamentals with R"
     ]
  },
  {
     "title":"Experimental Design in R",
     "description":"In this course you'll learn about basic experimental design, a crucial part of any data analysis.",
     "detailDescription":"Experimental design is a crucial part of data analysis in any field, whether you work in business, health or tech. If you want to use data to answer a question, you need to design an experiment! In this course you will learn about basic experimental design, including block and factorial designs, and commonly used statistical tests, such as the t-tests and ANOVAs. You will use built-in R data and real world datasets including the CDC NHANES survey, SAT Scores from NY Public Schools, and Lending Club Loan Data. Following the course, you will be able to design and analyze your own experiments!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Experimental Design\n        ",
           "index":"1",
           "description":"\n    An introduction to key parts of experimental design plus some power and sample size calculations.\n  ",
           "parts":[
              "Intro to Experimental Design",
              "A basic experiment",
              "Randomization",
              "Replication",
              "Blocking",
              "Hypothesis Testing",
              "One sided vs. Two-sided tests",
              "pwr package Help Docs exploration",
              "Power & Sample Size Calculations"
           ]
        },
        {
           "title":"\n          Basic Experiments\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Explore the Lending Club dataset plus build and validate basic experiments, including an A/B test.\n  ",
           "parts":[
              "Single & Multiple Factor Experiments",
              "Exploratory Data Analysis (EDA) Lending Club",
              "How does loan purpose affect amount funded?",
              "Which loan purpose mean is different?",
              "Multiple Factor Experiments",
              "Model Validation",
              "Pre-modeling EDA",
              "Post-modeling validation plots + variance",
              "Kruskal-Wallis rank sum test",
              "A/B Testing",
              "Which post-A/B test test?",
              "Sample size for A/B test",
              "Basic A/B test",
              "A/B tests vs. multivariable experiments"
           ]
        },
        {
           "title":"\n          Randomized Complete (& Balanced Incomplete) Block Designs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Use the NHANES data to build a RCBD and BIBD experiment, including model validation and design tips to make sure the BIBD is valid.\n  ",
           "parts":[
              "Intro to NHANES & Sampling",
              "NHANES dataset construction",
              "NHANES EDA",
              "NHANES Data Cleaning",
              "Resampling NHANES data",
              "Randomized Complete Block Designs (RCBD)",
              "Which is NOT a good blocking factor?",
              "Drawing RCBDs with Agricolae",
              "NHANES RCBD",
              "RCBD Model Validation",
              "Balanced Incomplete Block Designs (BIBD)",
              "Is a BIBD even possible?",
              "Drawing BIBDs with agricolae",
              "BIBD - cat's kidney function",
              "NHANES BIBD"
           ]
        },
        {
           "title":"\n          Latin Squares, Graeco-Latin Squares, & Factorial experiments\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Evaluate the NYC SAT scores data and deal with its missing values, then evaluate Latin Square, Graeco-Latin Square, and Factorial experiments.\n  ",
           "parts":[
              "Latin Squares",
              "NYC SAT Scores EDA",
              "Dealing with Missing Test Scores",
              "Drawing Latin Squares with agricolae",
              "Latin Square with NYC SAT Scores",
              "Graeco-Latin Squares",
              "NYC SAT Scores Data Viz",
              "Drawing Graeco-Latin Squares with agricolae",
              "Graeco-Latin Square with NYC SAT Scores",
              "Factorial Experiments",
              "NYC SAT Scores Factorial EDA",
              "Factorial Experiment with NYC SAT Scores",
              "Evaluating the NYC SAT Scores Factorial Model",
              "What's next in Experimental Design"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data in R",
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Statistician with R",
        "Statistics Fundamentals with R"
     ]
  },
  {
     "title":"Choice Modeling for Marketing in R",
     "description":"Learn to analyze and model customer choice data in R.",
     "detailDescription":"People make choices everyday. They choose products like orange juice or a car, decide who to vote for, and choose how to get to work. Marketers, retailers, product designers, political scientists, transportation planners, sociologists, and many others want to understand what drives these choices. Choice models predict what people will choose as a function of the features of the options available and can be used to make important product design decisions. This course will teach you how to organize choice data, estimate choice models in R and present findings. This course covers both analyses of observed real-world choices and the survey-based approach called conjoint analysis.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Quickstart Guide\n        ",
           "index":"1",
           "description":"\n    Our goal for this chapter is to get you through the entire choice modeling process as quickly as possible, so that you get a broad understanding of what we can do with choice models and how the choice modeling process works. The main idea here is that we can use a choice model to understand how customers' product choices depend on the features of those products. Do sportscar buyers prefer manual transmissions to automatic? By how much? In order to give you an overview, we will skip over many of the details. In later chapters, we will go back and cover important issues in preparing data, specifying and interpreting models and reporting your findings, so that you are fully prepared to use these methods with your own choice data.\n  ",
           "parts":[
              "Why choice?",
              "Choice data",
              "Inspecting choice data",
              "Finding the levels of a factor",
              "Inspecting a choice observation",
              "What did people choose?",
              "Fitting and interpreting a choice model",
              "Fitting a choice model",
              "Interpreting parameters",
              "Using choice models to make decisions",
              "Predicting choice shares",
              "Plotting choice shares"
           ]
        },
        {
           "title":"\n          Managing and Summarizing Choice Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    There are many different places to get choice data and different ways it can be formatted. In this chapter, we will take data that is provided in several alternative formats and learn how to get it into shape for choice modeling. We will also discuss how you can build a survey to collect your own choice data.\n  ",
           "parts":[
              "Assembling choice data",
              "How many choices do we have?",
              "Attributes and levels",
              "Inspect a single choice",
              "Converting from wide to long",
              "Convert from wide to long",
              "Sort the long data",
              "Change the Selection variable",
              "Choice data in two files",
              "Inspect a choice in two files",
              "Merging two files",
              "Visualizing choice data",
              "What types of chocolate do people choose?",
              "Do people choose lower prices?",
              "Designing a conjoint survey"
           ]
        },
        {
           "title":"\n          Building Choice Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we take deeper dive into estimating choice models. To give you a foundation for thinking about choice models, we will focus on how the multinomial logit model converts the product features into a prediction for what the decision maker will choose. This will give you a framework for making decisions about which features to include in your model.\n  ",
           "parts":[
              "Choice models - under the hood",
              "Create mlogit.data object",
              "Fit a choice model",
              "Remove the intercept",
              "Interpreting choice model parameters",
              "Which chocolate brand is most preferred?",
              "Computing willingness-to-pay",
              "Price as a factor",
              "Likelihood-ratio test",
              "Intercepts and interactions",
              "Interaction between brand and type",
              "Interaction between price and trial",
              "Predicting shares",
              "Predicting shares for the racer segment",
              "Predict shares for chocolate bars",
              "Plot shares for chocolate bars"
           ]
        },
        {
           "title":"\n          Hierarchical Choice Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Different people have different tastes and preferences. This seems intuitively obvious, but there is also extensive research in marketing showing that this is true. This chapter covers choice models where we assume that different decision makers have different preferences that influence their choices. When our models recognize that different consumers have different preferences, they tend to make larger share predictions for niche products that appeal to a subset of consumers. Hierarchical models are used in most commercial choice modeling applications, so it is important to understand how they work.\n  ",
           "parts":[
              "What is a hierarchical choice model?",
              "How many people answered the chocolate suvey?",
              "Chocolate model with random price coefficient",
              "Heterogeneity in preferences for other features",
              "Setting effects codes",
              "Chocolate model with all coefficients random",
              "Interpreting hierarchical model parameters",
              "How do people value white chocolate?",
              "Predicting shares with hierarchical models",
              "Predicting shares for chocolates",
              "Goodbye and good luck!"
           ]
        }
     ],
     "prerequistes":[
        "Multiple and Logistic Regression in R"
     ],
     "tracks":[
        "Marketing Analytics with R"
     ]
  },
  {
     "title":"Multivariate Probability Distributions in R",
     "description":"Learn to analyze, plot, and model multivariate data.",
     "detailDescription":"When working with data that contains many variables, we are often interested in studying the relationship between these variables using multivariate statistics. In this course, you'll learn ways to analyze these datasets. You will also learn about common multivariate probability distributions, including the multivariate normal, the multivariate-t, and some multivariate skew distributions. You will then be introduced to techniques for representing high dimensional data in fewer dimensions, including principal component analysis (PCA) and multidimensional scaling (MDS).",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Reading and plotting multivariate data\n        ",
           "index":"1",
           "description":"\n    In this introduction to multivariate data, you will learn how to read and summarize it. You will learn how to summarize multivariate data using descriptive statistics, such as the mean vector, variance-covariance, and correlation matrices. You'll then explore plotting techniques to provide insights into multivariate data.\n  ",
           "parts":[
              "Reading multivariate data",
              "Reading multivariate data using read.table",
              "Specifying datatypes for columns",
              "Mean vector and variance-covariance matrix",
              "Calculating the mean vector",
              "Calculating the variance-covariance matrix",
              "Calculating the correlation matrix",
              "Plotting multivariate data",
              "Pairs plot using base graphics and lattice",
              "Plotting multivariate data using ggplot",
              "3D plotting techniques"
           ]
        },
        {
           "title":"\n          Multivariate Normal Distribution\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will introduce you to the most important and widely used multivariate probability distribution, the multivariate normal. You will learn how to generate random samples from a multivariate normal distribution and how to calculate and plot the densities and probabilities under this distribution. You will also learn how to test if a dataset follows multivariate normality.\n  ",
           "parts":[
              "Multivariate normal distribution",
              "Samples from multivariate normal distributions",
              "Identify the distribution of a  normal sample",
              "Density of a multivariate normal distribution",
              "Calculating the density of multivariate normal",
              "Calculating dmvnorm over a grid",
              "Cumulative Distribution and Inverse CDF",
              "Using the pmvnorm  function",
              "Calculating probability contours using qmvnorm",
              "Checking normality of multivariate data",
              "Graphical tests for multivariate normality",
              "Numerical tests for multivariate normality",
              "Test multivariate normality by wine type"
           ]
        },
        {
           "title":"\n          Other Multivariate Distributions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces a host of probability distributions to model non-normal data. In particular, you will be introduced to multivariate t-distributions, which can model heavier tails and are a generalization of the univariate Student's t-distribution. You will be introduced to various skew distributions, which are specifically designed to model data that are right or left skewed.\n  ",
           "parts":[
              "Other common Multivariate distributions",
              "Generate samples from multivariate t-distribution",
              "Identify the distribution",
              "Density and cumulative density for multivariate-t",
              "Density of multivariate t-distribution",
              "Cumulative distributions and quantiles of t",
              "Comparing normal and t probabilities",
              "Multivariate skewed distributions",
              "Drawing samples from skew distributions",
              "Plotting and testing of skewed-densities",
              "Examine skewness from contour plot",
              "Parameter estimation for multivariate skew-normals"
           ]
        },
        {
           "title":"\n          Principal Component Analysis and Multidimensional Scaling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, you will be introduced to techniques for analyzing high dimensional data, including principal component analysis (PCA) and multidimensional scaling (MDS). You will also learn to implement these techniques by analyzing data.\n  ",
           "parts":[
              "Principal Component Analysis",
              "Number of PCs for the state.x77 dataset",
              "Using the princomp function",
              "Choosing the number of components",
              "Calculating the proportion of variation explained",
              "Choosing the number of PCs",
              "Number of components explaining 95% variation",
              "Number of PCs using scree plot",
              "Interpreting PCA attributes",
              "Loadings and scores for the PCs",
              "Visualizing PCA using the factoextra library",
              "Multi-dimensional scaling",
              "Multidimensional scaling in two dimensions",
              "Multidimensional scaling in three dimensions",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Foundations of Probability in R"
     ],
     "tracks":[
        "Probability and Distributions with R"
     ]
  },
  {
     "title":"Building Response Models in R",
     "description":"Learn to build simple models of market response to increase the effectiveness of your marketing plans.",
     "detailDescription":"Almost every company collects digital information as part of their marketing campaigns and uses it to improve their marketing tactics. Data scientists are often tasked with using this information to develop statistical models that enable marketing professionals to see if their actions are paying off. In this course, you will learn how to uncover patterns of marketing actions and customer reactions by building simple models of market response. In particular, you will learn how to quantify the impact of marketing variables, such as price and different promotional tactics, using aggregate sales and individual-level choice data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Response models for aggregate data\n        ",
           "index":"1",
           "description":"\n    The first chapter introduces you to the basic principles and concepts of market response models. Here, you will learn how to build simple response models for product sales. In addition, you will learn about the theoretical and practical differences between linear and non-linear models for sales responses.\n  ",
           "parts":[
              "Fundamentals of market response models",
              "Retail sales",
              "Understanding sales",
              "Linear response models",
              "A linear response model for sales",
              "Making predictions",
              "Predictive performance",
              "Nonlinear response models",
              "Linearizing nonlinear functions",
              "What 's the value added?"
           ]
        },
        {
           "title":"\n          Extended sales-response modeling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    An effective marketing strategy combines all the tools available to communicate the benefits of a product. The key is crafting the right mix of these tools to achieve sales increases and market share goals. In the second chapter, you will learn how to incorporate the effects of advertising and promotion in your sales-response model and how to identify the marketing strategy that is most likely to succeed.\n  ",
           "parts":[
              "Model extension part 1: Dummy variables",
              "Understanding dummy variables",
              "The effect of display on sales",
              "The effect of multiple dummies on sales",
              "What about price?",
              "Model extensions part 2: Dynamic variables",
              "How to lag?",
              "Adding lagged price effects",
              "More lags",
              "What's the value added?",
              "How many extensions are needed?",
              "Summarizing the model",
              "Unnecessary predictors",
              "Dropping predictors",
              "Eliminating predictors"
           ]
        },
        {
           "title":"\n          Response models for individual-level data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A company can only be successful in the market if its products have a competitive advantage over those of its rivals. To develop an effective marketing strategy in a competitive environment, it is essential to understand the interrelationship between marketing activity and customer behavior. In this chapter, you will learn how to explain the effects of temporary price changes on customer brand choice by employing logistic and probit response models.\n  ",
           "parts":[
              "Models for individual demand",
              "Customer purchases",
              "Summarizing the data",
              "Competition",
              "A linear probability model for beer demand",
              "Logistic response models",
              "A logistic model for beer demand",
              "Bounded predictions",
              "Average marginal effects",
              "Effect plots",
              "Probit response models",
              "A probit model for beer demand",
              "Logistic vs. probit",
              "Model comparison"
           ]
        },
        {
           "title":"\n          Extended choice modeling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The main goal of response modeling is to enable marketers to not only see a payoff for their actions today, but also tomorrow. In order to view this future payoff, a simple but reliable statistical model is required. In this last chapter, you will learn how to evaluate the predictive performance of logistic response models.\n  ",
           "parts":[
              "Model selection",
              "Extending the logistic response model",
              "Summarizing the model",
              "The deviance principle",
              "Eliminating predictors",
              "Predictive performance",
              "Classifications",
              "Model confusion",
              "ROC curves",
              "Model validation",
              "Subsetting",
              "Model training",
              "Out-of-sample testing",
              "Wrapping it up"
           ]
        }
     ],
     "prerequistes":[
        "Correlation and Regression in R"
     ],
     "tracks":[
        "Marketing Analytics with R"
     ]
  },
  {
     "title":"Bayesian Modeling with RJAGS",
     "description":"In this course, you'll learn how to implement more advanced Bayesian models using RJAGS.",
     "detailDescription":"The Bayesian approach to statistics and machine learning is logical, flexible, and intuitive. In this course, you will engineer and analyze a family of foundational, generalizable Bayesian models. These range in scope from fundamental one-parameter models to intermediate multivariate & generalized linear regression models. The popularity of such Bayesian models has grown along with the availability of computing resources required for their implementation. You will utilize one of these resources - the rjags package in R. Combining the power of R with the JAGS (Just Another Gibbs Sampler) engine, rjags provides a framework for Bayesian modeling, inference, and prediction.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Bayesian Modeling\n        ",
           "index":"1",
           "description":"\n    Bayesian models combine prior insights with insights from observed data to form updated, posterior insights about a parameter. In this chapter, you will review these Bayesian concepts in the context of the foundational Beta-Binomial model for a proportion parameter. You will also learn how to use the rjags package to define, compile, and simulate this model in R.\n  ",
           "parts":[
              "The prior model",
              "Simulating a Beta prior",
              "Comparing & contrasting Beta priors",
              "Which prior?",
              "Data & the likelihood",
              "Simulating the dependence of X on p",
              "Approximating the likelihood function",
              "Interpreting the likelihood function",
              "The posterior model",
              "Define, compile, and simulate",
              "Updating the posterior",
              "Influence of the prior & data on the posterior"
           ]
        },
        {
           "title":"\n          Bayesian Models & Markov Chains\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The two-parameter Normal-Normal Bayesian model provides a simple foundation for Normal regression models.  In this chapter, you will engineer the Normal-Normal and define, compile, and simulate this model using rjags.  You will also explore the magic of the Markov chain mechanics behind rjags simulation.\n  ",
           "parts":[
              "The Normal-Normal Model",
              "Normal-Normal priors",
              "Sleep study data",
              "Insights from the prior and data",
              "Simulating the Normal-Normal in RJAGS",
              "Define, compile, & simulate the Normal-Normal",
              "Posterior insights on sleep deprivation",
              "Markov chains",
              "Storing Markov chains",
              "Markov chain trace plots",
              "Markov chain density plots",
              "Markov chain diagnostics & reproducibility",
              "Multiple chains",
              "Naive standard errors",
              "Reproducibility"
           ]
        },
        {
           "title":"\n          Bayesian Inference & Prediction\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will extend the Normal-Normal model to a simple Bayesian regression model.  Within this context, you will explore how to use rjags simulation output to conduct posterior inference.  Specifically, you will construct posterior estimates of regression parameters using posterior means & credible intervals, you will test hypotheses using posterior probabilities, and you will construct posterior predictive distributions for new observations.\n  ",
           "parts":[
              "A simple Bayesian regression model",
              "Regression priors",
              "Visualizing the regression priors",
              "Weight & height data",
              "Bayesian regression in RJAGS",
              "Define, compile, & simulate the regression model",
              "Regression Markov chains",
              "Posterior estimation & inference",
              "Posterior point estimates",
              "Posterior credible intervals",
              "Posterior probabilities",
              "Posterior prediction",
              "Inference for the posterior trend",
              "Calculating posterior predictions",
              "Posterior predictive distribution"
           ]
        },
        {
           "title":"\n          Multivariate & Generalized Linear Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will generalize the simple Normal regression model for application in broader contexts. You will incorporate categorical predictors, engineer a multivariate regression model with two predictors, and finally extend this methodology to Poisson multivariate regression models for count variables.\n  ",
           "parts":[
              "Bayesian regression with a categorical predictor",
              "RailTrail sample data",
              "RJAGS simulation with categorical variables",
              "Interpreting categorical coefficients",
              "Inference for volume by weekday",
              "Multivariate Bayesian regression",
              "Re-examining the RailTrail data",
              "RJAGS simulation for multivariate regression",
              "Interpreting multivariate regression parameters",
              "Posterior inference for multivariate regression",
              "Bayesian Poisson regression",
              "RJAGS simulation for Poisson regression",
              "Plotting the Poisson regression model",
              "Inference for the Poisson rate parameter",
              "Poisson posterior prediction",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Fundamentals of Bayesian Data Analysis in R",
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Statistician with R"
     ]
  },
  {
     "title":"Nonlinear Modeling in R with GAMs",
     "description":"GAMs model relationships in data as nonlinear functions that are highly adaptable to different types of data science problems.",
     "detailDescription":"Generalized Additive Models are a powerful tool for both prediction and inference. More flexible than linear models, and more understandable than black-box methods, GAMs model relationships in data as nonlinear functions that are highly adaptable to different types of data and data science problems. In this course, you'll learn how GAMs work and how to construct them with the popular mgcv package. You'll learn how to interpret, explain and visualize your model results, and how to diagnose and fix model problems. You'll work with data sets that will show you how to apply GAMs to a variety of situations: automobile performance data for building mixed linear and nonlinear models, soil pollution data for building geospatial models, and consumer purchasing data for classification and prediction. By the end of this course, you'll have a toolbox for solving many data science problems.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Generalized Additive Models\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn how Generalized additive models work and how to use flexible, nonlinear functions to model data without over-fitting.  You will learn to use the gam() function in the mgcv package, and how to build multivariate models that mix nonlinear, linear, and categorical effects to data.\n  ",
           "parts":[
              "Introduction",
              "Motorcycle crash data: linear approach",
              "Motorcycle crash data: non-linear approach",
              "Parts of non-linear function",
              "Basis functions and smoothing",
              "Setting complexity of the motorcycle model",
              "Using smoothing parameters to avoid overfitting",
              "Complexity and smoothing together",
              "Multivariate GAMs",
              "Multivariate GAMs of auto performance",
              "Adding categorical to the auto performance model",
              "Category-level smooths for different auto types"
           ]
        },
        {
           "title":"\n          Interpreting and Visualizing GAMs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will take a closer look at the models you fit in chapter 1 and learn how to interpret and explain them.  You will learn how to make plots that show how different variables affect model outcomes.  Then you will diagnose problems in models arising from under-fitting the data or hidden relationships between variables, and how to iteratively fix those problems and get better results.\n  ",
           "parts":[
              "Interpreting GAM outputs",
              "Significance and linearity (I)",
              "Significance and linearity (II)",
              "Visualizing GAMs",
              "Plotting the motorcycle crash model and data",
              "Plotting multiple auto performance variables",
              "Visualizing auto performance uncertainty",
              "Model checking with gam.check()",
              "Reading model diagnostics",
              "Fixing problems with model diagnostics",
              "Checking concurvity",
              "Examining overall concurvity in auto data",
              "Examining concurvity between auto variables"
           ]
        },
        {
           "title":"\n          Spatial GAMs and Interactions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will extend the types of models you can fit to those with interactions of multiple variables.  You will fit models of geospatial data by using these interactions to model complex surfaces, and visualize those surfaces in 3D.  Then you will learn about interactions between smooth and categorical variables, and how to model interactions between very different variables like space and time.\n  ",
           "parts":[
              "Two-dimensional smooths and spatial data",
              "Modeling soil pollution in the Netherlands",
              "Adding more variables to predict soil pollution",
              "Plotting and interpreting GAM interactions",
              "Plotting the model surface",
              "Customizing 3D plots",
              "Extrapolation in surface plots",
              "Visualizing categorical-continuous interactions",
              "Soil pollution in different land uses",
              "Plotting pollution in different land uses",
              "Interactions with different scales: Tensors",
              "Pollution models with multi-scale interactions",
              "Teasing apart multi-scale interactions"
           ]
        },
        {
           "title":"\n          Logistic GAMs for Classification\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the first three chapters, you used GAMs for regression of continuous outcomes.  In this chapter, you will use GAMs for classification. You will build logistic GAMs to predict binary outcomes like customer purchasing behavior, learn to visualize this new type of model, make predictions, and learn how to explain the variables that influence each prediction.\n  ",
           "parts":[
              "Types of model outcomes",
              "Classifying purchasing behavior",
              "Purchase behavior with multiple smooths",
              "Visualizing logistic GAMs",
              "Visualizing influences on purchase probability",
              "Interpreting purchase effect plots (I)",
              "Interpreting purchase effect plots (II)",
              "Interpreting purchase effect plots (III)",
              "Making predictions",
              "Predicting purchase behavior and uncertainty",
              "Explaining individual behaviors",
              "Doing more with GAMs"
           ]
        }
     ],
     "prerequistes":[
        "Correlation and Regression in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Human Resources Analytics: Predicting Employee Churn in R",
     "description":"Predict employee turnover and design retention strategies.",
     "detailDescription":"Organizational growth largely depends on staff retention. Losing employees frequently impacts the morale of the organization and hiring new employees is more expensive than retaining existing ones. Good news is that organizations can increase employee retention using data-driven intervention strategies. This course focuses on data acquisition from multiple HR sources, exploring and deriving new features, building and validating a logistic regression model, and finally, show how to calculate ROI for a potential retention strategy.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction\n        ",
           "index":"1",
           "description":"\n    This chapter begins with a general introduction to employee churn/turnover and reasons for turnover as shared by employees. You will learn how to calculate turnover rate and explore turnover rate across different dimensions. You will also identify talent segments for your analysis and bring together relevant data from multiple HR data sources to derive more useful insights.\n  ",
           "parts":[
              "What is turnover?",
              "Objectives of employee turnover prediction",
              "Importing headcount and turnover data",
              "Exploring the data",
              "What proportion of employees have left?",
              "Which levels have high turnover rate?",
              "Is turnover rate different across locations?",
              "HR data architecture",
              "Filtering the dataset",
              "Combining HR datasets (I)",
              "Combining HR datasets (II)",
              "Master data overview"
           ]
        },
        {
           "title":"\n          Feature Engineering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will create new variables from existing data to explain employee turnover. You will analyze compensation data and create compa-ratio to measure pay equity of all employees. To identify the most important variables influencing turnover, you will use the concept of Information Value (IV).\n  ",
           "parts":[
              "Feature engineering",
              "Derive age difference",
              "Derive job hop index",
              "Derive employee tenure",
              "Compensation",
              "Exploring compensation",
              "Pay Gap",
              "Deriving Compa-ratio",
              "Deriving Compa-level",
              "Information value",
              "Calculating Information Value",
              "Which variables are important?"
           ]
        },
        {
           "title":"\n          Predicting Turnover\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will build a logistic regression model to predict turnover by taking into account multicollinearity among variables. \n  ",
           "parts":[
              "Data splitting",
              "Split the data",
              "Corroborate the splits",
              "Introduction to logistic regression",
              "Build your first logistic regression model",
              "Build a multiple logistic regression model",
              "Interpreting significance levels",
              "Multicollinearity",
              "Detecting multicollinearity",
              "Dealing with multicollinearity",
              "Building your final model",
              "Building final logistic regression model",
              "Understanding the model predictions",
              "Interpret the results"
           ]
        },
        {
           "title":"\n          Model Validation, HR Interventions, and ROI\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will calculate the accuracy of your model and categorize employees into specific risk buckets. You will then formulate an intervention strategy and calculate the ROI for this strategy.\n  ",
           "parts":[
              "Validating logistic regression results",
              "Create a confusion matrix",
              "Accuracy of your model",
              "Designing retention strategy",
              "Calculate turnover risk probability",
              "Creating turnover risk buckets",
              "What would you do?",
              "Return on investment",
              "Create salary hike range",
              "Calculate turnover rate across salary hike range",
              "Calculate ROI",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Human Resources Analytics: Exploring Employee Data in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Structural Equation Modeling with lavaan in R",
     "description":"Learn how to create and assess measurement models used to confirm the structure of a scale or questionnaire.",
     "detailDescription":"When working with data, we often want to create models to predict future events, but we also want an even deeper understanding of how our data is connected or structured. In this course, you will explore the connectedness of data using using structural equation modeling (SEM) with the R programming language using the lavaan package. SEM will introduce you to latent and manifest variables and how to create measurement models, assess measurement model accuracy, and fix poor fitting models. During the course, you will explore classic SEM datasets, such as the Holzinger and Swineford (1939) and Bollen (1989) datasets. You will also work through a multi-factor model case study using the Wechsler Adult Intelligence Scale. Following this course, you will be able to dive into your data and gain a much deeper understanding of how it all fits together.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          One-Factor Models\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will dive into creating your first structural equation model with lavaan. You will learn important terminology, how to build, and run models. You will create a one-factor model of mental test abilities using the classic Holzinger and Swineford (1939) dataset.\n  ",
           "parts":[
              "Model Specification",
              "Build Text Speed Model",
              "Build Political Democracy Model",
              "Model Analysis",
              "Analyze Text Speed Model",
              "Summarize Political Democracy",
              "Model Assessment",
              "Examine Standardized Loadings",
              "Explore Fit Indices",
              "Examine Political Democracy"
           ]
        },
        {
           "title":"\n          Multi-Factor Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will expand your skills in lavaan to creating multi-factor models. We will improve the one-factor models from the last chapter by creating multiple latent variables in the classic Holzinger and Swineford (1939) dataset.\n  ",
           "parts":[
              "Multifactor Specification",
              "Create a Zero df Model",
              "Fix the Zero df Model",
              "Build a Multi-Factor Model",
              "Summarize the Multi-Factor Model",
              "Model Structure",
              "Three-Factor Model with Zero Correlation",
              "Create a Direct Path",
              "Modification Indices",
              "Check Model Variance",
              "Examine Modification Indices",
              "Model Comparison",
              "Compare Two Models",
              "Select Specific Fit Indices"
           ]
        },
        {
           "title":"\n          Troubleshooting Model Errors and Diagrams\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Structural equation models do not always run smoothly, and in this chapter, you will learn how to troubleshoot Heywood cases which are common errors. You will also learn how to diagram your model in R using the semPlot library.\n  ",
           "parts":[
              "Heywood Cases on the Latent Variable",
              "Analyze a Latent Heywood Case",
              "Fix the Latent Heywood Model",
              "Heywood Cases on the Manifest Variables",
              "Analyze a Manifest Heywood Case",
              "Fix the Manifest Heywood Model",
              "Create Diagrams with semPaths()",
              "Basic SEM Diagram",
              "Edit the Layout",
              "Edit the Labels"
           ]
        },
        {
           "title":"\n          Full Example and an Extension\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter examines the WAIS-III IQ Scale and its structural properties. You will use your skills from the first three chapters to create various models of the WAIS-III, troubleshoot errors in those models, and create diagrams of the final model.\n  ",
           "parts":[
              "Model the WAIS-III IQ Scale",
              "Create a Four-Factor Model",
              "Update the Model",
              "Diagram the Final Model",
              "Update the WAIS-III Model",
              "Add Paths to Improve Fit",
              "Compare Models",
              "A Hierarchical Model of IQ",
              "Create a Hierarchical Model",
              "Diagram the Hierarchical Model",
              "Course Wrap Up"
           ]
        }
     ],
     "prerequistes":[
        "Multiple and Logistic Regression in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Data Privacy and Anonymization in R",
     "description":"Publicly release data sets with a differential privacy guarantee.",
     "detailDescription":"With social media and big data everywhere, data privacy has been a growing, public concern. Recognizing this issue, entities such as Google, Apple, and the US Census Bureau are promoting better privacy techniques; specifically differential privacy, a mathematical condition that quantifies privacy risk. In this course, you will learn to code basic data privacy methods and a differentially private algorithm based on various differentially private properties. With these tools in hand, you will learn how to generate a basic synthetic (fake) data set with the differential privacy guarantee for public data release.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Data Privacy\n        ",
           "index":"1",
           "description":"\n    This chapter covers some basic data privacy techniques that statisticians use to anonymize data. You'll first learn how to remove identifiers and then generate synthetic data from probability distributions.\n  ",
           "parts":[
              "Intro to Anonymization (I)",
              "Removing Names",
              "Rounding Salaries",
              "Intro to Anonymization (II)",
              "Generalization",
              "Bottom Coding",
              "summarize_at()",
              "count()",
              "Data Synthesis",
              "Binomial Distribution",
              "Normal Distribution"
           ]
        },
        {
           "title":"\n          Introduction to Differential Privacy\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    After covering the basic data privacy techniques, you'll learn conceptually about differential privacy as well as how to implement the most popular and common differentially private algorithm called the Laplace mechanism.\n  ",
           "parts":[
              "Differential Privacy",
              "Zero Privacy Budget",
              "Changing the Privacy Budget",
              "Less Privacy Protection",
              "Less Information Leakage",
              "Global Sensitivity",
              "Sensitivity of Counting and Proportion Queries",
              "Sensitivity of Mean and Variance Queries",
              "Laplace mechanism",
              "Counting Query",
              "Proportion Query",
              "Mean and Variance Queries"
           ]
        },
        {
           "title":"\n          Differentially Private Properties\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn the various properties of differential privacy, such as the combination rules and post-processing, to properly implement the Laplace mechanism for various kinds data questions.\n  ",
           "parts":[
              "Sequential Composition",
              "Value of Epsilon per the Sequential Composition",
              "Sequential Composition and Laplace mechanism",
              "Parallel Composition",
              "Value of Epsilon per the Parallel Composition",
              "Parallel Composition and Laplace mechanism",
              "Post-processing",
              "Setting Epsilon and Global Sensitivity",
              "Post-processing and Laplace mechanism",
              "Impossible and Inconsistent Answers",
              "Inconsistent answers",
              "Normalizing noise"
           ]
        },
        {
           "title":"\n          Differentially Private Data Synthesis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to release simple data sets publicly using differentially private data synthesis techniques.\n  ",
           "parts":[
              "Laplace Sanitizer",
              "Prepping for the Laplace sanitizer",
              "Applying the Laplace sanitizer",
              "Normalizing Noise and Generating Synthetic Data",
              "Parametric Approaches",
              "Prepping for the DP Binomial Distribution",
              "Generating Binomial Synthetic Data",
              "Prepping for the DP Normal Distribution",
              "Generating Normal Synthetic Data",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Foundations of Probability in R",
        "Introduction to the Tidyverse"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Differential Expression Analysis with limma in R",
     "description":"Learn to use the Bioconductor package limma for differential gene expression analysis.",
     "detailDescription":"Functional genomic technologies like microarrays, sequencing, and mass spectrometry enable scientists to gather unbiased measurements of gene expression levels on a genome-wide scale. Whether you are generating your own data or want to explore the large number of publicly available data sets, you will first need to learn how to analyze these types of experiments. In this course, you will be taught how to use the versatile R/Bioconductor package limma to perform a differential expression analysis on the most common experimental designs. Furthermore, you will learn how to pre-process the data, identify and correct for batch effects, visually assess the results, and perform enrichment testing. After completing this course, you will have general analysis strategies for gaining insight from any functional genomics study.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Differential Expression Analysis\n        ",
           "index":"1",
           "description":"\n    To begin, you'll review the goals of differential expression analysis, manage gene expression data using R and Bioconductor, and run your first differential expression analysis with limma.\n  ",
           "parts":[
              "Differential expression analysis",
              "Applications of differential expression analysis",
              "Differential expression data",
              "Create a boxplot",
              "The ExpressionSet class",
              "Create an ExpressionSet object",
              "Create a boxplot with an ExpressionSet object",
              "The limma package",
              "Specify a linear model to compare 2 groups",
              "Test for differential expression between 2 groups"
           ]
        },
        {
           "title":"\n          Flexible Models for Common Study Designs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to construct linear models to test for differential expression for common experimental designs.\n  ",
           "parts":[
              "Flexible linear models",
              "Design matrix for group-means model",
              "Contrasts matrix for group-means",
              "Test for differential expression for group-means",
              "Studies with more than two groups",
              "Design matrix for 3 groups",
              "Contrasts matrix for 3 groups",
              "Test for differential expression for 3 groups",
              "Factorial experimental design",
              "Design matrix for 2x2 factorial",
              "Contrasts matrix for 2x2 factorial",
              "Test for differential expression for 2x2 factorial"
           ]
        },
        {
           "title":"\n          Pre- and post-processing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you've learned how to perform differential expression tests, next you'll learn how to normalize and filter the feature data, check for technical batch effects, and assess the results.\n  ",
           "parts":[
              "Normalizing and filtering",
              "Normalize",
              "Filter genes",
              "Accounting for technical batch effects",
              "Visualize batch effects",
              "Remove batch effects",
              "Visualizing the results",
              "Histogram of p-values",
              "Volcano plot",
              "Enrichment testing",
              "KEGG pathways",
              "Gene ontology categories"
           ]
        },
        {
           "title":"\n          Case Study: Effect of Doxorubicin Treatment\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you'll use your new skills to perform an end-to-end differential expression analysis of a study that uses a factorial design to assess the impact of the cancer drug doxorubicin on the hearts of mice with different genetic backgrounds.\n  ",
           "parts":[
              "Pre-process the data",
              "Pre-process features",
              "Boxplot of Top2b",
              "Check sources of variation",
              "Model the data",
              "Design matrix",
              "Contrasts matrix",
              "Test for differential expression",
              "Inspect the results",
              "Histogram of p-values",
              "Volcano plot",
              "Pathway enrichment",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data in R"
     ],
     "tracks":[
        "Analyzing Genomic Data in R"
     ]
  },
  {
     "title":"Visualization Best Practices in R",
     "description":"Learn to effectively convey your data with an overview of common charts, alternative visualization types, and perception-driven style enhancements.",
     "detailDescription":"This course will help you take your data visualization skills beyond the basics and hone them into a powerful member of your data science toolkit. Over the lessons we will use two interesting open datasets to cover different types of data (proportions, point-data, single distributions, and multiple distributions) and discuss the pros and cons of the most common visualizations. In addition, we will cover some less common alternatives visualizations for the data types and how to tweak default ggplot settings to most efficiently and effectively get your message across.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Proportions of a whole\n        ",
           "index":"1",
           "description":"\n    In this chapter, we focus on visualizing proportions of a whole; we see that pie charts really aren't so bad, along with discussing the waffle chart and stacked bars for comparing multiple proportions.\n  ",
           "parts":[
              "Course/Grammar of Graphics Intro",
              "Familiarizing with disease data",
              "Warming up data-wrangling",
              "The Pie Chart and its friends",
              "The infamous P-I-E",
              "Cleaning up the pie",
              "How about a waffle?",
              "When to use bars",
              "Basic stacked bars",
              "Ordering stack for readability",
              "Categorical x-axis"
           ]
        },
        {
           "title":"\n          Point data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We shift our focus now to single-observation or point data and go over when bar charts are appropriate and when they are not, what to use when they are not, and general perception-based enhancements for your charts.\n  ",
           "parts":[
              "Point Data",
              "Are bars appropriate?",
              "Working with geom_col",
              "Wrangling geom_bar",
              "Point Charts",
              "Ordered point chart",
              "Adding visual anchors",
              "Faceting to show structure.",
              "Tuning your charts",
              "Let's flip some axes",
              "Cleaning up the bars",
              "Converting to point chart"
           ]
        },
        {
           "title":"\n          Single distributions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We now move on to visualizing distributional data, we expose the fragility of histograms, discuss when it is better to shift to a kernel density plots, and how to make both plots work best for your data.\n  ",
           "parts":[
              "Importance of distributions",
              "Orienting with the data",
              "Looking at all data",
              "Changing y-axis to density",
              "Histogram Nuances",
              "Adjusting the bin numbers",
              "More bars",
              "Bin width by context",
              "The kernel density estimator",
              "Histogram to KDE",
              "Putting a rug down",
              "KDE with lots of data"
           ]
        },
        {
           "title":"\n          Comparing distributions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Finishing off we take a look at comparing multiple distributions to each other. We see why the traditional box plots are very dangerous and how to easily improve them, along with investigating when you should use more advanced alternatives like the beeswarm plot and violin plots.\n  ",
           "parts":[
              "Intro to comparing distributions",
              "A simple boxplot",
              "Adding some jitter",
              "Faceting to show all colors",
              "Beeswarms and violins",
              "Your first beeswarm",
              "Fiddling with a violin plot",
              "Violins with boxplots",
              "Comparing lots of distributions",
              "Comparing spatially related distributions",
              "A basic ridgeline plot",
              "Cleaning up your ridgelines",
              "Making it rain (datapoints)",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data Visualization with ggplot2"
     ],
     "tracks":[
        "Data Visualization with R"
     ]
  },
  {
     "title":"Building Dashboards with shinydashboard",
     "description":"In this course you'll learn to build dashboards using the shinydashboard package.",
     "detailDescription":"Once you've started learning tools for building interactive web applications with shiny, this course will translate this knowledge into building dashboards. Dashboards, a common data science deliverable, are pages that collate information, often tracking metrics from a live-updating data source. You'll gain more expertise using shiny while learning to build and design these dynamic dashboards. In the process, you'll pick up tips to optimize performance as well as best practices to create a visually appealing product.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Building Static Dashboards\n        ",
           "index":"1",
           "description":"\n    In this chapter you will learn the basic structure of a Shiny Dashboard and how to fill it with static content.\n  ",
           "parts":[
              "Dashboard structure overview",
              "Create empty Header, Sidebar, and Body",
              "Create an empty Shiny Dashboard",
              "Dashboard Header overview",
              "Create message menus",
              "Create notification menus",
              "Create task menus",
              "Dashboard Sidebar and Body overview",
              "Create Sidebar tabs",
              "Create Body tabs",
              "Create tab boxes"
           ]
        },
        {
           "title":"\n          Building Dynamic Dashboards\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn how to add dynamic content to your Shiny Dashboard.\n  ",
           "parts":[
              "Reactive expression refresher",
              "Review selectInput and sliderInput",
              "Reactive expression practice",
              "Server-side dynamic how-to",
              "Read in real-time data",
              "View real-time data",
              "Optimizing performance",
              "How many times will this code run? (1)",
              "How many times will this code run? (2)",
              "Optimize this",
              "UI dynamic how-to",
              "Create reactive menu items",
              "Create reactive boxes"
           ]
        },
        {
           "title":"\n          Customizing Style\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will focus on customizing the style of your Shiny Dashboard.\n  ",
           "parts":[
              "Bootstrap explanation",
              "Create body with row-based layout",
              "Create body with column-based layout",
              "Create body with mixed layout",
              "Customizing the appearance",
              "Change the appearance of the dashboard",
              "Customize the body with CSS",
              "Icons, statuses, colors",
              "Incorporate icons",
              "Add some life to your layouts"
           ]
        },
        {
           "title":"\n          Case Study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will participate in a case study, practicing the skills you have acquired in the previous chapters.\n  ",
           "parts":[
              "Introduction to the NASA fireball data set",
              "Examine the variables in the data set",
              "Create a value box for the maximum velocity",
              "Create a value box for the maximum impact",
              "Create a value box for the maximum energy",
              "Dynamic refresher",
              "Make the value boxes dynamic",
              "Allow the user to input an alert threshold",
              "Create a dynamic plot of the location of fireballs",
              "Update the look of your new application",
              "Thank you!"
           ]
        }
     ],
     "prerequistes":[
        "Building Web Applications with Shiny in R"
     ],
     "tracks":[
        "Shiny Fundamentals with R"
     ]
  },
  {
     "title":"Modeling with Data in the Tidyverse",
     "description":"Explore Linear Regression in a tidy framework.",
     "detailDescription":"In this course, you will learn to model with data. Models attempt to capture the relationship between an outcome variable of interest and a series of explanatory/predictor variables. Such models can be used for both explanatory purposes, e.g. \"Does knowing professors' ages help explain their teaching evaluation scores?\", and predictive purposes, e.g., \"How well can we predict a house's price based on its size and condition?\" You will leverage your tidyverse skills to construct and interpret such models. This course centers around the use of linear regression, one of the most commonly-used and easy to understand approaches to modeling. Such modeling and thinking is used in a wide variety of fields, including statistics, causal inference, machine learning, and artificial intelligence.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Modeling\n        ",
           "index":"1",
           "description":"\n    This chapter will introduce you to some background theory and terminology for modeling, in particular, the general modeling framework, the difference between modeling for explanation and modeling for prediction, and the modeling problem. Furthermore, you'll start performing your first exploratory data analysis, a crucial first step before any formal modeling.\n  ",
           "parts":[
              "Background on modeling for explanation",
              "Exploratory visualization of age",
              "Numerical summaries of age",
              "Background on modeling for prediction",
              "Exploratory visualization of house size",
              "Log10 transformation of house size",
              "The modeling problem for explanation",
              "EDA of relationship of teaching & \"beauty\" scores",
              "Correlation between teaching and \"beauty\" scores",
              "The modeling problem for prediction",
              "EDA of relationship of house price and waterfront",
              "Predicting house price with waterfront"
           ]
        },
        {
           "title":"\n          Modeling with Basic Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Equipped with your understanding of the general modeling framework, in this chapter, we'll cover basic linear regression where you'll keep things simple and model the outcome variable y as a function of a single explanatory/ predictor variable x. We'll use both numerical and categorical x variables. The outcome variable of interest in this chapter will be teaching evaluation scores of instructors at the University of Texas, Austin.\n  ",
           "parts":[
              "Explaining teaching score with age",
              "Plotting a \"best-fitting\" regression line",
              "Fitting a regression with a numerical x",
              "Predicting teaching score using age",
              "Making predictions using \"beauty score\"",
              "Computing fitted/predicted values & residuals",
              "Explaining teaching score with gender",
              "EDA of relationship of score and rank",
              "Fitting a regression with a categorical x",
              "Predicting teaching score using gender",
              "Making predictions using rank",
              "Visualizing the distribution of residuals"
           ]
        },
        {
           "title":"\n          Modeling with Multiple Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapter, you learned about basic regression using either a single numerical or a categorical predictor. But why limit ourselves to using only one variable to inform your explanations/predictions? You will now extend basic regression to multiple regression, which allows for incorporation of more than one explanatory or one predictor variable in your models. You'll be modeling house prices using a dataset of houses in the Seattle, WA metropolitan area. \n  ",
           "parts":[
              "Explaining house price with year & size",
              "EDA of relationship",
              "Fitting a regression",
              "Predicting house price using year & size",
              "Making predictions using size and bedrooms",
              "Interpreting residuals",
              "Explaining house price with size & condition",
              "Parallel slopes model",
              "Interpreting the parallel slopes model",
              "Predicting house price using size & condition",
              "Making predictions using size and waterfront",
              "Automating predictions on \"new\" houses"
           ]
        },
        {
           "title":"\n          Model Assessment and Selection\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapters, you fit various models to explain or predict an outcome variable of interest. However, how do we know which models to choose? Model assessment measures allow you to assess how well an explanatory model \"fits\" a set of data or how accurate a predictive model is. Based on these measures, you'll learn about criteria for determining which models are \"best\". \n  ",
           "parts":[
              "Model selection and assessment",
              "Refresher: sum of squared residuals",
              "Which model to select?",
              "Assessing model fit with R-squared",
              "Computing the R-squared of a model",
              "Comparing the R-squared of two models",
              "Assessing predictions with RMSE",
              "Computing the MSE & RMSE of a model",
              "Comparing the RMSE of two models",
              "Validation set prediction framework",
              "Fitting model to training data",
              "Predicting on test data",
              "Conclusion - Where to go from here?"
           ]
        }
     ],
     "prerequistes":[
        "Working with Data in the Tidyverse"
     ],
     "tracks":[
        "Statistician with R",
        "Tidyverse Fundamentals with R"
     ]
  },
  {
     "title":"Business Process Analytics in R",
     "description":"Learn how to analyze business processes in R and extract actionable insights from enormous sets of event data.",
     "detailDescription":"Although you might not have realized, processes take up an indispensable role in our daily lives. Your actions and those of others generate an extensive amount of data. Whether you are ordering a book, a train crosses a red light, or your thermostat heats your bathroom, every second millions of events are taking place which are stored in data centers around the world. These enormous sets of event data can be used to gain insight into processes in a virtually unlimited range of fields. However, the analysis of this data requires its own set of specific formats and techniques. This course will introduce you to process mining with R and demonstrate the different steps needed to analyze business processes.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to process analysis\n        ",
           "index":"1",
           "description":"\n    The amount of event data has grown enormously during the last decades. A considerable amount of this data is recorded within the context of various business process. In this chapter, you will discover a methodology for analyzing process data, consisting of three stages: extraction, processing and analysis. You will have our first encounter with the specific elements of process data which are required for analysis, and have a first deep dive into the world of activities and traces, which will allow you to reveal of first glimpse of the process. \n  ",
           "parts":[
              "Introduction to process analytics",
              "Identify process elements",
              "Process Analysis Workflow",
              "Activities as cornerstones of processes",
              "Retrieve basic process information",
              "Explore activities",
              "The happy path",
              "Create process maps",
              "Components of process data",
              "Event data identifiers",
              "Constructing event data objects",
              "Inspecting event data objects"
           ]
        },
        {
           "title":"\n          Analysis techniques\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A process can be looked at from different angles: the control-flow, the performance and the organizational background. In this chapter, you will make a deep dive into each of     these perspectives. The control-flow refers to the different ways in which the process can be executed, and thus, how it is structured. Considering performance, we are both interested in     discovering how long things take, as well as when they take place. Finally, the organizational perspective looks at the actors in the process. \n  ",
           "parts":[
              "Organizational analysis",
              "Specialization of resources",
              "Detecting roles and specializations",
              "Involvement of resources",
              "Structuredness",
              "Process variants",
              "Rework",
              "Precedence matrix",
              "Performance analysis",
              "Eating habits",
              "Eating habits - Dotted chart",
              "Eat, sleep, repeat",
              "Linking perspectives",
              "The right person on the job I",
              "The right person on the job II",
              "The right person on the job faster"
           ]
        },
        {
           "title":"\n          Event data processing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Event data rarely comes in a form which is ready to analyze. Therefore, you often require a set of tools to get the data in the right shape, before we can answer our research question. At the end of this chapter, you will be familiar with three common preprocessing tasks: filtering data, aggregating events and enriching data. \n  ",
           "parts":[
              "Filtering cases",
              "The path well traveled",
              "The downside of rejections",
              "The downside of refusals",
              "Filtering events",
              "The vicious disapproval circle",
              "Working with high-paid R&D candidates",
              "Aggreggating events",
              "Disapprovals are disapprovals",
              "Zooming out",
              "Admiring the view",
              "Enriching events",
              "Everything has a cost",
              "Cost versus urgency"
           ]
        },
        {
           "title":"\n          Case study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter we will use everything we have learned so far to do and end-to-end analysis of an order-to-cash process. Firstly, we will transform data from various sources to an event log. Secondly, we will have a helicopter view of the process, exploring the dimensions of the data and the different activities, stages and flows in the process. Finally, we will combine preprocessing and analysis tools to formulate an answer to several research questions.\n  ",
           "parts":[
              "Preparing the event data",
              "Transforming Sales Data (1/3)",
              "Transforming Sales Data (2/3)",
              "Transforming Sales Data (3/3)",
              "Putting the process together",
              "Creating the event log",
              "Getting to know the process",
              "Examining Traces",
              "Zooming Out",
              "Roles and Rules",
              "Resource Roles",
              "The 4-Eye Principle",
              "Control-flow deviations",
              "Fast Production, Fast Delivery",
              "Throughput time analysis",
              "Course Recap"
           ]
        }
     ],
     "prerequistes":[
        "Working with Data in the Tidyverse"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Working with Data in the Tidyverse",
     "description":"Learn to work with data using tools from the tidyverse, and master the important skills of taming and tidying your data.",
     "detailDescription":"In this course, you'll learn to work with data using tools from the tidyverse in R. By data, we mean your own data, other people's data, messy data, big data, small data - any data with rows and columns that comes your way! By work, we mean doing most of the things that sound hard to do with R, and that need to happen before you can analyze or visualize your data. But work doesn't mean that it is not fun - you will see why so many people love working in the tidyverse as you learn how to explore, tame, tidy, and transform your data. Throughout this course, you'll work with data from a popular television baking competition called \"The Great British Bake Off.\"",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Explore your data\n        ",
           "index":"1",
           "description":"\n    You will start this course by learning how to read data into R. We'll begin with the readr package, and use it to read in data files organized in rows and columns. In the rest of the chapter, you'll learn how to explore your data using tools to help you view, summarize, and count values effectively. You'll see how each of these steps gives you more insights into your data. \n  ",
           "parts":[
              "Import your data",
              "Read a CSV file",
              "Assign missing values",
              "Know your data",
              "Arrange and glimpse",
              "Summarize your data",
              "Know your variable types",
              "Count with your data",
              "Distinct and count",
              "Count episodes",
              "Count bakers",
              "Plot counts"
           ]
        },
        {
           "title":"\n          Tame your data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn some basics of data taming, like how to tame your variable types, names, and values.\n  ",
           "parts":[
              "Cast column types",
              "Cast a column to a date",
              "Cast a column to a number",
              "Cast a column as a factor",
              "Recode values",
              "Recode a character variable",
              "Recode a numeric variable",
              "Select variables",
              "Combine functions with select",
              "Recode factor to plot",
              "Select and reorder variables",
              "Tame variable names",
              "Reformat variables",
              "Rename and subset variables",
              "Rename and reorder variables"
           ]
        },
        {
           "title":"\n          Tidy your data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that your data has been tamed, it is time to get tidy. In this chapter, you will get hands-on experience tidying data and combining multiple tidying functions together in a chain using the pipe operator. \n  ",
           "parts":[
              "Introduction to Tidy Data",
              "Tidy line-up",
              "Plot untidy data",
              "Gather",
              "Gather by hand",
              "Gather & plot",
              "Gather & plot non-sequential columns",
              "Separate",
              "Separate a column",
              "Unite columns",
              "Spread",
              "Spread rows into columns",
              "Tidy multiple sets of columns",
              "Masterclass: Tidy I",
              "Masterclass: Tidy II",
              "Masterclass: Tidy III"
           ]
        },
        {
           "title":"\n          Transform your data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to tame specific types of variables that are known to be tricky to work with, such as dates, strings, and factors. \n  ",
           "parts":[
              "Complex recoding with case_when",
              "Combine two variables",
              "Add another bin",
              "Factors",
              "Cast a factor and examine levels",
              "Plot factor counts",
              "Dates",
              "Cast characters as dates",
              "Calculate timespans",
              "Strings",
              "Wrangle a character variable",
              "Detect a string pattern",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data Visualization with ggplot2"
     ],
     "tracks":[
        "Importing & Cleaning Data with R",
        "Tidyverse Fundamentals with R"
     ]
  },
  {
     "title":"Human Resources Analytics: Exploring Employee Data in R",
     "description":"Manipulate, visualize, and perform statistical tests on HR data.",
     "detailDescription":"HR analytics, people analytics, workforce analytics -- whatever you call it, businesses are increasingly counting on their human resources departments to answer questions, provide insights, and make recommendations using data about their employees. In this course, you'll learn how to manipulate, visualize, and perform statistical tests on HR data through a series of HR analytics case studies.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Identifying the best recruiting source\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will get an introduction to how data science is used in a human resources context. Then you will dive into a case study where you'll analyze and visualize recruiting data to determine which source of new candidates ultimately produces the best new hires. The dataset you'll use in this and the other chapters in this course is synthetic, to maintain the privacy of actual employees.\n  ",
           "parts":[
              "Welcome to the course!",
              "Applications of human resources (HR) analytics",
              "Looking at the recruiting data",
              "Recruiting and quality of hire",
              "Identifying groups in data",
              "Sales numbers by recruiting source",
              "Attrition rates by recruiting source",
              "Visualizing the recruiting data",
              "Visualizing the sales performance differences",
              "Visualizing the attrition differences",
              "Drawing conclusions"
           ]
        },
        {
           "title":"\n          What is driving low employee engagement?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Gallup defines engaged employees as those who are involved in, enthusiastic about and committed to their work and workplace.  There is disagreement about the strength of the connection between employee engagement and business outcomes, but the idea is that employees that are more engaged will be more productive and stay with the organization longer. In this chapter, you'll  look into potential reasons that one department's engagement scores are lower than the rest.\n  ",
           "parts":[
              "Analyzing employee engagement",
              "Importing the survey data",
              "Which department has the lowest engagement?",
              "Comparing other factors by department",
              "Visualizing the engagement data",
              "Visualizing several variables at once",
              "Visualizing several variables at once with facets",
              "Drawing conclusions from graphs",
              "Is that difference meaningful?",
              "Statistical significance - disengaged employees",
              "Statistical significance - vacation days",
              "Drawing conclusions from the tests"
           ]
        },
        {
           "title":"\n          Are new hires getting paid too much?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    When employers make a new hire, they must determine what the new employee will be paid. If the employer is not careful, the new hires can come in with a higher salary than the employees that currently work at the same job, which can cause  employee turnover and dissatisfaction. In this chapter, you will check whether new hires are really getting paid more than current employees, and how to double-check your initial observations.\n  ",
           "parts":[
              "Paying new hires fairly",
              "Importing the pay data",
              "Is the difference significant?",
              "Omitted variable bias",
              "Omitted variable bias examples",
              "What other differences exist?",
              "What does the pay difference look like now?",
              "Are hourly hires paid more?",
              "Linear regression",
              "New hire pay: a simple regression",
              "New hire pay: accounting for job levels",
              "Drawing conclusions from the tests"
           ]
        },
        {
           "title":"\n          Are performance ratings being given consistently?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Performance management helps an organization keep track of which employees are providing extra value, or below-average value, and compensating them accordingly. Whether performance is a rating or the result of a questionnaire, whether employees are rated each year or more often than that, the process is somewhat subjective. An organization should check that ratings are being given with regard to performance, and not individual managers' preferences, or even biases (conscious or subconscious).\n  ",
           "parts":[
              "Joining HR data",
              "Importing the two datasets",
              "Joining performance data",
              "Performance ratings and fairness",
              "Focus on high performers",
              "Comparing distributions of high performers",
              "Checking for omitted variable bias",
              "Logistic regression",
              "Linear and logistic regression",
              "Performance ratings: a simple logistic regression",
              "Performance ratings: accounting for job levels",
              "Conclusions and recommendations"
           ]
        },
        {
           "title":"\n          Improving employee safety with data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In many industries, workplace safety is a critical consideration. Maintaining a safe workplace provides employees with confidence and reduces costs for workers' compensation and legal liabilities. In this chapter, you'll look for  explanations for an increase in workplace accidents.\n  ",
           "parts":[
              "Employee safety",
              "Importing and joining the accident data",
              "Where is the highest accident rate?",
              "Where did the accident rate increase most?",
              "Focusing on the location of interest",
              "Focusing on the problem location",
              "Bringing in more data",
              "Checking for omitted variables",
              "Is that change isolated to the problem location?",
              "Explaining the increase in accidents",
              "Using regression to identify change drivers",
              "What can you conclude?",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Correlation and Regression in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Forecasting Product Demand in R",
     "description":"Learn how to identify important drivers of demand, look at seasonal effects, and predict demand for a hierarchy of products from a real world example.",
     "detailDescription":"Accurately predicting demand for products allows a company to stay ahead of the market. By knowing what things shape demand, you can drive behaviors around your products better. This course unlocks the process of predicting product demand through the use of R. You will learn how to identify important drivers of demand, look at seasonal effects, and predict demand for a hierarchy of products from a real world example. By the end of the course you will be able to predict demand for multiple products across a region of a state in the US. Then you will roll up these predictions across many different regions of the same state to form a complete hierarchical forecasting system.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Forecasting demand with time series\n        ",
           "index":"1",
           "description":"\n    When it comes to forecasting, time series modeling is a great place to start! You need to forecast out the future values of sales demand and a good baseline approach would be ARIMA models. In this chapter you'll learn how to quickly implement ARIMA models and get good initial forecasts for future product demand.\n  ",
           "parts":[
              "Loading data into xts object",
              "Importing data",
              "Plotting / visualizing data",
              "ARIMA Time Series 101",
              "auto.arima() function",
              "Interpret auto.arima",
              "Forecasting and Evaluating",
              "Forecast function",
              "Calculating MAPE and MAE",
              "Visualizing Forecast",
              "Confidence Intervals for Forecast"
           ]
        },
        {
           "title":"\n          Components of demand\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Economic theory has a lot to say about predicting values of demand. Obviously, external factors like price, seasonality, and timing of promotions will drive some aspects of product demand. In this chapter you'll learn about the basics around price elasticity models and how to incorporate seasonality and promotion timing factors into our product demand forecasts.\n  ",
           "parts":[
              "Price elasticity",
              "Calculating price elasticity",
              "Interpret results from elasticity",
              "Seasonal / holiday / promotional effects",
              "Visualize holiday / promotion effects",
              "Create holiday / promotional effect variables",
              "Regression for holiday / promotional effects",
              "Significant holiday or promotional effects?",
              "Forecasting with regression",
              "Create future predictor variables",
              "Forecast future values of demand",
              "Visualizing forecasts of regression"
           ]
        },
        {
           "title":"\n          Blending regression with time series\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Time series models and pricing regressions don't have to be thought of as separate approaches to product demand forecasting. They can be combined! In this chapter you'll learn about two ways of \"combining\" the information gained in both modeling approaches - transfer functions and forecast ensembling.\n  ",
           "parts":[
              "Residuals from regression model",
              "Calculating residuals from regression",
              "Visualizing residuals",
              "Forecasting residuals",
              "auto.arima function",
              "Forecasting residuals with time series",
              "Visualizing residual forecasts",
              "Transfer functions & ensembling",
              "Combining residuals from regression & time series",
              "Visualizing transfer function forecast",
              "Calculating transfer function MAPE and MAE",
              "ARIMA Forecasting",
              "Ensembling of Forecasts"
           ]
        },
        {
           "title":"\n          Hierarchical forecasting\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Everything up until this point deals with making individual models for forecasting product demand. However, we haven't taken advantage of the fact that all of these products form a product hierarchy of sales. Products make up regions and regions make up states. How can we ensure that our forecasts reconcile correctly up and down the hierarchy? In this chapter you'll learn about hierarchical forecasting and how to use it to your advantage in forecasting product demand.\n  ",
           "parts":[
              "Bottom-Up Hierarchical Forecasting",
              "Build time series forecast for new product",
              "Build regression forecast for new product",
              "Ensemble forecast for new product",
              "Calculate bottom-up forecast for whole region",
              "Top-Down Hierarchical Forecasting",
              "Build time series forecast at regional level",
              "Using average historical proportions",
              "Using proportion of historical averages",
              "Middle-Out Hierarchical Forecasting",
              "Build time series forecast for new region",
              "Top-down forecast for new region",
              "Bottom-up forecast for whole state",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Case Studies: Manipulating Time Series Data in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Machine Learning for Marketing Analytics in R",
     "description":"In this course you'll learn how to use data science for several common marketing tasks.",
     "detailDescription":"This is your chance to dive into the worlds of marketing and business analytics using R. Day by day, there are a multitude of decisions that companies have to face. With the help of statistical models, you're going to be able to support the business decision-making process based on data, not your gut feeling. Let us show you what a great impact statistical modeling can have on the performance of businesses. You're going to learn about and apply strategies to communicate your results and help them make a difference.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Modeling Customer Lifetime Value with Linear Regression\n        ",
           "index":"1",
           "description":"\n    How can you decide which customers are most valuable for your business? Learn how to model the customer lifetime value using linear regression.\n  ",
           "parts":[
              "Welcome to the course!",
              "Benefits of knowing CLV",
              "Looking at data",
              "Simple Linear Regression",
              "Understanding residuals",
              "Estimating simple linear regression",
              "Multiple Linear Regression",
              "Avoiding multicollinearity",
              "Interpretation of coefficients",
              "Model validation, model fit, and prediction",
              "Interpretation of model fit",
              "Future predictions of sales"
           ]
        },
        {
           "title":"\n          Logistic Regression for Churn Prevention\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Predicting if a customer will leave your business, or churn, is important for targeting valuable customers and retaining those who are at risk. Learn how to model customer churn using logistic regression.\n  ",
           "parts":[
              "Churn Prevention in Online Marketing",
              "Application churn prevention",
              "Data discovery",
              "Peculiarities of the dependent variable",
              "Modeling and model selection",
              "Model specification and estimation",
              "Statistical significance",
              "Model specification",
              "In sample model fit and thresholding",
              "In-sample fit full model",
              "In-sample fit restricted model",
              "Finding the optimal threshold",
              "Danger of overfitting",
              "Out-of-sample validation and cross validation",
              "Assessing out-of-sample model fit",
              "Cross validation"
           ]
        },
        {
           "title":"\n          Modeling Time to Reorder with Survival Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to model the time to an event using survival analysis. This could be the time until next order or until a person churns.\n  ",
           "parts":[
              "Survival Analysis: Introduction",
              "Applications of survival analysis",
              "Data for survival analysis",
              "Characteristics of survival analysis",
              "Survival curve analysis by Kaplan Meier",
              "Survival function, hazard function and hazard rate",
              "The survival object",
              "Kaplan-Meier Analysis",
              "Cox PH model with constant covariates",
              "Proportional hazard assumption",
              "Cox Proportional Hazard Model",
              "Interpretation of coefficients",
              "Checking model assumptions and making predictions",
              "Violation of the PH assumption",
              "Model assumptions",
              "Predictions"
           ]
        },
        {
           "title":"\n          Reducing Dimensionality with Principal Component Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    CRM data can get very extensive. Each metric you collect could carry some interesting information about your customers. But handling a dataset with too many variables is difficult. Learn how to reduce the number of variables in your data using principal component analysis. Not only does this help to get a better understanding of your data. PCA also enables you to condense information to single indices and to solve multicollinearity problems in a regression analysis with many intercorrelated variables.\n  ",
           "parts":[
              "PCA for CRM Data",
              "Purposes of PCA",
              "Getting to know the data",
              "Exploring the correlation structure",
              "PCA Computation",
              "Standardization of data",
              "Compute a PCA",
              "The result object of a PCA",
              "PCA model specification",
              "How many components are relevant?",
              "Interpretation of components",
              "Visualization with a biplot",
              "Principal components in a regression analysis",
              "Regression analysis with many variables",
              "Linear regression with principal components",
              "Closing Video"
           ]
        }
     ],
     "prerequistes":[
        "Correlation and Regression in R"
     ],
     "tracks":[
        "Marketing Analytics with R"
     ]
  },
  {
     "title":"Case Studies: Network Analysis in R",
     "description":"Apply fundamental concepts in network analysis to large real-world datasets in 4 different case studies.",
     "detailDescription":"Now that you're familiar with the basics of network analysis it's time to see how to apply those concepts to large real-world data sets. You'll work through three different case studies, each building on your previous work. These case studies are working with the kinds of data you'll see in both academic and industry settings. We'll explore some of the computational and visualization challenges you'll face and how to overcome them. Your knowledge of igraph will continue to grow, but we'll also leverage other visualization libraries that will help you bring your visualizations to the web.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring graphs through time\n        ",
           "index":"1",
           "description":"\n    In this chapter you'll explore a subset of an Amazon purchase graph. You'll build on what you've already learned, finding important products and discovering what drives purchases. You'll also examine how graphs can change through time by looking at the graph during different time periods.\n  ",
           "parts":[
              "Exploring Your Data Set",
              "Finding Dyads and Triads",
              "Clustering and Reciprocity",
              "Important Products",
              "What Makes an Important Product?",
              "Exploring Temporal Structure",
              "Metrics through time",
              "Plotting Metrics Over Time"
           ]
        },
        {
           "title":"\n          How do people talk about R on Twitter?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this lesson you'll explore some Twitter data about R by looking at conversations using '#rstats'.  First you'll look at the raw data and think about how you want to build your graph.  There's a number of ways to do this, and we'll cover two ways: retweets and mentions.  You'll build those graphs and then compare them on a number of metrics.\n  ",
           "parts":[
              "Creating your retweet graph",
              "Visualize the graph",
              "Visualize nodes by degree",
              "What's the distribution of centrality?",
              "Who is important in the conversation?",
              "Plotting important vertices",
              "Building a mentions graph",
              "Comparing mention and retweet graph",
              "Assortativity and reciprocity",
              "Finding who is talking to whom",
              "Finding communities",
              "Comparing community algorithms",
              "Visualizing the communities"
           ]
        },
        {
           "title":"\n          Bike sharing in Chicago\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will analyze data from a Chicago bike sharing network.  We will build on the concepts already covered in the introductory course, and add a few new ones to handle graphs with weighted edges. You will also start with data in a slightly more raw form and cover how to build your graph up from a data source you might find.\n  ",
           "parts":[
              "Creating our graph from raw data",
              "Making Graphs of Different User Types",
              "Compare Graphs of Different User Types",
              "Compare Graph Distance vs. Geographic Distance.",
              "Compare Subscriber vs. Non-Subscriber Distances",
              "Most Traveled To and From Stations",
              "Most Traveled To and From Stations with Weights",
              "Visualize central vertices",
              "Weighted Measures of Centrality",
              "Connectivity",
              "Find the minimum cut 1",
              "Find the minimum cut 2",
              "Unweighted Clustering Randomizations",
              "Weighted Clustering Randomizations"
           ]
        },
        {
           "title":"\n          Other ways to visualize graph data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    So far everything we've done has been using plotting from igraph. It provides many powerful ways to plot your graph data.  However many people prefer interacting with other plotting frameworks like ggplot2, or even interactive frameworks like d3.js. In this lesson you'll look at other plotting libraries that build on the ggplot2 framework. You'll also look at other non-\"hairball\" type methods like hive plots, as well as building interactive and animated plots.\n  ",
           "parts":[
              "Other packages for plotting graphs!",
              "ggnet Basics",
              "ggnetwork Basics",
              "More ggnet Plotting Options",
              "More ggnetwork Plotting Options",
              "Interactive visualizations",
              "Interactive plots with ggiraph",
              "Interactive javascript plots",
              "Alternative visualizations",
              "Alternative ways to visualize a graph: Hive plots",
              "BioFabric as an HTML widget",
              "Plotting graphs on a map"
           ]
        }
     ],
     "prerequistes":[
        "Network Analysis in R"
     ],
     "tracks":[
        "Network Analysis with R"
     ]
  },
  {
     "title":"Hierarchical and Mixed Effects Models in R",
     "description":"In this course you will learn to fit hierarchical models with random effects.",
     "detailDescription":"This course begins by reviewing slopes and intercepts in linear regressions before moving on to random-effects. You'll learn what a random effect is and how to use one to model your data. Next, the course covers linear mixed-effect regressions. These powerful models will allow you to explore data with a more complicated structure than a standard linear regression. The course then teaches generalized linear mixed-effect regressions. Generalized linear mixed-effects models allow you to model more kinds of data, including binary responses and count data. Lastly, the course goes over repeated-measures analysis as a special case of mixed-effect modeling. This kind of data appears when subjects are followed over time and measurements are collected at intervals. Throughout the course you'll work with real data to answer interesting questions using mixed-effects models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Overview and introduction to hierarchical and mixed models\n        ",
           "index":"1",
           "description":"\n    The first chapter provides an example of when to use a mixed-effect and also describes the parts of a regression. The chapter also examines a a student test-score dataset with a nested structure to demonstrate mixed-effects. \n  ",
           "parts":[
              "What is a hierarchical model?",
              "Explore multi-level data: students",
              "Exploring multiple-levels: Classrooms and schools",
              "Parts of a regression",
              "Intercepts",
              "Slopes",
              "Random-effects in regressions",
              "Random-effect intercepts",
              "Random-effect slopes",
              "School data",
              "Analyzing and interpreting the school data",
              "Plotting and interpreting results"
           ]
        },
        {
           "title":"\n          Linear mixed-effect models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter providers an introduction to linear mixed-effects models. It covers different types of random-effects, describes how to understand the results for linear mixed-effects models, and goes over different methods for statistical inference with mixed-effects models using crime data from Maryland.\n  ",
           "parts":[
              "Linear mixed effect model- Birth rates data",
              "Building a lmer model with random effects",
              "Including a fixed effect",
              "Random-effect slopes",
              "Uncorrelated random-effect slope",
              "Fixed- and random-effect predictor",
              "Understanding and reporting the outputs of a lmer",
              "Comparing print and summary output",
              "Extracting coefficients",
              "Displaying the results from a lmer model",
              "Statistical inference with Maryland crime data",
              "Visualizing Maryland crime data",
              "Rescaling slopes",
              "Null hypothesis testing",
              "Controversies around P-values",
              "Model comparison with ANOVA"
           ]
        },
        {
           "title":"\n          Generalized linear mixed-effect models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter extends linear mixed-effects models to include non-normal error terms using generalized linear mixed-effects models. By altering the model to include a non-normal error term, you are able to model more kinds of data with non-linear responses. After reviewing generalized linear models, the chapter examines binomial data and count data in the context of mixed-effects models.\n  ",
           "parts":[
              "Crash course on GLMs",
              "Logistic regression",
              "Poisson Regression",
              "Plotting GLMs",
              "Binomial data",
              "Toxicology data",
              "Marketing example",
              "Calculating odds-ratios",
              "Count data",
              "Internet click-throughs",
              "Chlamydia by age-group and county",
              "Displaying chlamydia results"
           ]
        },
        {
           "title":"\n          Repeated Measures\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter shows how repeated-measures analysis is a special case of mixed-effect modeling. The chapter begins by reviewing paired t-tests and repeated measures ANOVA. Next, the chapter uses a linear mixed-effect model to examine sleep study data. Lastly, the chapter uses a generalized linear mixed-effect model to examine hate crime data from New York state through time.\n  ",
           "parts":[
              "An introduction to repeated measures",
              "Paired t-test",
              "Repeated measures ANOVA",
              "Sleep study",
              "Exploring the data",
              "Building models",
              "Comparing regressions and ANOVAs",
              "Plotting results",
              "Hate in NY state?",
              "Exploring NY hate data",
              "Building the model",
              "Interpreting model results",
              "Displaying the results",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Generalized Linear Models in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Bioconductor in R",
     "description":"Learn to use essential bioconductor packages using datasets from virus, fungus, human and plants!",
     "detailDescription":"Much of the biological research, from medicine to biotech, is moving toward sequence analysis. We are now generating targeted and whole genome big data, which needs to be analyzed to answer biological questions. To help you get started, you will be introduced to The Bioconductor project. Bioconductor is and builds the infrastructure to share software tools (packages), workflows and datasets for the analysis and comprehension of genomic data. Bioconductor is a great platform accessible to you, and it is a community developed open software resource. By the end of this course, you will be able to use essential Bioconductor packages and get a grasp of its infrastructure and some built-in datasets. Using BSgenome, Biostrings, IRanges, GenomicRanges, TxDB, ShortRead and Rqc with real datasets from different species is going to be an exceptional experience!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What is Bioconductor?\n        ",
           "index":"1",
           "description":"\n    In this chapter you will get hands-on with Bioconductor. Bioconductor is the specialized  repository for bioinformatics software, developed and maintained by the R community. You will learn how to install and use bioconductor packages. You will be introduced to S4 objects and functions, because most packages within Bioconductor inherit from S4. Additionally, you will use a real genomic dataset of a fungus to explore the BSgenome package.\n  ",
           "parts":[
              "Introduction to the Bioconductor Project",
              "Bioconductor version",
              "BiocLite to install packages",
              "The role of S4 in Bioconductor",
              "S4 class definition",
              "Interaction with classes",
              "Introducing biology of genomic datasets",
              "Discovering the Yeast genome",
              "Partitioning the Yeast genome",
              "Available Genomes"
           ]
        },
        {
           "title":"\n          Biostrings and when to use them?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Biostrings are memory efficient string containers. Biostring has matching algorithms, and other utilities, for fast manipulation of large biological sequences or sets of sequences. How efficient you can become by using the right containers for your sequences? You will learn about alphabets, and sequence manipulation by using the tiny genome of a virus.\n  ",
           "parts":[
              "Introduction to Biostrings",
              "Exploring the Zika virus sequence",
              "Biostrings containers",
              "Manipulating Biostrings",
              "Sequence handling",
              "From a set to a single sequence",
              "Subsetting a set",
              "Common sequence manipulation functions",
              "Why are we interested in patterns?",
              "Searching for a pattern",
              "Finding Palindromes",
              "Finding a conserved region within six frames",
              "Looking for a match"
           ]
        },
        {
           "title":"\n          IRanges and GenomicRanges\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The IRanges and GenomicRanges packages are also containers for storing and manipulating genomic intervals  and variables defined along a genome.  These packages provide infrastructure and support to many other Bioconductor packages because of their enriching features. You will learn how to use these containers and their associated metadata, for manipulation of your sequences. The dataset you will be looking at is a special gene of interest in the human genome.\n  ",
           "parts":[
              "IRanges and Genomic Structures",
              "IRanges",
              "Constructing IRanges",
              "Interacting with IRanges",
              "Gene of Interest",
              "From tabular data to Genomic Ranges",
              "GenomicRanges accessors",
              "ABCD1 mutation",
              "Human genome chromosome X",
              "Manipulating collections of GRanges",
              "A sequence window",
              "Is it there?",
              "More about ABCD1",
              "How many transcripts?",
              "From GRangesList object into a GRanges object"
           ]
        },
        {
           "title":"\n          Introducing ShortRead \n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    ShortRead is the package for input, manipulation and assessment of fasta and fastq files. You can subset, trim and filter the sequences of interest, and even do a report of quality. An extra bonus towards the last exercises will give you the tools for parallel quality assessment, wink, wink Rqc. Exciting enough, for this you will use plant genome sequences!\n  ",
           "parts":[
              "Sequence files",
              "Why fastq?",
              "Reading in files",
              "Exploring a fastq file",
              "Extract a sample from a fastq file",
              "Sequence quality",
              "Exploring sequence quality",
              "Base quality plot",
              "Try your own nucleotide frequency plot",
              "Match and filter",
              "Filtering reads on the go!",
              "Removing duplicates",
              "More filtering!",
              "Multiple assessment",
              "Plotting cycle average quality",
              "Introduction to Bioconductor"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R",
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Analyzing Genomic Data in R"
     ]
  },
  {
     "title":"Parallel Programming in R",
     "description":"This course covers in detail the tools available in R for parallel computing.",
     "detailDescription":"With an increasing amount of data and more complex algorithms available to scientists and practitioners today, parallel processing is almost always a must, and in fact, is expected in packages implementing time-consuming methods. This course introduces you to concepts and tools available in R for parallel computing and provides solutions to a few important non-trivial issues in parallel processing like reproducibility, generating random numbers and load balancing.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Can I Run My Application in Parallel?\n        ",
           "index":"1",
           "description":"\n    In order to take advantage of parallel environment, the application needs to be split into pieces. In this introductory chapter, you will learn about different ways of partitioning and how it fits different hardware configurations. You will also be introduced to various R packages that support parallel programming.\n  ",
           "parts":[
              "Partitioning problems into independent pieces",
              "Partitioning demographic model",
              "Partitioning probabilistic demographic model",
              "Find the most frequent words in a text",
              "Models of parallel computing",
              "A simple embarrassingly parallel application",
              "Probabilistic projection of migration (setup)",
              "Probabilistic projection of migration",
              "R packages for parallel computing",
              "Passing arguments via clusterApply()",
              "Sum in parallel",
              "More tasks than workers"
           ]
        },
        {
           "title":"\n          The parallel Package\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will dive deeper into the parallel package. You'll learn about the various backends and their differences and get a deep understanding about the workhorse of the package, namely the clusterApply() function. Strategies for task segmentation including their pitfalls will also be discussed.\n  ",
           "parts":[
              "Cluster Basics",
              "Exploring the cluster object",
              "Socket vs. Fork",
              "The core of parallel",
              "Benchmarking setup",
              "Task size matters",
              "Initialization of nodes",
              "Loading package on nodes",
              "Setting global variables",
              "Exporting global objects",
              "Subsetting data",
              "Passing data as arguments",
              "Chunking migration application on worker's side",
              "Alternative chunking"
           ]
        },
        {
           "title":"\n          foreach, future.apply and Load Balancing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will look at two user-contributed packages, namely foreach and future.apply, which make parallel programming in R even easier. They are built on top of the parallel and future packages. In the last lesson of this chapter, you will learn about the advantages and pitfalls of load balancing and scheduling.\n  ",
           "parts":[
              "foreach",
              "Combining results",
              "Word frequency with foreach",
              "Multiple iterators in word frequency",
              "foreach and parallel backends",
              "Using doParallel",
              "Word frequency with doParallel",
              "Word frequency with doFuture and benchmarking",
              "future and future.apply",
              "Word frequency with future.apply",
              "Planning future",
              "Benchmark future",
              "Load balancing and scheduling",
              "Load balancing",
              "Scheduling"
           ]
        },
        {
           "title":"\n          Random Numbers and Reproducibility\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now you might ask, can I reproduce my results if the application uses random numbers? Can I generate the same results regardless of if the code runs sequentially or in parallel? This chapter will answer these questions. You will learn about a random number generator well suited to a parallel environment and how the various packages make use of it.\n  ",
           "parts":[
              "Are my results reproducible?",
              "Reproducibility (I)",
              "SOCK vs. FORK",
              "Parallel random number generators",
              "Setting an RNG",
              "Reproducible results in parallel",
              "Non-reproducible results in parallel",
              "Reproducibility in foreach and future.apply",
              "Reproducibility (II)",
              "Reproducing migration app with foreach",
              "Reproducing migration app with future.apply",
              "Next steps"
           ]
        }
     ],
     "prerequistes":[
        "Writing Efficient R Code"
     ],
     "tracks":[
        "Big Data with R",
        "R Programmer",
        "R Programming"
     ]
  },
  {
     "title":"Network Analysis in the Tidyverse",
     "description":"Learn how to analyze and visualize network data in the R programming language using the tidyverse approach.",
     "detailDescription":"If you've ever wanted to understand more about social networks, information networks, or even the neural networks of our brains, then you need to know network science! It will demonstrate network analysis using several R packages, including dplyr, ggplot2, igraph, ggraph as well as visNetwork. You will take on the role of Interpol Analyst and investigate the terrorist network behind the Madrid train bombing in 2004. Following the course, you will be able to analyse any network with basic centrality and similarity measures and create beautiful and interactive network visualizations.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The hubs of the network\n        ",
           "index":"1",
           "description":"\n    The challenge in this chapter is to spot the most highly connected terrorists in the network. We will first import the dataset and build the network. Then we will learn how to visualize it in different layouts using ggraph package. Later on, we will compute two basic yet important centrality measures in network science - degree and strength. We will use them to spot highly connected terrorists. We will finally touch two alternative centrality measures, betweenness and closeness.\n  ",
           "parts":[
              "Network Science",
              "Explore the dataset",
              "Build and explore the network (part 1)",
              "Build and explore the network (part 2)",
              "Visualizing networks",
              "Visualize the network (part 1)",
              "Visualize the network (part 2)",
              "Centrality measures",
              "Find the most connected terrorists",
              "Find the most strongly connected terrorists",
              "More on centrality"
           ]
        },
        {
           "title":"\n          In its weakness lies its strength\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we will spot the most influential ties among terrorists in the network. We will use a centrality measure on ties, called betweenness, and will learn how to visualize the network highlighting connections with high betweenness centrality. Moreover, we will provide some alternative evidence regarding Mark Granovetter's theory of strength of weak ties, confirming that looser connections are crucial as demonstrated in the Madrid terrorism network.\n  ",
           "parts":[
              "Tie betweenness",
              "Betweenness of ties",
              "Find ties with high betweenness",
              "Visualizing centrality measures",
              "Visualize node centrality",
              "Visualize tie centrality",
              "Filter important ties",
              "The strength of weak ties",
              "How many weak ties are there?",
              "Visualize the network highlighting weak ties",
              "Visualize the sub-network of weak ties",
              "More on betweenness"
           ]
        },
        {
           "title":"\n          Connection patterns\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The challenge in this chapter is to discover pairs of similar (and dissimilar) terrorists. We will introduce the adjacency matrix as a mathematical representation of a network and use it to find terrorists with similar connection patterns. We will also learn how to visualize similar and dissimilar pairs of individuals using ggraph.\n  ",
           "parts":[
              "Connection patterns",
              "Visualizing connection patterns",
              "The adjacency matrix (part 1)",
              "The adjacency matrix (part 2)",
              "Pearson correlation coefficient",
              "Computing Pearson similarity",
              "Negative and positive similarity",
              "Explore correlation between degree and strength",
              "Most similar and most dissimilar terrorists",
              "Transforming the similarity matrix",
              "Join similarity and nodes data frames",
              "Find most similar and dissimilar pairs",
              "Visualize similarity"
           ]
        },
        {
           "title":"\n          Similarity clusters\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we will discover cells of similar terrorists. We will explore hierarchical clustering to find groups of similar terrorists building on the notion of similarity of connection patterns developed in the previous chapter. Furthermore, we will explore the visNetwork package to produce fulfilling interactive network visualizations.\n  ",
           "parts":[
              "Hierarchical clustering",
              "Cluster the similarity network",
              "Cut the dendrogram",
              "Analyze clusters",
              "Visualize the clusters",
              "Interactive visualizations",
              "Basic visualization",
              "Change the layout",
              "Highlight nearest nodes and ties",
              "Select nodes and groups of nodes",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Network Analysis with R"
     ]
  },
  {
     "title":"Hyperparameter Tuning in R",
     "description":"Learn how to tune your model's hyperparameters to get the best predictive results.",
     "detailDescription":"For many machine learning problems, simply running a model out-of-the-box and getting a prediction is not enough; you want the best model with the most accurate prediction. One way to perfect your model is with hyperparameter tuning, which means optimizing the settings for that specific model. In this course, you will work with the caret, mlr and h2o packages to find the optimal combination of hyperparameters in an efficient manner using grid search, random search, adaptive resampling and automatic machine learning (AutoML). Furthermore, you will work with different datasets and tune different supervised learning models, such as random forests, gradient boosting machines, support vector machines, and even neural nets. Get ready to tune!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to hyperparameters\n        ",
           "index":"1",
           "description":"\n    Why do we use the strange word \"hyperparameter\"? What makes it hyper? Here, you will understand what model parameters are, and why they are different from hyperparameters in machine learning. You will then see why we would want to tune them and how the default setting of caret automatically includes hyperparameter tuning.\n  ",
           "parts":[
              "Parameters vs hyperparameters",
              "Model parameters vs. hyperparameters",
              "Hyperparameters in linear models",
              "What are the coefficients?",
              "Recap of machine learning basics",
              "Machine learning with caret",
              "Resampling schemes",
              "Hyperparameter tuning in caret",
              "Hyperparameters in Stochastic Gradient Boosting",
              "Changing the number of hyperparameters to tune",
              "Tune hyperparameters manually"
           ]
        },
        {
           "title":"\n          Hyperparameter tuning with caret\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to tune hyperparameters with a Cartesian grid. Then, you will implement faster and more efficient approaches. You will use Random Search and adaptive resampling to tune the parameter grid, in a way that concentrates on values in the neighborhood of the optimal settings. \n  ",
           "parts":[
              "Hyperparameter tuning in caret",
              "Finding hyperparameters",
              "Cartesian grid search in caret",
              "Plot hyperparameter model output",
              "Grid vs. Random Search",
              "Grid search with range of hyperparameters",
              "Find train() option for random search",
              "Random search with caret",
              "Adaptive Resampling",
              "Advantages of Adaptive Resampling",
              "Adaptive Resampling with caret"
           ]
        },
        {
           "title":"\n          Hyperparameter tuning with mlr\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here, you will use another package for machine learning that has very convenient hyperparameter tuning functions. You will define a Cartesian grid or perform Random Search, as well as advanced techniques. You will also learn different ways to plot and evaluate models with different hyperparameters.\n  ",
           "parts":[
              "Machine learning with `mlr`",
              "Machine Learning with mlr",
              "Modeling with mlr",
              "Grid and Random Search with  `mlr`",
              "Random search with mlr",
              "Perform hyperparameter tuning with mlr",
              "Evaluating hyperparameters with `mlr`",
              "Why to evaluate tuning?",
              "Evaluating hyperparameter tuning results",
              "Advanced tuning with `mlr`",
              "Define advanced tuning controls",
              "Define aggregated measures",
              "Setting hyperparameters"
           ]
        },
        {
           "title":"\n          Hyperparameter tuning with h2o\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will use h2o, another package for machine learning with very convenient hyperparameter tuning functions. You will use it to train different models and define a Cartesian grid. Then, You will implement a Random Search use stopping criteria. Finally, you will learn AutoML, an  h2o interface which allows for very fast and convenient model and hyperparameter tuning with just one function.\n  ",
           "parts":[
              "Machine learning with h2o",
              "Prepare data for modelling with h2o",
              "Modeling with h2o",
              "Grid and random search with h2o",
              "Grid search with h2o",
              "Random search with h2o",
              "Stopping criteria",
              "Automatic machine learning with h2o",
              "AutoML in h2o",
              "Scoring the leaderboard",
              "Extract h2o models and evaluate performance",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Machine Learning with caret in R"
     ],
     "tracks":[
        "Machine Learning Scientist with R",
        "Supervised Machine Learning in R"
     ]
  },
  {
     "title":"Support Vector Machines in R",
     "description":"This course will introduce the support vector machine (SVM) using an intuitive, visual approach.",
     "detailDescription":"This course will introduce a powerful classifier, the support vector machine (SVM) using an intuitive, visual approach. Support Vector Machines in R will help students develop an understanding of the SVM model as a classifier and gain practical experience using R’s libsvm implementation from the e1071 package. Along the way, students will gain an intuitive understanding of important concepts, such as hard and soft margins, the kernel trick, different types of kernels, and how to tune SVM parameters. Get ready to classify data with this impressive model.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction\n        ",
           "index":"1",
           "description":"\n    This chapter introduces some key concepts of support vector machines through a simple 1-dimensional example. Students are also walked through the  creation of a linearly separable dataset that is used in the subsequent chapter.\n  ",
           "parts":[
              "Sugar content of soft drinks",
              "Visualizing a sugar content dataset",
              "Identifying decision boundaries",
              "Find the maximal margin separator",
              "Visualize the maximal margin separator",
              "Generating a linearly separable dataset",
              "Generate a 2d uniformly distributed dataset.",
              "Create a decision boundary",
              "Introduce a margin in the dataset"
           ]
        },
        {
           "title":"\n          Support Vector Classifiers - Linear Kernels\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Introduces students to the basic concepts of support vector machines by applying the svm algorithm to a dataset that is linearly separable. Key concepts are illustrated through ggplot visualisations that are built from the outputs of the algorithm and the role of the cost parameter is highlighted via a simple example.  The chapter closes with a section on how the algorithm deals with multiclass problems.\n  ",
           "parts":[
              "Linear Support Vector Machines",
              "Creating training and test datasets",
              "Building a linear SVM classifier",
              "Exploring the model and calculating accuracy",
              "Visualizing Linear SVMs",
              "Visualizing support vectors using ggplot",
              "Visualizing decision & margin bounds using `ggplot2`",
              "Visualizing decision & margin bounds using `plot()`",
              "Tuning linear SVMs",
              "Tuning a linear SVM",
              "Visualizing decision boundaries and margins",
              "When are soft margin classifiers useful?",
              "Multiclass problems",
              "A multiclass classification problem",
              "Iris redux - a more robust accuracy."
           ]
        },
        {
           "title":"\n          Polynomial Kernels\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Provides an introduction to polynomial kernels via a dataset that is radially separable (i.e. has a circular decision boundary). After demonstrating the inadequacy of linear kernels for this dataset, students will see how a simple transformation renders the problem linearly separable thus motivating an intuitive discussion of the kernel trick. Students will then apply the polynomial kernel to the dataset and tune the resulting classifier.\n  ",
           "parts":[
              "Generating a radially separable dataset",
              "Generating a 2d radially separable dataset",
              "Visualizing the dataset",
              "Linear SVMs on radially separable data",
              "Linear SVM for a radially separable dataset",
              "Average accuracy for linear SVM",
              "The Kernel Trick",
              "Visualizing transformed radially separable data",
              "SVM with polynomial kernel",
              "Tuning SVMs",
              "Using `tune.svm()`",
              "Building and visualizing the tuned model"
           ]
        },
        {
           "title":"\n          Radial Basis Function Kernels\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Builds on the previous three chapters by introducing the highly flexible Radial Basis Function (RBF) kernel. Students will create a \"complex\" dataset that shows up the limitations of polynomial kernels. Then, following an intuitive motivation for the RBF kernel, students see how it addresses the shortcomings of the other kernels discussed in this course.\n  ",
           "parts":[
              "Generating a complex dataset",
              "Generating a complex dataset - part 1",
              "Generating a complex dataset - part 2",
              "Visualizing the dataset",
              "Motivating the RBF kernel",
              "Linear SVM for complex dataset",
              "Quadratic SVM for complex dataset",
              "The RBF Kernel",
              "Polynomial SVM on a complex dataset",
              "RBF SVM on a complex dataset",
              "Tuning an RBF kernel SVM"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[
        "Machine Learning Scientist with R",
        "Supervised Machine Learning in R"
     ]
  },
  {
     "title":"Network Analysis in R",
     "description":"In this course you'll learn to analyze and visualize network data with the igraph package.",
     "detailDescription":"In this course you'll learn how to work with and visualize network data. You'll use the igraph package to create networks from edgelists and adjacency matrices. You'll also learn how to plot networks and their attributes. Then, you'll learn how to identify important vertices using measures like betweenness and degree. Next, this course covers network structures, including triangles and cliques. Next, you'll learn how to identify special relationships between vertices, using metrics like assortativity. Finally, you'll see how to create interactive network plots using threejs.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to networks\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will be introduced to fundamental concepts in social network analysis. You will learn how to use the igraph R package to explore and analyze social network data as well as learning how to visualize networks. \n\n  ",
           "parts":[
              "What are social networks?",
              "Creating an igraph object",
              "Counting vertices and edges",
              "Network attributes",
              "Node attributes and subsetting",
              "Edge attributes and subsetting",
              "Visualizing attributes",
              "Quiz on attributes",
              "Network visualization",
              "igraph network layouts",
              "Visualizing edges",
              "Quiz on igraph objects"
           ]
        },
        {
           "title":"\n          Identifying important vertices in a network\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn about directed networks.  You will also learn how to identify key relationships between vertices in a network as well as how to use these relationships to identify important or influential vertices. \nThroughout this chapter you will use a network of measles transmission. The data come from the German city of Hagelloch in 1861. Each directed edge of the network indicates a child becoming infected with measles after coming into contact with an infected child.\n\n\n  ",
           "parts":[
              "Directed networks",
              "Directed igraph objects",
              "Identifying edges for each vertex",
              "Relationships between vertices",
              "Neighbors",
              "Distances between vertices",
              "Finding longest path between two vertices",
              "Important and influential vertices",
              "Identifying key vertices",
              "Betweenness",
              "Visualizing important nodes and edges",
              "Important vertices quiz"
           ]
        },
        {
           "title":"\n          Characterizing network structures\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This module will show how to characterize global network structures and sub-structures. It will also introduce generating random network graphs.\n  ",
           "parts":[
              "Introduction",
              "Forrest Gump network",
              "Network density and average path length",
              "Graph density quiz",
              "Understanding network structures",
              "Random graphs",
              "Network randomizations",
              "Randomization quiz",
              "Network substructures",
              "Triangles and transitivity",
              "Transitivity randomizations",
              "Cliques",
              "Visualize largest cliques"
           ]
        },
        {
           "title":"\n          Identifying special relationships\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will further explore the partitioning of networks into sub-networks and determining which vertices are more highly related to one another than others.  You will also develop visualization methods by creating three-dimensional visualizations.\n\n  ",
           "parts":[
              "Close relationships: assortativity & reciprocity",
              "Assortativity",
              "Using randomizations to assess assortativity",
              "Reciprocity",
              "Assortativity quiz",
              "Community detection",
              "Fast-greedy community detection",
              "Edge-betweenness community detection",
              "Community quiz",
              "Interactive network visualizations",
              "Interactive networks with threejs",
              "Sizing vertices in threejs",
              "3D community network graph"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "Network Analysis with R"
     ]
  },
  {
     "title":"Analyzing Election and Polling Data in R",
     "description":"Learn R for data science by wrangling, visualizing, and modeling political data like polls and election results.",
     "detailDescription":"This is an introductory course to the R programming language as applied in the context of political data analysis. In this course students learn how to wrangle, visualize, and model data with R by applying data science techniques to real-world political data such as public opinion polling and election results. The tools that you'll use in this course, from the dplyr, ggplot2, and choroplethr packages, among others, are staples of data science and can be used to analyze almost any dataset you get your hands on. Students will learn how to mutate columns and filter datasets, graph points and lines on charts, make maps, and create models to understand relationships between variables and predict the future. This course is suitable for anyone who already has downloaded R and knows the basics, like how to install packages.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Presidential Job Approval Polls\n        ",
           "index":"1",
           "description":"\n    Chapter one uses a dataset of job approval polling for US presidents since Harry Truman to introduce you to data wrangling and visualization in the tidyverse.\n  ",
           "parts":[
              "Introduction",
              "Selecting Columns of Data",
              "Filtering Rows of Data",
              "Averaging Job Approval by President",
              "Averaging Approval Ratings by President",
              "Averaging a column",
              "Visualizing Trump's Approval Over Time",
              "Averaging President Trump's Approval By Month",
              "Calculating a Rolling Average of Polls",
              "Visualizing Donald Trump's Approval Polls",
              "Bonus: Visualizing Every President's Approval"
           ]
        },
        {
           "title":"\n          U.S. House and Senate Polling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will embark on a historical analysis of \"generic ballot\" US House polling and use data visualization and modeling to answer two big questions: Has the country changed over time? Can polls predict elections?\n  ",
           "parts":[
              "Elections and Political Parties",
              "Tidyverse refresher",
              "Measuring Support for U.S. Political Parties",
              "Mutating a new column",
              "73 Years of \"Generic Ballot\" Polls",
              "Comparing the Democratic lead by year",
              "A time series of House and Senate polling",
              "Visualizing a time series",
              "Graphing trend lines with geom_smooth()",
              "Calculating and Visualizing Error in Polls",
              "Calculating Error in Polls",
              "Confidence intervals",
              "Geom_point()  and geom_errorbar()",
              "Predicting Winners with Linear Regression",
              "Fitting a model to past polls and results",
              "Making a prediction on new data"
           ]
        },
        {
           "title":"\n          Election Results and Political Demography\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter teaches you how to make maps and understand linear regression in R. With election results from the United States and the United Kingdom, you'll also learn how to use regression models to analyze the relationship between two (or more!) variables.\n  ",
           "parts":[
              "The 2016 US Presidential Election",
              "County-level election results and spread()",
              "County-level demographic data and left_join()",
              "Merging demographic and voting data",
              "Analyzing votes and demographic data",
              "Making County-Level Maps in R",
              "Mapping the Democratic vote by county",
              "Mapping the concentration of White Americans",
              "Analyzing Results with Linear Regression",
              "Answering \"why\" questions for elections",
              "Multivariate Regression in R",
              "The 2016 UK Referendum to Leave the EU (Brexit)",
              "Who was \"supposed\" to win?",
              "Brexit results",
              "UKIP and Brexit",
              "The \"why\" question for Brexit"
           ]
        },
        {
           "title":"\n          Predicting the Future of Politics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this ensemble of applied statistics and data analysis, you will wrangle, visualize, and model polling and prediction data for two sets of very important US elections: the 2018 House midterms and 2020 presidential election.\n  ",
           "parts":[
              "The House of Representatives in 2018",
              "The \"generic ballot\" in 2018",
              "Polls  in August and September",
              "Training a Model to Predict the Future with Polls",
              "Training a model",
              "Predictions on new data",
              "Uncertainty",
              "Lesson 4.3: The Presidency in 2020",
              "A model for presidential elections",
              "Training the model",
              "Predicting 2020 with the model",
              "Course Recap"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[

     ]
  },
  {
     "title":"RNA-Seq with Bioconductor in R",
     "description":"Use RNA-Seq differential expression analysis to identify genes likely to be important for different diseases or conditions.",
     "detailDescription":"RNA-Seq is an exciting next-generation sequencing method used for identifying genes and pathways underlying particular diseases or conditions. As high-throughput sequencing becomes more affordable and accessible to a wider community of researchers, the knowledge to analyze this data is becoming an increasingly valuable skill. Join us in learning about the RNA-Seq workflow and discovering how to identify which genes and biological processes may be important for your condition of interest! We will start the course with a brief overview of the RNA-Seq workflow with an emphasis on differential expression (DE) analysis. Starting with the counts for each gene, the course will cover how to prepare data for DE analysis, assess the quality of the count data, and identify outliers and detect major sources of variation in the data. The DESeq2 R package will be used to model the count data using a negative binomial model and test for differentially expressed genes. Visualization of the results with heatmaps and volcano plots will be performed and the significant differentially expressed genes will be identified and saved.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to RNA-Seq theory and workflow\n        ",
           "index":"1",
           "description":"\n    In this chapter we explore what we can do with RNA-Seq data and why it is exciting. We learn about the different steps and considerations involved in an RNA-Seq workflow.\n  ",
           "parts":[
              "Introduction to RNA-Seq",
              "Core Concepts",
              "RNA-Seq Packages",
              "RNA-Seq Workflow",
              "Read Alignments",
              "Exploring the raw count matrix",
              "Differential Gene Expression Theory",
              "DGE Theory",
              "DGE Theory: Metadata"
           ]
        },
        {
           "title":"\n          Exploratory data analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we perform quality control on the RNA-Seq count data using heatmaps and principal component analysis. We explore the similarity of the samples to each other and determine whether there are any sample outliers.\n  ",
           "parts":[
              "Introduction to differential expression analysis",
              "Practice with the DESeq2 vignette",
              "Organizing the data for DESeq2",
              "Matching metadata and counts data",
              "Count normalization",
              "Normalizing counts with DESeq2",
              "Hierarchical heatmap",
              "Hierarchical heatmap by condition",
              "Hierarchical heatmap analysis",
              "Principal component analysis",
              "PCA analysis",
              "PCA practice: exploring variations",
              "PCA practice: exploring additional variations"
           ]
        },
        {
           "title":"\n          Differential expression analysis with DESeq2\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we execute the differential expression analysis, generate results and identify the differentially expressed genes.\n  ",
           "parts":[
              "DE analysis",
              "Creating the DE object",
              "DESeq2 model - dispersion",
              "DESeq2 model - exploring dispersions",
              "Interpreting the dispersion plot",
              "DESeq2 model - contrasts",
              "DESeq2 model - extracting results",
              "DESeq2 results - LFC shrinkage",
              "DESeq2 results",
              "DESeq2 results exploration",
              "Summarizing DESeq2 results",
              "DESeq2 significant results"
           ]
        },
        {
           "title":"\n          Exploration of differential expression results\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter we explore the differential expression results using visualizations, such as heatmaps and volcano plots. We also review the steps in the analysis and summarize the differential expression workflow with DESeq2.\n  ",
           "parts":[
              "Visualization of results",
              "DESeq2 visualizations - MA and volcano plots",
              "DESeq2 visualizations - heatmap",
              "RNA-Seq DE analysis summary - setup",
              "RNA-Seq DE analysis - experimental planning",
              "RNA-Seq DE workflow summary",
              "RNA-Seq DE analysis summary",
              "DE analysis",
              "DE analysis results",
              "RNA-Seq next steps"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Bioconductor in R",
        "Introduction to Data Visualization with ggplot2"
     ],
     "tracks":[
        "Analyzing Genomic Data in R"
     ]
  },
  {
     "title":"Interactive Maps with leaflet in R",
     "description":"Learn how to produce interactive web maps with ease using leaflet.",
     "detailDescription":"Get ready to have some fun with maps! Interactive Maps with leaflet in R will give you the tools to make attractive and interactive web maps using spatial data and the tidyverse. In this course, you will create maps using the IPEDS dataset, which contains data on U.S. colleges and universities. Along the way, you will customize our maps using labels, popups, and custom markers, and add layers to enhance interactivity. Following the course, you will be able to create and customize your own interactive web maps to reveal patterns in your data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Setting Up Interactive Web Maps\n        ",
           "index":"1",
           "description":"\n    Chapter 1 will introduce students to the htmlwidgets package and the leaflet package. Following this introduction, students will build their first interactive web map using leaflet. Through the process of creating this first map students will be introduced to many of the core features of the leaflet package, including adding different map tiles, setting the center point and zoom level, plotting single points based on latitude and longitude coordinates, and storing leaflet maps as objects. Chapter 1 will conclude with students geocoding DataCamp’s headquarters, and creating a leaflet map that plots the headquarters and displays a popup describing the location.\n  ",
           "parts":[
              "Introduction to leaflet",
              "Loading the leaflet Library",
              "Creating an Interactive Web Map",
              "Map Tiles",
              "Provider Tiles",
              "Adding a Custom Map Tile",
              "Setting the Default Map View",
              "A Map with a View I",
              "A Map with a Narrower View",
              "Plotting DataCamp HQ",
              "Mark it",
              "Adding Popups and Storing your Map"
           ]
        },
        {
           "title":"\n          Plotting Points\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In chapter 2 students will build on the leaflet map they created in chapter 1 to create an interactive web map of every four year college in California. After plotting hundreds of points on an interactive leaflet map, students will learn to customize the markers on their leaflet map. This chapter will also how to color code markers based on a factor variable.\n  ",
           "parts":[
              "Introduction to IPEDS Data",
              "Cleaning up the Base Map",
              "Exploring the IPEDS Data",
              "Exploring the IPEDS Data II",
              "Mapping California Colleges",
              "California Colleges",
              "The City of Colleges",
              "Circle Markers",
              "Labels and Pop-ups",
              "Making our Map Pop",
              "What is California's Northernmost College?",
              "Building a Better Pop-up",
              "Swapping Popups for Labels",
              "Color Coding Colleges",
              "Creating a Color Palette using colorFactor",
              "A Legendary Map"
           ]
        },
        {
           "title":"\n          Groups, Layers, and Extras\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In chapter 3 students will expand on their map of all four year colleges in California to create a map of all American colleges. First, in section 3.1 students will review and build on the material from Chapter 2 to create a map of all American colleges. Then students will re-plot the colleges on their leaflet map by sector (public, private, or for-profit) using groups to enable users to toggle the colleges that are displayed on the map. In section 3.3 students will learn to add multiple base maps so that users can toggle between multiple map tiles.\n  ",
           "parts":[
              "The Leaflet Extras Package",
              "Middle America",
              "Building a Base",
              "Down South",
              "Overlay Groups",
              "Mapping Public Colleges",
              "Mapping Public and Private Colleges",
              "Mapping All Colleges",
              "Base Groups",
              "Change up the Base",
              "Putting it all Together",
              "Pieces of Flair",
              "Adding a Piece of Flair",
              "A Cluster Approach"
           ]
        },
        {
           "title":"\n          Plotting Polygons\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In Chapter 4 students will learn to map polygons, which can be used to define geographic regions (e.g., zip codes, states, countries, etc.).  Chapter 4 will start by plotting the zip codes in North Carolina that fall in the top quartile of mean family incomes. Students will learn to customize the polygons with color palettes and labels. Chapter 4 will conclude with adding a new layer to the map of every college in America that displays every zip code with a mean income of $200,000 or more during the 2015 tax year. Through the process of mapping zip codes students will learn about spatial data generally, geoJSON data, the @ symbol, and the addPolygons() function. Furthermore, students will have an opportunity to practice applying many of the options that they learned about in the previous chapters, such as popups and labels, as well as new ways to customize their maps, such as the highlight option in addPolygons().\n  ",
           "parts":[
              "Spatial Data",
              "Introduction to Spatial Data",
              "Exploring Spatial Data",
              "Joining Spatial Data",
              "Mapping Polygons",
              "addPolygons() Function",
              "NC High Income Zips",
              "addPolygon() Options",
              "Let's do some Logging",
              "Putting it All Together",
              "Wealthiest Zip Codes in America",
              "Final Map",
              "Thank you!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Interactive Data Visualization in R",
        "Spatial Data with R"
     ]
  },
  {
     "title":"A-B Testing in R",
     "description":"Learn A/B testing: including hypothesis testing, experimental design, and confounding variables.",
     "detailDescription":"In this course, you will learn the foundations of A/B testing, including hypothesis testing, experimental design, and confounding variables. You will also be exposed to a couple more advanced topics, sequential analysis and multivariate testing. The first dataset will be a generated example of a cat adoption website. You will investigate if changing the homepage image affects conversion rates (the percentage of people who click a specific button). For the remainder of the course you will use another generated dataset of a hypothetical data visualization website.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Chapter 1: Mini case study in A/B Testing\n        ",
           "index":"1",
           "description":"\n    Short case study on building and analyzing an A/B experiment.\n  ",
           "parts":[
              "Introduction",
              "Goals of A/B testing",
              "Preliminary data exploration",
              "Baseline conversion rates",
              "Current conversion rate day of week",
              "Current conversion rate week",
              "Plotting conversion rate seasonality",
              "Experimental design, power analysis",
              "Randomized vs. sequential",
              "SSizeLogisticBin() documentation",
              "Power analysis August",
              "Power analysis August 5 percentage point increase"
           ]
        },
        {
           "title":"\n          Chapter 2: Mini case study in A/B Testing Part 2\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we'll continue with our case study, now moving to our statistical analysis. We'll also discuss how to do follow-up experiment planning.\n  ",
           "parts":[
              "Analyzing results",
              "Plotting results",
              "glm() documentation",
              "Practice with glm()",
              "Designing follow-up experiments",
              "Follow-up experiment 1 design",
              "Follow-up experiment 1 power analysis",
              "Follow-up experiment 1 analysis",
              "Pre-follow-up experiment assumptions",
              "Plot 8 months data",
              "Plot styling 1",
              "Plot styling 2",
              "Follow-up experiment assumptions",
              "Conversion rate between years",
              "Re-run power analysis for follow-up",
              "Re-run glm() for follow-up"
           ]
        },
        {
           "title":"\n          Chapter 3: Experimental Design in A/B Testing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we'll dive deeper into the core concepts of A/B testing. This will include discussing A/B testing research questions, assumptions and types of A/B testing, as well as what confounding variables and side effects are.\n  ",
           "parts":[
              "A/B testing research questions",
              "Article click frequency monthly",
              "'Like' click frequency plot",
              "'Like' / 'Share' click frequency plot",
              "Assumptions and types of A/B testing",
              "Between vs. within",
              "Plotting A/A data",
              "Analyzing A/A data",
              "Confounding variables",
              "Examples of confounding variables",
              "Confounding variable example analysis",
              "Confounding variable example plotting",
              "Side effects",
              "Confounding variable vs. side effect",
              "Side effect load time plot",
              "Side effects experiment plot"
           ]
        },
        {
           "title":"\n          Chapter 4: Statistical Analyses in A/B Testing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter we'll go over more types of statistical tests and power analyses for different A/B testing designs. We'll also introduce the concepts of stopping rules, sequential analysis, and multivariate analysis.\n  ",
           "parts":[
              "Power analyses",
              "Logistic regression power analysis",
              "pwr.t.test() documentation",
              "T-test power analysis",
              "Statistical tests",
              "Logistic regression",
              "T-test",
              "Stopping rules and sequential analysis",
              "What is a sequential analysis?",
              "Sequential analysis three looks",
              "Sequential analysis sample sizes",
              "Multivariate testing",
              "Plotting time homepage in multivariate experiment",
              "Plotting 'like' clicks in multivariate experiment",
              "Multivariate design statistical test",
              "A/B Testing Recap"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Foundations of Inference",
        "Experimental Design in R"
     ],
     "tracks":[
        "Statistician with R"
     ]
  },
  {
     "title":"Dealing With Missing Data in R",
     "description":"Make it easy to visualise, explore, and impute missing data with naniar, a tidyverse friendly approach to missing data.",
     "detailDescription":"Missing data is part of any real world data analysis. It can crop up in unexpected places, making analyses challenging to understand. In this course, you will learn how to use tidyverse tools and the naniar R package to visualize missing values. You'll tidy missing values so they can be used in analysis and explore missing values to find bias in the data. Lastly, you'll reveal other underlying patterns of missingness. You will also learn how to \"fill in the blanks\" of missing values with imputation models, and how to visualize, assess, and make decisions based on these imputed datasets.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Why care about missing data?\n        ",
           "index":"1",
           "description":"\n    Chapter 1 introduces you to missing data, explaining what missing values are, their behavior in R, how to detect them, and how to count them. We then introduce missing data summaries and how to summarise missingness across cases, variables, and how to explore across groups within the data. Finally, we discuss missing data visualizations, how to produce overview visualizations for the entire dataset and over variables, cases, and other summaries, and how to explore these across groups.\n\n  ",
           "parts":[
              "Introduction to Missing Data",
              "Using and finding missing values",
              "How many missing values are there?",
              "Working with missing values",
              "Why care about missing values?",
              "Summarizing missingness",
              "Tabulating Missingness",
              "Other summaries of missingness",
              "How do we visualize missing values?",
              "Your first missing data visualizations",
              "Visualizing missing cases and variables",
              "Visualising missingness patterns"
           ]
        },
        {
           "title":"\n          Wrangling and tidying up missing values\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In chapter two, you will learn how to uncover hidden missing values like \"missing\" or \"N/A\" and replace them with `NA`. You will learn how to efficiently handle implicit missing values - those values implied to be missing, but not explicitly listed. We also cover how to explore missing data dependence, discussing Missing Completely at Random (MCAR), Missing At Random (MAR), Missing Not At Random (MNAR), and what they mean for your data analysis.\n  ",
           "parts":[
              "Searching for and replacing missing values",
              "Using miss_scan_count",
              "Using replace_with_na",
              "Using replace_with_na scoped variants",
              "Filling down missing values",
              "Fix implicit missings using complete()",
              "Fix explicit missings using fill()",
              "Using complete() and fill() together",
              "Missing Data dependence",
              "Differences between MCAR and MAR",
              "Exploring missingness dependence",
              "Further exploring missingness dependence"
           ]
        },
        {
           "title":"\n          Testing missing relationships\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about workflows for working with missing data. We introduce special data structures, the shadow matrix, and nabular data, and demonstrate how to use them in workflows for exploring missing data so that you can link summaries of missingness back to values in the data. You will learn how to use ggplot to explore and visualize how values changes as other variables go missing. Finally, you learn how to visualize missingness across two variables, and how and why to visualize missings in a scatterplot. \n\n  ",
           "parts":[
              "Tools to explore missing data dependence",
              "Creating shadow matrix data",
              "Performing grouped summaries of missingness",
              "Further exploring more combinations of missingness",
              "Visualizing missingness across one variable",
              "Nabular data and filling by missingness",
              "Nabular data and summarising by missingness",
              "Explore variation by missingness: boxplots",
              "Visualizing missingness across two variables",
              "Exploring missing data with scatterplots",
              "Using facets to explore missingness",
              "Faceting to explore missingness (multiple plots)"
           ]
        },
        {
           "title":"\n          Connecting the dots (Imputation)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about filling in the missing values in your data, which is called imputation. You will learn how to impute and track missing values, and what the good and bad features of imputations are so that you can explore, visualise, and evaluate the imputed data against the original values. You will learn how to use, evaluate, and compare different imputation models, and explore how different imputation models affect the inferences you can draw from the models.\n\n  ",
           "parts":[
              "Filling in the blanks",
              "Impute data below range with nabular data",
              "Visualise imputed values in a scatterplot",
              "Create histogram of imputed data",
              "What makes a good imputation",
              "Evaluating bad imputations",
              "Evaluating imputations: The scale",
              "Evaluating imputations: Across many variables",
              "Performing imputations",
              "Using simputation to impute data",
              "Evaluating and comparing imputations",
              "Evaluating imputations (many models & variables)",
              "Evaluating imputations and models",
              "Combining and comparing many imputation models",
              "Evaluating the different parameters in the model",
              "Final Lesson"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R",
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Intermediate Tidyverse Toolbox",
        "Statistician with R"
     ]
  },
  {
     "title":"Anomaly Detection in R",
     "description":"Learn statistical tests for identifying outliers and how to use sophisticated anomaly scoring algorithms.",
     "detailDescription":"Are you concerned about inaccurate or suspicious records in your data, but not sure where to start? An anomaly detection algorithm could help! Anomaly detection is a collection of techniques designed to identify unusual data points, and are crucial for detecting fraud and for protecting computer networks from malicious activity. In this course, you'll explore statistical tests for identifying outliers, and learn to use sophisticated anomaly scoring algorithms like the local outlier factor and isolation forest. You'll apply anomaly detection algorithms to identify unusual wines in the UCI Wine quality dataset and also to detect cases of thyroid disease from abnormal hormone measurements.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Statistical outlier detection\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn how numerical and graphical summaries can be used to informally assess whether data contain unusual points.  You'll use a statistical procedure called Grubbs' test to check whether a point is an outlier, and learn about the Seasonal-Hybrid ESD algorithm, which can help identify outliers when the data are a time series.\n  ",
           "parts":[
              "What do we mean when we talk about anomalies?",
              "Recognizing anomaly types",
              "Exploring the river nitrate data",
              "Testing the extremes with Grubbs' test",
              "Visual check of normality",
              "Grubbs' test",
              "Hunting multiple outliers using Grubbs' test",
              "Anomalies in time series",
              "Visual assessment of seasonality",
              "Seasonal Hybrid ESD algorithm",
              "Interpreting Seasonal-Hybrid ESD output",
              "Seasonal-Hybrid ESD versus Grubbs' test"
           ]
        },
        {
           "title":"\n          Distance and density based anomaly detection\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to calculate the  k-nearest neighbors distance and the local outlier factor, which are used to construct continuous anomaly scores for each data point when the data have multiple features.   You'll learn the difference between local and global anomalies and how the two algorithms can help in each case.\n  ",
           "parts":[
              "k-nearest neighbors distance score",
              "Exploring wine",
              "kNN distance matrix",
              "kNN distance score",
              "Visualizing kNN distance",
              "Standardizing features",
              "Appending the kNN score",
              "Visualizing kNN distance score",
              "Local outlier factor",
              "LOF calculation",
              "LOF visualization",
              "LOF vs kNN"
           ]
        },
        {
           "title":"\n          Isolation forest\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    k-nearest neighbors distance and local outlier factor use the distance or relative density of the nearest neighbors to score each point.  In this chapter, you'll explore an alternative tree-based approach called an isolation forest, which is a fast and robust method of detecting anomalies that measures how easily points can be separated by randomly splitting the data into smaller and smaller regions.\n  ",
           "parts":[
              "Isolation trees",
              "Fit and predict with an isolation tree",
              "Score interpretation",
              "Isolation forest",
              "Fit an isolation forest",
              "Checking convergence",
              "Visualizing the isolation score",
              "A grid of points",
              "Prediction over a grid",
              "Anomaly contours"
           ]
        },
        {
           "title":"\n          Comparing performance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n     You've now been introduced to a few different algorithms for anomaly scoring. In this final chapter, you'll learn to compare the detection performance of the algorithms in instances where labeled anomalies are available.  You'll learn to calculate and interpret the precision and recall statistics for an anomaly score, and how to adapt the algorithms so they can accommodate data with categorical features.\n  ",
           "parts":[
              "Labeled anomalies",
              "Thyroid data",
              "Visualizing thyroid disease",
              "Anomaly score",
              "Measuring performance",
              "Binarized scores",
              "Cross-tabulate binary scores",
              "Thyroid precision and recall",
              "Working with categorical features",
              "Converting character to factor",
              "Isolation forest with factors",
              "LOF with factors",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Analyzing US Census Data in R",
     "description":"Learn to rapidly visualize and explore demographic data from the United States Census Bureau using tidyverse tools.",
     "detailDescription":"Analysts across industries rely on data from the United States Census Bureau in their work. In this course, students will learn how to work with Census tabular and spatial data in the R environment. The course focuses on the tidycensus package for acquiring data from the decennial US Census and American Community survey in a tidyverse-friendly format, and the tigris package for accessing Census geographic data within R. By the end of this course, students will be able to rapidly visualize and explore demographic data from the Census Bureau using ggplot2 and other tidyverse tools, and make maps of Census demographic data with only a few lines of R code.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Census data in R with tidycensus\n        ",
           "index":"1",
           "description":"\n    In this chapter, students will learn the basics of working with Census data in R with tidycensus.  They will acquire data using tidycensus functions, search for data, and make a basic plot.\n  ",
           "parts":[
              "Census data in R: An overview",
              "Obtain and set your Census API key",
              "Getting Census data with tidycensus",
              "Basic tidycensus functionality",
              "Understanding tidycensus options",
              "Tidy and wide data in tidycensus",
              "Searching for data with tidycensus",
              "Loading variables in tidycensus",
              "Exploring variables with tidyverse tools",
              "Visualizing Census data with ggplot2",
              "Comparing geographies with ggplot2 visualizations",
              "Customizing ggplot2 visualizations of ACS data"
           ]
        },
        {
           "title":"\n          Wrangling US Census Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, students learn how to use tidyverse tools to wrangle data from the US Census and American Community Survey.  They also learn about handling margins of error in the ACS.\n  ",
           "parts":[
              "Tables and summary variables in tidycensus",
              "Download and view a table of data from the ACS",
              "Get a summary variable and calculate percentages",
              "Census data wrangling with tidy tools",
              "Finding the largest group by county",
              "Recoding variables and calculating group sums",
              "Comparing ACS estimates for multiple years",
              "Working with margins of error in tidycensus",
              "Inspecting margins of error",
              "Using margin of error functions in tidycensus",
              "Calculating group-wise margins of error",
              "Visualizing margins of error from the ACS",
              "Quick visual exploration of ACS margins of error",
              "Customizing a ggplot2 margin of error plot"
           ]
        },
        {
           "title":"\n          US Census geographic data in R\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, students will learn how to work with US Census Bureau geographic data in R using the tigris R package.\n  ",
           "parts":[
              "Understanding Census geography and tigris basics",
              "Getting Census boundary files with tigris",
              "Getting geographic features with tigris",
              "Understanding the structure of tigris objects",
              "Customizing tigris options",
              "TIGER/Line and cartographic boundary files",
              "Getting data as simple features objects",
              "Setting a cache directory",
              "Working with historic shapefiles",
              "Combining and joining Census geographic datasets",
              "Combining datasets of the same tigris type",
              "Getting data for multiple states",
              "Joining data from an external data frame",
              "Plotting data with tigris and ggplot2",
              "Plotting simple features with geom_sf()",
              "Customizing geom_sf() plots"
           ]
        },
        {
           "title":"\n          Mapping US Census Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to obtain feature geometry with the tidycensus package, and use ggplot2 and mapview to make customized static and interactive maps of US Census data.\n  ",
           "parts":[
              "Simple feature geometry and tidycensus",
              "Getting simple feature geometry",
              "Joining data from tigris and tidycensus",
              "Shifting Alaska and Hawaii geometry",
              "Mapping demographic data with ggplot2",
              "Making a choropleth map",
              "Modifying map colors",
              "Customizing the map output",
              "Advanced demographic mapping",
              "Graduated symbol maps",
              "Faceted maps with ggplot2",
              "Interactive visualization with mapview",
              "Cartographic workflows with tigris and tidycensus",
              "Generating random dots with sf",
              "Obtaining data for cartography with tigris",
              "Making a dot-density map with ggplot2",
              "Next steps for working with demographic data in R"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse",
        "Spatial Analysis with sf and raster in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Generalized Linear Models in R",
     "description":"The Generalized Linear Model course expands your regression toolbox to include logistic and Poisson regression.",
     "detailDescription":"Linear regression serves as a workhorse of statistics, but cannot handle some types of complex data. A generalized linear model (GLM) expands upon linear regression to include non-normal distributions including binomial and count data. Throughout this course, you will expand your data science toolkit to include GLMs in R. As part of learning about GLMs, you will learn how to fit model binomial data with logistic regression and count data with Poisson regression. You will also learn how to understand these results and plot them with ggplot2.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          GLMs, an extension of your regression toolbox\n        ",
           "index":"1",
           "description":"\n    This chapter teaches you how generalized linear models are an extension of other models in your data science toolbox. The chapter also uses Poisson regression to introduce generalize linear models.\n  ",
           "parts":[
              "Limitations of linear models",
              "Assumptions of linear models",
              "Refresher on fitting linear models",
              "Poisson regression",
              "Fitting a Poisson regression in R",
              "Comparing linear and Poisson regression",
              "Intercepts-Comparisons versus means",
              "Basic lm() functions with glm()",
              "Applying summary(), print(), and tidy() to glm",
              "Extracting coefficients from glm()",
              "Predicting with glm()"
           ]
        },
        {
           "title":"\n          Logistic Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter covers running a logistic regression and examining the model outputs.\n  ",
           "parts":[
              "Overview of logistic regression",
              "Fitting a logistic regression",
              "Examining & interpreting logistic regression outputs",
              "Bernoulli versus binomial distribution",
              "Bernoulli versus binomial",
              "Simulating binary data",
              "Long-form logistic regression input",
              "Wide-form input logistic regression",
              "Comparing logistic regression outputs",
              "Link functions-Probit compared to logit",
              "Probit versus logit",
              "Fitting probits and logits",
              "Simulating a logit",
              "Simulating a probit"
           ]
        },
        {
           "title":"\n          Interpreting and visualizing GLMs \n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter teaches you about interpreting GLM coefficients  and plotting GLMs using ggplot2.\n  ",
           "parts":[
              "Poisson regression coefficients",
              "Poisson link",
              "lm vs. Poisson coefficients",
              "Plotting Poisson regression",
              "Poisson regression plotting",
              "Understanding output from logistic regression",
              "Understanding odds ratios",
              "Extracting and interpreting odds-ratios",
              "Odds-ratios & confidence intervals in the Tidyverse",
              "ggplot2 and binomial regression",
              "Default trend lines",
              "Methods for trend lines",
              "Comparing probits and logits"
           ]
        },
        {
           "title":"\n          Multiple regression with GLMs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to do multiple regression with GLMs in R.\n  ",
           "parts":[
              "Multiple logistic regression",
              "Fitting a multiple logistic regression",
              "Building two models",
              "Comparing regression outputs",
              "Comparing variable order",
              "Formulas in R",
              "Multiple slopes",
              "Intercepts",
              "Multiple intercepts",
              "Assumptions of multiple logistic regression",
              "Simpson's paradox",
              "Non-linear logistic regression",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Multiple and Logistic Regression in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Financial Analytics in R",
     "description":"Learn how to speak the language (and do the math!) of corporate finance to pitch your next great business idea.",
     "detailDescription":"This course is an introduction to the world of finance where cash is king and time is money. In this course, you will learn how to use R to quantify the value of projects, opportunities, and actions and drive decision-making. Students will use the R language to explore cashflow statements, compute profitability metrics, apply decision rules, and compare alternatives. You will end this case-motivated course with an understanding of key financial concepts and the skills needed to conceptualize an communicate the value of you or your teams' projects in a corporate setting.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Cash is King (Intro to Valuations)\n        ",
           "index":"1",
           "description":"\n    Introducing the motivation for and basic concepts of discounted cashflow valuations analysis.\n  ",
           "parts":[
              "Valuations Overview",
              "A first example: book publishing",
              "Business Models & Writing R Functions",
              "Premium music streamers",
              "Freemium music streamers",
              "Writing business models as functions",
              "Pro-Forma Income Statements",
              "Different depreciation methods",
              "Creating income statement",
              "From Income to Cash",
              "Jeff Bezos' income versus cash example (part 1)",
              "Jeff Bezos' income versus cash example (part 2)"
           ]
        },
        {
           "title":"\n          Time is Money (Key Financial Concepts)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    An overview of time-value of money and related concepts.\n  ",
           "parts":[
              "The Time Value of Money",
              "Calculating PV",
              "Writing a PV function",
              "Visualizing PV by Time Delay",
              "Effect of Time on Discounting",
              "PV by Discount Rate and Time Delay",
              "Effect of Rate on Discounting",
              "Using Different Discount Rates",
              "Rates of Different Durations",
              "Real versus Nominal Rates",
              "Discounting Multiple Cashflows",
              "Selling a Car (Calculation)",
              "Selling a Car (Decision)",
              "Licensing a Software (Calculation)",
              "Licensing a Software (Decision)"
           ]
        },
        {
           "title":"\n          Prioritizing Profitability (Financial Metrics)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Understanding different ways to summarize cashflow output.\n  ",
           "parts":[
              "Profitability Metrics, Payback Period",
              "Calculate Payback Period",
              "Write Payback Period Function",
              "How would discounting change payback?",
              "NPV, IRR, and Profitability Index",
              "Write NPV Function",
              "Write IRR Function",
              "Applying the IRR Decision Rule",
              "Write Profitability Index Function",
              "Terminal value",
              "Perpetuity growth model",
              "Comparing & Computing Metrics",
              "Relationship between NPV and IRR",
              "Pitfalls of IRR",
              "NPV vs. IRR Decision Making",
              "Recap of Metrics"
           ]
        },
        {
           "title":"\n          Understanding Outcomes\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Piecing it altogether with sensitivty and scenario analysis.\n  ",
           "parts":[
              "Building a Business Case",
              "Identifying incremental costs",
              "Cafe Model",
              "Scenario Analysis with tidyr and purrr",
              "Creating scenarios",
              "Conducting scenario analysis",
              "Visualizing scenario analysis",
              "Sensitivity analysis",
              "Calculating univariate sensitivities",
              "Plotting univariate sensitivity",
              "Communicating Cashflow Concepts",
              "Tidying a cashflow",
              "Untidying a cashflow",
              "Prepping waterfall data",
              "Creating a waterfall plot",
              "Advanced Topics in Cashflow Modeling"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R",
        "Introduction to the Tidyverse"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Time Series with data.table in R",
     "description":"Master time series data using data.table in R.",
     "detailDescription":"Time series data is fun, but challenging. When ordering matters, your datasets get large, and timestamp precision differences can foil your merges, building reliable data processing pipelines requires a principled approach with the right tools. Enter data.table! Its expressive syntax will make your code powerful without sacrificing readability and its support for in-place operations will make your code super fast. Learn how to master time series data in data.table with this course!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Review of data.table\n        ",
           "index":"1",
           "description":"\n    This chapter provides an overview of all the cool things that make data.table perfect for working with time series data, including its multiple column-selection options, how to modify data.tables by reference, and calling functions by taking advantage of non-standard evaluation.\n  ",
           "parts":[
              "Getting started",
              "Subsetting with .SD",
              "Subsetting with grep()",
              "Flexible data selection",
              "Individual column names",
              "Functions that modify the data.table",
              "Adapting to different input columns",
              "In-place name changes",
              "Executing functions inside data.tables",
              "Executing functions inside []",
              "Applying a function over every column",
              "Generating correlation matrices"
           ]
        },
        {
           "title":"\n          Getting time series data into data.table\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Ok, so you have some time series data and you believe me that data.table is great for it. Before you can test that, you need to convert your data! In this chapter, you'll learn how to convert from popular time series data formats into data.table.\n  ",
           "parts":[
              "Overview of the POSIXct type",
              "Understanding POSIXct",
              "Creating POSIXct objects",
              "Creating dates with lubridate",
              "Creating data.tables from vectors",
              "Using seq.POSIXt()",
              "Creating sample data with .N",
              "Coercing from xts",
              "Brief overview of xts",
              "Why does anyone use xts for time series data?",
              "Converting xts objects to data.tables",
              "Combining datasets with merge() and rbindlist()",
              "Merging on timestamp",
              "Merging across different frequencies",
              "Using rbindlist()"
           ]
        },
        {
           "title":"\n          Generating lags, differences, and windowed aggregations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Like most other data, time series data you find in the wild are rarely suitable to directly start using in model training. In this chapter, you'll learn how to write powerful, expressive data.table code to implement a few common forms of time series feature engineering.\n  ",
           "parts":[
              "Generating lags",
              "Lags with setorder and shift",
              "Bucketed lags with by",
              "Fitting linear models with lags",
              "Knowledge check: lags",
              "Generating growth rates and differences",
              "First differences",
              "Growth rates",
              "Knowledge check: differences",
              "Windowing with j and by",
              "Grouping data into windows with j and by",
              "Windowed aggregations",
              "Knowledge check: windowed aggregations"
           ]
        },
        {
           "title":"\n          Case study: financial data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It's time to put it all together! In this chapter you'll consider a real-world dataset of spot metal prices from the London Metal Exchange (LME). By the end, you'll know how to write reusable functions to perform common time series feature engineering tasks and you'll have experience using those functions to build a statistical model.\n  ",
           "parts":[
              "Case study: modeling metals prices",
              "Cleaning up column names",
              "Pipeline function to merge datasets",
              "Timeseries feature engineering",
              "Generating and tagging differences",
              "Generating and tagging growth rates",
              "Knowledge check: growth rates",
              "EDA and model building",
              "A safer function to generate correlation matrices",
              "Adding features",
              "Fitting a linear model",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with data.table in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Linear Algebra for Data Science in R",
     "description":"This course is an introduction to linear algebra, one of the most important mathematical topics underpinning data science.",
     "detailDescription":"Linear algebra is one of the most important set of tools in applied mathematics and data science. In this course, you’ll learn how to work with vectors and matrices, solve matrix-vector equations, perform eigenvalue/eigenvector analyses and use principal component analysis to do dimension reduction on real-world datasets. All analyses will be performed in R, one of the world’s most-popular programming languages.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Linear Algebra\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn about the key objects in linear algebra, such as vectors and matrices. You will understand why they are important and how they interact with each other.\n  ",
           "parts":[
              "Motivations",
              "Creating Vectors in R",
              "The Algebra of Vectors",
              "Creating Matrices in R",
              "Matrix-Vector Operations",
              "Matrix-Vector Compatibility",
              "Matrix Multiplication as a Transformation",
              "Reflections",
              "Matrix-Matrix Calculations",
              "Matrix Multiplication Compatibility",
              "Matrix Multiplication - Order Matters",
              "Intro to The Matrix Inverse"
           ]
        },
        {
           "title":"\n          Matrix-Vector Equations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Many machine learning algorithms boil down to solving a matrix-vector equation.  In this chapter, you learn what matrix-vector equations are trying to accomplish and how to solve them in R.\n  ",
           "parts":[
              "Motivation for Solving Matrix-Vector Equations",
              "The Meaning of Ax = b",
              "Exploring WNBA Data",
              "Matrix-Vector Equations - Some Theory",
              "Why is a Matrix Not Invertible?",
              "Understanding a Linear System's Three Outcomes",
              "Understanding the Massey Matrix",
              "Adjusting the Massey Matrix",
              "Inverting the Massey Matrix",
              "Solving Matrix-Vector Equations",
              "An Analogy with Regular Algebra",
              "2017 WNBA Ratings!",
              "Who Was the Champion?",
              "Other Considerations for Matrix-Vector Equations",
              "Other Methods for Matrix-Vector Equations",
              "Alternatives to the Regular Matrix Inverse"
           ]
        },
        {
           "title":"\n          Eigenvalues and Eigenvectors\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Matrix operations are complex. Eigenvalue/eigenvector analyses allow you\nto decompose these operations into simpler ones for the sake of image recognition, genomic analysis, and more!\n  ",
           "parts":[
              "Intro to Eigenvalues and Eigenvectors",
              "Interpreting Scalar Multiplication",
              "Scaling Different Axes",
              "Definition of Eigenvalues and Eigenvectors",
              "Why \"Eigen\"?",
              "Finding Eigenvalues in R",
              "Scalar Multiplies of Eigenvectors are Eigenvectors",
              "Computing Eigenvalues and Eigenvectors in R",
              "How Many Eigenvalues?",
              "Verifying the Math on Eigenvalues",
              "Computing Eigenvectors in R",
              "Some More on Eigenvalues and Eigenvectors",
              "Eigenvalue Ordering",
              "Markov Models for Allele Frequencies"
           ]
        },
        {
           "title":"\n          Principal Component Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    “Big Data” is ubiquitous in data science and its applications.  However, redundancy in these datasets can be problematic.  In this chapter, we learn about principal component analysis and how it can be used in dimension reduction.\n  ",
           "parts":[
              "Intro to the Idea of PCA",
              "What Does \"Big Data\" Mean?",
              "Finding Redundancies",
              "The Linear Algebra Behind PCA",
              "Covariance Explored",
              "Standardizing Your Data",
              "Variance/Covariance Calculations",
              "Eigenanalyses of Combine Data",
              "Where's the Variance?",
              "Performing PCA in R",
              "Scaling Data Before PCA",
              "Summarizing PCA in R",
              "Does Subsetting Change Things?",
              "Wrap-Up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[
        "Statistician with R"
     ]
  },
  {
     "title":"Predictive Analytics using Networked Data in R",
     "description":"Learn to predict labels of nodes in networks using network learning and by extracting descriptive features from the network",
     "detailDescription":"In this course, you will learn to perform state-of-the art predictive analytics using networked data in R. The aim of network analytics is to predict to which class a network node belongs, such as churner or not, fraudster or not, defaulter or not, etc. To accomplish this, we discuss how to leverage information from the network and its underlying structure in a predictive way. More specifically, we introduce the idea of featurization such that network features can be added to non-network features as such boosting the performance of any resulting analytical model. In this course, you will use the igraph package to generate and label a network of customers in a churn setting and learn about the foundations of network learning. Then, you will learn about homophily, dyadicity and heterophilicty, and how these can be used to get key exploratory insights in your network. Next, you will use the functionality of the igraph package to compute various network features to calculate both node-centric as well as neighbor based network features. Furthermore, you will use the Google PageRank algorithm to compute network features and empirically validate their predictive power. Finally, we teach you how to generate a flat dataset from the network and analyze it using logistic regression and random forests.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction, networks and labelled networks\n        ",
           "index":"1",
           "description":"\n    In this chapter you will be introduced to labelled networks, network learning and the challanges that can arise.\n  ",
           "parts":[
              "Introduction",
              "Most likely to churn",
              "Create a network from an edgelist",
              "Labeled networks, Social influence",
              "Labeling nodes",
              "Coloring nodes",
              "Visualizing Churners",
              "Relational Neighbor Classifier",
              "Challenges",
              "Challenges in Network learning",
              "Probabilistic Relational Neighbor Classifier",
              "Collective Inferencing"
           ]
        },
        {
           "title":"\n          Homophily\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn about homophily and how to compute the two measures that can be used to characterice it, dyadicity and heterophilicty.\n  ",
           "parts":[
              "Homophily",
              "Homophilic networks",
              "Extracting types of edges",
              "Counting types of edges",
              "Counting nodes and computing connectance",
              "Dyadicity",
              "Same label edges",
              "Dyadicity of churners",
              "Dyadicity of non-churners",
              "Heterophilicity",
              "Cross label edges",
              "Compute heterophilicity",
              "Summary of homophily",
              "Dyadicity, Heterophilicity, & Homophily",
              "Is the network homophilic?"
           ]
        },
        {
           "title":"\n          Network Featurization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will use the igraph package to compute various network features and add them to the network.\n  ",
           "parts":[
              "Basic Network features",
              "Simple network features",
              "Centrality features",
              "Transitivity",
              "Link-Based Features",
              "Adjacency matrices",
              "Link-based features",
              "Second order link-based features",
              "Neighborhood link-based features",
              "PageRank",
              "Most influential node",
              "Changes in PageRank",
              "Convergence of PageRank",
              "Personalized PageRank",
              "Extract PageRank features"
           ]
        },
        {
           "title":"\n          Putting it all together\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will use the network from Chapter 3 to create a flat dataset. Using standard data mining techniques, you will build predictive models and measure their performance with AUC and top decile lift.\n  ",
           "parts":[
              "Extract a dataset",
              "Getting a flat dataset",
              "Missing Values",
              "Replace missing values",
              "Correlated variables",
              "Building a predictive model",
              "Split into train and test",
              "Logistic regression model",
              "Random forest model",
              "Evaluating model performance",
              "Predicting churn",
              "Measure AUC",
              "Measure top decile lift",
              "Summary and final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Network Analysis in R",
        "Supervised Learning in R: Classification"
     ],
     "tracks":[
        "Network Analysis with R"
     ]
  },
  {
     "title":"Single-Cell RNA-Seq with Bioconductor in R",
     "description":"Analyze single-cell RNA-Seq data using normalization, dimensionality reduction, clustering and differential expression.",
     "detailDescription":"Novel single-cell transcriptome sequencing assays allow researchers to measure gene expression levels at the resolution of single cells and offer the unprecedented opportunity to investigate fundamental biological questions at the cellular level, such as stem cell differentiation or the discovery and characterization of rare cell types. The majority of the computational methods to analyze single-cell RNA-Seq data are implemented in R making it a natural tool to start working with single-cell transcriptomic data. Using real single-cell datasets, this course provides a step-by-step tutorial to the methodology and associated R packages for the following four main tasks: (1) normalization, (2) dimensionality reduction, (3) clustering, (4) differential expression analysis.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What is Single-Cell RNA-Seq?\n        ",
           "index":"1",
           "description":"\n    In Chapter 1, you will learn what single-cell RNA-Seq is and why it is a such a powerful technique. By the end of this chapter, you'll also know how to load, create, and access single-cell datasets in R.\n  ",
           "parts":[
              "What is Single Cell RNA-Seq, and why is it useful?",
              "Bulk versus Single-cell RNA-Seq",
              "Explore a toy scRNA-Seq dataset",
              "Compute cell coverage",
              "Typical workflow",
              "GC content",
              "Library size",
              "Nesting between batches and biology",
              "Load, create, and access single-cell datasets in R",
              "SCE object from counts matrix",
              "SCE object from SummarizedExperiment",
              "Load a single-cell dataset in R"
           ]
        },
        {
           "title":"\n          Quality Control and Normalization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In Chapter 2, we go over the first steps of the workflow to analyze single-cell RNA-seq data, which include quality control and normalization. These two steps should get all the technical issues and biases out of the way so that in the next chapters we can focus on the biological signal of interest. \n  ",
           "parts":[
              "Quality Control",
              "Explore Tung dataset",
              "Calculate QC metrics",
              "Filter cells with small library size",
              "Quality Control (continued)",
              "Filter cells by number of expressed genes",
              "Use of positive controls",
              "Filter genes mainly not expressed",
              "Normalization",
              "Batch effect",
              "Correlation between PC1 and library size",
              "Compute size factors",
              "Normalize SCE object"
           ]
        },
        {
           "title":"\n          Visualization and Dimensionality Reduction\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    When studying single-cell data at the cellular level, the number of dimensions is the number of genes. The goal of dimensionality reduction is to reduce the number of dimensions to a smaller number either to visualize the data in 2 dimensions or to prepare the dataset for subsequent steps like clustering.\n  ",
           "parts":[
              "Mouse Epithelium Dataset",
              "Explore dataset",
              "Nested experiment design",
              "Cell differentiation",
              "Visualization",
              "Plot PCA of counts",
              "Plot PCA of log counts",
              "Plot t-SNE of log counts",
              "Dimensionality Reduction",
              "Subset sce",
              "Perform PCA on log counts",
              "Plot PCA using ggplot"
           ]
        },
        {
           "title":"\n          Cell Clustering and Differential expression analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In Chapter 4, we cluster cells with similar gene expression profiles and then perform differential expression (DE) analysis to find genes differentially expressed between known groups of cells. We then visualize DE genes with volcano plots and heatmaps.\n  ",
           "parts":[
              "Clustering methods for scRNA-Seq",
              "Create Seurat object",
              "Perform PCA on Seurat object",
              "Perform clustering",
              "Refine clustering",
              "Differential expression analysis",
              "Fit zero-inflated regression using MAST",
              "Create result table",
              "Compute adjusted p-values",
              "Visualization of DE genes",
              "Plot volcano plot",
              "Understand volcano plot",
              "Plot heatmap"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Introduction to Bioconductor in R",
        "Introduction to Data Visualization with ggplot2"
     ],
     "tracks":[
        "Analyzing Genomic Data in R"
     ]
  },
  {
     "title":"Designing and Analyzing Clinical Trials in R",
     "description":"In this course you will gain an overview clinical trial designs, determine the numbers of patients needed and conduct statistical analyses.",
     "detailDescription":"Clinical trials are scientific experiments that are conducted to assess whether treatments are effective and safe. They are used by a variety of organizations, including pharmaceutical companies for drug development. Biostatisticians play a key role in ensuring the success of a clinical trial. In this course you will gain an overview of the important principles and a practical introduction to commonly used statistical analyses. This course would be valuable for data analysts, medical students, clinicians, medical researchers and others interested in learning about the design and analysis of clinical trials.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Principles\n        ",
           "index":"1",
           "description":"\n    In this chapter you will be introduced to the important principles of clinical trials.\n  ",
           "parts":[
              "Fundamentals",
              "Data exploration",
              "Patient characteristics",
              "Types of data and endpoints",
              "Exploration of continuous endpoints",
              "Exploration of binary endpoints",
              "Exploration of composite endpoints",
              "Basic statistical analysis",
              "Comparing means",
              "Comparing distributions",
              "Comparing proportions"
           ]
        },
        {
           "title":"\n          Trial Designs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will be introduced to randomization methods and different types of trial designs.\n  ",
           "parts":[
              "Randomization methods",
              "Simple randomization",
              "Block randomization",
              "Stratified randomization",
              "Crossover, factorial and cluster randomized trials",
              "Factorial designs: exploring data",
              "Factorial designs: generating odds ratios",
              "Equivalence and non-Inferiority Trials",
              "Equivalence trials",
              "Interpreting results from equivalence trials",
              "Bioequivalence trials",
              "Concentration profiles",
              "Pharmacokinetic parameters"
           ]
        },
        {
           "title":"\n          Sample Size and Power\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    By the end of this chapter you will be able to calculate the numbers of patients needed for a clinical trial under a range of scenarios.\n  ",
           "parts":[
              "Introduction to sample size and power",
              "Sample size for comparing means",
              "Sample size and treatment difference",
              "Sample size for comparing proportions",
              "Sample size adjustments",
              "Sample size for unequal groups",
              "Sample size for one-sided tests",
              "Interim analyses and stopping rules",
              "Stopping rules",
              "Sample size adjustments for interim analyses",
              "Sample size for alternative trial designs",
              "Sample size for equivalence binary outcomes",
              "Sample size for equivalence continuous outcomes"
           ]
        },
        {
           "title":"\n          Statistical Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we will explore additional statistical techniques that are commonly used to analyze data from clinical trials.\n  ",
           "parts":[
              "Regression analysis",
              "Multiple linear regression",
              "Model prediction",
              "Multiple logistic regression",
              "Analysis sets, subgroups and interactions",
              "Analysis sets",
              "Interaction",
              "Multiplicity of data",
              "Subgroups",
              "Composite endpoints",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Exploratory Data Analysis in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Interactive Data Visualization with rbokeh",
     "description":"Learn rbokeh: a visualization library for interactive web-based plots.",
     "detailDescription":"Data visualization is an integral part of the data analysis process. This course will get you introduced to rbokeh: a visualization library for interactive web-based plots. You will learn how to use rbokeh layers and options to create effective visualizations that carry your message and emphasize your ideas. We will focus on the two main pieces of data visualization: wrangling data in the appropriate format as well as employing the appropriate visualization tools, charts and options from rbokeh.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          rbokeh Introduction\n        ",
           "index":"1",
           "description":"\n    In this chapter we get introduced to rbokeh layers. You will learn how to specify data and arguments to create the desired plot and how to combine multiple layers in one figure.\n  ",
           "parts":[
              "Getting Started with rbokeh",
              "Hello rbokeh!",
              "Tidyverse Refresher (Filter)",
              "Tidyverse Refresher (Mutate)",
              "rbokeh Layers",
              "Specifying Data in rbokeh Layers (Part 1)",
              "Specifying Data in rbokeh Layers (Part 2)",
              "Specifying Data in rbokeh Layers 3",
              "rbokeh Layers (Part 2)",
              "One-Layer Plot (Scatter Plot)",
              "Multi-Layer Plot 1 (Scatter + Line Plot)",
              "Multi-Layer Plot 2 (Scatter + Line Plot)"
           ]
        },
        {
           "title":"\n          rbokeh Aesthetic Attributes and Figure Options\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn how to customize your rbokeh figures using aesthetic attributes and figure options. You will see how aesthetic attributes such as color, transparancy and shape can serve a purpose and add more info to your visualizations. In addition, you will learn how to activate the tooltip and specify the hover info in your figures.\n  ",
           "parts":[
              "Plot and Mapped Attributes (Part 1)",
              "Line and Fill Color 1",
              "Line and Fill Color 2",
              "Color Palette",
              "Plot and Mapped Attributes (Part 2)",
              "Size & Alpha (Scatter Plot) 1",
              "Size & Alpha (Scatter Plot) 2",
              "Line Width",
              "Hover info & Figure Options",
              "Hover Info (Part 1)",
              "Hover Info (Part 2)",
              "Figure Options"
           ]
        },
        {
           "title":"\n          Data Manipulation for Visualization and More rbokeh Layers\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to put your data in the right format to fit the desired figure. And how to transform between the wide and long formats. You will also see how to combine normal layers with regression lines. In addition you will learn how to customize the interaction tools that appear with each figure.\n  ",
           "parts":[
              "Data Formats",
              "Wide and Long Data 1",
              "Wide and long Data 2",
              "Wide and Long Data 3",
              "More rbokeh Layers",
              "Scatter Plot + Regression Line (Reshaping Data)",
              "Scatter Plot + Regression Line (Scatter Plot)",
              "Scatter Plot + Regression Line (Regression Line)",
              "Interaction Tools",
              "Toolbar Location",
              "Interaction Tools (Hide/View)"
           ]
        },
        {
           "title":"\n          Grid Plots and Maps\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn how to combine multiple plots in one layout using grid plots. In addition, you will learn how to create interactive maps.\n  ",
           "parts":[
              "Intro to Grid Plots",
              "Grid Plots",
              "Grid Plots (Axes)",
              "Grid Plot (Layout)",
              "Facets with Grid Plots",
              "Facets 1",
              "Facets 2",
              "Facets 3",
              "rbokeh Maps",
              "Initializing Maps",
              "Adding Points Layer to Maps",
              "Multiple Maps in a Grid Plot"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Interactive Data Visualization in R"
     ]
  },
  {
     "title":"Machine Learning in the Tidyverse",
     "description":"Leverage the tools in the tidyverse to generate, explore and evaluate machine learning models.",
     "detailDescription":"This course will teach you to leverage the tools in the \"tidyverse\" to generate, explore, and evaluate machine learning models. Using a combination of tidyr and purrr packages, you will build a foundation for how to work with complex model objects in a \"tidy\" way. You will also learn how to leverage the broom package to explore your resulting models. You will then be introduced to the tools in the test-train-validate workflow, which will empower you evaluate the performance of both classification and regression models as well as provide the necessary information to optimize model performance via hyperparameter tuning.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Foundations of \"tidy\" Machine learning\n        ",
           "index":"1",
           "description":"\n    This chapter will introduce you to the backbone of machine learning in the tidyverse, the List Column Workflow (LCW). The LCW will empower you to work with many models in one dataframe.  This chapter will also introduce you to the fundamentals of the broom package for exploring your models.\n  ",
           "parts":[
              "Foundations of \"tidy\" machine learning",
              "Nesting your data",
              "Unnesting your data",
              "Explore a nested cell",
              "The map family of functions",
              "Mapping your data",
              "Expecting mapped output",
              "Mapping many models",
              "Tidy your models with broom",
              "The three ways to tidy your model",
              "Extracting model statistics tidily",
              "Augmenting your data"
           ]
        },
        {
           "title":"\n          Multiple Models with broom\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter leverages the List Column Workflow to build and explore the attributes of 77 models. You will use the tools from the broom package to gain a multidimensional understanding of all of these models.\n  ",
           "parts":[
              "Exploring coefficients across models",
              "Tidy up the coefficients of your models",
              "What can we learn about these 77 countries?",
              "Evaluating the fit of many models",
              "Glance at the fit of your models",
              "Best and worst fitting models",
              "Visually inspect the fit of many models",
              "Augment the fitted values of each model",
              "Explore your best and worst fitting models",
              "Improve the fit of your models",
              "Build better models",
              "Predicting the future"
           ]
        },
        {
           "title":"\n          Build, Tune & Evaluate Regression Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn how to use the List Column Workflow to build, tune and evaluate regression models. You will have the chance to work with two types of models: linear models and random forest models.\n  ",
           "parts":[
              "Training, test and validation splits",
              "The test-train split",
              "Cross-validation dataframes",
              "Measuring cross-validation performance",
              "Build cross-validated models",
              "Preparing for evaluation",
              "Evaluate model performance",
              "Building and tuning a random forest model",
              "Build a random forest model",
              "Evaluate a random forest model",
              "Fine tune your model",
              "The best performing parameter",
              "Measuring the test performance",
              "Build & evaluate the best model"
           ]
        },
        {
           "title":"\n          Build, Tune & Evaluate Classification Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will shift gears to build, tune and evaluate classification models.\n  ",
           "parts":[
              "Logistic regression models",
              "Prepare train-test-validate parts",
              "Build cross-validated models",
              "Evaluating classification models",
              "Predictions of a single model",
              "Performance of a single model",
              "Prepare for cross-validated performance",
              "Calculate cross-validated performance",
              "Random forest for classification",
              "Tune random forest models",
              "Random forest performance",
              "Build final classification model",
              "Measure final model performance",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Modeling with Data in the Tidyverse"
     ],
     "tracks":[
        "Intermediate Tidyverse Toolbox",
        "Machine Learning Scientist with R",
        "Supervised Machine Learning in R"
     ]
  },
  {
     "title":"GARCH Models in R",
     "description":"Specify and fit GARCH models to forecast time-varying volatility and value-at-risk.",
     "detailDescription":"Are you curious about the rhythm of the financial market's heartbeat? Do you want to know when a stable market becomes turbulent? In this course on GARCH models you will learn the forward looking approach to balancing risk and reward in financial decision making. The course gradually moves from the standard normal GARCH(1,1) model to more advanced volatility models with a leverage effect, GARCH-in-mean specification and the use of the skewed student t distribution for modelling asset returns. Applications on stock and exchange rate returns include portfolio optimization, rolling sample forecast evaluation, value-at-risk forecasting and studying dynamic covariances.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The standard GARCH model as the workhorse model\n        ",
           "index":"1",
           "description":"\n    We start off by making our hands dirty. A rolling window analysis of daily stock returns shows that its standard deviation changes massively through time. Looking back at the past, we thus have clear evidence of time-varying volatility. Looking forward, we need to estimate the volatility of future returns. This is essentially what a GARCH model does! In this chapter, you will learn the basics of using the rugarch package for specifying and estimating the workhorse GARCH(1,1) model in R. We end by showing its usefulness in tactical asset allocation.\n  ",
           "parts":[
              "Analyzing volatility",
              "Computing returns",
              "Standard deviation on subsamples",
              "Roll, roll, roll",
              "The GARCH equation for volatility prediction",
              "GARCH(1,1) reaction to one-off shocks",
              "Prediction errors",
              "The recursive nature of the GARCH variance",
              "The rugarch package",
              "Specify and taste the GARCH model flavors",
              "Out-of-sample forecasting",
              "Volatility targeting in tactical asset allocation"
           ]
        },
        {
           "title":"\n          Improvements of the normal GARCH model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Markets take the stairs up and the elevator down. This Wallstreet wisdom has important consequences for specifying a realistic volatility model. It requires to give up the assumption of normality, as well as the symmetric response of volatility to shocks. In this chapter, you will learn about GARCH models with a leverage effect and skewed student t innovations. At the end, you will be able to use GARCH models for estimating over ten thousand different GARCH model specifications.\n  ",
           "parts":[
              "Non-normality of standardized returns",
              "Skewed student t distribution parameters",
              "Estimation of non-normal GARCH model",
              "Standardized returns",
              "Leverage effect",
              "News impact curve",
              "Estimation of GJR garch model",
              "Mean model",
              "Predicting returns",
              "The AR(1)-GJR GARCH dynamics of MSFT returns",
              "Effect of mean model on volatility predictions",
              "Avoid unnecessary complexity",
              "Modeling choices",
              "Fixing GARCH parameters",
              "Parameter bounds and impact on forecasts",
              "Variance targeting"
           ]
        },
        {
           "title":"\n          Performance evaluation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    GARCH models yield volatility forecasts which serve as input for financial decision making. Their use in practice requires to first evaluate the goodness of the volatility forecast. In this chapter, you will learn about the analysis of statistical significance of the estimated GARCH parameters, the properties of standardized returns, the interpretation of information criteria and the use of rolling GARCH estimation and mean squared prediction errors to analyze the accuracy of the volatility forecast.\n  ",
           "parts":[
              "Statistical significance",
              "Significance testing",
              "Analyzing estimation output",
              "A better model for EUR/USD returns",
              "Goodness of fit",
              "Parsimony",
              "Mean squared prediction errors",
              "Comparing likelihood and information criteria",
              "Diagnosing absolute standardized returns",
              "Validation of GARCH model assumptions",
              "Correlogram and Ljung-Box test",
              "Change estimation sample",
              "Backtesting using ugarchroll",
              "ugarchroll arguments",
              "In-sample versus rolling sample vol",
              "Horse race"
           ]
        },
        {
           "title":"\n          Applications\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    At this stage, you master the standard specification, estimation and validation of GARCH models in the rugarch package. This chapter introduces specific rugarch functionality for making value-at-risk estimates, for using the GARCH model in production and for simulating GARCH returns. You will also discover that the presence of GARCH dynamics in the variance has implications for simulating log-returns, the estimation of the beta of a stock and finding the minimum variance portfolio.\n  ",
           "parts":[
              "Value-at-risk",
              "VaR plot",
              "Comovement between predicted vol and VaR",
              "Sensitivity of coverage to distribution model",
              "For production and simulation",
              "Actual versus simulated returns",
              "Use in production",
              "Use in simulation",
              "Model risk",
              "Robustniks",
              "Starting values",
              "GARCH covariance",
              "Estimation of beta",
              "Minimum variance portfolio weights",
              "GARCH & Co",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Time Series Analysis in R",
        "Manipulating Time Series Data with xts and zoo in R"
     ],
     "tracks":[
        "Applied Finance in R"
     ]
  },
  {
     "title":"Intermediate Interactive Data Visualization with plotly in R",
     "description":"Learn to create animated graphics and linked views entirely in R with plotly.",
     "detailDescription":"The plotly package enables the construction of interactive and animated graphics entirely within R. This goes beyond basic interactivity such as panning, zooming, and tooltips. In this course, you will extend your understanding of plotly to create animated and linked interactive graphics, which will enable you to communicate multivariate stories quickly and effectively. Along the way, you will review the basics of plotly, learn how to wrangle your data in new ways to facilitate cumulative animations, and learn how to add filters to your graphics without using Shiny.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction and review of plotly\n        ",
           "index":"1",
           "description":"\n    A review of key plotly commands. You will review how to create multiple plot types in plotly and how to polish your charts. Additionally, you will create static versions of the bubble and line charts that you will animate in the next chapter.\n  ",
           "parts":[
              "Interactive and dynamic graphics",
              "Which is the interactive graphic?",
              "A simple time series plot",
              "A simple scatterplot",
              "Adding aesthetics to represent a variable",
              "Color and size",
              "Plotting symbols",
              "Polishing your graphics",
              "Moving Beyond Simple Interactivity",
              "Bubble charts",
              "Many time series"
           ]
        },
        {
           "title":"\n          Animating graphics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to implement keyframe animation in plotly. You will explore how to create animations, such as Hans Rosling's bubble charts, as well as cumulative animations, such as an animation of a stock's valuation over time.\n  ",
           "parts":[
              "Introduction to animated graphics",
              "What's the frame?",
              "Why do we need ids?",
              "Animating a scatterplot",
              "Factors as frames",
              "Polishing animations",
              "Polishing your regional animation",
              "Polishing your HPI animation",
              "Layering in plotly",
              "Adding background text",
              "Plotting the baseline",
              "Cumulative animations",
              "How many rows?",
              "Median life expectancies",
              "Animating median life expectancies"
           ]
        },
        {
           "title":"\n          Linking graphics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    When you are exploring unexpected structure in your graphics, it's useful to have selections made on one chart update the other. For example, if you are exploring clusters observed on a scatterplot, it is useful to have the selected cluster update some chart of group membership, such as a jittered scatterplot or sets of bar charts. In this chapter, you will learn how to link your plotly charts to enable linked brushing. Along the way, you will also learn how to add dropdown menus, checkboxes, and sliders to your plotly charts, without the need for Shiny.\n  ",
           "parts":[
              "Linking two charts",
              "sharedData objects",
              "Linking scatterplots",
              "highlighting() charts",
              "Brushing groups",
              "Highlighting time series data",
              "Linking a dotplot and a time series plot",
              "Linking a bar chart to a scatterplot",
              "Selection strategies",
              "Searching for clusters",
              "Adding dropdown menus",
              "Making shinier charts",
              "Arranging views with bscols()",
              "Adding checkboxes",
              "Adding a slider"
           ]
        },
        {
           "title":"\n          Case Study: Space launches\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, you will use your expanded plotly toolkit to explore orbital space launches between 1957 and 2018. Along the way, you'll learn how to wrangle data to enable cumulative animations without common starting points, and hone your understanding of the crosstalk package.\n  ",
           "parts":[
              "Introduction to the space launches data",
              "Launches over time",
              "Space race timeline",
              "State vs. private launches",
              "Recap: Animation",
              "Animating the space race",
              "Animating the private space race",
              "Recap: linked views and selector widgets",
              "Linking for group selection",
              "Linked brushing",
              "Linked views for summarization",
              "Adding a slider for time",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Interactive Data Visualization with plotly in R"
     ],
     "tracks":[
        "Interactive Data Visualization in R"
     ]
  },
  {
     "title":"Fraud Detection in R",
     "description":"Learn to detect fraud with analytics in R.",
     "detailDescription":"The Association of Certified Fraud Examiners estimates that fraud costs organizations worldwide $3.7 trillion a year and that a typical company loses five percent of annual revenue due to fraud. Fraud attempts are expected to even increase further in future, making fraud detection highly necessary in most industries. This course will show how learning fraud patterns from historical data can be used to fight fraud. Some techniques from robust statistics and digit analysis are presented to detect unusual observations that are likely associated with fraud. Two main challenges when building a supervised tool for fraud detection are the imbalance or skewness of the data and the various costs for different types of misclassification. We present techniques to solve these issues and focus on artificial and real datasets from a wide variety of fraud applications.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction & Motivation\n        ",
           "index":"1",
           "description":"\n    This chapter will first give a formal definition of fraud. You will then learn how to detect anomalies in the type of payment methods used or the time these payments are made to flag suspicious transactions.\n  ",
           "parts":[
              "Introduction & Motivation",
              "Imbalanced class distribution",
              "Cost of not detecting fraud",
              "Time features",
              "Circular histogram",
              "Suspicious timestamps",
              "Frequency features",
              "Frequency feature for one account",
              "Frequency feature for multiple accounts",
              "Recency features",
              "Recency feature",
              "Comparing frequency & recency"
           ]
        },
        {
           "title":"\n          Social network analytics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the second chapter, you will learn how to use networks to fight fraud. You will visualize networks and use a sociology concept called homophily to detect fraudulent transactions and catch fraudsters.\n  ",
           "parts":[
              "Social network analytics",
              "Analyzing a network",
              "Overlapping edges",
              "Fraud and social network analysis",
              "Looking for homophily in a network",
              "Visualizing node attributes",
              "Social network based inference",
              "Relational vs non-relational models",
              "Relational neighbor classifier",
              "Social network metrics",
              "Degree, closeness & betweenness",
              "Adding network features"
           ]
        },
        {
           "title":"\n          Imbalanced class distributions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Fortunately, fraud occurrences are rare. However, this means that you're working with imbalanced data, which if left as is will bias your detection models. In this chapter, you will tackle imbalance using over and under-sampling methods.\n  ",
           "parts":[
              "Dealing with imbalanced datasets",
              "How to deal with class imbalance?",
              "Visualizing patterns in the data",
              "Random over-sampling",
              "Random under-sampling",
              "Shrinking the majority group",
              "Combining ROS & RUS",
              "Synthetic Over-sampling",
              "Have you met SMOTE?",
              "SMOTE",
              "From dataset to detection model",
              "Build your own detection model",
              "True cost of fraud detection"
           ]
        },
        {
           "title":"\n          Digit analysis and robust statistics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will learn about a surprising mathematical law used to detect suspicious occurrences. You will then use robust statistics to make your models even more bulletproof.\n  ",
           "parts":[
              "Digit analysis using Benford's law",
              "Benford's Law for first digit",
              "Conformity of census data",
              "Benford's Law for fraud detection",
              "Conformity to Benford's Law",
              "Fire insurance claims",
              "Payments data set",
              "Detecting univariate outliers",
              "Computing robust z-scores",
              "Boxplot",
              "Detecting multivariate outliers",
              "Multivariate outlier detection"
           ]
        }
     ],
     "prerequistes":[
        "Unsupervised Learning in R",
        "Supervised Learning in R: Classification"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Data Cleaning in R",
     "description":"Develop the skills you need to go from raw data to awesome insights as quickly and accurately as possible.",
     "detailDescription":"It's commonly said that data scientists spend 80% of their time cleaning and manipulating data and only 20% of their time analyzing it. The time spent cleaning is vital since analyzing dirty data can lead you to draw inaccurate conclusions.\n\nIn this course, you'll learn how to clean dirty data. Using R, you'll learn how to identify values that don't look right and fix dirty data by converting data types, filling in missing values, and using fuzzy string matching. As you learn, you’ll brush up on your skills by working with real-world datasets, including bike-share trips, customer asset portfolios, and restaurant reviews—developing the skills you need to go from raw data to awesome insights as quickly and accurately as possible!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Common Data Problems\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn how to overcome some of the most common dirty data problems. You'll convert data types, apply range constraints to remove future data points, and remove duplicated data points to avoid double-counting.\n  ",
           "parts":[
              "Data type constraints",
              "Common data types",
              "Converting data types",
              "Trimming strings",
              "Range constraints",
              "Ride duration constraints",
              "Back to the future",
              "Uniqueness constraints",
              "Full duplicates",
              "Removing partial duplicates",
              "Aggregating partial duplicates"
           ]
        },
        {
           "title":"\n          Categorical and Text Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Categorical and text data can often be some of the messiest parts of a dataset due to their unstructured nature. In this chapter, you’ll learn how to fix whitespace and capitalization inconsistencies in category labels, collapse multiple categories into one, and reformat strings for consistency.\n  ",
           "parts":[
              "Checking membership",
              "Members only",
              "Not a member",
              "Categorical data problems",
              "Identifying inconsistency",
              "Correcting inconsistency",
              "Collapsing categories",
              "Cleaning text data",
              "Detecting inconsistent text data",
              "Replacing and removing",
              "Invalid phone numbers"
           ]
        },
        {
           "title":"\n          Advanced Data Problems\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll dive into more advanced data cleaning problems, such as ensuring that weights are all written in kilograms instead of pounds. You’ll also gain invaluable skills that will help you verify that values have been added correctly and that missing values don’t negatively impact your analyses.\n  ",
           "parts":[
              "Uniformity",
              "Date uniformity",
              "Currency uniformity",
              "Cross field validation",
              "Validating totals",
              "Validating age",
              "Completeness",
              "Types of missingness",
              "Visualizing missing data",
              "Treating missing data"
           ]
        },
        {
           "title":"\n          Record Linkage\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Record linkage is a powerful technique used to merge multiple datasets together, used when values have typos or different spellings. In this chapter, you'll learn how to link records by calculating the similarity between strings—you’ll then use your new skills to join two restaurant review datasets into one clean master dataset.\n  ",
           "parts":[
              "Comparing strings",
              "Calculating distance",
              "Small distance, small difference",
              "Fixing typos with string distance",
              "Generating and comparing pairs",
              "Link or join?",
              "Pair blocking",
              "Comparing pairs",
              "Scoring and linking",
              "Score then select or select then score?",
              "Putting it together",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Joining Data with dplyr",
        "Introduction to Data Visualization with ggplot2"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "Importing & Cleaning Data with R"
     ]
  },
  {
     "title":"Building Web Applications with Shiny in R",
     "description":"Shiny is an R package that makes it easy to build interactive web apps directly in R, allowing your team to explore your data as dashboards or visualizations.",
     "detailDescription":"Shiny is an R package that makes it easy to build highly interactive web apps directly in R. Using Shiny, data scientists can create interactive web apps that allow your team to dive in and explore your data as dashboards or visualizations. If you want to bring your data to life, Shiny is the way to go! Using data about baby names, food ingredients, and UFO sightings, you'll build a variety of different Shiny apps that leverage different inputs and outputs. You’ll also learn the basics of reactive expressions. By the end of this course, you’ll have the Shiny skills you need to build your first app in R.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Get Started with Shiny\n        ",
           "index":"1",
           "description":"\n    To kick off the course you'll learn what a web app is and when you should build one, plus build a few apps of your own! You'll first learn to make text inputs and outputs in a few ways, including exploring the popularity of certain names over time.\n  ",
           "parts":[
              "Introduction to Shiny",
              "Client vs. Server",
              "When to build a web-app?",
              "Build a \"Hello, world\" Shiny app",
              "Build a \"Hello, world\" Shiny app (2)",
              "\"Hello, World\" app input (UI)",
              "\"Hello, World\" app output (UI/Server)",
              "Build a babynames explorer Shiny app",
              "Add input (UI)",
              "Add output (UI/Server)",
              "Update layout (UI)",
              "Update output (server)"
           ]
        },
        {
           "title":"\n          Inputs, Outputs, and Layouts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn how to take advantage of different input and  output options in shiny. You''ll learn the syntax for taking inputs from users   and rendering different kinds of outputs, including text, plots, and tables.\n\n  ",
           "parts":[
              "Inputs",
              "Selecting an input",
              "Add a select input",
              "Add a slider input to select year",
              "Outputs",
              "Add a table output",
              "Add an interactive table output",
              "Add interactive plot output",
              "Layouts and themes",
              "Sidebar layouts",
              "Tab layouts",
              "Themes",
              "Building apps",
              "App 1: Multilingual Greeting",
              "App 2: Popular Baby Names",
              "App 3: Popular Baby Names Redux"
           ]
        },
        {
           "title":"\n          Reactive Programming\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about reactive programming. You will  learn about reactive sources, conductors and endpoints and how they come together to drive the magic behind Shiny. You will also learn how to utilize your understanding of reactivity to build performant Shiny apps.\n  ",
           "parts":[
              "Reactivity 101",
              "Source vs. Conductor vs. Endpoint",
              "Add a reactive expression",
              "Understanding reactive expressions",
              "Observers vs. reactives",
              "Add another reactive expression",
              "Does this have a side effect?",
              "Add an observer to display notifications",
              "Stop - delay - trigger",
              "Stop reactions with isolate()",
              "Delay reactions with eventReactive()",
              "Trigger reactions with observeEvent()",
              "Controlling action triggers",
              "Applying reactivity concepts",
              "Reactivity concepts: observe & reactive",
              "Convert height from inches to centimeters"
           ]
        },
        {
           "title":"\n          Build Shiny Apps\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to build your own Shiny apps. You’ll make several apps from scratch, including one that allows you to gather insights from the Mental Health in Tech Survey and another that uses recipe ingredients as its input to accurately categorize different cuisines of the world. Along the way, you’ll also learn about more advanced input and output widgets, such as input validation, word clouds, and interactive maps.\n  ",
           "parts":[
              "Build an Alien Sightings Dashboard",
              "Alien sightings: add inputs",
              "Alien sightings: add outputs",
              "Alien sightings: tab layout",
              "Exploring the 2014 Mental Health in Tech Survey",
              "The shinyWidgets gallery",
              "Explore the Mental Health in Tech 2014 Survey",
              "Validate that a user made a selection",
              "Explore cuisines",
              "Explore cuisines: top ingredients",
              "Explore cuisines: top ingredients redux",
              "Explore cuisines: wordclouds",
              "Mass shootings",
              "Mass shootings: add inputs",
              "Mass shootings: modify output",
              "Mass shootings: display help",
              "Wrap up video"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse",
        "Intermediate R"
     ],
     "tracks":[
        "Shiny Fundamentals with R"
     ]
  },
  {
     "title":"Analyzing Social Media Data in R",
     "description":"Extract and visualize Twitter data, perform sentiment and network analysis, and map the geolocation of your tweets.",
     "detailDescription":"Analyzing data from social media can provide you with valuable insights. It can inform campaign strategies, improve marketing and sales, measure customer engagement, perform competitor analysis, and identify untapped networks. In this course, you’ll use R to extract and visualize Twitter data, perform network analysis, and view the geolocation of tweets. You’ll use a variety of datasets to put what you’ve learned into play, including tweets about celebrities, technology companies, trending topics, and sports.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Understanding Twitter data\n        ",
           "index":"1",
           "description":"\n    Get started with understanding the power of Twitter data and what you can achieve using social media analysis. In this chapter, you’ll extract your first set of tweets using the Twitter API and functions from the powerful ‘rtweet’ library. Then it’s time to explore how you can use the components from your extracted Twitter data to derive insights for social media analysis.\n\n  ",
           "parts":[
              "Analyzing twitter data",
              "Power of twitter data",
              "Pros and cons of twitter data",
              "Extracting twitter data",
              "Prerequisites to set up the R environment",
              "Search and extract tweets",
              "Search and extract timelines",
              "Components of twitter data",
              "User interest and tweet counts",
              "Compare follower count",
              "Retweet counts"
           ]
        },
        {
           "title":"\n          Analyzing Twitter data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to go deeper. Learn how you can apply filters to tweets and analyze Twitter user data using the golden ratio and the Twitter lists they subscribe to. You’ll also learn how to extract trending topics and analyze Twitter data over time to identify interesting insights.\n\n  ",
           "parts":[
              "Filtering tweets",
              "Filtering for original tweets",
              "Filtering on tweet language",
              "Filter based on tweet popularity",
              "Twitter user analysis",
              "Extract user information",
              "Explore users based on the golden ratio",
              "Subscribers to twitter lists",
              "Twitter trends",
              "Available trends",
              "Trends by country name",
              "Trends by city and most tweeted trends",
              "Plotting twitter data over time",
              "Visualizing frequency of tweets",
              "Create time series objects",
              "Compare tweet frequencies for two brands"
           ]
        },
        {
           "title":"\n          Visualize Tweet texts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A picture is worth a thousand words! In this chapter, you’ll discover how you can visualize text from tweets using bar plots and word clouds. You’ll learn how to process tweet text and prepare a clean text corpus for analysis. Imagine being able to extract key discussion topics and people's perceptions about a subject or brand from the tweets they are sharing. You’ll be able to do just that using topic modeling and sentiment analysis.\n\n  ",
           "parts":[
              "Processing twitter text",
              "Remove URLs and characters other than letters",
              "Build a corpus and convert to lowercase",
              "Remove stop words and  additional spaces",
              "Visualize popular terms",
              "Removing custom stop words",
              "Visualize popular terms with bar plots",
              "Word clouds for visualization",
              "Topic modeling of tweets",
              "The LDA algorithm",
              "Create a document term matrix",
              "Create a topic model",
              "Twitter sentiment analysis",
              "Extract sentiment scores",
              "Perform sentiment analysis"
           ]
        },
        {
           "title":"\n          Network Analysis and putting Twitter data on the map\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Twitter users tweet, like, follow, and retweet creating complex network structures. In this final chapter, you’ll learn how to analyze these network structures and visualize the relationships between these individual people as a retweet network. By extracting geolocation data from the tweets you’ll also discover how to display tweet locations on a map, and answer powerful questions such as which states or countries are talking about your brand the most? Geographic data adds a new dimension to your Twitter data analysis.\n  ",
           "parts":[
              "Twitter network analysis",
              "Preparing data for a retweet network",
              "Create a retweet network",
              "Network centrality measures",
              "Calculate out-degree scores",
              "Compute the in-degree scores",
              "Calculate the betweenness scores",
              "Visualizing twitter networks",
              "Create a network plot with attributes",
              "Network plot based on centrality measure",
              "Follower count to enhance the network plot",
              "Putting twitter data on the map",
              "Extract geolocation coordinates",
              "Twitter data on the map",
              "Course wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Practicing Statistics Interview Questions in R",
     "description":"In this course, you'll prepare for the most frequently covered statistical topics from distributions to hypothesis testing, regression models, and much more.",
     "detailDescription":"Are you job interview ready? You may know everything there is to know about your target company, but have you practiced the classic R statistical interview questions? If not, we have you covered. In this course, you'll prepare for the most frequently covered statistical topics from distributions to hypothesis testing, regression models, and much more. You’ll sharpen your skills using datasets including Parkinson’s disease data and gas prices. This course is purposely more challenging than a typical DataCamp course to make sure that when it comes to interviewing time you’re ready to confidently tackle any statistics interview question in R.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Probability Distributions\n        ",
           "index":"1",
           "description":"\n    Want to increase your odds of acing your job interview? If so, brush up on your knowledge of probability theory. In this chapter, we'll roll dice and shoot baskets to explain probabilities using real-life examples.\n  ",
           "parts":[
              "Discrete distributions",
              "Probability functions",
              "Bernoulli trials",
              "Binomial distribution",
              "Continuous distributions",
              "Uniform distribution",
              "Shape of normal distribution",
              "Sample from normal distribution",
              "Central limit theorem",
              "Law of large numbers",
              "Simulating central limit theorem"
           ]
        },
        {
           "title":"\n          Exploratory Data Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    If the job description appeals to you review descriptive statistics before the interview. In this chapter, you will practice exploratory data analysis (EDA) using natural gas prices and data from a survey analysis.\n  ",
           "parts":[
              "Descriptive statistics",
              "Centrality measures",
              "Variability measures",
              "Categorical data",
              "Survey analysis",
              "Data encoding",
              "Time series",
              "Time series object",
              "Wrangling time series",
              "Principal Component Analysis",
              "PCA - rotation",
              "PCA - dimension reduction"
           ]
        },
        {
           "title":"\n          Statistical Tests\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    March confidently into your job interview after reviewing confidence intervals. We'll review the t-test, ANOVA, and normality tests to prepare you for statistics-based coding questions.\n\n  ",
           "parts":[
              "Normality tests",
              "Shapiro-Wilk test",
              "Q-Q plot",
              "Inference for a mean",
              "Confidence interval",
              "One-sample t-test",
              "Comparing two means",
              "Two-sample t-test",
              "Paired test",
              "ANOVA",
              "Comparing groups",
              "ANOVA for plant growth"
           ]
        },
        {
           "title":"\n          Regression Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Is your potential employer planning to test your R skills? Make sure you’re prepared and practice model evaluation beforehand. In this chapter, we will fit and evaluate linear and logistic regression models using various biomedical datasets. By the end of this chapter, you’ll be fully prepared to answer any question the interviewer throws your way!\n  ",
           "parts":[
              "Covariance and correlation",
              "Covariance by hand",
              "Linear relationship",
              "Nonlinear relationship",
              "Linear regression model",
              "Fitting linear models",
              "Predicting with linear models",
              "Logistic regression model",
              "Fitting logistic models",
              "Predicting with logistic models",
              "Model evaluation",
              "Validation set approach",
              "Regression evaluation",
              "Classification evaluation",
              "Wrapping up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Foundations of Inference",
        "Foundations of Probability in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Data Visualization with ggplot2",
     "description":"Learn to produce meaningful and beautiful data visualizations with ggplot2 by understanding the grammar of graphics.",
     "detailDescription":"The ability to produce meaningful and beautiful data visualizations is an essential part of your skill set as a data scientist. This course, the first R data visualization tutorial in the series, introduces you to the principles of good visualizations and the grammar of graphics plotting concepts implemented in the ggplot2 package. ggplot2 has become the go-to tool for flexible and professional plots in R. Here, we’ll examine the first three essential layers for making a plot - Data, Aesthetics and Geometries. By the end of the course you will be able to make complex exploratory plots.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction\n        ",
           "index":"1",
           "description":"\n    In this chapter we’ll get you into the right frame of mind for developing meaningful visualizations with R. You’ll understand that as a communications tool, visualizations require you to think about your audience first. You’ll also be introduced to the basics of ggplot2 - the 7 different grammatical elements (layers) and aesthetic mappings.\n  ",
           "parts":[
              "Introduction",
              "Explore and explain",
              "Drawing your first plot",
              "Data columns types affect plot types",
              "The grammar of graphics",
              "Mapping data columns to aesthetics",
              "Understanding variables",
              "ggplot2 layers",
              "Adding geometries",
              "Changing one geom or every geom",
              "Saving plots as variables"
           ]
        },
        {
           "title":"\n          Aesthetics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Aesthetic mappings are the cornerstone of the grammar of graphics plotting concept. This is where the magic happens - converting continuous and categorical data into visual scales that provide access to a large amount of information in a very short time. In this chapter you’ll understand how to choose the best aesthetic mappings for your data.\n  ",
           "parts":[
              "Visible aesthetics",
              "All about aesthetics: color, shape and size",
              "All about aesthetics: color vs. fill",
              "All about aesthetics: comparing aesthetics",
              "Aesthetics for categorical & continuous variables",
              "Using attributes",
              "All about attributes: color, shape, size and alpha",
              "All about attributes: conflicts with aesthetics",
              "Going all out",
              "Modifying aesthetics",
              "Updating aesthetic labels",
              "Setting a dummy aesthetic",
              "Aesthetics best practices",
              "Appropriate mappings"
           ]
        },
        {
           "title":"\n          Geometries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A plot’s geometry dictates what visual elements will be used. In this chapter, we’ll familiarize you with the geometries used in the three most common plot types you’ll encounter - scatter plots, bar charts and line plots. We’ll look at a variety of different ways to construct these plots.\n  ",
           "parts":[
              "Scatter plots",
              "Overplotting 1: large datasets",
              "Overplotting 2: Aligned values",
              "Overplotting 3: Low-precision data",
              "Overplotting 4: Integer data",
              "Histograms",
              "Drawing histograms",
              "Positions in histograms",
              "Bar plots",
              "Position in bar and col plots",
              "Overlapping bar plots",
              "Bar plots: sequential color palette",
              "Line plots",
              "Basic line plots",
              "Multiple time series"
           ]
        },
        {
           "title":"\n          Themes\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we’ll explore how understanding the structure of your data makes data visualization much easier. Plus, it’s time to make our plots pretty. This is the last step in the data viz process. The Themes layer will enable you to make publication quality plots directly in R. In the next course we'll look at some extra layers to add more variables to your plots.\n  ",
           "parts":[
              "Themes from scratch",
              "Moving the legend",
              "Modifying theme elements",
              "Modifying whitespace",
              "Theme flexibility",
              "Built-in themes",
              "Exploring ggthemes",
              "Setting themes",
              "Publication-quality plots",
              "Effective explanatory plots",
              "Using geoms for explanatory plots",
              "Using annotate() for embellishments"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Scientist with R",
        "Data Visualization with R"
     ]
  },
  {
     "title":"Intermediate Data Visualization with ggplot2",
     "description":"Learn to use facets, coordinate systems and statistics in ggplot2 to create meaningful explanatory plots.",
     "detailDescription":"This ggplot2 course builds on your knowledge from the introductory course to produce meaningful explanatory plots. Statistics will be calculated on the fly and you’ll see how Coordinates and Facets aid in communication. You’ll also explore details of data visualization best practices with ggplot2 to help make sure you have a sound understanding of what works and why. By the end of the course, you’ll have all the tools needed to make a custom plotting function to explore a large data set, combining statistics and excellent visuals.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Statistics\n        ",
           "index":"1",
           "description":"\n    A picture paints a thousand words, which is why R ggplot2 is such a powerful tool for graphical data analysis. In this chapter, you’ll progress from simply plotting data to applying a variety of statistical methods. These include a variety of linear models, descriptive and inferential statistics (mean, standard deviation and confidence intervals) and custom functions.\n  ",
           "parts":[
              "Stats with geoms",
              "Smoothing",
              "Grouping variables",
              "Modifying stat_smooth",
              "Modifying stat_smooth (2)",
              "Stats: sum and quantile",
              "Quantiles",
              "Using stat_sum",
              "Stats outside geoms",
              "Preparations",
              "Using position objects",
              "Plotting variations"
           ]
        },
        {
           "title":"\n          Coordinates\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The Coordinates layers offer specific and very useful tools for efficiently and accurately communicating data. Here we’ll look at the various ways of effectively using these layers, so you can clearly visualize lognormal datasets, variables with units, and periodic data.\n  ",
           "parts":[
              "Coordinates",
              "Zooming In",
              "Aspect ratio I: 1:1 ratios",
              "Aspect ratio II: setting ratios",
              "Expand and clip",
              "Coordinates vs. scales",
              "Log-transforming scales",
              "Adding stats to transformed scales",
              "Double and flipped axes",
              "Useful double axes",
              "Flipping axes I",
              "Flipping axes II",
              "Polar coordinates",
              "Pie charts",
              "Wind rose plots"
           ]
        },
        {
           "title":"\n          Facets\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Facets let you split plots into multiple panes, each displaying subsets of the dataset. Here you'll learn how to wrap facets and arrange them in a grid, as well as providing custom labeling.\n  ",
           "parts":[
              "The facets layer",
              "Facet layer basics",
              "Many variables",
              "Formula notation",
              "Facet labels and order",
              "Labeling facets",
              "Setting order",
              "Facet plotting spaces",
              "Variable plotting spaces I: continuous variables",
              "Variable plotting spaces II: categorical variables",
              "Facet wrap & margins",
              "Wrapping for many levels",
              "Margin plots"
           ]
        },
        {
           "title":"\n          Best Practices\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you have the technical skills to make great visualizations, it’s important that you make them as meaningful as possible. In this chapter, you’ll review three plot types that are commonly discouraged in the data viz community: heat maps, pie charts, and dynamite plots. You’ll learn the pitfalls with these plots and how to avoid making these mistakes yourself.\n  ",
           "parts":[
              "Best practices: bar plots",
              "Bar plots: dynamite plots",
              "Bar plots: position dodging",
              "Bar plots: Using aggregated data",
              "Heatmaps use case scenario",
              "Heat maps",
              "Useful heat maps",
              "Heat map alternatives",
              "When good data makes bad plots",
              "Suppression of the origin",
              "Color blindness",
              "Typical problems"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data Visualization with ggplot2"
     ],
     "tracks":[
        "Data Scientist with R",
        "Data Visualization with R"
     ]
  },
  {
     "title":"Joining Data with dplyr",
     "description":"Learn to combine data across multiple tables to answer more complex questions with dplyr.",
     "detailDescription":"Often in data science, you'll encounter fascinating data that is spread across multiple tables. This course will teach you the skills you'll need to join multiple tables together to analyze them in combination. You'll practice your skills using a fun dataset about LEGOs from the Rebrickable website. The dataset contains information about the sets, parts, themes, and colors of LEGOs, but is spread across many tables. You'll work with the data throughout the course as you learn a total of six different joins! You'll learn four mutating joins: inner join, left join, right join, and full join, and two filtering joins: semi join and anti join. In the final chapter, you'll apply your new skills to Stack Overflow data, containing each of the almost 300,000 Stack Oveflow questions that are tagged with R, including information about their answers, the date they were asked, and their score. Get ready to take your dplyr skills to the next level!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Joining Tables\n        ",
           "index":"1",
           "description":"\n    Get started with your first joining verb: inner-join! You'll learn to join tables together to answer questions about the LEGO dataset, which contains information across many tables about the sets, parts, themes, and colors of LEGOs over time.  \n\n  ",
           "parts":[
              "The inner_join verb",
              "What columns would you join on?",
              "Joining parts and part categories",
              "Joining with a one-to-many relationship",
              "Joining parts and inventories",
              "Joining in either direction",
              "Joining three or more tables",
              "Joining three tables",
              "What's the most common color?"
           ]
        },
        {
           "title":"\n          Left and Right Joins\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn two more mutating joins, the left and right join, which are mirror images of each other! You'll learn use cases for each type of join as you explore parts and colors of LEGO themes. Then, you'll explore how to join tables to themselves to understand the hierarchy of LEGO themes in the data. \n  ",
           "parts":[
              "The left_join verb",
              "Left joining two sets by part and color",
              "Left joining two sets by color",
              "Finding an observation that doesn't have a match",
              "The right-join verb",
              "Which join is best?",
              "Counting part colors",
              "Cleaning up your count",
              "Joining tables to themselves",
              "Joining themes to their children",
              "Joining themes to their grandchildren",
              "Left-joining a table to itself"
           ]
        },
        {
           "title":"\n          Full, Semi, and Anti Joins\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll cover three more joining verbs: full-join, semi-join, and anti-join. You'll then use these verbs to answer questions about the similarities and differences between a variety of LEGO sets. \n  ",
           "parts":[
              "The full_join verb",
              "Differences between Batman and Star Wars",
              "Aggregating each theme",
              "Full-joining Batman and Star Wars LEGO parts",
              "Comparing Batman and Star Wars LEGO parts",
              "The semi- and anti-join verbs",
              "Select the join",
              "Something within one set but not another",
              "What colors are included in at least one set?",
              "Which set is missing version 1?",
              "Visualizing set differences",
              "Aggregating sets to look at their differences",
              "Combining sets",
              "Visualizing the difference: Batman and Star Wars"
           ]
        },
        {
           "title":"\n          Case Study: Joins on Stack Overflow Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Put together all the types of join you learned in this course to analyze a new dataset: Stack Overflow questions, answers, and tags. This includes calculating and visualizing trends for some notable tags like dplyr and ggplot2. You'll also master one more method for combining tables, the bind_rows verb, which stacks tables on top of each other.\n  ",
           "parts":[
              "Stack Overflow questions",
              "Left-joining questions and tags",
              "Comparing scores across tags",
              "What tags never appear on R questions?",
              "Joining questions and answers",
              "Finding gaps between questions and answers",
              "Joining question and answer counts",
              "Joining questions, answers, and tags",
              "Average answers by question",
              "The bind_rows verb",
              "Joining questions and answers with tags",
              "Binding and counting posts with tags",
              "Visualizing questions and answers in tags",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with dplyr"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Manipulation with R",
        "Data Scientist with R"
     ]
  },
  {
     "title":"Reporting with R Markdown",
     "description":"R Markdown is an easy-to-use formatting language for authoring dynamic reports from R code.",
     "detailDescription":"R Markdown is an easy to use formatting language you can use to reveal insights from data and author your findings as a PDF, HTML file, or Shiny app. In this course, you'll learn how to create and modify each element of a Markdown file, including the code, text, and metadata. You'll analyze data with dplyr, create visualizations with ggplot2, and author your analyses and plots as reports. You’ll gain hands-on experience of building reports as you work with real-world data from the International Finance Corporation (IFC)—learning how to efficiently organize reports using code chunk options, create lists and tables, and include a table of contents. By the end of the course, you'll have the skills you need to add your brand’s fonts and colors using parameters and Cascading Style Sheets (CSS), to make your reports stand out.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Getting Started with R Markdown\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn about the three components of a Markdown file: the code, the text, and the metadata. You'll also learn to add and modify each of these elements to your own reports, as you create your first Markdown files. \n  ",
           "parts":[
              "Introduction to R Markdown",
              "Creating your first R Markdown file",
              "Adding code chunks to your file",
              "Adding and formatting text",
              "Formatting text",
              "Adding sections to your report",
              "Including links and images",
              "The YAML header",
              "Editing the YAML header",
              "Formatting the date"
           ]
        },
        {
           "title":"\n          Adding Analyses and Visualizations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll use dplyr to begin to analyze the World Bank IFC datasets and include the analyses in your report. You’ll then create visualizations of the data using ggplot2 and learn to modify how the plots display in your knit report. \n  ",
           "parts":[
              "Analyzing the data",
              "Filtering for a specific country",
              "Filtering for a specific year",
              "Referencing code results in the report",
              "Adding plots",
              "Visualizing the Investment Annual Summary data",
              "Visualizing all projects for one country",
              "Visualizing all projects for one country and year",
              "Plot options",
              "Setting chunk options globally",
              "Setting chunk options locally",
              "Adding figure captions"
           ]
        },
        {
           "title":"\n          Improving the Report\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you've learned how to add, label, and modify code chunks, you'll learn about code chunk options. You can use these to determine whether the code and results appear in the knit report. You'll also discover how to create lists and tables to include in your report. \n  ",
           "parts":[
              "Organizing the report",
              "Creating a bulleted list",
              "Creating a numbered list",
              "Adding a table",
              "Code chunk options",
              "Comparing code chunk options",
              "Collapsing blocks in the knit report",
              "Modifying the report using include and echo",
              "Warnings, messages, and errors",
              "Excluding messages",
              "Excluding warnings"
           ]
        },
        {
           "title":"\n          Customizing the Report\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you'll learn how to customize your report by adding a table of contents and adding a CSS file to the YAML header, to personalize reports with your brand’s fonts and colors. You'll also learn how to efficiently create new reports from your data using parameters, which will save you time from manually updating existing reports to create new ones. \n  ",
           "parts":[
              "Adding a table of contents",
              "Adding the table of contents",
              "Specifying headers and number sectioning",
              "Adding table of contents options",
              "Creating a report with a parameter",
              "Adding a parameter to the report",
              "Creating a new report using a parameter",
              "Multiple parameters",
              "Adding multiple parameters to the report",
              "Creating a new report using multiple parameters",
              "Customizing the report",
              "Customizing the report style",
              "Customizing the header and table of contents",
              "Customizing the title, author, and date",
              "Referencing the CSS file",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Intermediate Regular Expressions in R",
     "description":"Manipulate text data, analyze it and more by mastering regular expressions and string distances in R.",
     "detailDescription":"Analyzing data that comes in tables is fun. But what if the things that we find most interesting are not available as a neatly organized dataset but in plain text? Do not despair: In this course, you'll learn everything you need to know to create powerful regular expressions that will help you find all the information you need for your analyses from just a blob of text. But not only that. Using the concept of string distances you will learn to work even with text that contains typos or scanning errors, as you will be able to match them to their correct counterparts from other data sources (record linkage). As a learning material, we will analyze real documents about box office figures in Swiss cinemas.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Regular Expressions: Writing custom patterns\n        ",
           "index":"1",
           "description":"\n    Regular expressions can be pretty intimidating at first as they contain vast amounts of special characters. In this chapter, you'll learn to decipher these and write your own patterns to find exactly what you're looking for.\n  ",
           "parts":[
              "Welcome",
              "Starts with, ends with",
              "If you don't know what you're looking for",
              "Character classes and repetitions",
              "Digits, words and spaces",
              "Match repetitions",
              "Which special character did what again?",
              "The pipe and the question mark",
              "This or that",
              "The question mark and its two meanings",
              "You can now read this!"
           ]
        },
        {
           "title":"\n          Creating strings with data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we will slightly move away from regular expressions and focus on string manipulation by creating strings from other data structures like vectors or lists.\n  ",
           "parts":[
              "Getting to know glue",
              "Stop pasting, start gluing",
              "Gluing data frames",
              "How many arguments can glue take?",
              "Collapsing multiple elements into a string",
              "Formulating a question from a list",
              "Collapsing data frames",
              "Glue and Collapse, what's the difference?",
              "Gluing regular expressions",
              "Construct \"or patterns\" with glue",
              "Using the \"or pattern\" with a larger dataset",
              "Make advanced patterns more readable"
           ]
        },
        {
           "title":"\n          Extracting structured data from text\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    One task where regular expressions really shine is making sense from a blob of text. In this chapter, you'll learn to extract the information from messy data that doesn't come in neatly arranged tables but in plain text.\n  ",
           "parts":[
              "Capturing groups",
              "Match all capturing groups",
              "Search and replace",
              "Can you nest capturing groups?",
              "Tidyr's extract",
              "Creating a regex that matches your needs",
              "Why does this fail?",
              "Extracting an advanced regular expression",
              "Extracting matches and surroundings from a text",
              "Extract names with context",
              "So many special characters"
           ]
        },
        {
           "title":"\n          Similarities between strings\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the last chapter, we will shift gears away from regular expressions to understanding string distances. By calculating the differences of multiple strings, we can match those that are similar. This will help us to find duplicates even when they contain small errors like typos. This is an important part to record linkage where we combine datasets from multiple sources.\n  ",
           "parts":[
              "Understanding string distances",
              "Calculating a string distance",
              "Finding a match to a search typo",
              "Methods of string distances",
              "Edit distances vs. q-gram methods",
              "Trying out different methods",
              "Is one distance better than the other?",
              "Fuzzy joins",
              "Performing a string distance join",
              "String distances of short strings",
              "Custom Fuzzy Matching",
              "Finding matches based on two conditions",
              "Why join on multiple columns?",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to R",
        "Introduction to the Tidyverse",
        "String Manipulation with stringr in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Handling Missing Data with Imputations in R",
     "description":"Diagnose, visualize and treat missing data with a range of imputation techniques with tips to improve your results.",
     "detailDescription":"Missing data is everywhere. The process of filling in missing values is known as imputation, and knowing how to correctly fill in missing data is an essential skill if you want to produce accurate predictions and distinguish yourself from the crowd. In this course, you’ll learn how to use visualizations and statistical tests to recognize missing data patterns and how to impute data using a collection of statistical and machine learning models. You’ll also gain decision-making skills, helping you decide which imputation method fits best in a particular situation. Finally, you’ll learn to incorporate uncertainty from imputation into your inference and predictions, making them more robust and reliable.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The problem of missing data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you’ll find out why missing data can be a risk when analyzing a dataset. You’ll be introduced to the three missing data mechanisms and learn how to recognize them using statistical tests and visualization tools.\n  ",
           "parts":[
              "Missing data: what can go wrong",
              "Linear regression with incomplete data",
              "Analyzing regression output",
              "Comparing models",
              "Missing data mechanisms",
              "Recognizing missing data mechanisms",
              "t-test for MAR: data preparation",
              "t-test for MAR: interpretation",
              "Visualizing missing data patterns",
              "Aggregation plot",
              "Spine plot",
              "Mosaic plot"
           ]
        },
        {
           "title":"\n          Donor-based imputation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Get to know the taxonomy of imputation methods and learn three donor-based techniques: mean, hot-deck, and k-Nearest-Neighbors imputation. You’ll look under the hood to see how these methods work, before learning how to apply them to a real-world tropical weather dataset. Along the way, you’ll also learn useful tricks that you can use to make them work even better for your problems.\n  ",
           "parts":[
              "Mean imputation",
              "Smelling the danger of mean imputation",
              "Mean-imputing the temperature",
              "Assessing imputation quality with  margin plot",
              "Hot-deck imputation",
              "Vanilla hot-deck",
              "Hot-deck tricks & tips I: imputing within domains",
              "Hot-deck tricks & tips II: sorting by correlated variables",
              "k-Nearest-Neighbors imputation",
              "Choosing the number of neighbors",
              "kNN tricks & tips I: weighting donors",
              "kNN tricks & tips II: sorting variables"
           ]
        },
        {
           "title":"\n          Model-based imputation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to learn how to use statistical and machine learning models, such as linear regression, logistic regression, and random forests, to impute missing data. In this chapter, you’ll look into how the models make their predictions and use this knowledge to draw the imputed values from conditional distributions. This is important as it ensures your imputations are more varied and plausible, making them more similar to the true data.\n  ",
           "parts":[
              "Model-based imputation approach",
              "Linear regression imputation",
              "Initializing missing values & iterating over variables",
              "Detecting convergence",
              "Replicating data variability",
              "Logistic regression imputation",
              "Drawing from conditional distribution",
              "Model-based imputation with multiple variable types",
              "Tree-based imputation",
              "Imputing with random forests",
              "Variable-wise imputation errors",
              "Speed-accuracy trade-off"
           ]
        },
        {
           "title":"\n          Uncertainty from imputation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Imputed values are not set in stone. They are just estimates and estimates come with some uncertainty. In this final chapter, you’ll discover how bootstrapping and chained equation using the mice package can be used to incorporate imputation uncertainty into your models and analyses to make them more reliable and robust. \n  ",
           "parts":[
              "Multiple imputation by bootstrapping",
              "Wrapping imputation & modeling in a function",
              "Running the bootstrap",
              "Bootstrapping confidence intervals",
              "Multiple imputation by chained equations",
              "The mice flow: mice - with - pool",
              "Choosing default models",
              "Using predictor matrix",
              "Putting it all together",
              "Analyzing missing data patterns",
              "Imputing and inspecting outcomes",
              "Inference with imputed data",
              "Final remarks"
           ]
        }
     ],
     "prerequistes":[
        "Multiple and Logistic Regression in R",
        "Dealing With Missing Data in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Course Creation at DataCamp",
     "description":"Learn all about how DataCamp builds the best platform to learn and teach data skills.",
     "detailDescription":"Welcome to the DataCamp family! You are about to begin creating a course that, in just a few months, will be available to over 3 million students worldwide! If you're new to eLearning, you'll soon learn that teaching an online course is very different from teaching in a classroom. But we're here to help! This course will provide a guide to the DataCamp Course Creation process; an introduction to the tools we use, including GitHub, Asana, and our very own course editor; and the different types of exercises and slides you can use, and how to make sure you're reaching students at the other end of the screen. While creating your course, you will find you have other questions, such as, \"How will my course be marketed?\", \"How do I recommend other instructors to DataCamp?\", or \"When do I get paid?\". This course will also provide you with direction on where to find answers to all your questions. Following this course, you should be familiar with the DataCamp Course Creation process and be ready to start your very own DataCamp course. Have fun and see you in the course!",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          Our Process\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Are you interested in creating a DataCamp course, but not sure what exactly to expect? This introductory chapter will you give an overview of the different phases of course creation and the people you'll work with during each phase. You'll focus on the first two phases: course design and course development and meet Curriculum Leads and Content Developers, who will be your guides.\n  ",
           "parts":[
              "Welcome to DataCamp!",
              "Course specs",
              "Content Developers",
              "Course maintenance",
              "Course design",
              "Which parts require the course editor?",
              "Course design tasks",
              "Course development",
              "CD responsibilities",
              "Instructor responsibilities during development"
           ]
        },
        {
           "title":"\n          Tools We Use\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Before diving deep into pedagogy and the nitty-gritty details of DataCamp exercises, it's important to learn the values we hold ourselves and our instructors to when building a course, namely accountability, predictability, and transparency. Furthermore, it is vital to  understand the tools we use, how they work, and how they support our values.\n  ",
           "parts":[
              "Accountability,  transparency, & predictability",
              "Why are deadlines important?",
              "How hard can it be?",
              "Are DataCamp deadlines flexible?",
              "When should I start working?",
              "Course management tools",
              "Asana is our ground truth",
              "Understanding our meeting tools",
              "Communication strategy",
              "Navigating the DataCamp course editor",
              "Using the course outline",
              "Text vs. code fields",
              "Saving in the course editor",
              "GitHub & course development",
              "GitHub files",
              "Saving & commits"
           ]
        },
        {
           "title":"\n          What Makes a Great Course?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    At DataCamp, we strive for quality in our content, our product, and our instructors. We do this by building our courses with a specific structure around learning objectives. We've built this structure so that our students get the best eLearning experience. We also know that this can be a challenge, so in this chapter, we provide a few tips and tricks on how to teach effectively on an eLearning platform.\n  ",
           "parts":[
              "Structure & optimal flow",
              "Lesson framework",
              "Motivating a lesson",
              "Progressive build-up",
              "Defining learning objectives",
              "Clear learning objectives",
              "Real-world scenarios",
              "Optimizing for digital learning",
              "Creating course descriptions",
              "Deciding on prerequisites",
              "Using analogies & heuristics",
              "Excitement is contagious!",
              "Fostering engagement in videos",
              "What to avoid in interactive exercises"
           ]
        },
        {
           "title":"\n          Start Developing!\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you know our tools and the tricks to making a great course, dive into the nitty-gritty of DataCamp courses. In this chapter, you'll learn about how to create videos and the different types of interactive exercises we support on our platform. You'll learn about the different parts of interactive exercises and the guidelines we follow to ensure our courses keep our students engaged. Lastly, you'll return to GitHub and learn about how it's used to get all the content from your videos and exercises reviewed to ensure it's top quality!\n  ",
           "parts":[
              "Video exercises: Slides & transcript",
              "Animating text & code",
              "Animating images",
              "A great video",
              "Interactive exercises",
              "Choosing the right exercise type",
              "Anatomy of an exercise",
              "What is sample code?",
              "Interactive exercise fields",
              "Respect the guidelines",
              "Code evaluation",
              "Course evaluation",
              "GitHub for course review",
              "Pull requests in your course repo",
              "GitHub resources"
           ]
        },
        {
           "title":"\n          Course Launch and Beyond!\n        ",
           "index":"5",
           "description":"\n     Many things happen after a course has been designed and developed; namely, it must be launched! In this chapter, you will learn about the different aspects of course launch, the work that goes into a course following its launch, and importantly, how you will get paid for your course. If you have enjoyed creating a course, and want to make more DataCamp content, you will find out all we have to offer!\n  ",
           "parts":[
              "Post-dev review & course launch",
              "Screencasts vs. audio recordings",
              "Submission Correctness Tests (SCTs)",
              "Soft launch vs. hard launch",
              "Course maintenance",
              "Content Quality Dashboard",
              "The maintenance process",
              "Marketing & royalties",
              "Marketing courses",
              "Understanding royalties",
              "Make more DataCamp content",
              "Criteria for developing a second course",
              "Other types of content",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[

     ]
  },
  {
     "title":"Advanced Dimensionality Reduction in R",
     "description":"Learn how to apply advanced dimensionality techniques such as t-SNE and GLRM.",
     "detailDescription":"Dimensionality reduction techniques are based on unsupervised machine learning algorithms and their application offers several advantages. In this course you will learn how to apply dimensionality reduction techniques to exploit these advantages, using interesting datasets like the MNIST database of handwritten digits, the fashion version of MNIST released by Zalando, and a credit card fraud detection dataset. Firstly, you will have a look at t-SNE, an algorithm that performs non-linear dimensionality reduction. Then, you will also explore some useful characteristics of dimensionality reduction to apply in predictive models. Finally, you will see the application of GLRM to compress big data (with numerical and categorical values) and impute missing values. Are you ready to start compressing high dimensional data?",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Advanced Dimensionality Reduction \n        ",
           "index":"1",
           "description":"\n    Are you ready to become a master of dimensionality reduction?\nIn this chapter, you'll start by understanding how to represent handwritten digits using the MNIST dataset.  You will learn what a distance metric is and which ones are the most common, along with the problems that arise with the curse of dimensionality.\nFinally, you will compare the application of PCA and t-SNE .\n  ",
           "parts":[
              "Exploring the MNIST dataset",
              "Exploring MNIST dataset",
              "Digits features",
              "Distance metrics",
              "Euclidean distance",
              "Minkowski distance",
              "KL divergence",
              "PCA and t-SNE",
              "Generating PCA from MNIST sample",
              "t-SNE output from MNIST sample"
           ]
        },
        {
           "title":"\n          Introduction to t-SNE\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now, you will learn how to apply the t-Distributed Stochastic Neighbour Embedding (t-SNE) algorithm. After finishing this chapter, you will understand the different hyperparameters that have an impact on your results and how to optimize them. Finally,  you will do something really cool: compute centroids prototypes of each digit to classify other digits.\n  ",
           "parts":[
              "Building a t-SNE embedding",
              "Computing  t-SNE",
              "Understanding t-SNE output",
              "Optimal number of t-SNE iterations",
              "Reproducing results",
              "Optimal number of iterations",
              "Effect of perplexity parameter",
              "Perplexity of MNIST sample",
              "Perplexity of bigger MNIST dataset",
              "Classifying digits with t-SNE",
              "Plotting  spatial  distribution of true classes",
              "Computing the centroids of each class",
              "Computing similarities of digits 1 and 0",
              "Plotting similarities of digits 1 and 0"
           ]
        },
        {
           "title":"\n          Using t-SNE with Predictive Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll apply t-SNE to train predictive models faster. This is one of the many advantages of dimensionality reduction. You will learn how to train a random forest with the original features and with the embedded features and compare them. You will also apply t-SNE to understand the patterns learned by a neural network. And all of this using a real credit card fraud dataset!\n  ",
           "parts":[
              "Credit card fraud detection",
              "Exploring credit card fraud dataset",
              "Generating training and test sets",
              "Training random forests models",
              "Training a random forest with original features",
              "Computing and visualising the t-SNE embedding",
              "Training  a random forest with embedding features",
              "Predicting data",
              "Predicting data using original features",
              "Predicting data using embedding random forest",
              "Visualizing neural networks layers",
              "Exploring neural network layer output",
              "Using t-SNE to visualise a neural network layer"
           ]
        },
        {
           "title":"\n          Generalized Low Rank Models (GLRM)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, you will practice another useful dimensionality reduction algorithm: GLRM. Here you will make use of the Fashion MNIST data to classify clothes, impute missing data and also train random forests using the low dimensional embedding.\n  ",
           "parts":[
              "Exploring fashion MNIST dataset",
              "Exploring fashion MNIST",
              "Visualizing fashion MNIST",
              "Generalized Low Rank Models (GLRM)",
              "Reducing data with GLRM",
              "Improving model convergence",
              "Visualizing a GLRM model",
              "Visualizing the  output of GLRM",
              "Visualizing the prototypes",
              "Dealing with missing data and speeding-up models",
              "Imputing missing data",
              "Training a random forest with original data",
              "Training a random forest with compressed data",
              "Summary of the course"
           ]
        }
     ],
     "prerequistes":[
        "Dimensionality Reduction in R"
     ],
     "tracks":[
        "Machine Learning Scientist with R",
        "Unsupervised Machine Learning with R"
     ]
  },
  {
     "title":"Topic Modeling in R",
     "description":"Learn how to fit topic models using the Latent Dirichlet Allocation algorithm.",
     "detailDescription":"This course introduces students to the areas involved in topic modeling: preparation of corpus, fitting of topic models using Latent Dirichlet Allocation algorithm (in package topicmodels), and visualizing the results using ggplot2 and wordclouds.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Quick introduction to the workflow\n        ",
           "index":"1",
           "description":"\n    This chapter introduces the workflow used in topic modeling: preparation of a document-term matrix, model fitting, and visualization of results with ggplot2.\n  ",
           "parts":[
              "Why learn topic modeling",
              "Topics as word contexts",
              "Topic prevalence",
              "Probabilities of words belonging to topics",
              "Counting words",
              "Removal of punctuation marks",
              "Word frequencies",
              "Our first LDA model",
              "Displaying frequencies with ggplot",
              "Simple LDA model"
           ]
        },
        {
           "title":"\n          Wordclouds, stopwords, and control arguments\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter explains how to use join functions to remove or keep words in the document-term matrix, how to make wordcloud charts, and how to use some of the many control arguments.\n  ",
           "parts":[
              "Random nature of LDA algorithm",
              "Probabilities of words in topics",
              "Effect of argument alpha",
              "Manipulating the vocabulary",
              "Making a dtm - refresher",
              "Removing stopwords",
              "Keeping the needed words",
              "Word clouds",
              "Wordcloud of term frequency",
              "History of the Byzantine Empire",
              "LDA model fitting - first iteration",
              "Capturing the actions - dtm with verbs",
              "Making a chart",
              "Use wordclouds"
           ]
        },
        {
           "title":"\n          Named entity recognition as unsupervised classification\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter goes into detail on how LDA topic models can be used as classifiers. It covers the importance of the Dirichlet shape parameter alpha, construction of word contexts for named entities using regex, and technical issues like corpus alignment and held-out data.\n  ",
           "parts":[
              "Using topic models as classifiers",
              "Same k, different alpha",
              "Probabilities of words in topics",
              "From word windows to dtm",
              "Regex patterns for entity matching",
              "Making a corpus",
              "From dtm to topic model",
              "Corpus alignment and classification",
              "Train a topic model",
              "Align corpus",
              "Classify test data",
              "Explore the results"
           ]
        },
        {
           "title":"\n          How many topics is enough?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter explains the basic methods used in the search for the optimal number of topics. It also covers how to use a single document as a source of data, and how topic numbering can be controlled using seed words.\n  ",
           "parts":[
              "Finding the best number of topics",
              "Preparing the dtm",
              "Filtering by word frequency",
              "Fitting one model",
              "Using perplexity to find the best k",
              "Topic models fitted to novels",
              "Generating chunk numbers",
              "Inner join and cast dtm",
              "Finding the best value for k",
              "Locking topics by using seed words",
              "Topics without seedwords",
              "Topics with seedwords",
              "Final words (and more things to learn)"
           ]
        }
     ],
     "prerequistes":[
        "Text Mining with Bag-of-Words in R",
        "Introduction to Natural Language Processing in R"
     ],
     "tracks":[
        "Machine Learning Scientist with R"
     ]
  },
  {
     "title":"Probability Puzzles in R",
     "description":"Learn strategies for answering probability questions in R by solving a variety of probability puzzles.",
     "detailDescription":"Do you want to take your probability skills to the next level? This course will help get you there, using problem-based learning with probability puzzles as the framework. As you are guided through their solutions, you will gain coding tools and general strategies for solving probability problems that you might encounter in many other situations. Organized by theme, the course begins with classic problems like the Birthday Problem and Monty Hall, and ends with puzzles that involve poker like Texas Hold'em and the World Series of Poker!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction and Classic Puzzles\n        ",
           "index":"1",
           "description":"\n    This chapter will introduce some basic principles that will be used throughout the course, such as writing loops and functions. Then, we dive into a couple of classic problems: the Birthday Problem, and Monty Hall.\n  ",
           "parts":[
              "Introduction to the Course",
              "Writing a simple function",
              "Writing a simple for loop",
              "Setting a seed",
              "The Birthday Problem",
              "Simulation of a single n",
              "Using the pbirthday function",
              "Make a plot",
              "Monty Hall",
              "Win probability with \"stick\"",
              "Writing a function to \"switch\"",
              "Win probability with \"switch\""
           ]
        },
        {
           "title":"\n          Games with Dice\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we explore games in which dice are rolled, including Yahtzee, Settlers of Catan, and Craps. You will learn tools such as using built-in R functions to calculate combinatorics, and using functions such as replicate and the %in% operator.\n  ",
           "parts":[
              "Yahtzee",
              "Probability of a Yahtzee",
              "Probability of a large straight",
              "Probability of a full house",
              "Settlers of Catan",
              "Simulate one game",
              "Simulate 10000 games",
              "Craps",
              "Function to keep rolling when point is established",
              "Function to run one round",
              "Probability of winning the pass line bet"
           ]
        },
        {
           "title":"\n          Inspired from the Web\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The puzzles in this chapter were inspired by ideas encountered on the internet. In order to solve them, you will learn to combine tools such as nested for loops, and the functions round, identical, and sapply.\n  ",
           "parts":[
              "Factoring a Quadratic",
              "Which condition will return TRUE?",
              "Write a function to check factorability",
              "Simulate the factorable probability",
              "Four Digit iPhone Passcodes",
              "Four known values",
              "Three known values",
              "Sign Error Cancellations",
              "Simulate sign errors: constant probabilities",
              "Simulate sign errors: changing probabilities"
           ]
        },
        {
           "title":"\n          Poker\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter explores questions in poker, including the most often televised version of Texas Hold'em. We will learn to code for win probabilities with any given number of outs, and also explore a more theoretical model of poker known as the von Neumann model. We will learn to use functions such as Reduce, runif, and ifelse.\n  ",
           "parts":[
              "Texas Hold'em",
              "Calculate expected value with one card to come",
              "Two cards to come",
              "Consecutive Cashes",
              "Two consecutive years",
              "Function to evaluate set of five years",
              "Simulate probability for a given set of five years",
              "von Neumann Model of Poker",
              "One round of von Neumann Poker",
              "Function to simulate one round with betting",
              "Simulate many iterations of von Neumann model",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Foundations of Probability in R"
     ],
     "tracks":[
        "Probability and Distributions with R"
     ]
  },
  {
     "title":"Feature Engineering in R",
     "description":"Learn a variety of feature engineering techniques to develop meaningful features that will uncover useful insights about your machine learning models.",
     "detailDescription":"Feature engineering helps you uncover useful insights from your machine learning models. The model building process is iterative and requires creating new features using existing variables that make your model more efficient. In this course, you will explore different data sets and apply a variety of feature engineering techniques to both continuous and discrete variables.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Creating Features from Categorical Data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn how to change categorical features into numerical representations that models can interpret.  You'll learn about one-hot encoding and using binning for categorical features. \n  ",
           "parts":[
              "Introduction to feature engineering in R",
              "Examples of feature engineering",
              "One-hot encoding",
              "Binning encoding: content driven",
              "Leveraging content knowledge",
              "Converting new categories to numeric",
              "Binning encoding: data driven",
              "Categorical proportions by outcome",
              "Reducing categories using outcome"
           ]
        },
        {
           "title":"\n          Creating Features from Numeric Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to manipulate numerical features to create meaningful features that can give better insights into your model.  You will also learn how to work with dates in the context of feature engineering. \n  ",
           "parts":[
              "Numerical bucketing or binning",
              "Visualizing the distribution",
              "Creating uniform buckets from a distribution",
              "Binning numerical data using quantiles",
              "Balanced bucketing",
              "Full matrix encoding",
              "Unique attributes of adaptive bucketing",
              "Date and time feature extraction",
              "Converting  string types  to date types",
              "Converting dates",
              "Visualize time features"
           ]
        },
        {
           "title":"\n          Transforming Numerical Features\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n     In this chapter, you will learn about using transformation techniques, like Box-Cox and Yeo-Johnson, to address issues with non-normally distributed features. You'll also learn about methods to scale features, including mean centering and z-score standardization.\n  ",
           "parts":[
              "Box and Yeo transformations",
              "Box-Cox vs. Yeo-Johnson",
              "Box-Cox transformations",
              "Yeo-Johnson transformations",
              "Normalization techniques",
              "Scaling",
              "Mean centering",
              "Caret mean centering",
              "Z-score standardization",
              "Standardization one variable case",
              "Caret standardization"
           ]
        },
        {
           "title":"\n          Advanced Methods\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, we will use feature crossing to create features from two or more variables. We will also discuss principal component analysis, and methods to explore and visualize those results.\n  ",
           "parts":[
              "Feature crossing",
              "How many features to expect",
              "Exploring features visually",
              "Exploring potential crosses",
              "Crossing two categorical features",
              "Principal component analysis",
              "Conduct PCA",
              "PCA results",
              "Interpreting PCA output",
              "Proportion of variance by PCA",
              "Visualizing results with a scree plot",
              "Visualizing components",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Exploratory Data Analysis in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Defensive R Programming",
     "description":"Learn defensive programming in R to make your code more robust.",
     "detailDescription":"Writing R scripts is easy. Writing good R code is hard. In this course, we'll discuss defensive programming - a set of standard techniques that will help reduce bugs and aid working in teams. We examine techniques for avoiding common errors and also how to handle the inevitable error that arises in our code. The course will conclude looking at when to make the transition from script to project to package.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Avoiding Conflict\n        ",
           "index":"1",
           "description":"\n    In this first chapter, you'll learn what defensive programming is,  and how to use existing packages for increased efficiency. You will then learn to manage the packages loaded in your environment and the potential conflicts that may arise.\n  ",
           "parts":[
              "Defensive R Programming",
              "Real Programmers...",
              "Don't reinvent the wheel/package",
              "Updating Packages",
              "Out of Date Packages",
              "Task Views",
              "Packages and Namespaces",
              "Number of Loaded Packages",
              "Counting Exported Functions",
              "The Conflicted Package"
           ]
        },
        {
           "title":"\n          Early warning systems\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Programming is simpler when you get feedback on your code execution. In R, we use messages, warnings and errors to signal to keep the user informed. This chapter will discuss when and where you should use these communication tools.\n  ",
           "parts":[
              "Early warning systems",
              "To TRUE or not to T",
              "Let's be evil",
              "If it weren't for those pesky kids",
              "Message in a bottle",
              "Did you get the message?",
              "Suppressing startup messages",
              "Stop being noisy!!!",
              "Using message in practice",
              "You have been warned",
              "Messages vs Warnings",
              "Suppressing warnings",
              "Stop (right now)",
              "Warnings vs Stop",
              "Using the stop() function"
           ]
        },
        {
           "title":"\n          Preparing your defenses\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We can avoid making mistakes using a consistent programming approach. In this chapter, we will introduce you to R best practices.\n  ",
           "parts":[
              "Preparing your defences",
              "What does DRY mean?",
              "Refactoring: functions",
              "Just one comment",
              "Header comments",
              "A little bit dotty",
              "Use a full stop in variable names",
              "Avoiding the .",
              "Coding Style",
              "Importance of consistent style",
              "Static Code Analysis for R",
              "Code tidying",
              "More linting"
           ]
        },
        {
           "title":"\n          Creating a Battle Plan\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Creating a script is nice, but working on a project with several scripts and assets requires structure. This final chapter will teach you good organization practices, so you can go from script to package with an optimal workflow.\n  ",
           "parts":[
              "A battle plan",
              "The importance of consistency",
              "Give me some space",
              "Human readable filenames",
              "What date format should we use?",
              "Organizing a project",
              "Avoiding absolute directories",
              "The input/ directory",
              "Absolute vs relative",
              "Graphics and output",
              "Generating graphics",
              "Graphics/",
              "One final work flow"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R"
     ],
     "tracks":[
        "R Programmer"
     ]
  },
  {
     "title":"R For SAS Users",
     "description":"Learn how to translate your SAS knowledge into R and analyze data using this free and powerful software language.",
     "detailDescription":"If you have experience with SAS and want to learn R, this is the course for you. R is FREE (cost) and OPEN (license) and is one of the fastest growing software languages for statistics and data science. This course is a gentle introduction to the R language with every chapter providing a detailed mapping of R functions to SAS procedures highlighting similarities and differences. You will orient yourself in the R environment and discover how to wrangle, visualize, and model data plus customize your output for final presentation. Throughout the course, you will follow a consistent workflow of data quality checking and cleaning, exploring relationships, modeling, and presenting results. You will leave this course with coded examples that provide a template to use immediately with a dataset of your own.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Getting Started with R\n        ",
           "index":"1",
           "description":"\n    This first chapter will get you oriented into the R programming environment. You'll learn how to get help, load a dataset, and increase functionality by adding packages. You'll begin working with the abalone dataset (through the dplyr package workflow) to get descriptive statistics and create helpful visualizations (using the ggplot2 package).\n  ",
           "parts":[
              "Get help and load data in R",
              "Getting help",
              "Load dataset and get details",
              "Add functionality with packages",
              "Dataset contents and descriptive statistics",
              "Load external dataset",
              "Dataset contents",
              "Descriptive statistics",
              "Graphical visualizations",
              "Histograms",
              "Boxplots and violin plots",
              "Scatterplots"
           ]
        },
        {
           "title":"\n          Data Wrangling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you are oriented in the R environment, this chapter will advance your understanding of R's versatility working with data objects. You'll learn how to create and modify variables in the abalone data set. Using your ggplot2 visualization skills, you will discover the data errors in the abalone data and then create a final cleaned data set ready for analysis and modeling.\n  ",
           "parts":[
              "Objects - the building blocks of R",
              "Create data objects in R",
              "Create composite object types",
              "Selecting elements from objects",
              "Determine variable types",
              "Select elements in objects",
              "Manipulating datasets and data objects",
              "Create new variables",
              "Recode variables",
              "Object type conversion",
              "Data quality and cleaning",
              "Variables inspection",
              "Illogical weights",
              "Check dimension measurements",
              "Check final dataset"
           ]
        },
        {
           "title":"\n          Data Exploration\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Once your data set has been cleaned, the next step is exploration. In chapter 3 you will learn how to compute descriptive statistics, explore associations (e.g., correlations) among the variables, and perform bi-variate statistical tests (e.g., t-tests and chi-square tests). You will also create graphical visualizations which illustrate the bi-variate associations and group comparison tests.\n  ",
           "parts":[
              "Exploratory data analysis",
              "Descriptive statistics and function masking",
              "Specific statistics for one or more variables",
              "Summary statistics by group",
              "Correlations and t-tests",
              "Bivariate correlations",
              "Scatterplots",
              "Correlations by sex",
              "Tests for two groups",
              "Categorical data: analyze and visualize",
              "Chi-square tests",
              "Mosaic plots",
              "Age categories by shellweight categories"
           ]
        },
        {
           "title":"\n          Models and Presentation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will learn how to work with one of the most versatile data object types in R called a list. These skills will enable you to save and manipulate your output from descriptive statistics, associations, and group comparison computations. You will also learn how to perform ANOVA (analysis of variance) and linear regression in R. All your skills are put to use in the final exercises to create the best models for predicting abalone ages from their sex, size, and weight measurements.\n  ",
           "parts":[
              "Working with output objects",
              "Descriptive statistics output",
              "Summarise output",
              "Group_by output",
              "Working with lists",
              "Hmisc describe output",
              "Correlations output",
              "t-tests output",
              "Chi-square tests output",
              "ANOVA and linear models",
              "ANOVA",
              "Linear regression",
              "Final models evaluation",
              "Abalone age predictors",
              "Best model by sex",
              "Course summary and recommendations"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Text Analysis in R",
     "description":"Analyze text data in R using the tidy framework.",
     "detailDescription":"From social media to product reviews, text is an increasingly important type of data across applications, including marketing analytics. In many instances, text is replacing other forms of unstructured data due to how inexpensive and current it is. However, to take advantage of everything that text has to offer, you need to know how to think about, clean, summarize, and model text. In this course, you will use the latest tidy tools to quickly and easily get started with text. You will learn how to wrangle and visualize text, perform sentiment analysis, and run and interpret topic models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Wrangling Text\n        ",
           "index":"1",
           "description":"\n    Since text is unstructured data, a certain amount of wrangling is required to get it into a form where you can analyze it. In this chapter, you will learn how to add structure to text by tokenizing, cleaning, and treating text as categorical data.\n  ",
           "parts":[
              "Text as data",
              "Airline tweets data",
              "Grouped summaries",
              "Counting categorical data",
              "Counting user types",
              "Summarizing user types",
              "Tokenizing and cleaning",
              "Tokenizing and counting",
              "Cleaning and counting"
           ]
        },
        {
           "title":"\n          Visualizing Text\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    While counts are nice, visualizations are better. In this chapter, you will learn how to apply what you know from ggplot2 to tidy text data.\n  ",
           "parts":[
              "Plotting word counts",
              "Visualizing complaints",
              "Visualizing non-complaints",
              "Improving word count plots",
              "Adding custom stop words",
              "Visualizing word counts using factors",
              "Faceting word count plots",
              "Counting by product and reordering",
              "Visualizing word counts with facets",
              "Plotting word clouds",
              "Creating a word cloud",
              "Adding a splash of color"
           ]
        },
        {
           "title":"\n          Sentiment Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    While word counts and visualizations suggest something about the content, we can do more. In this chapter, we move beyond word counts alone to analyze the sentiment or emotional valence of text.\n  ",
           "parts":[
              "Sentiment dictionaries",
              "Counting the NRC sentiments",
              "Visualizing the NRC sentiments",
              "Appending dictionaries",
              "Counting sentiment",
              "Visualizing sentiment",
              "Improving sentiment analysis",
              "Practicing reshaping data",
              "Practicing with grouped summaries",
              "Visualizing sentiment by complaint type"
           ]
        },
        {
           "title":"\n          Topic Modeling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, we move beyond word counts to uncover the underlying topics in a collection of documents. We will use a standard topic model known as latent Dirichlet allocation.\n  ",
           "parts":[
              "Latent Dirichlet allocation",
              "Topics as word probabilities",
              "Summarizing topics",
              "Visualizing topics",
              "Document term matrices",
              "Creating a DTM",
              "Evaluating a DTM as a matrix",
              "Running topic models",
              "Fitting an LDA",
              "Tidying LDA output",
              "Comparing LDA output",
              "Interpreting topics",
              "Naming three topics",
              "Naming four topics",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Marketing Analytics with R",
        "Text Mining with R"
     ]
  },
  {
     "title":"Survey and Measurement Development in R",
     "description":"Design surveys to get actionable insights via reviewing of survey design structures and visualizing and analyzing survey results.",
     "detailDescription":"How can we measure something like “brand loyalty?” It’s an obvious concept of interest to marketers, but we can’t quite take a ruler to it. Instead, we can design and analyze a survey to indirectly measure such a so-called “latent construct.” In this course, you’ll learn how to design and analyze a marketing survey to describe and even predict customers’ behavior based on how they rate items on “a scale of 1 to 5.” You’ll wrangle survey data, conduct exploratory & confirmatory factor analyses, and conduct various survey diagnostics such as checking for reliability and validity.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Preparing to analyze survey data\n        ",
           "index":"1",
           "description":"\n    In this chapter we will explore the use of surveys in marketing research and the importance of reliability and validity in measurement. We will begin the scale development process and perform exploratory data analysis on freshly-collected survey data.\n  ",
           "parts":[
              "Surveys in marketing research",
              "Measuring expert agreement",
              "Inter-rater reliability",
              "Content validity",
              "Measurement, validity & reliability",
              "Visualizing response frequencies",
              "Reverse-coding items",
              "Describing survey results",
              "Missing values",
              "Exploring item correlations",
              "Preparing the brand reputation survey"
           ]
        },
        {
           "title":"\n          Exploratory factor analysis & survey development\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that we have cleaned and summarized our survey results, we will look for hidden patterns in the data using exploratory factor analysis. These patterns form the basis of  developing “factors” of an unobserved or latent variable. Of particular interest in this stage  of survey development is internal reliability, or whether similar items in the survey produce similar scores.\n  ",
           "parts":[
              "What is a latent variable?",
              "From correlations to factors",
              "Building your first EFA",
              "EFA: How many factors?",
              "EFA & item refinement",
              "Refining the brand reputation survey",
              "Comparing EFA model fits",
              "EFA model iteration",
              "Assessing internal reliability",
              "Measuring coefficient (Cronbach's) alpha",
              "Coefficient alpha by dimension",
              "Split-half reliability",
              "Measuring loyalty"
           ]
        },
        {
           "title":"\n          Confirmatory factor analysis & construct validation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Does the data as collected agree with prior beliefs about the latent variable of interest? In this chapter, we will use confirmatory factor analysis to formally test the hypothesis that our model fits our data. We can now answer the question of construct validity, or: “are we really measuring what we are claiming to measure?”\n  ",
           "parts":[
              "CFA & EFA",
              "Factor loadings in EFA & CFA",
              "Building a CFA in lavaan",
              "A not-so-good CFA",
              "CFA assumptions & interpretation",
              "Adjusting for non-normality",
              "Comparing models using absolute fit measures",
              "Comparing CFA models using ANOVA",
              "Group CFA",
              "Construct validity",
              "Construct validity & model fit",
              "Construct validity & reliability",
              "Deeper into AVE & CR",
              "CFA of the brand reputation survey"
           ]
        },
        {
           "title":"\n          Criterion validity & replication\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we will use our newly validated scale to test its relationship to demographic variables like age or spending habits. We will also confirm the reproducibility and replicability of the survey. Finally, we will explore the power of factor scores in modeling customer behavior.\n  ",
           "parts":[
              "Concurrent validity & model diagrams",
              "Preparing a scaled data frame",
              "Plotting and analyzing a concurrent validity model",
              "Concurrent validity & Likert-style items",
              "Predictive validity & factor scores",
              "Statistical significance & r-square",
              "Prediction & causation",
              "Exploring factor scores",
              "Factor scores & regression",
              "Repeated measures, replication & factor scores",
              "Test-retest reliability",
              "CFA, EFA & replication",
              "Wrap-up: from generation to replication..."
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse",
        "Correlation and Regression in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Practicing Machine Learning Interview Questions in R",
     "description":"Prepare for your upcoming machine learning interview by working through these practice questions that span across important topics in machine learning.",
     "detailDescription":"Preparing for a Machine Learning (ML) interview could be quite challenging. Where to start? What topics to focus on? Theory or practice? Well, fear not! In this course, you will learn to answer 30 non-trivial questions that often pop up in ML interviews. These questions revolve around seven important topics: data preprocessing, data visualization, supervised learning, unsupervised learning, model ensembling, selection, and evaluation. You will practice these concepts while learning to predict the rating of an Android app or segmenting mall customers based on their purchasing behaviors. Keep in mind -- this course is meant to be more challenging than your average DataCamp course. Make sure to complete your prerequisite courses so you can gain the most out of the topics we will cover!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Data preprocessing and visualization\n        ",
           "index":"1",
           "description":"\n    This chapter discusses important topics related to data processing such as data normalization, handling missing data and identifying outliers.\n  ",
           "parts":[
              "Data normalization",
              "Understanding when to normalize data",
              "Normalizing features",
              "Handling missing data",
              "Exploring and summarizing missing data",
              "Show me your missingness",
              "Imputing missing data",
              "Evaluating imputation models",
              "Detecting anomalies in data",
              "Univariate outlier detection: the IQR rule",
              "The KNN distance score",
              "The LOF score"
           ]
        },
        {
           "title":"\n          Supervised learning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter discusses important topics within supervised learning such as model interpretability, regularization, the bias-variance tradeoff and model ensembling.\n  ",
           "parts":[
              "Interpretable models",
              "Interpreting linear regression",
              "Interpreting decision tree",
              "Regularization",
              "Ridge regression",
              "Lasso regression",
              "Elastic net regression",
              "Bias and variance",
              "Bias-variance analysis",
              "Reducing avoidable bias",
              "Building ensemble models",
              "Recruiting the base learners",
              "Evaluating base learners' performance",
              "Stacking the base learners",
              "Predicting on test data"
           ]
        },
        {
           "title":"\n          Unsupervised learning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter revolves around the most common types of unsupervised learning methods:  clustering and dimensionality reduction via unsupervised feature selection and feature extraction.\n  ",
           "parts":[
              "K-means clustering",
              "Checking K-means assumptions",
              "Using the elbow method",
              "Interpreting your clustering results",
              "Clustering algorithms",
              "Comparing clustering methods: internal measures",
              "Comparing clustering methods: stability measures",
              "Visualizing cluster prototypes",
              "Feature selection",
              "Types of feature selection methods",
              "Removing near-zero-variance features",
              "Removing correlated features",
              "Feature extraction",
              "PCA to the rescue",
              "LDA to the rescue"
           ]
        },
        {
           "title":"\n          Model selection and evaluation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter covers topics related to model selection and evaluation, imbalanced classification and hyperparameter tuning . It also sheds light on the commonalities and differences between two top-performing ensemble models: Random Forests and Gradient Boosted Trees.\n  ",
           "parts":[
              "Model evaluation",
              "Evaluating classification models",
              "Evaluating regression models",
              "Evaluating clustering methods",
              "Handling imbalanced data",
              "Checking for class imbalance",
              "Applying subsampling in each resample",
              "Evaluating model performance",
              "Hyperparameter tuning",
              "Default grid search in caret",
              "Customizing the grid search",
              "Random search",
              "Random Forests or Gradient Boosted Trees?",
              "The Random Forest model",
              "The GBM model",
              "Evaluating GBM and RF predictions on test data",
              "You made it!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Machine Learning",
        "Machine Learning with caret in R",
        "Unsupervised Learning in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to TensorFlow in R",
     "description":"Learn how to use TensorFlow, a state-of-the-art machine learning framework that specializes in the ability to develop deep learning neural networks.",
     "detailDescription":"TensorFlow is a state-of-the-art machine learning framework that specializes in the ability to develop deep learning neural networks. And now, it's available in R! This course will walk you through the basics of using TensorFlow in R. From simple linear regressions to more complex deep learning neural networks (which perform extremely well with BIG datasets) , you'll be introduced to both the basics of TensorFlow and higher-level APIs such as Keras and TFEstimators. We'll put your new-found skills to the test by exploring whether there is a predictable relationship between beer consumption and weather, and find out if we can accurately build a deep neural network to help predict whether a banknote is forged or genuine based on image data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introducing TensorFlow in R\n        ",
           "index":"1",
           "description":"\n    Let's get you started in TensorFlow! To begin the course, you'll learn the history of the program and will become comfortable using TensorFlow syntax. You'll become versed in TensorFlow constants, placeholders, and Variables and we'll explore some dataflow diagrams using TensorBoard, the TensorFlow visualization tool! This chapter is a great start to get you comfortable with using TensorFlow in R.\n  ",
           "parts":[
              "What is TensorFlow?",
              "Translating a dataflow graph",
              "Starting with sessions",
              "TensorFlow syntax, variables, and placeholders",
              "Variables, constants, and placeholders, oh my!",
              "Create tensors yourself",
              "TensorBoard: visualizing TensorFlow models",
              "Creating a single-step TensorBoard",
              "Creating a multi-step TensorBoard",
              "Sessions, constants, and variables in TensorFlow"
           ]
        },
        {
           "title":"\n          Linear Regression using two TensorFlow APIs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Have you ever wondered if we can predict beer consumption in university towns based on weather factors, such as temperature, precipitation, or time of week?  Well then do I have a chapter for you!\n\nIn this chapter, we'll explore linear regression models using both the Core TensorFlow API, as well as the Estimators API (a high-level API with canned models set to speed up the user experience). We'll train and evaluate several models to get you familiar with all the APIs TensorFlow has to offer. \n\nAnd you'll finally be able to answer - do people drink less beer when it's rainy out?\n  ",
           "parts":[
              "Core API: linear regression",
              "Choosing the correct API",
              "Can you define your x and y data?",
              "Weights, biases, and equations",
              "Core API: linear regression part II",
              "Defining a cost function",
              "Launching the graph and initializing the variables",
              "Core API: linear regression part III",
              "Training your model",
              "Evaluating your model",
              "Estimators API: multiple linear regression",
              "Defining feature columns",
              "Choosing a model and input function",
              "Training and evaluating the model",
              "Visualizing the linear regression"
           ]
        },
        {
           "title":"\n          Deep Learning in TensorFlow: Creating a Deep Neural Network\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Let’s dive into some deep learning with TensorFlow! In this chapter, you’ll create a complete end-to-end DNN Classifier with the Keras API, exploring if you can predict online customer buy/don’t buy behaviour. Want to see behind-the-scenes of your classifier? TensorBoard is your answer. You’ll explore scalars and graphs in TensorBoard and take a closer look at the visualizations directly available in R. Finish off the chapter with a glimpse into using a canned DNN Classifier in Estimators. Which is the better API for your model? You decide!\n  ",
           "parts":[
              "A gentle introduction to neural networks",
              "Calculating an output",
              "Create a deep neural network model with Keras API",
              "Defining your arguments",
              "Defining and compiling your model",
              "Fitting your model",
              "Evaluate, predict and visualize your model",
              "Find the accuracy of your model",
              "Predict the future!",
              "Exploring a DNN classifier in TensorBoard",
              "Create a DNN using the Estimators API",
              "Go with the (work)flow",
              "DNN classifier training using Estimators",
              "DNN classifier using Keras API"
           ]
        },
        {
           "title":"\n          Deep learning in TensorFlow: increasing model accuracy\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you've successfully created your first DNN models using TensorFlow in R, it's time to branch out and look at some ways to increase the accuracy of your models. In this chapter, you'll explore a few regularization techniques, including incorporating a Ridge Regression into a Keras model and adding a Dropout technique to an Estimators canned DNN. Finally, we'll wrap up this course by summarizing all the concepts you've learned, and give you some research ideas for you to try on your own!\n  ",
           "parts":[
              "L2 Regularization Technique using Keras",
              "Defining the regularizer",
              "Compiling and fitting the model",
              "Evaluating the L2 regularization model",
              "Dropout technique using TFEstimators",
              "Defining the feature columns and input function",
              "Defining the dropout clause",
              "Evaluating the dropout model",
              "Hyperparameter tuning with tfruns",
              "Hyperparameter tuning for a DNN model",
              "Multiple hyperparameter tuning",
              "So long and thanks for all the fish"
           ]
        }
     ],
     "prerequistes":[
        "Machine Learning with caret in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Natural Language Processing in R",
     "description":"Gain an overview of all the skills and tools needed to excel in Natural Language Processing in R.",
     "detailDescription":"As with any fundamentals course, Introduction to Natural Language Processing in R is designed to equip you with the necessary tools to begin your adventures in analyzing text. Natural language processing (NLP) is a constantly growing field in data science, with some very exciting advancements over the last decade. This course will cover the basics of these topics and prepare you for expanding your analysis capabilities. We dive into regular expressions, topic modeling, named entity recognition, and others, all while providing thorough examples that can be used to kick start your future analysis.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          True Fundamentals\n        ",
           "index":"1",
           "description":"\n    Chapter 1 of Introduction to Natural Langauge Processing prepares you for running your first analysis on text. You will explore regular expressions and tokenization, two of the most common components of most analysis tasks. With regular expressions, you can search for any pattern you can think of, and with tokenization, you can prepare and clean text for more sophisticated analysis. This chapter is necessary for tackling the techniques we will learn in the remaining chapters of this course.\n  ",
           "parts":[
              "Regular expression basics",
              "Practicing syntax with grep",
              "Exploring regular expression functions.",
              "Tokenization",
              "tidytext functions",
              "Tokenization: sentences",
              "Text cleaning basics",
              "Text preprocessing: remove stop words",
              "Text preprocessing: Stemming"
           ]
        },
        {
           "title":"\n          Representations of Text\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn the most common and studied ways to analyze text. You will look at creating a text corpus, expanding a bag-of-words representation into a TFIDF matrix, and use cosine-similarity metrics to determine how similar two pieces of text are to each other.  You build on your foundations for practicing NLP before you dive into applications of NLP in chapters 3 and  4. \n  ",
           "parts":[
              "Understanding an R corpus",
              "Explore an R corpus",
              "Creating a tibble from a corpus",
              "Creating a corpus",
              "The bag-of-words representation",
              "Practice BoW",
              "BoW Example",
              "Sparse matrices",
              "The TFIDF",
              "Manual calculations",
              "TFIDF Practice",
              "Cosine Similarity",
              "An example of failing at text analysis",
              "Cosine similarity example"
           ]
        },
        {
           "title":"\n          Applications: Classification and Topic Modeling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Chapter 3 focuses on two common text analysis approaches, classification modeling, and topic modeling. If you are working on text analysis projects, you will inevitably use one or both of these methods. This chapter teaches you how to perform both techniques and provides insight into how to approach these techniques from a practical point of you.\n  ",
           "parts":[
              "Preparing text for modeling",
              "Data preparation",
              "Removing sparse terms",
              "Classification modeling",
              "Classification modeling example",
              "Confusion matrices",
              "TFIDF tibble vs dtm",
              "Introduction to topic modeling",
              "LDA practice",
              "Assigning topics to documents",
              "LDA in practice",
              "Testing perplexity",
              "Reviewing LDA results"
           ]
        },
        {
           "title":"\n          Advanced Techniques\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In chapter 4 we cover two staples of natural language processing, sentiment analysis, and word embeddings. These are two analysis techniques that are a must for anyone learning the fundamentals of text analysis. Furthermore, you will briefly learn about BERT, part-of-speech tagging, and named entity recognition. Almost 15 different analysis techniques were covered in this course, so chapter 4 ends by recapping all of the great techniques you will learn about in this course. \n  ",
           "parts":[
              "Sentiment analysis",
              "tidytext lexicons",
              "Sentiment scores",
              "Sentiment and emotion",
              "Word embeddings",
              "h2o practice",
              "word2vec",
              "Additional NLP analysis",
              "Reviewing methods #1",
              "Review methods #2",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate R",
        "Introduction to the Tidyverse"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Data Manipulation with dplyr",
     "description":"Learn to transform and manipulate your data using dplyr.",
     "detailDescription":"Say you've found a great dataset and would like to learn more about it. How can you start to answer the questions you have about the data? You can use dplyr to answer those questions—it can also help with basic transformations of your data. You'll also learn to aggregate your data and add, remove, or change the variables. Along the way, you'll explore a dataset containing information about counties in the United States. You'll finish the course by applying these tools to the babynames dataset to explore trends of baby names in the United States.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Transforming Data with dplyr\n        ",
           "index":"1",
           "description":"\n    Learn verbs you can use to transform your data, including select, filter, arrange, and mutate. You'll use these functions to modify the counties dataset to view particular observations and answer questions about the data.\n  ",
           "parts":[
              "The counties dataset",
              "Understanding your data",
              "Selecting columns",
              "The filter and arrange verbs",
              "Arranging observations",
              "Filtering for conditions",
              "Filtering and arranging",
              "Mutate",
              "Calculating the number of government employees",
              "Calculating the percentage of women in a county",
              "Select, mutate, filter, and arrange"
           ]
        },
        {
           "title":"\n          Aggregating Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you know how to transform your data, you'll want to know more about how to aggregate your data to make it more interpretable. You'll learn a number of functions you can use to take many observations in your data and summarize them, including count, group_by, summarize, ungroup, and top_n.\n  ",
           "parts":[
              "The count verb",
              "Counting by region",
              "Counting citizens by state",
              "Mutating and counting",
              "The group by, summarize and ungroup verbs",
              "Summarizing",
              "Summarizing by state",
              "Summarizing by state and region",
              "The top_n verb",
              "Selecting a county from each region",
              "Finding the highest-income state in each region",
              "Using summarize, top_n, and count together"
           ]
        },
        {
           "title":"\n          Selecting and Transforming Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn advanced methods to select and transform columns. Also learn about select helpers, which are functions that specify criteria for columns you want to choose, as well as the rename and transmute verbs.\n  ",
           "parts":[
              "Selecting",
              "Selecting columns",
              "Select helpers",
              "The rename verb",
              "Renaming a column after count",
              "Renaming a column as part of a select",
              "The transmute verb",
              "Choosing among verbs",
              "Using transmute",
              "Matching verbs to their definitions",
              "Choosing among the four verbs"
           ]
        },
        {
           "title":"\n          Case Study: The babynames Dataset\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Work with a new dataset that represents the names of babies born in the United States each year. Learn how to use grouped mutates and window functions to ask and answer more complex questions about your data. And use a combination of dplyr and ggplot2 to make interesting graphs to further explore your data.\n  ",
           "parts":[
              "The babynames data",
              "Filtering and arranging for one year",
              "Using top_n with babynames",
              "Visualizing names with ggplot2",
              "Grouped mutates",
              "Finding the year each name is most common",
              "Adding the total and maximum for each name",
              "Visualizing the normalized change in popularity",
              "Window functions",
              "Using ratios to describe the frequency of a name",
              "Biggest jumps in a name",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse"
     ],
     "tracks":[
        "Data Analyst with R",
        "Data Manipulation with R",
        "Data Scientist with R",
        "R Programmer"
     ]
  },
  {
     "title":"Market Basket Analysis in R",
     "description":"Explore association rules in market basket analysis with R by analyzing retail data and creating movie recommendations.",
     "detailDescription":"Last time you were at the supermarket, what was in your shopping basket? Was there a connection between the products you purchased, like spaghetti and tomatoes or ham and pineapple? Whether online or offline, retailers use information from millions of customer’s baskets to analyze associations between items and extract insights using association rules. To help you quantify the degree of association between items you’ll use market basket analysis to uncover unseen connections and visualize relevant and insightful rules. You’ll then get to practice what you’ve learned on a movie dataset, as you predict which movies are watched together to create personalized movie recommendations for users.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Market Basket Analysis\n        ",
           "index":"1",
           "description":"\n    What’s in your basket? In this first chapter, you’ll learn how market basket analysis (MBA) can be used to look into baskets and dig into itemsets to better understand customers and predict their needs. Using tidyverse and dplyr you’ll discover how many baskets can be created from a given set of items, and learn the power of using market basket analysis for online shopping, offline shopping, and use cases beyond retail.\n  ",
           "parts":[
              "Market basket introduction",
              "Baskets and items",
              "Single basket",
              "What's in the basket?",
              "Item combinations",
              "Number of possible baskets",
              "Subsets and supersets",
              "Plot number of possible baskets",
              "What is market basket analysis ?",
              "Two baskets",
              "Multiple baskets",
              "Looking at specific items"
           ]
        },
        {
           "title":"\n          Metrics & Techniques in Market Basket Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll convert transactional datasets to a basket format, ready for analysis using the Apriori algorithm. You’ll then be introduced to the three main metrics for market basket analysis: support, confidence, and lift, before getting hands-on with the Apriori algorithm to extract rules from a transactional dataset. Lastly, You explore how the arules package is used for market basket analysis to retrieve basket rules and to help you find the most informative and relevant rules.\n  ",
           "parts":[
              "Transactional data",
              "Transactionalizing the online data frame",
              "Inspector retail",
              "Density of the item matrix?",
              "Metrics in market basket analysis",
              "The support measure",
              "Confidence and lift measures",
              "Changing the appearance of rules",
              "The apriori algorithm",
              "Apriori principle",
              "Let's go shopping for rules",
              "Parameters of the apriori",
              "“If this then that” with the apriori",
              "Playing with the appearance",
              "Redundant rules",
              "Interpretation of rules"
           ]
        },
        {
           "title":"\n          Visualization in Market Basket Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Let’s get visual. In this chapter, you’ll visually inspect the set of rules you have previously extracted. Visualizations in market basket analysis are vital given that often you are dealing with large sets of extracted rules. You’ll use the arulesViz package to create barplots, scatterplots, and graphs to visualize your sets of inferred rules. You’ll then turn sets of plots into interactive plots, making it is easier to drill into the mined association rules. \n  ",
           "parts":[
              "Let's see what's in the basket",
              "What's in the basket?",
              "What's most popular ?",
              "Getting fancy with the visuals",
              "Visualizing metrics",
              "Scatterplots",
              "ArulesViz plots",
              "Bringing rules to life",
              "From rules to graph based visualizations",
              "Playing with graphs",
              "Understanding the graph",
              "Portability of your graph",
              "Alternative rule plots",
              "Group matrix based visualizations",
              "Parallel coordinates plots",
              "Mastering the RuleExplorer"
           ]
        },
        {
           "title":"\n          Case Study: Market basket with Movies\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We’re going to the movies. In this final chapter, you’ll apply everything you’ve learned as you work with a movie dataset. Using market basket analysis you’ll turn this dataset into a movie recommendation system, using information from movie transactions to understand and predict what your audience might want to watch next.\n  ",
           "parts":[
              "Recap on transactions",
              "Gettting familiar with the MovieLens dataset",
              "Movie transactions",
              "Frequency plots",
              "Mining association rules",
              "Popularity of movies",
              "Picking the right movie parameters",
              "Extracting movie rules",
              "Visualizing transactions and rules",
              "Where is Pulp Fiction?",
              "Visualizing movie rules",
              "Our favorite movies as a graph",
              "Making the most of market basket analysis",
              "What influenced Pulp Fiction?",
              "What did Pulp Fiction influence?",
              "Use your market basket skills!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data Visualization with ggplot2",
        "Introduction to the Tidyverse"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Writing Functions in R",
     "description":"Take your R skills up a notch by learning to write efficient, reusable functions.",
     "detailDescription":"Being able to write your own functions makes your analyses more readable, with fewer errors, and more reusable from project to project. Function writing will increase your productivity more than any other skill! In this course you'll learn the basics of function writing, focusing on the arguments going into the function and the return values. You'll be writing useful data science functions, and using real-world data on Wyoming tourism, stock price/earnings ratios, and grain yields.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          How to write a function\n        ",
           "index":"1",
           "description":"\n    Learn why writing your own functions is useful, how to convert a script into a function, and what order you should include the arguments.\n  ",
           "parts":[
              "Why you should use functions",
              "Calling functions",
              "The benefits of writing functions",
              "Converting scripts into functions",
              "Converting a script to a function",
              "Your first function: tossing a coin",
              "Inputs to functions",
              "Multiple inputs to functions",
              "Y kant I reed ur code?",
              "Data or detail?",
              "Renaming GLM"
           ]
        },
        {
           "title":"\n          All about arguments\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to set defaults for arguments, how to pass arguments between functions, and how to check that users specified arguments correctly.\n  ",
           "parts":[
              "Default arguments",
              "Numeric defaults",
              "Logical defaults",
              "NULL defaults",
              "Categorical defaults",
              "Passing arguments between functions",
              "Harmonic mean",
              "Dealing with missing values",
              "Passing arguments with ...",
              "Checking arguments",
              "Throwing errors with bad arguments",
              "Custom error logic",
              "Fixing function arguments"
           ]
        },
        {
           "title":"\n          Return values and scope\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to return early from a function, how to return multiple values, and understand how R decides which variables exist.\n  ",
           "parts":[
              "Returning values from functions",
              "Returning early",
              "Returning invisibly",
              "Returning multiple values from functions",
              "Returning many things",
              "Returning metadata",
              "Environments",
              "Creating and exploring environments",
              "Do variables exist?",
              "Scope and precedence",
              "Can a function find its variables?",
              "Can you access variables from inside functions?",
              "Variable precedence 1",
              "Variable precedence 2"
           ]
        },
        {
           "title":"\n          Case study on grain yields\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Apply your function writing skills to a case study involving data preparation, visualization, and modeling.\n  ",
           "parts":[
              "Grain yields and unit conversion",
              "Converting areas to metric 1",
              "Converting areas to metric 2",
              "Converting yields to metric",
              "Applying the unit conversion",
              "Visualizing grain yields",
              "Plotting yields over time",
              "A nation divided",
              "Plotting yields over time by region",
              "Modeling grain yields",
              "Running a model",
              "Making yield predictions",
              "Do it all over again",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to the Tidyverse",
        "Intermediate R"
     ],
     "tracks":[
        "Data Scientist with R",
        "R Programmer"
     ]
  },
  {
     "title":"Introduction to Statistics in R",
     "description":"Grow your statistical skills and learn how to collect, analyze, and draw accurate conclusions from data.",
     "detailDescription":"Statistics is the study of how to collect, analyze, and draw conclusions from data. It’s a hugely valuable tool that you can use to bring the future into focus and infer the answer to tons of questions. For example, what is the likelihood of someone purchasing your product, how many calls will your support team receive, and how many jeans sizes should you manufacture to fit 95% of the population? In this course, you'll use sales data to discover how to answer questions like these as you grow your statistical skills and learn how to calculate averages, use scatterplots to show the relationship between numeric values, and calculate correlation. You'll also tackle probability, the backbone of statistical reasoning, and learn how to conduct a well-designed study to draw your own conclusions from data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Summary Statistics\n        ",
           "index":"1",
           "description":"\n    Summary statistics gives you the tools you need to boil down massive datasets to reveal the highlights. In this chapter, you'll explore summary statistics including mean, median, and standard deviation, and learn how to accurately interpret them. You'll also develop your critical thinking skills, allowing you to choose the best summary statistics for your data.\n  ",
           "parts":[
              "What is statistics?",
              "Descriptive and inferential statistics",
              "Data type classification",
              "Measures of center",
              "Mean and median",
              "Mean vs. median",
              "Measures of spread",
              "Quartiles, quantiles, and quintiles",
              "Variance and standard deviation",
              "Finding outliers using IQR"
           ]
        },
        {
           "title":"\n          Random Numbers and Probability\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to generate random samples and measure chance using probability. You'll work with real-world sales data to calculate the probability of a salesperson being successful. Finally, you’ll use the binomial distribution to model events with binary outcomes.\n  ",
           "parts":[
              "What are the chances?",
              "With or without replacement?",
              "Calculating probabilities",
              "Sampling deals",
              "Discrete distributions",
              "Creating a probability distribution",
              "Identifying distributions",
              "Expected value vs. sample mean",
              "Continuous distributions",
              "Which distribution?",
              "Data back-ups",
              "Simulating wait times",
              "The binomial distribution",
              "Simulating sales deals",
              "Calculating binomial probabilities",
              "How many sales will be won?"
           ]
        },
        {
           "title":"\n          More Distributions and the Central Limit Theorem\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to explore one of the most important probability distributions in statistics, normal distribution. You’ll create histograms to plot normal distributions and gain an understanding of the central limit theorem, before expanding your knowledge of statistical functions by adding the Poisson, exponential, and t-distributions to your repertoire. \n  ",
           "parts":[
              "The normal distribution",
              "Distribution of Amir's sales",
              "Probabilities from the normal distribution",
              "Simulating sales under new market conditions",
              "Which market is better?",
              "The central limit theorem",
              "Visualizing sampling distributions",
              "The CLT in action",
              "The mean of means",
              "The Poisson distribution",
              "Identifying lambda",
              "Tracking lead responses",
              "More probability distributions",
              "Too many distributions",
              "Modeling time between leads",
              "The t-distribution"
           ]
        },
        {
           "title":"\n          Correlation and Experimental Design\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to quantify the strength of a linear relationship between two variables, and explore how confounding variables can affect the relationship between two other variables. You'll also see how a study’s design can influence its results, change how the data should be analyzed, and potentially affect the reliability of your conclusions.\n  ",
           "parts":[
              "Correlation",
              "Guess the correlation",
              "Relationships between variables",
              "Correlation caveats",
              "What can't correlation measure?",
              "Transforming variables",
              "Does sugar improve happiness?",
              "Confounders",
              "Design of experiments",
              "Study types",
              "Longitudinal vs. cross-sectional studies",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with dplyr",
        "Intermediate R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Regression in R",
     "description":"Predict housing prices and ad click-through rate by implementing, analyzing, and interpreting regression analysis in R.",
     "detailDescription":"Linear regression and logistic regression are the two most widely used statistical models and act like master keys, unlocking the secrets hidden in datasets. In this course, you’ll gain the skills you need to fit simple linear and logistic regressions. Through hands-on exercises, you’ll explore the relationships between variables in real-world datasets, including motor insurance claims, Taiwan house prices, fish prices, and more. By the end of this course, you’ll know how to make predictions from your data, quantify model performance, and diagnose problems with model fit.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Simple Linear Regression\n        ",
           "index":"1",
           "description":"\n    You’ll learn the basics of this popular statistical model, what regression is, and how linear and logistic regressions differ. You’ll then learn how to fit simple linear regression models with numeric and categorical explanatory variables, and how to describe the relationship between the response and explanatory variables using model coefficients.\n  ",
           "parts":[
              "A tale of two variables",
              "Which one is the response variable?",
              "Visualizing two variables",
              "Fitting a linear regression",
              "Estimate the intercept",
              "Estimate the slope",
              "Linear regression with lm()",
              "Categorical explanatory variables",
              "Visualizing numeric vs. categorical",
              "Calculating means by category",
              "lm() with a categorical explanatory variable"
           ]
        },
        {
           "title":"\n          Predictions and model objects\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll discover how to use linear regression models to make predictions on Taiwanese house prices and Facebook advert clicks. You’ll also grow your regression skills as you get hands-on with model objects, understand the concept of \"regression to the mean\", and learn how to transform variables in a dataset.\n  ",
           "parts":[
              "Making predictions",
              "Predicting house prices",
              "Visualizing predictions",
              "The limits of prediction",
              "Working with model objects",
              "Extracting model elements",
              "Manually predicting house prices",
              "Using broom",
              "Regression to the mean",
              "Home run!",
              "Plotting consecutive portfolio returns",
              "Modeling consecutive returns",
              "Transforming variables",
              "Transforming the explanatory variable",
              "Transforming the response variable too"
           ]
        },
        {
           "title":"\n          Assessing model fit\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll learn how to ask questions of your model to assess fit. You’ll learn how to quantify how well a linear regression model fits, diagnose model problems using visualizations, and understand the leverage and influence of each observation used to create the model.\n  ",
           "parts":[
              "Quantifying model fit",
              "Coefficient of determination",
              "Residual standard error",
              "Visualizing model fit",
              "Residuals vs. fitted values",
              "Q-Q plot of residuals",
              "Scale-location",
              "Drawing diagnostic plots",
              "Outliers, leverage, and influence",
              "Leverage",
              "Influence",
              "Extracting leverage and influence"
           ]
        },
        {
           "title":"\n          Simple logistic regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn to fit logistic regression models. Using real-world data, you’ll predict the likelihood of a customer closing their bank account as probabilities of success and odds ratios, and quantify model performance using confusion matrices.\n  ",
           "parts":[
              "Why you need logistic regression",
              "Exploring the explanatory variables",
              "Visualizing linear and logistic models",
              "Logistic regression with glm()",
              "Predictions and odds ratios",
              "Probabilities",
              "Most likely outcome",
              "Odds ratio",
              "Log odds ratio",
              "Quantifying logistic regression fit",
              "Calculating the confusion matrix",
              "Measuring logistic model performance",
              "Accuracy, sensitivity, specificity",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data Visualization with ggplot2",
        "Data Manipulation with dplyr"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Survival Analysis in R",
     "description":"Learn to work with time-to-event data. The event may be death or finding a job after unemployment. Learn to estimate, visualize, and interpret survival models!",
     "detailDescription":"Do patients taking the new drug survive longer than others? How fast do people get a new job after getting unemployed? What can I do to make my friends stay on the dancefloor at my party? All these questions require the analysis of time-to-event data, for which we use special statistical methods. This course introduces basic concepts of time-to-event data analysis, also called survival analysis. Learn how to deal with time-to-event data and how to compute, visualize and interpret survivor curves as well as Weibull and Cox models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What is Survival Analysis?\n        ",
           "index":"1",
           "description":"\n    In the first chapter, we introduce the concept of survival analysis, explain the importance of this topic, and provide a quick introduction to the theory behind survival curves. We discuss why special methods are needed when dealing with time-to-event data and introduce the concept of censoring. We also discuss how we describe the distribution of the elapsed time until an event.\n  ",
           "parts":[
              "The term \"survival analysis\"",
              "Introducing the GBSG2 dataset",
              "What will this course cover?",
              "Why learn survival methods?",
              "Digging into the GBSG2 dataset 1",
              "Using the Surv() function for GBSG2",
              "The UnempDur dataset",
              "Measures used in survival analysis",
              "Interpreting a survival curve I",
              "Interpreting a survival curve II",
              "Interpreting a survival curve III"
           ]
        },
        {
           "title":"\n          Estimation of survival curves\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we will look into different methods of estimating survival curves. We will discuss the Kaplan-Meier estimate and the Weibull model as tools for survival curve estimation and learn how to communicate those results through visualization. \n  ",
           "parts":[
              "Kaplan-Meier estimate",
              "Function to compute the Kaplan-Meier estimate",
              "First Kaplan-Meier estimate",
              "When does the Kaplan-Meier curve drop?",
              "Why use Kaplan-Meier",
              "Understanding and visualizing Kaplan-Meier curves",
              "Exercise ignoring censoring",
              "Estimating and visualizing a survival curve",
              "The Weibull model for estimating survival curves",
              "Estimating median survival from a Weibull model",
              "Survival curve quantiles from a Weibull model",
              "Estimating the survival curve with survreg()",
              "Visualizing the results of Weibull models",
              "Comparing Weibull model and Kaplan-Meier estimate"
           ]
        },
        {
           "title":"\n          The Weibull model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we will learn how to estimate and visualize a Weibull model to learn about the effects of covariates on the time-to-event outcome.\n  ",
           "parts":[
              "Why use the Weibull model",
              "Interpreting coefficients",
              "Compute Weibull model",
              "Visualizing Weibull models",
              "ggsurvplot() versus ggsurvplot_df()",
              "Computing a Weibull model and the survival curves",
              "Visualising a Weibull model",
              "Plotting options",
              "Other distributions than Weibull",
              "survreg() arguments",
              "Computing a Weibull and a log-normal model",
              "Comparing Weibull and Log-Normal Model I",
              "Comparing Weibull and Log-Normal Model II"
           ]
        },
        {
           "title":"\n          The Cox Model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the last chapter, we learn how to compute and interpret Cox models to understand why they are useful and how they differ from Weibull models.\n  ",
           "parts":[
              "The Cox model",
              "Computing a Cox model",
              "Proportional hazards assumption",
              "Visualizing the Cox model",
              "Computing the survival curve from a Cox model",
              "Visualizing a Cox model",
              "surv_summary()",
              "What we've learned",
              "Why \"imaginary patients\"?",
              "Capstone: The Cox model",
              "Capstone: Comparing survival curves",
              "Good bye"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data in R"
     ],
     "tracks":[

     ]
  }
];
