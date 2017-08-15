#!/bin/bash

count=1

for i in *.jpg ; do 
    mv "${i}" ${count}.jpg; 
    count=$((count+1)) ;
done
