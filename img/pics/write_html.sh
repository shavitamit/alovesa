#!/bin/bash

for i in `gls -v *-thumbnail.jpg` ; do 
    name=`echo $i | awk '{ split($1,a,"-"); print a[1] }'` ; 

    echo -e "<div class=\"image\"><a href=\"img/pics/${name}.jpg\" data-lightbox=\"engagementphotos\">
        <img src=\"img/pics/${name}-thumbnail.jpg\" /></a></div>" ;
    #echo -e "<a href=\"img/pics/${name}.jpg\" data-lightbox=\"engagementphotos\">
    #    <img src=\"img/pics/${name}-thumbnail.jpg\" /></a>" ;
done
