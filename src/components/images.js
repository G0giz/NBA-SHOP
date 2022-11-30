const images = [
    { name: 'Knicks', src: 'https://img.search.brave.com/BoUU8DQLDTpCinNgqFofqHeHs2MPnb7uYVqVAuAO2-s/rs:fit:1200:1024:1/g:ce/aHR0cDovL2dvb2Rp/Zml0Z29lcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDkva25pY2tzLWxv/Z28uanBn' },
    { name: 'Dallas', src: 'https://img.search.brave.com/YJe8GFNvHBdPzSJJyZRV4gPuirtyTdpsLr_Sf7uSJ3o/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvbWF2cy1s/b2dvLTIuanBn' },
    { name: 'Golden States', src: 'https://img.search.brave.com/YgxBeQde73-YS8FGWAYPH6uF0HfpYu2lJfodS55NxGk/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZ29z/LWRvd25sb2FkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNC9Hb2xkZW5f/U3RhdGVfV2Fycmlv/cnNfbG9nb19hbHRl/cm5hdGl2ZS5wbmc' },
    { name: 'Chicago Bulls', src: 'https://img.search.brave.com/dr0RyZ5gbxsRMryZin5uJYSs656-HjdhxfnQdUKWI3Q/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/ZGV0aW1lcy5jb20v/dGltZXMvY2hpY2Fn/by1idWxscy9sb2dv/LWNoaWNhZ28tYnVs/bHMtNDA5Ni5wbmc' },
    { name: 'Portland', src: 'https://img.search.brave.com/PTr9oKvPNOLUeNQuv5mn8Da1TRmPKbbRlW-4lsIT1_M/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvcG9ydGxh/bmQtdHJhaWxibGF6/ZXJzLWxvZ28tNy5q/cGc' },
    { name: 'Miami Hit', src: 'https://img.search.brave.com/zuvaP1NEtbNtiLIaajDzcQDYskzLd2K7pyo0BEC3JIM/rs:fit:1200:900:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/Ly1SQWk2NzZ6YmJT/SS9VYW5CVTAzcHFv/SS9BQUFBQUFBQUdo/WS9fczJCbWFqTXhR/cy9zMTYwMC9taWFt/aS1oZWF0LWxvZ28r/KDEpLmpwZw' },
    { name: 'Utah Jazz', src: 'https://img.search.brave.com/2gUyBkDeX6vmtJX4rHuBpq0zOtUsSXfBm0gF9AG8ntg/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIzODY2/NDMuanBn' },
    { name: 'Sacramento', src: 'https://img.search.brave.com/SnsSq3DA11umQSYEcEPt9gx2fPKj1EFA15ZnI1qtch0/rs:fit:920:920:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0Y3JhZnQuY29t/L2ltYWdlcy9zYWNy/YW1lbnRvLWtpbmdz/LWxvZ28tc21hbGwt/NC5wbmc' },
    { name: 'Brooklyn Nets', src: 'https://img.search.brave.com/_lfJe6RNShuoJtnM7v6dRVh2FfrlgOol33qM0aWaxEY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDQvQnJvb2ts/eW5fTmV0c19sb2dv/X2xvZ290eXBlLnBu/Zw' },
    { name: 'Milwakey', src: 'https://img.search.brave.com/uRNPKA3dhh0npbKz1KOy9GdT6a14O_RwgYhhuhg13Ug/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDQvTWlsd2F1/a2VlX0J1Y2tzX2xv/Z29fbG9nb3R5cGVf/c3ltYm9sLnBuZw' },
    { name: 'New Orleans', src: 'https://img.search.brave.com/XJn9ipqeB3KSOcQJsmwKuEJz9X-NFTMTzjRa6Ur6Cao/rs:fit:580:580:1/g:ce/aHR0cDovL3d3dy5z/b2xldG9waWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEz/LzAxL25ldy1vcmxl/YW5zLXBlbGljYW5z/LW5iYS1sb2dvLW5l/dy5qcGc' },
    { name: 'Orlando Magic', src: 'https://img.search.brave.com/oON75y-SeBd9og4tMcMM4A8nY2OxZyugsqH9ZElRSYg/rs:fit:750:521:1/g:ce/aHR0cDovL2NvbnRl/bnQuc3BvcnRzbG9n/b3MubmV0L2xvZ29z/LzYvMjE3L2Z1bGwv/d2Q5aWM3cWFmZ2Zi/MHl4czd0ZW03bjVn/NC5naWY.gif' },
    { name: 'Phoniex Suns', src: 'https://img.search.brave.com/rpyVizvLXrYcDue9oLRHbaj3cT-fllyQvHN6bBhevuo/rs:fit:640:750:1/g:ce/aHR0cDovL2NvbnRl/bnQuc3BvcnRzbG9n/b3MubmV0L2xvZ29z/LzYvMjM4L2Z1bGwv/NTMyOS5naWY.gif' },
    { name: 'Minisota', src: 'https://img.search.brave.com/uHxk1roGKIRxY8btncBBrFixCs5iD7j2y3KocMSi7xU/rs:fit:905:905:1/g:ce/aHR0cHM6Ly9jb250/ZW50LnNwb3J0c2xv/Z29zLm5ldC9sb2dv/cy82LzIzMi9mdWxs/Lzk3NzFfbWlubmVz/b3RhX3RpbWJlcndv/bHZlcy1hbm5pdmVy/c2FyeS0yMDE5LnBu/Zw' },
    { name: 'Washington', src: 'https://img.search.brave.com/YaAGrsvc0rk1uhIIp-8XzCCKZhH3LiYnoqh4lN2mqCU/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZ29z/LWRvd25sb2FkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNC9XYXNoaW5n/dG9uX1dpemFyZHNf/bG9nb19sb2dvdHlw/ZV9lbWJsZW1fc3lt/Ym9sLnBuZw' },
    { name: 'Philadelphia', src: 'https://img.search.brave.com/gF6p1OyO1FyYDZLKgYyTF_O0kmnFHBn3BAutatfxmcs/rs:fit:736:736:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9lNy8wMy9kMC9l/NzAzZDA3ZDYwYTNi/ZjZhNGYxMTU4ODgx/NDFhYzAzMi5qcGc' },
    { name: 'Denver', src: 'https://img.search.brave.com/jAW1q5cBrD-stLT2ZXz681aH9MR1bMlUkqJd2OzKhlU/rs:fit:905:905:1/g:ce/aHR0cDovL2NvbnRl/bnQuc3BvcnRzbG9n/b3MubmV0L2xvZ29z/LzYvMjI5L2Z1bGwv/ODkyNl9kZW52ZXJf/bnVnZ2V0cy1wcmlt/YXJ5LTIwMTkucG5n' },
    { name: 'Charlot Hornets', src: 'https://img.search.brave.com/_iBbtLPjh8awbnxAdXSSQJbHeoHkydctUCt9BY2tSDI/rs:fit:808:729:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzllL2E0/L2EwLzllYTRhMGU1/Y2RlNGJiZTJiNjRj/MjJkYmRhM2IyOGQ3/LmpwZw' },
    { name: 'Clippers', src: 'https://img.search.brave.com/8PJFeWmbSUJJ77btOm5Hu_P2ROAYCz-JTnqm5iHdAQE/rs:fit:238:228:1/g:ce/aHR0cHM6Ly9jb250/ZW50LmZveHNwb3J0/cy5jb20uYXUvZnMv/bWF0Y2gtY2VudHJl/L3RlYW0tbG9nby9i/YXNrZXRiYWxsLzQ3/My5wbmc' },
    { name: 'Atlanta', src: 'https://img.search.brave.com/WcZUCYTFXI7T-NyXnjF8DM6HjMbKJCXL_v9-fpDpgy0/rs:fit:1200:750:1/g:ce/aHR0cDovL2NvbnRl/bnQuc3BvcnRzbG9n/b3MubmV0L2xvZ29z/LzYvMjIwL2Z1bGwv/NW1kaGdqaDNhYTky/a2loMDlwZ2kucG5n' },
    { name: 'Boston', src: 'https://img.search.brave.com/e-3UBDGAfoEavoj5zjEJz0HYwMH-297B4So2hvOYzcw/rs:fit:619:710:1/g:ce/aHR0cDovL3N0YXRp/YzIud2lraWEubm9j/b29raWUubmV0L19f/Y2IyMDEwMDkxNTE4/MDIwMy9sb2dvcGVk/aWEvaW1hZ2VzL2Qv/ZDIvQm9zdG9uQ2Vs/dGljczgwc2xvZ28u/Z2lm.gif' },
    { name: 'Huston Rockets', src: 'https://img.search.brave.com/D1i8TGBOeouqdhhKLyp6pgJ6Wzm1LtOe4gjPe9oYW74/rs:fit:901:898:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE5/NDkvMTIzMy9wcm9k/dWN0cy9ob3VzdG9u/LXJvY2tldHMuanBn/P3Y9MTU3NTQyODM0/MA' },
    { name: 'Lakers', src: 'https://img.search.brave.com/KU7yKbwNKJ14EXlwHLiNvfCkMLl5v6ipHun6naHCKow/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGl4ZWxzdGFsay5u/ZXQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMDQvTGFrZXJz/LUxvZ29zLU5ldy04/LmpwZw' },
    { name: 'Indiana', src: 'https://img.search.brave.com/PHSy2Yq8TvK_Trjok7qSGADCfz6MAXho9S_u3WR9PIs/rs:fit:1200:1050:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9EckU4UWw4/LmpwZw' },
    { name: 'Thunder Ock', src: 'https://img.search.brave.com/8WBNbxMhyV2zb7i4aqavYoEBRiQLNgnRB1L5ZEp8EBc/rs:fit:1024:786:1/g:ce/aHR0cHM6Ly9zLW1l/ZGlhLWNhY2hlLWFr/MC5waW5pbWcuY29t/L29yaWdpbmFscy9k/OC82YS84ZS9kODZh/OGViZjg2MGU5Zjhj/NTk5ZmY0NWUwZDAy/ZmMzYS5qcGc' },
    { name: 'San Antonio', src: 'https://img.search.brave.com/SVDkUCPQrF668imyiP6lHA9WZKKUq-S6wKmRHwLSQig/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZ29z/LWRvd25sb2FkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNC9TYW5fQW50/b25pb19TcHVyc19s/b2dvLnBuZw' }

]

export default images