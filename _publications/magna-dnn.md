---
title: "MagmaDNN: Accelerated Deep Learning Using MAGMA"
collection: publications
permalink: /publication/magma-dnn
date: 2019-07-01
venue: 'Practice and Experience in Advanced Research Computing'
citation: 'D. Nichols, K. Wong, S. Tomov, L. Ng, S. Chen, and A. Gessinger. &quot;MagmaDNN: Accelerated Deep Learning Using MAGMA.&quot; In Proceedings of the Practice and Experience in Advanced Research Computing on Rise of the Machines (learning) (PEARC ’19).'
---
MagmaDNN is a deep learning framework driven using the highly optimized MAGMA dense linear algebra package. The library offers comparable performance to other popular frameworks, such as TensorFlow, PyTorch, and Theano.

<!--
MagmaDNN is a deep learning framework driven using the highly optimized MAGMA dense linear algebra package. The library offers comparable performance to other popular frameworks, such as TensorFlow, PyTorch, and Theano. C++ is used to implement the framework providing fast memory operations, direct cuda access, and compile time errors. Common neural network layers such as Fully Connected, Convolutional, Pooling, Flatten, and Dropout are included. Hyperparameter tuning is performed with a parallel grid search engine.

MagmaDNN uses several techniques to accelerate network training. For instance, convolutions are performed using the Winograd algorithm and FFTs. Other techniques include MagmaDNNs custom memory manager, which is used to reduce expensive memory transfers, and accelerated training by distributing batches across GPU nodes.

This paper provides an overview of the MagmaDNN framework and how it leverages the MAGMA library to attain speed increases. This paper also addresses how deep networks are accelerated by training in parallel and further challenges with parallelization.
-->


[Download paper here](https://www.researchgate.net/publication/334779041_MagmaDNN_Accelerated_Deep_Learning_Using_MAGMA)

<!--
Daniel Nichols, Kwai Wong, Stan Tomov, Lucien Ng, Sihan Chen, and Alex Gessinger
Association for Computing Machinery, New York, NY, USA, Article 71, 1–6.
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
paperurl: 'https://www.researchgate.net/publication/334779041_MagmaDNN_Accelerated_Deep_Learning_Using_MAGMA'

Recommended citation: Your Name, You. (2009). "Paper Title Number 1." <i>Journal 1</i>. 1(1).
-->

