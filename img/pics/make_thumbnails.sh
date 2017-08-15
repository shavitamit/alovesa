#!/bin/bash

for f in *.jpg ; do 
    name=`echo $f | awk '{ split($1,a,"."); print a[1] }'` ; 
    cp $f ${name}-thumbnail.jpg ; 
    sips -Z 200 "${name}-thumbnail.jpg"; 
done
