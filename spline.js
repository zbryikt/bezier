var spline;spline={update:function(t,n){var r,o,u,h,p,s,e,c,i=[];for(r=this.computeControlPoints(o=function(){var n,r,o,h=[];for(n=0,o=(r=t).length;o>n;++n)u=r[n],h.push(u.x);return h}()),h=this.computeControlPoints(p=function(){var n,r,o,h=[];for(n=0,o=(r=t).length;o>n;++n)u=r[n],h.push(u.y);return h}()),s=0,e=n.length;e>s;++s)c=s,i.push(n[c].d=this.path(o[c],p[c],r.p1[c],h.p1[c],r.p2[c],h.p2[c],o[c+1],p[c+1]));return i},path:function(t,n,r,o,u,h,p,s){return"M "+t+" "+n+" C "+r+" "+o+" "+u+" "+h+" "+p+" "+s},addCtrls:function(t){var n,r,o,u,h,p,s,e;for(n=this.computeControlPoints(r=function(){var n,r,u,h=[];for(n=0,u=(r=t).length;u>n;++n)o=r[n],h.push(o.x||o[0]||(o.anchor||(o.anchor=[]))[0]);return h}()),u=this.computeControlPoints(h=function(){var n,r,u,h=[];for(n=0,u=(r=t).length;u>n;++n)o=r[n],h.push(o.y||o[1]||(o.anchor||(o.anchor=[]))[1]);return h}()),p=0,s=t.length;s>p;++p)e=p,t[e].anchor=[r[e],h[e]],t[e].ctrl1=e>0?[n.p2[e-1],u.p2[e-1]]:[r[e],h[e]],t[e].ctrl2=e<t.length-1?[n.p1[e],u.p1[e]]:[r[e],h[e]];return t},computeControlPoints:function(t){var n,r,o,u,h,p,s,e,c,i,f,l;for(n=[[],[]],r=n[0],o=n[1],n=[[0],[2],[1],[t[0]+2*t[1]],t.length-1],u=n[0],h=n[1],p=n[2],s=n[3],e=n[4],c=1,i=e-1;i>c;++c)f=c,u.push(1),h.push(4),p.push(1),s.push(4*t[f]+2*t[f+1]);for(u.push(2),h.push(7),p.push(0),s.push(8*t[e-1]+t[e]),c=1;e>c;++c)f=c,l=u[f]/h[f-1],h[f]=h[f]-l*p[f-1],s[f]=s[f]-l*s[f-1];for(r[e-1]=s[e-1]/h[e-1],c=e-2;c>=0;--c)f=c,r[f]=(s[f]-p[f]*r[f+1])/h[f];for(c=0,i=e-1;i>c;++c)f=c,o[f]=2*t[f+1]-r[f+1];return o[e-1]=(t[e]+r[e-1])/2,{p1:r,p2:o}}};