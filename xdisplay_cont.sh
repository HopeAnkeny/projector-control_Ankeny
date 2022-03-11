#!/bin/bash

read varname

# basic script structure

# if [ $varname = "ON_1" ]
#	then sh /etc/scripts/ON_1.sh
# fi
# else quit

log=/etc/xdisplaylog_file.txt
printf "log file -" > $log
date >> $log
printf $varname >> $log

if [ $varname = "ovfltv-on" ]
	then ./opt/scripts/display-automation/ovfltv-on.sh
fi

if [ $varname = "ovfltv-off" ]
	then ./opt/scripts/display-automation/ovfltv-off.sh
fi

if [ $varname = "chfbtv-on" ]
	then ./opt/scripts/display-automation/ch_fbtv_ON.sh
fi
if [ $varname = "chfbtv-off" ]
	then ./opt/scripts/display-automation/ch_fbtv_OFF.sh
fi

else quit
