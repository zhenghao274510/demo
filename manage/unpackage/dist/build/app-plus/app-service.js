var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'isIcon']])
Z([3,'backText'])
Z([[7],[3,'isBacks']])
Z(z[3])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'Back']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'isIcons']])
Z(z[7])
Z([3,'content'])
Z([3,'search'])
Z(z[3])
Z([3,'right'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goRight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[17])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z([[4],[[5],[[5],[1,'mask']],[[2,'?:'],[[2,'!'],[[7],[3,'value']]],[1,''],[1,'mask-show']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapMask']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'=='],[[7],[3,'type']],[1,'default']])
Z([[2,'=='],[[7],[3,'type']],[1,'select']])
Z(z[0])
Z([3,'select-view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'mData']])
Z(z[9])
Z(z[0])
Z([3,'select-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tapConfirm']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'mData']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([[2,'=='],[[7],[3,'type']],[1,'multiSelect']])
Z(z[0])
Z(z[7])
Z(z[8])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'checkboxChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z(z[16])
Z([[2,'=='],[[7],[3,'type']],[1,'advert']])
Z([[2,'=='],[[7],[3,'type']],[1,'notify']])
Z([3,'notify-view'])
Z([[6],[[7],[3,'mData']],[3,'title']])
Z([[6],[[7],[3,'mData']],[3,'src']])
Z([[2,'=='],[[7],[3,'type']],[1,'share']])
Z(z[0])
Z([3,'share-view'])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z(z[0])
Z([3,'share-box'])
Z(z[15])
Z(z[16])
Z([[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,'input']],[[7],[3,'value']]])
Z(z[0])
Z([3,'input-view'])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[7],[3,'mData']],[3,'content']])
Z(z[9])
Z([3,'input-box'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'number']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'password']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'digit']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'idcard']])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'item']],[3,'type']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'text']]])
Z([[2,'=='],[[7],[3,'type']],[1,'custom']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z(z[0])
Z(z[0])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchstartEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'touchmoveEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchendEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchcancel']],[[4],[[5],[[4],[[5],[[5],[1,'touchendEvent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[7],[3,'padTop']]],[1,';']],[[2,'+'],[[2,'+'],[1,'padding-bottom:'],[[7],[3,'padBottom']]],[1,';']]])
Z([[7],[3,'optDown']])
Z([[2,'&&'],[[7],[3,'optEmpty']],[[7],[3,'isShowEmpty']]])
Z([3,'mescroll-empty'])
Z([[6],[[7],[3,'optEmpty']],[3,'icon']])
Z([[6],[[7],[3,'optEmpty']],[3,'tip']])
Z([[6],[[7],[3,'optEmpty']],[3,'btnText']])
Z([[7],[3,'optUp']])
Z([3,'mescroll-upwarp'])
Z([[7],[3,'isUpLoading']])
Z([[7],[3,'isUpNoMore']])
Z([[7],[3,'optToTop']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[6],[[7],[3,'swipe']],[3,'touchend']])
Z([[6],[[7],[3,'swipe']],[3,'touchmove']])
Z([[6],[[7],[3,'swipe']],[3,'touchstart']])
Z([[6],[[7],[3,'swipe']],[3,'sizeReady']])
Z([3,'uni-swipe_move-box selector-query-hock move-hock data-v-7b7436eb'])
Z([[7],[3,'disabled']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'pos']])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'w-picker-cnt']],[[2,'?:'],[[7],[3,'showPicker']],[1,'show'],[1,'']]]])
Z([[2,'=='],[[7],[3,'mode']],[1,'linkage']])
Z([[2,'=='],[[7],[3,'mode']],[1,'half']])
Z([[2,'=='],[[7],[3,'mode']],[1,'date']])
Z([[2,'=='],[[7],[3,'mode']],[1,'yearMonth']])
Z([[2,'=='],[[7],[3,'mode']],[1,'dateTime']])
Z([[2,'=='],[[7],[3,'mode']],[1,'range']])
Z([[2,'=='],[[7],[3,'mode']],[1,'time']])
Z([[2,'=='],[[7],[3,'mode']],[1,'region']])
Z([3,'__e'])
Z(z[9])
Z(z[9])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindChange']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'pickVal']])
Z([[2,'!'],[[7],[3,'hideArea']]])
Z([[2,'=='],[[7],[3,'mode']],[1,'selector']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limit']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limitHour']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-547f1096'])
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-547f1096'])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([[7],[3,'check4']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-0d2e1de2'])
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-0d2e1de2'])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'wrapper data-v-0d2e1de2'])
Z([[2,'=='],[[7],[3,'type']],[1,1]])
Z([[2,'=='],[[7],[3,'type']],[1,2]])
Z(z[3])
Z([3,'__e'])
Z([3,'data-v-0d2e1de2 vue-ref'])
Z([1,false])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm1']]]]]]]]])
Z([3,'picker1'])
Z([3,'2030'])
Z([3,'yearMonth'])
Z([3,'2015'])
Z(z[7])
Z([3,'#00AAEF'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-a15265a6'])
Z([1,true])
Z(z[4])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-f8bcbdb2'])
Z([3,'wrapper data-v-f8bcbdb2'])
Z([3,'__e'])
Z([3,'message data-v-f8bcbdb2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goMessage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!='],[[7],[3,'count']],[1,0]])
Z([3,'k'])
Z([3,'v'])
Z([[7],[3,'list']])
Z(z[6])
Z([3,'_li data-v-f8bcbdb2'])
Z([3,'cars data-v-f8bcbdb2'])
Z([[2,'=='],[[6],[[7],[3,'v']],[3,'inorout']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'v']],[3,'inorout']],[1,2]])
Z([3,'msg data-v-f8bcbdb2'])
Z(z[12])
Z(z[13])
Z([[2,'!='],[[6],[[7],[3,'v']],[3,'modi_oriweight']],[1,0]])
Z([3,'weights data-v-f8bcbdb2'])
Z(z[12])
Z(z[13])
Z([3,'__l'])
Z(z[2])
Z(z[2])
Z(z[2])
Z([3,'data-v-f8bcbdb2'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm3']]]]]]]],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[1,'cancel3']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'value']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([[7],[3,'inputData']])
Z([3,'false'])
Z(z[28])
Z([[7],[3,'type1']])
Z([[7],[3,'value']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-6e696f68'])
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-6e696f68'])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'wrapper data-v-6e696f68'])
Z([[7],[3,'show']])
Z([[2,'!'],[[7],[3,'show']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-aa58213e'])
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-aa58213e'])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z(z[3])
Z([3,'__e'])
Z(z[10])
Z(z[10])
Z(z[10])
Z(z[10])
Z(z[4])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]],[[4],[[5],[[5],[1,'^emptyclick']],[[4],[[5],[[4],[[5],[1,'emptyClick']]]]]]]],[[4],[[5],[[5],[1,'^topclick']],[[4],[[5],[[4],[[5],[1,'topClick']]]]]]]]])
Z([[7],[3,'downOption']])
Z([[7],[3,'upOption']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-5aa9bae4'])
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-5aa9bae4'])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'__e'])
Z([3,'codes data-v-5aa9bae4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getValidate']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'btnState']])
Z([3,'button'])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-6b2b7264'])
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-6b2b7264'])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z(z[3])
Z([3,'__e'])
Z(z[10])
Z(z[10])
Z(z[10])
Z(z[10])
Z(z[4])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]],[[4],[[5],[[5],[1,'^emptyclick']],[[4],[[5],[[4],[[5],[1,'emptyClick']]]]]]]],[[4],[[5],[[5],[1,'^topclick']],[[4],[[5],[[4],[[5],[1,'topClick']]]]]]]]])
Z([[7],[3,'downOption']])
Z([[7],[3,'upOption']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([3,'k'])
Z([3,'v'])
Z([[7],[3,'list']])
Z(z[21])
Z([3,'_li data-v-6b2b7264'])
Z([[2,'=='],[[6],[[7],[3,'v']],[3,'inorout']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'v']],[3,'inorout']],[1,2]])
Z(z[3])
Z(z[10])
Z([3,'data-v-6b2b7264 vue-ref'])
Z([1,false])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm1']]]]]]]]])
Z([3,'picker1'])
Z([3,'2030'])
Z([3,'date'])
Z([3,'2015'])
Z(z[7])
Z([3,'#00AAEF'])
Z([3,'3'])
Z(z[3])
Z(z[10])
Z(z[30])
Z(z[31])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm2']]]]]]]]])
Z([3,'picker2'])
Z(z[34])
Z(z[35])
Z(z[36])
Z(z[7])
Z(z[38])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-8c9afb76'])
Z([1,true])
Z(z[4])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-dd4ff126'])
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-dd4ff126'])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z(z[3])
Z([3,'__e'])
Z(z[10])
Z(z[10])
Z(z[10])
Z(z[10])
Z(z[4])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]],[[4],[[5],[[5],[1,'^emptyclick']],[[4],[[5],[[4],[[5],[1,'emptyClick']]]]]]]],[[4],[[5],[[5],[1,'^topclick']],[[4],[[5],[[4],[[5],[1,'topClick']]]]]]]]])
Z([[7],[3,'downOption']])
Z([[7],[3,'upOption']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([3,'k'])
Z([3,'v'])
Z([[7],[3,'list']])
Z(z[21])
Z([3,'_li data-v-dd4ff126'])
Z([3,'cars data-v-dd4ff126'])
Z([[2,'=='],[[6],[[7],[3,'v']],[3,'inorout']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'v']],[3,'inorout']],[1,2]])
Z([3,'msg data-v-dd4ff126'])
Z(z[27])
Z(z[28])
Z([[2,'!='],[[6],[[7],[3,'v']],[3,'modi_oriweight']],[1,0]])
Z([3,'weights data-v-dd4ff126'])
Z(z[27])
Z(z[28])
Z(z[3])
Z(z[10])
Z([3,'data-v-dd4ff126 vue-ref'])
Z([1,false])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm1']]]]]]]]])
Z([3,'picker1'])
Z([3,'2030'])
Z([3,'date'])
Z([3,'2015'])
Z(z[7])
Z([3,'#00AAEF'])
Z([3,'3'])
Z(z[3])
Z(z[10])
Z(z[38])
Z(z[39])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm2']]]]]]]]])
Z([3,'picker2'])
Z(z[42])
Z(z[43])
Z(z[44])
Z(z[7])
Z(z[46])
Z([3,'4'])
Z(z[3])
Z(z[10])
Z(z[10])
Z(z[10])
Z(z[4])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm3']]]]]]]],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[1,'cancel3']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'value']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([[7],[3,'inputData']])
Z([3,'false'])
Z(z[67])
Z([[7],[3,'type1']])
Z([[7],[3,'value']])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-90556eea'])
Z([1,true])
Z(z[4])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-3e07a356'])
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-3e07a356'])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-3dfdf9cc'])
Z([1,true])
Z(z[4])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-23286a95'])
Z([[7],[3,'Color']])
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([3,'data-v-23286a95'])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'wrapper data-v-23286a95'])
Z([[7],[3,'show']])
Z([3,'k'])
Z([3,'v'])
Z([[7],[3,'list']])
Z(z[11])
Z(z[3])
Z(z[4])
Z([[2,'+'],[1,'2-'],[[7],[3,'k']]])
Z([[4],[[5],[1,'default']]])
Z(z[3])
Z([3,'__e'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'onClick']],[[4],[[5],[[5],[[5],[[5],[1,'$event']],[[7],[3,'k']]],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'k']]],[1,'id']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'k']]],[1,'account']]]]]]]]]]]]]]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'jobid']],[1,1]],[1,false],[1,true]])
Z([[7],[3,'options']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'3-'],[[7],[3,'k']]],[1,',']],[[2,'+'],[1,'2-'],[[7],[3,'k']]]])
Z(z[18])
Z([[2,'!'],[[7],[3,'show']]])
Z([[2,'=='],[[7],[3,'jobid']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"p_./components/uni-swipe-action-item/index.wxs":np_0,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/uni-swipe-action-item/index.wxs'] = nv_require("p_./components/uni-swipe-action-item/index.wxs");
function np_0(){var nv_module={nv_exports:{}};function nv_sizeReady(nv_newValue,nv_oldValue,nv_ownerInstance,nv_instance){var nv_state = nv_instance.nv_getState();nv_state.nv_position = nv_JSON.nv_parse(nv_newValue);if (!nv_state.nv_position || nv_state.nv_position.nv_length === 0)return;;var nv_show = nv_state.nv_position[(0)].nv_show;nv_state.nv_left = nv_state.nv_left || nv_state.nv_position[(0)].nv_left;if (nv_show){nv_openState(true,nv_instance,nv_ownerInstance)} else {nv_openState(false,nv_instance,nv_ownerInstance)}};function nv_touchstart(nv_e,nv_ins){var nv_instance = nv_e.nv_instance;var nv_state = nv_instance.nv_getState();var nv_pageX = nv_e.nv_touches[(0)].nv_pageX;nv_instance.nv_removeClass('ani');var nv_owner = nv_ins.nv_selectAllComponents('.button-hock');for(var nv_i = 0;nv_i < nv_owner.nv_length;nv_i++){nv_owner[((nt_3=(nv_i),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))].nv_removeClass('ani')};nv_state.nv_left = nv_state.nv_left || nv_state.nv_position[(0)].nv_left;nv_state.nv_width = nv_pageX - nv_state.nv_left;nv_ins.nv_callMethod('closeSwipe')};function nv_touchmove(nv_e,nv_ownerInstance){var nv_instance = nv_e.nv_instance;var nv_disabled = nv_instance.nv_getDataset().nv_disabled;var nv_state = nv_instance.nv_getState();if (nv_disabled)return;;var nv_pageX = nv_e.nv_touches[(0)].nv_pageX;nv_move(nv_pageX - nv_state.nv_width,nv_instance,nv_ownerInstance)};function nv_touchend(nv_e,nv_ownerInstance){var nv_instance = nv_e.nv_instance;var nv_disabled = nv_instance.nv_getDataset().nv_disabled;var nv_state = nv_instance.nv_getState();if (nv_disabled)return;;nv_moveDirection(nv_state.nv_left,-40,nv_instance,nv_ownerInstance)};function nv_move(nv_value,nv_instance,nv_ownerInstance){var nv_state = nv_instance.nv_getState();var nv_x = Math.nv_max(-nv_state.nv_position[(1)].nv_width,Math.nv_min((nv_value),0));nv_state.nv_left = nv_x;nv_instance.nv_setStyle(({nv_transform:'translateX(' + nv_x + 'px)','nv_-webkit-transform':'translateX(' + nv_x + 'px)',}));nv_buttonFold(nv_x,nv_instance,nv_ownerInstance)};function nv_moveDirection(nv_left,nv_value,nv_ins,nv_ownerInstance){var nv_state = nv_ins.nv_getState();var nv_position = nv_state.nv_position;var nv_isopen = nv_state.nv_isopen;if (!nv_position[(1)].nv_width){nv_openState(false,nv_ins,nv_ownerInstance);return};if (nv_isopen){if (-nv_left <= nv_position[(1)].nv_width){nv_openState(false,nv_ins,nv_ownerInstance)} else {nv_openState(true,nv_ins,nv_ownerInstance)};return};if (nv_left <= nv_value){nv_openState(true,nv_ins,nv_ownerInstance)} else {nv_openState(false,nv_ins,nv_ownerInstance)}};function nv_buttonFold(nv_value,nv_instance,nv_ownerInstance){var nv_ins = nv_ownerInstance.nv_selectAllComponents('.button-hock');var nv_state = nv_instance.nv_getState();var nv_position = nv_state.nv_position;var nv_arr = [];var nv_w = 0;for(var nv_i = 0;nv_i < nv_ins.nv_length;nv_i++){if (!nv_ins[((nt_9=(nv_i),null==nt_9?undefined:'number'=== typeof nt_9?nt_9:"nv_"+nt_9))].nv_getDataset().nv_button)return;;var nv_btnData = nv_JSON.nv_parse(nv_ins[((nt_10=(nv_i),null==nt_10?undefined:'number'=== typeof nt_10?nt_10:"nv_"+nt_10))].nv_getDataset().nv_button);var nv_button = nv_btnData[((nt_11=(nv_i),null==nt_11?undefined:'number'=== typeof nt_11?nt_11:"nv_"+nt_11))] && nv_btnData[((nt_12=(nv_i),null==nt_12?undefined:'number'=== typeof nt_12?nt_12:"nv_"+nt_12))].nv_width || 0;nv_w += nv_button;nv_arr.nv_push(-nv_w);var nv_distance = nv_arr[((nt_13=(nv_i - 1),null==nt_13?undefined:'number'=== typeof nt_13?nt_13:"nv_"+nt_13))] + nv_value * (nv_arr[((nt_14=(nv_i - 1),null==nt_14?undefined:'number'=== typeof nt_14?nt_14:"nv_"+nt_14))] / nv_position[(1)].nv_width);if (nv_i != 0){nv_ins[((nt_16=(nv_i),null==nt_16?undefined:'number'=== typeof nt_16?nt_16:"nv_"+nt_16))].nv_setStyle(({nv_transform:'translateX(' + nv_distance + 'px)',}))}}};function nv_openState(nv_type,nv_ins,nv_ownerInstance){var nv_state = nv_ins.nv_getState();var nv_position = nv_state.nv_position;if (nv_state.nv_isopen === undefined){nv_state.nv_isopen = false};if (nv_state.nv_isopen !== nv_type){nv_ownerInstance.nv_callMethod('change',({nv_open:nv_type,}))};nv_state.nv_isopen = nv_type;nv_ins.nv_addClass('ani');var nv_owner = nv_ownerInstance.nv_selectAllComponents('.button-hock');for(var nv_i = 0;nv_i < nv_owner.nv_length;nv_i++){nv_owner[((nt_17=(nv_i),null==nt_17?undefined:'number'=== typeof nt_17?nt_17:"nv_"+nt_17))].nv_addClass('ani')};nv_move(nv_type ? -nv_position[(1)].nv_width:0,nv_ins,nv_ownerInstance)};nv_module.nv_exports = ({nv_sizeReady:nv_sizeReady,nv_touchstart:nv_touchstart,nv_touchmove:nv_touchmove,nv_touchend:nv_touchend,});return nv_module.nv_exports;}

f_['./components/uni-swipe-action-item/uni-swipe-action-item.wxml']={};
f_['./components/uni-swipe-action-item/uni-swipe-action-item.wxml']['swipe'] =f_['./components/uni-swipe-action-item/index.wxs'] || nv_require("p_./components/uni-swipe-action-item/index.wxs");
f_['./components/uni-swipe-action-item/uni-swipe-action-item.wxml']['swipe']();

var x=['./colorui/components/cu-custom.wxml','./components/chunLei-modal/chunLei-modal.wxml','./components/mescroll-uni/mescroll-uni.wxml','./components/uni-swipe-action-item/uni-swipe-action-item.wxml','./components/uni-swipe-action/uni-swipe-action.wxml','./components/w-picker/w-picker.wxml','./pages/addUser/addUser.wxml','./pages/carsCount/carsCount.wxml','./pages/editor/editor.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/look/look.wxml','./pages/message/message.wxml','./pages/modify/modify.wxml','./pages/product/product.wxml','./pages/read/read.wxml','./pages/report/report.wxml','./pages/reset/reset.wxml','./pages/set/set.wxml','./pages/text/text.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var fE=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,6,e,s,gg)){cF.wxVkey=1
}
var hG=_n('slot')
_rz(z,hG,'name',7,e,s,gg)
_(fE,hG)
cF.wxXCkey=1
_(xC,fE)
}
var oD=_v()
_(oB,oD)
if(_oz(z,8,e,s,gg)){oD.wxVkey=1
var oH=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,12,e,s,gg)){cI.wxVkey=1
}
var oJ=_n('slot')
_rz(z,oJ,'name',13,e,s,gg)
_(oH,oJ)
cI.wxXCkey=1
_(oD,oH)
}
var lK=_n('slot')
_rz(z,lK,'name',14,e,s,gg)
_(oB,lK)
var aL=_n('slot')
_rz(z,aL,'name',15,e,s,gg)
_(oB,aL)
var tM=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
var eN=_n('slot')
_rz(z,eN,'name',19,e,s,gg)
_(tM,eN)
_(oB,tM)
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oP=_mz(z,'view',['bindtap',0,'catchtouchmove',1,'class',1,'data-event-opts',2],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,4,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oP,oR)
if(_oz(z,5,e,s,gg)){oR.wxVkey=1
var lY=_mz(z,'view',['catchtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var aZ=_v()
_(lY,aZ)
var t1=function(b3,e2,o4,gg){
var o6=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],b3,e2,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,16,b3,e2,gg)){f7.wxVkey=1
}
f7.wxXCkey=1
_(o4,o6)
return o4
}
aZ.wxXCkey=2
_2z(z,11,t1,e,s,gg,aZ,'item','index','index')
_(oR,lY)
}
var fS=_v()
_(oP,fS)
if(_oz(z,17,e,s,gg)){fS.wxVkey=1
var c8=_mz(z,'view',['catchtap',18,'class',1,'data-event-opts',2],[],e,s,gg)
var h9=_mz(z,'checkbox-group',['bindchange',21,'data-event-opts',1],[],e,s,gg)
var o0=_v()
_(h9,o0)
var cAB=function(lCB,oBB,aDB,gg){
var eFB=_v()
_(aDB,eFB)
if(_oz(z,27,lCB,oBB,gg)){eFB.wxVkey=1
}
eFB.wxXCkey=1
return aDB
}
o0.wxXCkey=2
_2z(z,25,cAB,e,s,gg,o0,'item','index','index')
_(c8,h9)
_(fS,c8)
}
var cT=_v()
_(oP,cT)
if(_oz(z,28,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(oP,hU)
if(_oz(z,29,e,s,gg)){hU.wxVkey=1
var bGB=_n('view')
_rz(z,bGB,'class',30,e,s,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,31,e,s,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(bGB,xIB)
if(_oz(z,32,e,s,gg)){xIB.wxVkey=1
}
oHB.wxXCkey=1
xIB.wxXCkey=1
_(hU,bGB)
}
var oV=_v()
_(oP,oV)
if(_oz(z,33,e,s,gg)){oV.wxVkey=1
var oJB=_mz(z,'view',['catchtap',34,'class',1,'data-event-opts',2],[],e,s,gg)
var fKB=_v()
_(oJB,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],oNB,hMB,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,44,oNB,hMB,gg)){aRB.wxVkey=1
}
aRB.wxXCkey=1
_(cOB,lQB)
return cOB
}
fKB.wxXCkey=2
_2z(z,39,cLB,e,s,gg,fKB,'item','index','index')
_(oV,oJB)
}
var cW=_v()
_(oP,cW)
if(_oz(z,45,e,s,gg)){cW.wxVkey=1
var tSB=_mz(z,'view',['catchtap',46,'class',1,'data-event-opts',2],[],e,s,gg)
var eTB=_v()
_(tSB,eTB)
var bUB=function(xWB,oVB,oXB,gg){
var cZB=_n('view')
_rz(z,cZB,'class',53,xWB,oVB,gg)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,54,xWB,oVB,gg)){h1B.wxVkey=1
}
var o2B=_v()
_(cZB,o2B)
if(_oz(z,55,xWB,oVB,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(cZB,c3B)
if(_oz(z,56,xWB,oVB,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(cZB,o4B)
if(_oz(z,57,xWB,oVB,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(cZB,l5B)
if(_oz(z,58,xWB,oVB,gg)){l5B.wxVkey=1
}
h1B.wxXCkey=1
o2B.wxXCkey=1
c3B.wxXCkey=1
o4B.wxXCkey=1
l5B.wxXCkey=1
_(oXB,cZB)
return oXB
}
eTB.wxXCkey=2
_2z(z,51,bUB,e,s,gg,eTB,'item','index','index')
_(cW,tSB)
}
var oX=_v()
_(oP,oX)
if(_oz(z,59,e,s,gg)){oX.wxVkey=1
var a6B=_n('slot')
_(oX,a6B)
}
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
oX.wxXCkey=1
_(r,oP)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var e8B=_mz(z,'view',['bindtouchcancel',0,'bindtouchend',1,'bindtouchmove',1,'bindtouchstart',2,'data-event-opts',3,'style',4],[],e,s,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,6,e,s,gg)){b9B.wxVkey=1
}
var fCC=_n('slot')
_(e8B,fCC)
var o0B=_v()
_(e8B,o0B)
if(_oz(z,7,e,s,gg)){o0B.wxVkey=1
var cDC=_n('view')
_rz(z,cDC,'class',8,e,s,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,9,e,s,gg)){hEC.wxVkey=1
}
var oFC=_v()
_(cDC,oFC)
if(_oz(z,10,e,s,gg)){oFC.wxVkey=1
}
var cGC=_v()
_(cDC,cGC)
if(_oz(z,11,e,s,gg)){cGC.wxVkey=1
}
hEC.wxXCkey=1
oFC.wxXCkey=1
cGC.wxXCkey=1
_(o0B,cDC)
}
var xAC=_v()
_(e8B,xAC)
if(_oz(z,12,e,s,gg)){xAC.wxVkey=1
var oHC=_n('view')
_rz(z,oHC,'class',13,e,s,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,14,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(oHC,aJC)
if(_oz(z,15,e,s,gg)){aJC.wxVkey=1
}
lIC.wxXCkey=1
aJC.wxXCkey=1
_(xAC,oHC)
}
var oBC=_v()
_(e8B,oBC)
if(_oz(z,16,e,s,gg)){oBC.wxVkey=1
}
b9B.wxXCkey=1
o0B.wxXCkey=1
xAC.wxXCkey=1
oBC.wxXCkey=1
_(r,e8B)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var eLC=_mz(z,'view',['bindchange',0,'bindtouchend',1,'bindtouchmove',1,'bindtouchstart',2,'change:prop',3,'class',4,'data-disabled',5,'data-event-opts',6,'data-position',7,'prop',8],[],e,s,gg)
var bMC=_n('slot')
_(eLC,bMC)
_(r,eLC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var xOC=_n('slot')
_(r,xOC)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var fQC=_n('view')
_rz(z,fQC,'class',0,e,s,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,1,e,s,gg)){cRC.wxVkey=1
}
var hSC=_v()
_(fQC,hSC)
if(_oz(z,2,e,s,gg)){hSC.wxVkey=1
}
var oTC=_v()
_(fQC,oTC)
if(_oz(z,3,e,s,gg)){oTC.wxVkey=1
}
var cUC=_v()
_(fQC,cUC)
if(_oz(z,4,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(fQC,oVC)
if(_oz(z,5,e,s,gg)){oVC.wxVkey=1
}
var lWC=_v()
_(fQC,lWC)
if(_oz(z,6,e,s,gg)){lWC.wxVkey=1
}
var aXC=_v()
_(fQC,aXC)
if(_oz(z,7,e,s,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(fQC,tYC)
if(_oz(z,8,e,s,gg)){tYC.wxVkey=1
var x3C=_mz(z,'picker-view',['bindchange',9,'bindtouchend',1,'bindtouchstart',2,'data-event-opts',3,'indicatorStyle',4,'value',5],[],e,s,gg)
var o4C=_v()
_(x3C,o4C)
if(_oz(z,15,e,s,gg)){o4C.wxVkey=1
}
o4C.wxXCkey=1
_(tYC,x3C)
}
var eZC=_v()
_(fQC,eZC)
if(_oz(z,16,e,s,gg)){eZC.wxVkey=1
}
var b1C=_v()
_(fQC,b1C)
if(_oz(z,17,e,s,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(fQC,o2C)
if(_oz(z,18,e,s,gg)){o2C.wxVkey=1
}
cRC.wxXCkey=1
hSC.wxXCkey=1
oTC.wxXCkey=1
cUC.wxXCkey=1
oVC.wxXCkey=1
lWC.wxXCkey=1
aXC.wxXCkey=1
tYC.wxXCkey=1
eZC.wxXCkey=1
b1C.wxXCkey=1
o2C.wxXCkey=1
_(r,fQC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var c6C=_n('view')
_rz(z,c6C,'class',0,e,s,gg)
var o8C=_mz(z,'cu-custom',['Color',1,'bgColor',1,'bind:__l',2,'class',3,'isBack',4,'isIcon',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(c6C,o8C)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,9,e,s,gg)){h7C.wxVkey=1
}
h7C.wxXCkey=1
_(r,c6C)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var o0C=_n('view')
_rz(z,o0C,'class',0,e,s,gg)
var lAD=_mz(z,'cu-custom',['Color',1,'bgColor',1,'bind:__l',2,'class',3,'isBack',4,'isIcon',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(o0C,lAD)
var aBD=_n('view')
_rz(z,aBD,'class',9,e,s,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,10,e,s,gg)){tCD.wxVkey=1
}
var eDD=_v()
_(aBD,eDD)
if(_oz(z,11,e,s,gg)){eDD.wxVkey=1
}
tCD.wxXCkey=1
eDD.wxXCkey=1
_(o0C,aBD)
var bED=_mz(z,'w-picker',['bind:__l',12,'bind:confirm',1,'class',2,'current',3,'data-event-opts',4,'data-ref',5,'endYear',6,'mode',7,'startYear',8,'step',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(o0C,bED)
_(r,o0C)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var xGD=_mz(z,'cu-custom',['Color',0,'bgColor',1,'bind:__l',1,'class',2,'isBack',3,'isIcon',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(r,xGD)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var fID=_n('view')
_rz(z,fID,'class',0,e,s,gg)
var cJD=_n('view')
_rz(z,cJD,'class',1,e,s,gg)
var hKD=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var oLD=_v()
_(hKD,oLD)
if(_oz(z,5,e,s,gg)){oLD.wxVkey=1
}
oLD.wxXCkey=1
_(cJD,hKD)
var cMD=_v()
_(cJD,cMD)
var oND=function(aPD,lOD,tQD,gg){
var bSD=_n('view')
_rz(z,bSD,'class',10,aPD,lOD,gg)
var oTD=_n('view')
_rz(z,oTD,'class',11,aPD,lOD,gg)
var xUD=_v()
_(oTD,xUD)
if(_oz(z,12,aPD,lOD,gg)){xUD.wxVkey=1
}
var oVD=_v()
_(oTD,oVD)
if(_oz(z,13,aPD,lOD,gg)){oVD.wxVkey=1
}
xUD.wxXCkey=1
oVD.wxXCkey=1
_(bSD,oTD)
var fWD=_n('view')
_rz(z,fWD,'class',14,aPD,lOD,gg)
var cXD=_v()
_(fWD,cXD)
if(_oz(z,15,aPD,lOD,gg)){cXD.wxVkey=1
}
var hYD=_v()
_(fWD,hYD)
if(_oz(z,16,aPD,lOD,gg)){hYD.wxVkey=1
}
var oZD=_v()
_(fWD,oZD)
if(_oz(z,17,aPD,lOD,gg)){oZD.wxVkey=1
var c1D=_n('view')
_rz(z,c1D,'class',18,aPD,lOD,gg)
var o2D=_v()
_(c1D,o2D)
if(_oz(z,19,aPD,lOD,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(c1D,l3D)
if(_oz(z,20,aPD,lOD,gg)){l3D.wxVkey=1
}
o2D.wxXCkey=1
l3D.wxXCkey=1
_(oZD,c1D)
}
cXD.wxXCkey=1
hYD.wxXCkey=1
oZD.wxXCkey=1
_(bSD,fWD)
_(tQD,bSD)
return tQD
}
cMD.wxXCkey=2
_2z(z,8,oND,e,s,gg,cMD,'v','k','k')
_(fID,cJD)
var a4D=_mz(z,'chun-lei-modal',['bind:__l',21,'bind:cancel',1,'bind:input',2,'bind:onConfirm',3,'class',4,'data-event-opts',5,'mData',6,'nav',7,'navMask',8,'type',9,'value',10,'vueId',11],[],e,s,gg)
_(fID,a4D)
_(r,fID)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var b7D=_n('view')
_rz(z,b7D,'class',0,e,s,gg)
var o8D=_mz(z,'cu-custom',['Color',1,'bgColor',1,'bind:__l',2,'class',3,'isBack',4,'isIcon',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(b7D,o8D)
var x9D=_n('view')
_rz(z,x9D,'class',9,e,s,gg)
var o0D=_v()
_(x9D,o0D)
if(_oz(z,10,e,s,gg)){o0D.wxVkey=1
}
var fAE=_v()
_(x9D,fAE)
if(_oz(z,11,e,s,gg)){fAE.wxVkey=1
}
o0D.wxXCkey=1
fAE.wxXCkey=1
_(b7D,x9D)
_(r,b7D)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var hCE=_n('view')
_rz(z,hCE,'class',0,e,s,gg)
var oDE=_mz(z,'cu-custom',['Color',1,'bgColor',1,'bind:__l',2,'class',3,'isBack',4,'isIcon',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(hCE,oDE)
var cEE=_mz(z,'mescroll-uni',['bind:__l',9,'bind:down',1,'bind:emptyclick',2,'bind:init',3,'bind:topclick',4,'bind:up',5,'class',6,'data-event-opts',7,'down',8,'up',9,'vueId',10,'vueSlots',11],[],e,s,gg)
_(hCE,cEE)
_(r,hCE)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var lGE=_n('view')
_rz(z,lGE,'class',0,e,s,gg)
var aHE=_mz(z,'cu-custom',['Color',1,'bgColor',1,'bind:__l',2,'class',3,'isBack',4,'isIcon',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(lGE,aHE)
var tIE=_mz(z,'button',['bindtap',9,'class',1,'data-event-opts',2,'disabled',3,'type',4],[],e,s,gg)
var eJE=_v()
_(tIE,eJE)
if(_oz(z,14,e,s,gg)){eJE.wxVkey=1
}
eJE.wxXCkey=1
_(lGE,tIE)
_(r,lGE)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oLE=_n('view')
_rz(z,oLE,'class',0,e,s,gg)
var xME=_mz(z,'cu-custom',['Color',1,'bgColor',1,'bind:__l',2,'class',3,'isBack',4,'isIcon',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(oLE,xME)
var oNE=_mz(z,'mescroll-uni',['bind:__l',9,'bind:down',1,'bind:emptyclick',2,'bind:init',3,'bind:topclick',4,'bind:up',5,'class',6,'data-event-opts',7,'down',8,'up',9,'vueId',10,'vueSlots',11],[],e,s,gg)
var fOE=_v()
_(oNE,fOE)
var cPE=function(oRE,hQE,cSE,gg){
var lUE=_n('view')
_rz(z,lUE,'class',25,oRE,hQE,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,26,oRE,hQE,gg)){aVE.wxVkey=1
}
var tWE=_v()
_(lUE,tWE)
if(_oz(z,27,oRE,hQE,gg)){tWE.wxVkey=1
}
aVE.wxXCkey=1
tWE.wxXCkey=1
_(cSE,lUE)
return cSE
}
fOE.wxXCkey=2
_2z(z,23,cPE,e,s,gg,fOE,'v','k','k')
_(oLE,oNE)
var eXE=_mz(z,'w-picker',['bind:__l',28,'bind:confirm',1,'class',2,'current',3,'data-event-opts',4,'data-ref',5,'endYear',6,'mode',7,'startYear',8,'step',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(oLE,eXE)
var bYE=_mz(z,'w-picker',['bind:__l',40,'bind:confirm',1,'class',2,'current',3,'data-event-opts',4,'data-ref',5,'endYear',6,'mode',7,'startYear',8,'step',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(oLE,bYE)
_(r,oLE)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var x1E=_mz(z,'cu-custom',['Color',0,'bgColor',1,'bind:__l',1,'class',2,'isBack',3,'isIcon',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(r,x1E)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var f3E=_n('view')
_rz(z,f3E,'class',0,e,s,gg)
var c4E=_mz(z,'cu-custom',['Color',1,'bgColor',1,'bind:__l',2,'class',3,'isBack',4,'isIcon',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(f3E,c4E)
var h5E=_mz(z,'mescroll-uni',['bind:__l',9,'bind:down',1,'bind:emptyclick',2,'bind:init',3,'bind:topclick',4,'bind:up',5,'class',6,'data-event-opts',7,'down',8,'up',9,'vueId',10,'vueSlots',11],[],e,s,gg)
var o6E=_v()
_(h5E,o6E)
var c7E=function(l9E,o8E,a0E,gg){
var eBF=_n('view')
_rz(z,eBF,'class',25,l9E,o8E,gg)
var bCF=_n('view')
_rz(z,bCF,'class',26,l9E,o8E,gg)
var oDF=_v()
_(bCF,oDF)
if(_oz(z,27,l9E,o8E,gg)){oDF.wxVkey=1
}
var xEF=_v()
_(bCF,xEF)
if(_oz(z,28,l9E,o8E,gg)){xEF.wxVkey=1
}
oDF.wxXCkey=1
xEF.wxXCkey=1
_(eBF,bCF)
var oFF=_n('view')
_rz(z,oFF,'class',29,l9E,o8E,gg)
var fGF=_v()
_(oFF,fGF)
if(_oz(z,30,l9E,o8E,gg)){fGF.wxVkey=1
}
var cHF=_v()
_(oFF,cHF)
if(_oz(z,31,l9E,o8E,gg)){cHF.wxVkey=1
}
var hIF=_v()
_(oFF,hIF)
if(_oz(z,32,l9E,o8E,gg)){hIF.wxVkey=1
var oJF=_n('view')
_rz(z,oJF,'class',33,l9E,o8E,gg)
var cKF=_v()
_(oJF,cKF)
if(_oz(z,34,l9E,o8E,gg)){cKF.wxVkey=1
}
var oLF=_v()
_(oJF,oLF)
if(_oz(z,35,l9E,o8E,gg)){oLF.wxVkey=1
}
cKF.wxXCkey=1
oLF.wxXCkey=1
_(hIF,oJF)
}
fGF.wxXCkey=1
cHF.wxXCkey=1
hIF.wxXCkey=1
_(eBF,oFF)
_(a0E,eBF)
return a0E
}
o6E.wxXCkey=2
_2z(z,23,c7E,e,s,gg,o6E,'v','k','k')
_(f3E,h5E)
var lMF=_mz(z,'w-picker',['bind:__l',36,'bind:confirm',1,'class',2,'current',3,'data-event-opts',4,'data-ref',5,'endYear',6,'mode',7,'startYear',8,'step',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(f3E,lMF)
var aNF=_mz(z,'w-picker',['bind:__l',48,'bind:confirm',1,'class',2,'current',3,'data-event-opts',4,'data-ref',5,'endYear',6,'mode',7,'startYear',8,'step',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(f3E,aNF)
var tOF=_mz(z,'chun-lei-modal',['bind:__l',60,'bind:cancel',1,'bind:input',2,'bind:onConfirm',3,'class',4,'data-event-opts',5,'mData',6,'nav',7,'navMask',8,'type',9,'value',10,'vueId',11],[],e,s,gg)
_(f3E,tOF)
_(r,f3E)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var bQF=_mz(z,'cu-custom',['Color',0,'bgColor',1,'bind:__l',1,'class',2,'isBack',3,'isIcon',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(r,bQF)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var xSF=_n('view')
_rz(z,xSF,'class',0,e,s,gg)
var fUF=_mz(z,'cu-custom',['Color',1,'bgColor',1,'bind:__l',2,'class',3,'isBack',4,'isIcon',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(xSF,fUF)
var oTF=_v()
_(xSF,oTF)
if(_oz(z,9,e,s,gg)){oTF.wxVkey=1
}
oTF.wxXCkey=1
_(r,xSF)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var hWF=_mz(z,'cu-custom',['Color',0,'bgColor',1,'bind:__l',1,'class',2,'isBack',3,'isIcon',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(r,hWF)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var cYF=_n('view')
_rz(z,cYF,'class',0,e,s,gg)
var oZF=_mz(z,'cu-custom',['Color',1,'bgColor',1,'bind:__l',2,'class',3,'isBack',4,'isIcon',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(cYF,oZF)
var l1F=_n('view')
_rz(z,l1F,'class',9,e,s,gg)
var a2F=_v()
_(l1F,a2F)
if(_oz(z,10,e,s,gg)){a2F.wxVkey=1
var b5F=_v()
_(a2F,b5F)
var o6F=function(o8F,x7F,f9F,gg){
var hAG=_mz(z,'uni-swipe-action',['bind:__l',15,'class',1,'vueId',2,'vueSlots',3],[],o8F,x7F,gg)
var oBG=_mz(z,'uni-swipe-action-item',['bind:__l',19,'bind:click',1,'class',2,'data-event-opts',3,'disabled',4,'options',5,'vueId',6,'vueSlots',7],[],o8F,x7F,gg)
_(hAG,oBG)
_(f9F,hAG)
return f9F
}
b5F.wxXCkey=4
_2z(z,13,o6F,e,s,gg,b5F,'v','k','k')
}
var t3F=_v()
_(l1F,t3F)
if(_oz(z,27,e,s,gg)){t3F.wxVkey=1
}
var e4F=_v()
_(l1F,e4F)
if(_oz(z,28,e,s,gg)){e4F.wxVkey=1
}
a2F.wxXCkey=1
a2F.wxXCkey=3
t3F.wxXCkey=1
e4F.wxXCkey=1
_(cYF,l1F)
_(r,cYF)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/index/index","pages/user/user","pages/message/message","pages/product/product","pages/report/report","pages/set/set","pages/modify/modify","pages/look/look","pages/read/read","pages/addUser/addUser","pages/reset/reset","pages/carsCount/carsCount","pages/editor/editor","pages/text/text"],"window":{"navigationStyle":"custom","navigationBarTextStyle":"black"},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"企业绩效管理","compilerVersion":"2.3.7","usingComponents":true};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/cu-custom.wxml']=$gwx('./colorui/components/cu-custom.wxml');

__wxAppCode__['components/chunLei-modal/chunLei-modal.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/chunLei-modal/chunLei-modal.wxml']=$gwx('./components/chunLei-modal/chunLei-modal.wxml');

__wxAppCode__['components/mescroll-uni/mescroll-uni.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mescroll-uni/mescroll-uni.wxml']=$gwx('./components/mescroll-uni/mescroll-uni.wxml');

__wxAppCode__['components/uni-swipe-action-item/uni-swipe-action-item.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-swipe-action-item/uni-swipe-action-item.wxml']=$gwx('./components/uni-swipe-action-item/uni-swipe-action-item.wxml');

__wxAppCode__['components/uni-swipe-action/uni-swipe-action.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-swipe-action/uni-swipe-action.wxml']=$gwx('./components/uni-swipe-action/uni-swipe-action.wxml');

__wxAppCode__['components/w-picker/w-picker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/w-picker/w-picker.wxml']=$gwx('./components/w-picker/w-picker.wxml');

__wxAppCode__['pages/addUser/addUser.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/addUser/addUser.wxml']=$gwx('./pages/addUser/addUser.wxml');

__wxAppCode__['pages/carsCount/carsCount.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom","w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/carsCount/carsCount.wxml']=$gwx('./pages/carsCount/carsCount.wxml');

__wxAppCode__['pages/editor/editor.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/editor/editor.wxml']=$gwx('./pages/editor/editor.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"","usingComponents":{"chun-lei-modal":"/components/chunLei-modal/chunLei-modal"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/look/look.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/look/look.wxml']=$gwx('./pages/look/look.wxml');

__wxAppCode__['pages/message/message.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom","mescroll-uni":"/components/mescroll-uni/mescroll-uni"}};
__wxAppCode__['pages/message/message.wxml']=$gwx('./pages/message/message.wxml');

__wxAppCode__['pages/modify/modify.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/modify/modify.wxml']=$gwx('./pages/modify/modify.wxml');

__wxAppCode__['pages/product/product.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom","mescroll-uni":"/components/mescroll-uni/mescroll-uni","w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/product/product.wxml']=$gwx('./pages/product/product.wxml');

__wxAppCode__['pages/read/read.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/read/read.wxml']=$gwx('./pages/read/read.wxml');

__wxAppCode__['pages/report/report.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"cu-custom":"/colorui/components/cu-custom","mescroll-uni":"/components/mescroll-uni/mescroll-uni","w-picker":"/components/w-picker/w-picker","chun-lei-modal":"/components/chunLei-modal/chunLei-modal"}};
__wxAppCode__['pages/report/report.wxml']=$gwx('./pages/report/report.wxml');

__wxAppCode__['pages/reset/reset.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/reset/reset.wxml']=$gwx('./pages/reset/reset.wxml');

__wxAppCode__['pages/set/set.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/set/set.wxml']=$gwx('./pages/set/set.wxml');

__wxAppCode__['pages/text/text.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/text/text.wxml']=$gwx('./pages/text/text.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"","usingComponents":{"cu-custom":"/colorui/components/cu-custom","uni-swipe-action":"/components/uni-swipe-action/uni-swipe-action","uni-swipe-action-item":"/components/uni-swipe-action-item/uni-swipe-action-item"}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0938":function(t,e,n){"use strict";(function(t){n("2448"),n("921b");var e=r(n("66fd")),u=r(n("dda2")),o=r(n("482e"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),u.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.$store=o.default,e.default.config.productionTip=!1;var f=function(){return n.e("colorui/components/cu-custom").then(n.bind(null,"9700"))};e.default.component("cu-custom",f),u.default.mpType="app";var i=new e.default(a({},u.default));t(i).$mount()}).call(this,n("6e42")["createApp"])},"954c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}var r={onLaunch:function(){t.getSystemInfo({success:function(t){u.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?u.default.prototype.CustomBar=t.statusBarHeight+50:u.default.prototype.CustomBar=t.statusBarHeight+45}})},onShow:function(){this.handlePush()},onHide:function(){},methods:{handlePush:function(){var t=this,e=function(e){plus.push.addEventListener("receive",function(e){plus.nativeUI.alert("recevice:"+JSON.stringify(e));var n=t.$store.state.count;n++,t.$store.commit("changeCount",n)},!1)};plus.push.addEventListener("receive",e)}}};e.default=r}).call(this,n("6e42")["default"])},dda2:function(t,e,n){"use strict";n.r(e);var u=n("f16b");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("f0a3");var r,a,c=n("2877"),f=Object(c["a"])(u["default"],r,a,!1,null,null,null);e["default"]=f.exports},f0a3:function(t,e,n){"use strict";var u=n("f59c"),o=n.n(u);o.a},f16b:function(t,e,n){"use strict";n.r(e);var u=n("954c"),o=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=o.a},f59c:function(t,e,n){}},[["0938","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, u = n[0], a = n[1], l = n[2], s = 0, p = []; s < u.length; s++) {
      r = u[s], i[r] && p.push(i[r][0]), i[r] = 0;
    }

    for (o in a) {
      Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }

    m && m(n);

    while (p.length) {
      p.shift()();
    }

    return c.push.apply(c, l || []), t();
  }

  function t() {
    for (var e, n = 0; n < c.length; n++) {
      for (var t = c[n], o = !0, r = 1; r < t.length; r++) {
        var u = t[r];
        0 !== i[u] && (o = !1);
      }

      o && (c.splice(n--, 1), e = a(a.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      c = [];

  function u(e) {
    return a.p + "" + e + ".js";
  }

  function a(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, a), t.l = !0, t.exports;
  }

  a.e = function (e) {
    var n = [],
        t = {
      "colorui/components/cu-custom": 1,
      "components/chunLei-modal/chunLei-modal": 1,
      "components/uni-swipe-action-item/uni-swipe-action-item": 1,
      "components/mescroll-uni/mescroll-uni": 1,
      "components/w-picker/w-picker": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "colorui/components/cu-custom": "colorui/components/cu-custom",
        "components/chunLei-modal/chunLei-modal": "components/chunLei-modal/chunLei-modal",
        "components/uni-swipe-action-item/uni-swipe-action-item": "components/uni-swipe-action-item/uni-swipe-action-item",
        "components/uni-swipe-action/uni-swipe-action": "components/uni-swipe-action/uni-swipe-action",
        "components/mescroll-uni/mescroll-uni": "components/mescroll-uni/mescroll-uni",
        "components/w-picker/w-picker": "components/w-picker/w-picker"
      }[e] || e) + ".wxss", i = a.p + o, c = document.getElementsByTagName("link"), u = 0; u < c.length; u++) {
        var l = c[u],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === o || s === i)) return n();
      }

      var p = document.getElementsByTagName("style");

      for (u = 0; u < p.length; u++) {
        l = p[u], s = l.getAttribute("data-href");
        if (s === o || s === i) return n();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = n, m.onerror = function (n) {
        var o = n && n.target && n.target.src || i,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        c.request = o, delete r[e], m.parentNode.removeChild(m), t(c);
      }, m.href = i;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      r[e] = 0;
    }));
    var o = i[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var c = new Promise(function (n, t) {
        o = i[e] = [n, t];
      });
      n.push(o[2] = c);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.src = u(e), l = function l(n) {
        s.onerror = s.onload = null, clearTimeout(p);
        var t = i[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            c.type = o, c.request = r, t[1](c);
          }

          i[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(n);
  }, a.m = e, a.c = o, a.d = function (e, n, t) {
    a.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, n) {
    if (1 & n && (e = a(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (a.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      a.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, a.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(n, "a", n), n;
  }, a.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = n, l = l.slice();

  for (var p = 0; p < l.length; p++) {
    n(l[p]);
  }

  var m = s;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"09ef":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAADvCAYAAAAacIO5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVDNTBBMDE4MUQ0MTExRUFBNzRDOThEODQ3NDYyQTcyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVDNTBBMDE5MUQ0MTExRUFBNzRDOThEODQ3NDYyQTcyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUM1MEEwMTYxRDQxMTFFQUE3NEM5OEQ4NDc0NjJBNzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUM1MEEwMTcxRDQxMTFFQUE3NEM5OEQ4NDc0NjJBNzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Tt6MhAAAqJUlEQVR42uydCbwkVXX/z62uXt4y+zDMADPALMzKvogIhIAxETQxEkQRswuignEBNIlAVEATDaDBBfJ3+buA+td/ADViokIGQRIB2WaBGWBmmIXZmeW93iv3d7t75s2b1911q+6tru465/Pp6X41vVad7z3n3HvOuaLv87uIxaqIBP92jy+/PXH5FDBsXXQueTBIMLwMZu9fP4/hZUhZeuvaewwvw8rSGzriMbzJhJUHC/PiMcy9C69gKBMfz9qETHQbyG4CgWVAexdyL0kguz0OrOjC78xustnr4PUqyG4PQisYxp4Mg7wYwCfiBLHbA9AKhjTRsHsh3sPrZojdBEEbJ8vOYs66hnGVRTdD7HYZuMLyZzCY8ffCvADv42k8P+gA4vU6vLahFRGDyrBHb22DWFoR4LlBv5fXi/DasoTC0uczmN1jbXUsrdB8XhCIvV6Bt1PQig5CyuCbiWfbnU8vJMzCEsSRWGE3ZuCGhVZYAothjF4XTMa27aytTYi9boTXNLjCItAmAGXA7YJpyuIKAxDHAmA3BuDagLaTsTKLuXNqyi0e6zlhINa1wlYAdmMMrjAMrDAMKUNt3xL7jXV1LO7o/w8KuC6UxgF2OwRuUJBEDC0zQx7OPfZzjjwfz/cLZCsoRYvnm7DCRgF2YwauCWiFwc9lCDszcOnCatKyCstW2BjAbszBFREDHkbhGG5zFtmPuywCWF5hCOJYAOzGAFy/x8M8Lw7uM4v+OdWxwMLHcS8gxLqTXZEA7MYQ3KDHwlruMLE4ix2rbMJdbnXMr3U1GSMbA7iTGVamgLRheXkZqXMudDuXWddd9mN5hQb8pgHuiOUVHQY3MMTlAS9X7qvOJYfmeYJmyUNT5G1Q3tIMZ+zhLsnbHnnbJjxaS1V63h12Vrl7Rd4AtH7gNA1wYMjdLgFXhIG4NK46WOnzzpGg/o7833PksQXy5jAXXU61qF1FeX2rpXG0QiLwgAT6wdSweCC929kTEFo/FjcWAIuAexWJDoHrG9qq66WKk6vnyQv8Dvk/b5aH+lndEyNDEoX7JMjfyWx3fuGURaWNNfd8PPbzN7WAsB2ckcBrC1wjEEsLmy2Or/65PPp++ecc1uPEy2qJxb9kdjlflxa5YAHajgHsGAaXLIArRvzd7LH6Oz+tcmFxQvUpefQWBpelLnOgD9AL6EdQ3dLQXdOcGIM3LKRBwG37uDClOnd4euVez6Fvyr9nsr6yjCEzoR9ST+6DvgTRMwMAG50AdQyOClGAe9DomD+0ckk17T0iH5/H+sniQ86Fvki9eWcby9spgIUNeE1bZj8noukJxXLP8KGVr3iC7pR/D7BOsmjIgNSbO6A/0CNd3dME2Jo4AaALanWDgDvmCZXxy4TSuOo98q9LWQ9ZQpiSS6FH0CcfsAoDum3U+jpGToEeuKQB7kEntDipOr3S590vH57J2sdiQM6U+vQzqVczfFheEUCnrcW/TkA4w8AtNMA94P+KE6uHVLLevfLhsaxzLAZlidSre6BfQfQygMEy4e2GtrxhEv+1TpCMTQYqOe/78uFi1jUWC7IY+gU9MwiwVetre6lImAAX96XB6ufk/amsYywW5dS6nglDAJu2xlrwmiqfa5d11fJk5adVkOL4LtYtFusi9Uzq2yUBANbV/dCMOUZ/tt7z/HxpJGDM8Ry6jbWKJSqR+nYr9E5XVw1zYs1tDmp1hYb1FfIkimrau524qIAlWumH3kH/WulnSL0PDbRj6A2DFru3vC9MrbyNeEmIpTNyZl3/fOurAS60nhvE8oatKvJ1X8l6GTnyXc86xNJB9/l66GEQ/TXIjdWYN8isW9v4oTSherG8n8UqxNJBmVXXwzBxbVgmtOG1laPpZ7QSXoocOep9mHWHJQbW98PQR/I362ybm1CWN0g7Vm13ozC58gZ5N5dVhyUGMreuj4H1mcK3N7bmNpuw1gf8YDnaccEBS5ys77sMWtiOLBXZtLr7HpfGVcfLR7/PKsMSGxH0BqWXBvTbpPV1DI0MpkYiUenzzpL3OdYYlhhJTurl2WRuwskIYzZzmwONSl6tNSsLS7xcZ7QNNqjnUbvN7SA18z6CzmZVYYmh63yWdd23BG/Qjae1RiPpmvRRrSE6C0vcZGFdP8NaX2O8OZZi10AjT7nfm0O8kwFLPMWp62dYq2mMsbDpkUFyNJtmnHgpbx7rCEts496U56dlrIiAJd/wmnKZ/Xxp7rnMEmeZpQGeddfZlItqJOfTEzSZ9YMltpZ3v36ayuEPJbb359XtODCeVcSOpETtBJeb7IbjitpzHCHkrfZ3Rg7tafmHJ19TrHryVnt9RR6oqPvEncbxdPCOgq12BrS6R68bEEa/roKfUUdY8ARYRkkDtLQ8wxPTgg7JOjQtK+jQnKAZOYemy9uENFFWEiz/m/rk/Tj5oD9FJLmlvfINdpWIhuU9bjuKHm3Ke7R+uEqbCx5tlbftku6dpRrkPSrOGIBSG5DbwexnMGgLr+1u7x3rLJ9kAayHSTBnDzq0cFyKFk9waN5gSgIraJo8PjVTs7RBBaBuLVRpq4R5s4T5hb1VemxHmR7dXqGVu6uUT4Z5DgxgmM9yNYAL+hy/LjMDbUjGSZ93wXiHjp2QotMnu3TCxBQdOeDQFAlqyvBZhmt9WJ8jb/KPCbVjZS9DayTEj24v0/2byvTQ1rKCuodAJQ3X2Q/wgZ7jWvxxYXdSYNG0sK+RoJ5ziEunT0nRwvEpaXEF5VLRn2LEy3OkpZ8zmKG3HJ6m5buq9MCWMt27oaRArvaOMfbjOluLf92QgAYBkYE1FYDJMzlbWtQ/mJ6mN0536eRJLk3NmreuYaRffpmTJ6XU7Z2z0vSLzWW644UiLe0tiHXc5XZxrxV4w1RC+N08m8WnW3zK5BS9VVq1C2ak6agBpytOICbFLpmVoTfJ73z3uhJ9eXWBnny10o0Qt3Odw1hb369xDf2IIM9lF1rzKkL5f3eaq6D9fWlpAXE3yvi0oMtmZ+j8GS59ZXWR7nyxQK/kvTHdb0TKMYO7nausA2woV9q1+ANZQkrjqiJ+hLX6YwntGVNcFd/2ghzR59Anl+TozKkufWp5XsXDo8MCrzdcaysz0K5hWHVnnhnyNsp94RFp+rOjMnTixFTP/k54EQvH99OnVxToKy8U9lnaLlgv1rW6Riev3ADWM2yOJgPsIzb8EwntpUdm6CQJbToBqSuz+h363PE5OmacQ59YlldJIF0Ori6g2ktOrkWAdOPhxEN8SFbQxTMz9C4JLdZmMwnLN0NW1wfmZdV69NVPDY8ZB8cEWooqrm31nq4FEMO4y4kCuHFVMTHz+kPTdM38LJ0zzU30KIbfjsELIF/5xDBtylfjCG5Y99kI8K6lH8LiQ3B1jpTu4hVzsvKWUbOwLDVB2IDzc8VjQ7St2BOzVkEzsazAa8v6JkKwzPNWqaDvk+CeOjnFtI4hF8nzs6fcR1dJC7yn7HULlLZzm63AGyTrKhEAjw6SEM9+RLrIWK/tS7G1bSV/flSG1g1V1SRWDGscguQvG4PbtQStLuA9rcGNK5V1iP7q6Cx98JgszR3k6ke/CvNheb6e3FmhH64vxXU8DgJmaIg5SSMiwRLIxxfm6KKZGQUxi38ZkCHGtQtyKpVy9Z6urE6y4ko7HfohiQEeM8lItPju6QNq3ZbBDSanTU7R5bOzFIOM0Njor2Poi7MVHkOwXnn94hzdeXK/inNZwgkyzV47xe2Wr2udFYeBs3O1Fo1P0b+e0k9/L13lSRk+nSYEbXs+JOPfXPIm+Yzsz2tq5OjJs98Ias6fkaa7Tu9XhegsZuWCeoFGQ4lEjOGyrfeO5S+bKEsOg/D+uVn62qn9dNwEdpNtCPK83zsno5oOeBTRgmpM+XC66AfG7uqMbNyG+PYzx/XRZ4/vU+4diz05ZVJKWeAujm0js7ysiU1c5EbpGjpZ3H5Sv1qP5Nlk+4KYF9lX3dqMwNSgYHPHBJGEgQETU3ec3E8Xz+T4Nlrr66rloy6wusKW3jsx+KFdC/BJ0n37uoxvf+9Ql2kKKWjk/uCWMv16W9lXEf60nKDXy/PuiNiBG9k3YicvoKCzBSamuKggvKD9zXseG6a3/3qIbnm+QEM+kphBCNrconFBUiXKBnRdLxjlEeceLWPc207s4xnlkPL8nird+UKB7lpbopeHa+Z23mCGBn3GsvPHpVTyy4bhrm3oHssGdD05ewBwoVifWpKjs6byqQsqqBL6xpoifXtNiVburuzTXngxf3FUxncKJJJfXjslRT/dVOq1HtAMr0nx6pYXGT7oPcyiLyjJvXttkW5eUaBluyoH/B+KD66cm1WdMnXktMkuTUqLXinY14aXl4J8yoWHp+lv5mX5RAQUgHu5jG0bMe1In/EPD0urAg5dOUbCjqW6bcVK4pxBG9F+Tw4GWBK6YTHnKQcVbP05ejJK1E8lOkdePT+rtkbRlSPkaxH7dknkZVScmPyAWBOBOPe6RTkFMEswuUta3Sd2HGgdG3Eq3OWgfakRH6NWOuIlo1jocZzm2WPbUQMbZL2ViwwCy/9sr9BnVxbGnFY9b5pL754dbg4B+w9noqE3VjrK67xtZLG0tlfKODfNZyqQYF9e9GAeuT9vgzP0qf7oghxNCNk187A+IV3u5J1bVskWAmDfMyejAGbRF+x68LGnh1Xm1EjThf2HcI+Wt9g4LawgUaPH85wZXl3BBlhvn8nLQkFkb9mjv3smT99bd2DTuEYZH/YURq9qE3X1E6XlPqzPYXhZ9lvd90rLMJXL+7QFM8rXPZunL60u7LO2IwUbqF23KGsstRETish6Y3hZlPzOIS5dMINzWIKAe70E99bn94PrjQAY+y9hWeh0g72o+uVbHd6XvEGWtbOJ1b1sdpYbogeIcW9Ylqcvrqpt0znW2UN2WtjZ5YOul/ygCWmGl4VqKXdnc+6ylqA44KNP5+nba4v71m+9UbEuOj+iIZ/pQVEIEdVSEcMbdzl/uqvqRVn8yYrdFfrQb/P075ua72iALKqbj81p5y77jf2S6CQxvKME/adeN9XlhG+fgmWga54apv/e3jy3GLPB/3Rcn5pHsCVJvF4M7yhZOD6l0u1YWkuhSvTNNUX6lIxx1ww1r6fFtqW3nNBHb7PYJggueYVLAlkA79QMw9tK1kpY/3Flgb72YrFl1wss4cBVxk5/NqXqeZSvegxvkgVzHgul1eVUyOby881ltRT0q63lls8DuJ9ckqP3zLZfQlmS3O4sMryJloFUMjN1/Ag2t/7y6iJ99rk8vZL3msad+B+33rQA1UJRTALnZbi9Kc/wJlqw2M/1ugfHk+joiKqg/7++1LLhUiMZ4/I5WbpmfjayGWAMLOu7t48Vw2tCUkJQmtndJ1sLHv0fGdd+cXVBxbl+BPHtDYtyqq1NVLJL+s3rGN5kS7Hq+Wo7mgT5pYxt//m5Av1oo//d6N91ZIb+8bi+yPPBN+arHPMmXTCCJzF2GilPv1qhr79UVO1YAYVfQdfHToALWTPk0d4KMbzJtrxEy3dV1Jph0jJ2UCz/nbU1aEd3dmypQPI8oVkBXOXxHYo5XpTkFipseRMvT+ys0Hbpgh2SkFLAzTKuBbRflbHtsvrA1U4as8pOfUvTm4/t69gGa9gmZeXuKiXRX2J4R8njOyrKdTx3Wm+fGrjE/76xrCajMGDp5DjgqVgLRxtcFBr4ARczwiskZLCQ2OPJVHHCy8OetLzVROoqwztK0LwbkzS9CC+s1PJdVXpgS5l+uL5ED28tKxCxZSaylMba4AuMwcKWRvwfEjD+dmGWPijhzbWBcJMcJB7aWqH7NpRU4cLcwRT98Ix+Y/Cu2lNROzAwvCxK4EaiwfrreqQsEPsAoXAAAC2VwK7ec6Cyt4oXwRiW0BorvOh+ceOSHP3l0a1THjF3cP8rZbp3Q22QKNQ/8kPHuDTNoI+N37Wj6DG8LDVBBtHVT+Xpm6f1Wylhi0J2Szf1N1KxYWV/sblMT0rXGMeaucHNBBa3Ae7xE1NqRvkNTbY0xdsD1Puk5/IT6ZKPnvh6x6wMXTXPXNYVvKSH6t4Dw8uyTx7ZVqbLHhuiL57UT/O7pMoIBhSQ/lIC+3Np9R7fWW6ayqgT30KwHclNx+bG7KSJ5/yH/LyvvligB7dUlKs8WrCJGIoU+g1O42Nu4plXq4nVUYa3hcBi/el/76XPSGtzziHxO1WYZAIoy2Qci8Hm4W0VelZau43STS4bMkeADe1vr12QU7XOzc7T5XKge2nUxFFjVvrwPoduWtJHR/abHQSXbsHgxPCytIipLn5kr4zVaqVth3aww0Zemtad9USSx3ZUlMuIe6zR7i2bdx4XjEvRRxdk6Z1Htt5287ndlYPAbVhkzEp/fFFO7WJvOrRBhVOSU2oYXh+CtdCPPj2sZkv/6uiMssLY4Momxog1MTv8ivxszKg+t7sqXcSKWm7BZJDNLS1Rznz+jLRaBjp5UvuG85iMarZL9AdkjGujnvfR7WW1rEcML4sfQcsXzNaePtlVluRsCTHi4UOzejXAUHIsy8CSwmLuLhO9Ki0qXEBUx2CwAJwvD1WVVcXs8O5yNDZm7qBD75ubVYOUn10I4Lb/ZOPY1UaIk6+dnzOewIH882+tKUZ2ThjeHhHEmQ+r+LKsYsA5gylaMsGhhdLFRJO1iRmhLBfgRK404Byq1Ioehiu1nQQA6i55j0yuLRJUJNXvLtduSGYoNQnj1C5XgqzsAo8ZYCyPXSNj21Mm+dveZavySPJqsgrrvWX5xRo8nTY5RbeeYCfX+WebyvSjjeV9ng/PNrMEcqc3F8r0yLZaji8SD/pStXXRimrNUnN/kQDh1cHHjHBQZfMsaeqSCSl635yMWsrx2/8YHsLHJLjoY1Ub1PZ/sXnSeqNvlY1dDDBgYJ9fhBQiweAyvAYFFmd33QW2qVIm3xmewl9L9xiN0HXWs1ftqe3892/r95cLNrKzkMSB2fkzpthRLdQXL61vXJb04k2GN4ECD+H8GS59fGFOJV7oCNaRP/DbA3f+awisNtZy/9jSXsZYDvuXVQXiimuGN3GCiaNTJ7vK2l40M62dMIFsrQ9JcFHIMFrQOeMmi50i4SZj/6OXh6t8IRne5Agm0LCxF9zjN0uLq9tkr1jv0fwPy/JjFgFgUPjk4pzaVdGWfGtNie7dUOaLyfD2poyewAFU2KUAE1HIRw7SGROlgzcvL6hYc6wWQZio+zvpfmM915Zguez21QW1tMbC8PakNFQb24v8noT1opm1hJKgjQUQ135CWlukP44lcJX/dkGWPjI/Z63FKyYCvyzBfXJnhS8ww9u7VvfIAYf+6LA0vfXwNJ0wMRW4LQ2Wt/71xQLdtHx/jDnaqmOA+Ae4ynOzZLNRJGaW/299OYqF4e0pYGFVMWP8Fgns+dPTCuAwLKHF603L88pNbiRcjH4/zCp/+rg+uny23W1MkL/8mZX50JVRDC9LLATuKYBFRtdZ0iWGW3z6lFToUjvM5v7slTJ9bmVBpYCO5Y5TfbBATa/t/YcgX5Lu8v2beJKK4e3miyS5RCHEkvEpOmNqSm3+feyEVNMSPV1BPIleVt9dV1Kpm80Eec+fO75P5SzbFlQMfX5VgS8+w9t9gpgSWU9wiV8jYUXTtjnSJTa5HQvyqhFP3vlCQXVgbCVYarrl+Jy6ty2Y4b7h2Xxi29swvE1ixNFuYFwEheoLxjt0zGBtf+D50i2eLWE9vE+0bfKmK1hxQWojll8wITQ6tkXxgzciB/vCI9KqmD6KfYvxXbAv0kNb2V1meEfFi53cxrXWzI1oatahoySsRw04qqRwcX1D7xk5R00G2dxiFM0FkGKIxnBjuciu/Gx8vDTKap0Y5YFYx50c0QZs2MwMk2UsDO9BFqdh5QAOulKgSgUFBcUR1T+wOnAi24HeaIvqKGslVGwKhc/K/xhIkSoPnCRhnNHn7PtMVNrA/QUMeF4U+3Hhd6PbxXfW1sAYuY3JyCUg/B48F0yjlA/Qvm9ONrL9iuG637w83zLuZklwzAtlRSH9p9HlP1VTmDV7q7RDKgxaoJbrZXuoq0XMtadejwuQAWpOviYnHwy4tSUTJCpIg0kZR6j/w9oqgEVsCkBhZd0Odc5BRtKTr1aVi/y9dUWVqTRavFEuKwRx9icW5yKZmBr52bc9Xxgzb5qF4d2nrD/eWJYwDqveTK+dkmpbfD7SAjtdsAsKBh1U4PybdI1/uqnsuyk5LOxFR2ToukW5yDtmwo3/JidjMLztBK1bvvZSUe0agNzfN81Iq/tmEzJOl2xbBC/il5tLdJ8cnLAh9naN2VrU9mI3e+z2F/WGYejJhdnlPWV2lxlen4LYCiM+khOOGXTozKmuygk+Z5qrlmq65TfAyiKZ4T83l+l5GdsWNKvm3jg9LePbbEd2iHh+T5Xe/8Sw6sHMwvBqx8CIDZ+SyoMbtjpBAgTiYlTi4PGAGx+QYZtgUdHy9RfSyi7dUpEWN1g3SWRLfVBa28tmZ2lKJvrfuGG4Sh95crhp4QMLw9sWhpGCGWikB+L22ZWCTpmcorOlRXqNjI2xBguFB8xR7d+LIgE0q4Or39gk7L/k7bkAFrYhqO89d1pabRZ2Vof2Y8KAecOyvPJ8WBhe44IlpF9Kq4AbFH6ehHfReIfmjUspN3v2oKN2A4DVGgwJNGa4US+LjpOwohuHPVq9t6Li2OfUrUJrhqoUtqQVzeYum52hS2dlAmVrYfJutWpHW6HZA6lAiRv4DZ9ZWaCvv8QTVAxvBIJ1YGwl8qzaPKtmLbB7whESXtxQzTNVwoC1XcTLffU13JTYv9OesqSep5RXradWawPEFmlCsQuC6tmcR0fK2t8m1zuRavmWw9L0F0dnxtxvqJ2gcAHLOPesL6nYGl7AHScj60q/QAGThf8k4S1xRxuGNwpxRqUMQlCq9kq+ouLPkc/LOjVw8VjQ/ntluejAJBD0cy5aVGJkbb1jVpouPTJDJ07UhxbbmPyP/H1wbx+Q0Dbqe98+M0NvmK6/Dow15489PWxlexaGl6Wpu+j3ecMxaNcCy/+Hh7n0njm1uFbXpUdcjVRF5BjDdR+5O8GbpQW/7cQ+7aomzOpf+cSwympjYXgTLQDSGzWwoIjhvGkuvVvGtefK+3GaM+XoyfzJZXn68cbSmDPYeG/shKALLiYAr3piiLs/MrwskJEGHrnIWKdGkTzWqoMU52MjsyseH25a0YO9mW4/qV9VO+kI1qGvkha3XdkhS/fC6xE3wdcWbC3y+kPTqmwPS1pBiggQf2IJChb30e1jJ0tgYPjSSX3aaZOoYnqvHBB+u7PSC9uTxEpH3Q78eKFxnGUMgWt87ASHLpiRVsUDQSaiIIjNsSH3N14qNi0RhPyudJVvlzHuQs1ZagwEf/2bIWXRG5ukeb0xPHuax7sGXgbRksBdfc0Ul9443VWWMOhGXihc+C/pGn9/HZZ9Si0bvGGA+MKJ+puGwZJf8dgwrdi935JXk+1XeTbgZdhiLIhl4Q6fJ+NYtMOB2zoYMF0TbW/ukxb2ey8XlTvbrs0M4ucbl+S0m7XDimM/o5dGlCByPGR+MOAJq5gJsETx/qmTUmriCcUCsLhBK30wqYXcZyz73COhevrVatudB7DMhJzna+dntT/37nVFuvrJPM8q92DMm6yTK9p35EACBzKykGaJJnOvlW4xaozRwyrojvL4OORC/3pbLbkCm1+vbwHTyPZA+B5/vzBL756d1VobRp71F54v0I3L8yo/nCX+8LLL3ULGSiLCbDA6baCVK9rhnCiBxe4Gx01IKXDCCCacVuyuSlhLqkTw0e1lXymIDXCxFHT9opxaH9YRJF2gyAB9lqvMbWRxMFtei1Z33IiWOIgb4f42OkNiAghN6MIW+qOQAe1tkBGFSSLM8G7QdFkxe4349mMLsqooX0cwIXXNU3kVS7P0rtsc+2UiUbeMsB7tUm/xPFfUelmNd2v9qrArPEoGZ6hiBaFAgDUFvOh3heeZ6MqBLUlQGPD4zjL9RsL65KsVemFPNdAwjsHk6vk5unRWWrvFLKqtrnlqmH6zI5GF9B1fLnItgukHyli53ViHnIn+ydIyAj6U/qEUcLe0bvg/pBrihsZ1aVFr0YqZX0zqTKlXE6EJHQoTTLbOgVsKC4edDTBLvFw+xkwu0hdHuqm6falRXHCttLYnaK4T4/3Rb+q6Z/KqTJHdXu3neFHBm5i4FiCgFC8tqtKiOnRotlaMD+s5kBLWe1k1iho2yO+wak+Fnnm1qkoQkeSwYRh1vtWWFUh+NWLR+BRdOTejGvDp5j7D6n9hVYHueKGoXHaWzg0Mboe/XOwGBaQKwso1lldgTWfVrTF2NED/ZVhngA2r2y9vGacW44oDrLggb1Q6UcWr1QWXVC2vJz+LJKhV5fJiNhg39HR6cW+tnhdLOibxgEt/yayM2sFet4geVUV3rS3RLc8VDki8YOncErYbEXhdZ73xhTFTi8SGLYUDa3bhLh+SxQ4HQt1PSNfWRhsN2Me6svjxhXrx/ZC87SqjHrgGbDNr2jCKYUtf0bYHa8ZXSGjRl0tXUFhw6/MFlZHFttYK0F6U8IaFtCtgbhZDAmrM6G4YVvbUnhut+fzRDQMwAXXGlBT92VEZ+pMj0tqVRuj3jNj2K9JFXjvESRcG4DM69rlJj3Nj6Q+NiIGDPB+eAfpQw0VGbrJu7S3c9f/3com+uLqorO7IwYwtb3xU0Q3wJsLWa+SThlk5ggti7/MlrBfPTNN509IqxtURxOT3b6rtZ4SuF6OboCf92ggZ8Vge+7Ve43ZoFBl7vdejPWzv9QVrzGicjl5VaHmjm4+MmBudLr4qof2phHc774vbTPZQTMoBbcIb1O3ew/rhTxDPov0sLO1bDk+rtVrdXGhMnv1KQvuNl0r0EwktL/20lb1xisDciEFtlsxR85o9Ws/60Vww34RukKdNTtEfSEv7xhmuajure7EwEQVL+wMZ1/5oY4lbsPo/eetHnMawyRdeHOBtB6bw+xpREau8FI/+IwUzyFhnPn5CreLozKkpOmWyq21lkY2F/YCwtcjPpJVFO1cuItCMeaV+agJoLbsq6ph3NMgHge3uFauKGQ92wEm6oqDlzCmqRDBFp0pY50oXWXfzM5TmAViUBv58c4me2lk9YGNtFi2pQj99wBi73GYdqxp4mSlVEAV5txK6mzTNQLYW4lb0o0JK5knyHtup6K7NYv35iXoO9MPbajsbAFi2sqFlZV0/wxgvo9Y5Ksvb1uruO+7RUvk/PQ0veASUKAvE3kEnT4J1TalOkFMyju8OkFjagXXF/rao7Hl8Ry0PGsUCaHHDvBrV4KUaAEZy6t2w1lLTWrcblYSo0lIvRZf1RIxU/2GIW1EMgNY2cH9Rz4teVEcNNO9HVa1viQJAC/Kf4Uptdhix65q9VVVZtEJa1WckuPgba7IMq8VrWVXwNnQ10ompZu/pBoAvbF5zy7/dIeeh0rgq3JNst4MLC4s8h5ykFzvOv3dORm04VvY8NcOLGyxkuV5NhE4YsKTIp96cr5X84YYiBWxGhp0D10m3mJd0IpcC9FLT2prKb/Zsu83eCEMjQoCMSavdpUH6D3n0Td3vadUEsKKw4e51JZUFVa1XF1XrPx4VRihU2FaoAYtWrFvl/Y5izf0dqtQ2JAPsjG1HLuR/Qi8NuMueSWvcySSNppZdVOjbntvd8Hq0fzsSgPqdtUV1Y+lCL6pC36JwmVVWxlzHgI6aeu6+WCK7PfVzefcCqw1LDGR1XR/9xruRxcOO5Q/yfLgXB50QUaWqHO1uZb1hiYHVvQ362MzQtNFvq8UJQS1vmMwRX25GZqfzfXm/jtWHpYOyrq6HJl1jY1lXNjKZPI0v6TUb0ZySKMlR70bWH5YOWt0boYctXGZPA0zjca8TYJQIEsu2Oz7micltTf1AHn2E1YglcpF6p/SvhYHR0G8rbDmmgmfNL+Lvh3nkpQrib+SjIdYmlghlSOmd59tqep3gyDEMoJ8fqzV5JWOO1dJ9uYb1iSVCd/ka6J2mxfWj855J8J2IRgkvzGCQ25L6rnx0N6sVSwTu8t1K38LBZi3OtQFvkJm2dqPYAf+fedW5Rh55nLWLxSK4jys98zEfE9JyelHBGzRHM4ir4DX7O5UXw+6QuEQ+XMFaxmJBVkC/oGftdDFgCGm8l3MQyxvUR/cCWN8DTlx6t7NNnuCL5ONlrGssBmUZ9Ar6pRnbeiFd5VATXY5Bc+4ZGgRajnDpXc4meZL/SB59mHWOxYCr/DD0CXoVVCctc9L0tY5lMNvdB4LY3St2ZnY6F/MkFktIcO+GHkGfQkKro+/GeDORHmlqJPED8f4YuCDyfa+krhIV+gDxOjCLngxDb6A/0KNWeqYZ6kXKkOmloqCjke7otu9xbkvqrlRenCePPMg6yeJDQx+U+nIu9KaZToXQSx09Dy2OIZ/cpvVtd2JRxLBajqJvE2XVPudl1lCWMeRl6Af0pJ6A4YXQOaOxa9DXhCkJ1Em80BmVdE7cAa/JbU3dk93qnC5dIqRUcj0wC+QF6EN2m3M69KOJfoU2ICGsbuD2OaLv87vGPN7s+T7/Fi2O+blvd6zte3gpShUnVc+pprwL5dEL5LEc63FiJC8R+LFTET/I7HAekPBWfILWClZPA1Y/oIcxioHgbQdwu8cmwPUNcOO+0ucNlgaqZ0k/43WeQ2fKY8cQN3bvJUGx/HOiSg/JR79K73WWpobFHk3IwhwzMafTzur6hjeo9Q0Lsi6ko99X+PEAqhkvWx7w5kqrPEcePULeJsnjA/KW9jmAsUQ9zbRfUF+7Vx7ZIW8vS+u6GjsZOEXVEN2va9tqNcMEwKbhNbI/b7M3FhqP/bzXyHsa49jofZ7b7ft8wOvkhc5niuIZ+fhZH4ONSZhFwkAz+R66AJi4D7pea3uZKTC8uu1dW4Hp955CvrYV0KT53DBgcudW/+dBJzZsF1uaBDdoQoZnWjfcEJDqABsWZAoBbKuBgAJY8WbQMphmIdZto+QH1rCTTKaANdJh0g1x0v1a33buc1AY2wHl5/V+wG31eYKhjSXAYWANA2xQFzmQDtnen9dPXOs39m0Gmo7L7Qd4Bre7ADaZBRUkNzlMPGw15vUDmK719QNp0BjZJGTNXsducvQQBy2GN+0SB3GXPcMDlxXLOxakOjPRJuLcdjDrWmMbIhIIn014g1pfk+CaWMeN3G3W2XTbBsA6bq9OrOsH/qDg9rrFjivAQUEOCm6Q+N04vGH37tW1xn4BphDxbSeASlKM7EUAb5jY1zTUNqysZwJeE9ZX1xrrQOrHuppe02WJHl7T7nMYgMN+TyMutBsC0DAA+/m/ZsfCgBsU1LCTVEkcEGxYHt1WrGEB9guuZxhczyS8Nia0/AJMGjC3e9zuxJiIaW0ochKhDlNCZ8ud1gXXqrgBwQszeaULcBhYW01QkeFJKna3OwewSRfaJLjWrK4NyxsFwGM91gW3Hcg6QPK6r12IbcfAcQLXmuX1Y32DQt0OYB132NSSkB8Xm6HtPMRBAQ4KalBwjc8TdKKqiHxA2uxvofk6XXDbASk4ju04yF5IgG1BHMTVDwW8a/ECBAE4qBUmjb9bgdsOWhuTWUmOaU25yyagDjsAhAE3ErdZx302DTAFsLxE/iaqiMzkMQvLCp1EsDsNcRTgRl5VFDXApqENG/NSk+/HYgdmEzWzJqxpLMC16TabBJh8WOEglpZCxrwMa3xiXtOWOOyxSHTDtQRmWIDJpxVuBXG7Y35h5EmqeFtlk5Y37PNMeRORWV4TAFNAKxzGXfYDq6l4l8WM0nqWIDZlbSMD16TbHBZgXStMms/16y7ruMyRu0kMtxWQTbrDkXbT6GQbHNK0wroQm3SXw5xwwRDGzn22EcPGrg2OTYCJ9Fvs+LXOupY3CKwi6ovFkBsDybM8AESiC66lCyEMPNekZW3nKgdxlxnK+EAdpWWOBbi24A0CMAWAOAjgOjDrnnSesIpOkU1AHRW01gZ61/IFEgafHwRiU5DybgjdAbhnEehYgWsb3qAAkwGITVjcMBeArXA0SmzKrbaVCWV1QHcjvGhRQmzC4oqYKSqDH69YuePX3434AggL4Hs+gdO1uDq9rVg6O9B5HQK7owO326ELJSy9zgsJp4jrhWKJzBLGHtpOwRvGCoeF01Rsy9Y2/nFx1JNKHRnE3RhcKBHR6z1DILK17R3guxLaOMBrGuIgQNqYrGLpjdg49gO4G8OLIwyeWBHRxWHY4wuA14XfuevgNQmfaVeZXenkDgixvbZuF10MEcHFYAvKFrtrBmO3Sy+a6PBFY8h7D5iu857cHrnQgi80S9KuodujF4ItI0vPD7huwi4UQ82QMrw9fGEZcAaT4WUFSfxgwLBZlP8VYACQDuVL6nq2ngAAAABJRU5ErkJggg=="},"0acb":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],n=t;l.default=n},"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function n(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var n=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(n){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),i="";if(n.length>1){var r=n.pop();i=n.join("---COMMA---"),0===r.indexOf(" at ")?i+=r:i+="---COMMA---"+r}else i=n[0];return i}Object.defineProperty(l,"__esModule",{value:!0}),l.default=n},"0fdf":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3klEQVRYR+3UMUoDQQBG4W+9QapUnsAQSG0IgoUXSOvpcgw7Y2EjhDQWFkqagIGAKMFSBlIEkuzOzAZiMdsu/7y3j92tnPmqzsxXBEqBUqAU+PcFehi3+Ft+Y4LPY2fUFbjABy5bCIRpgHdzBMJmcQKBGQa5AleYopNZYYlrvOcKhF2uxGoLf6uTj/0KUiXWGOK1qVysQEqJL4wwb4KH+ykCMRI/uMFLDDxHoE5ig1s8x8JzBQ5J/OIOjynwNgJh28cTwpPf4yEV3lYgh7e3SX0JTwLdPaQIlAKlQCnwB5HGHyGXqnGeAAAAAElFTkSuQmCC"},"131d":function(e,l,a){"use strict";(function(e,a){Object.defineProperty(l,"__esModule",{value:!0}),l.ajax=void 0;var t=function(l){l=l||{},l.url=l.url||"",l.data=JSON.stringify(l.data)||{},l.method=l.method||"POST",l.header=l.header||{"Content-Type":"application/json"},l.success=l.success||function(){},l.fail=l.fail||function(){},console.log(e(l.data," at request\\request.js:12")),a.request({url:"http://47.104.203.20:8084"+l.url,data:l.data,method:l.method,header:l.header,dataType:"json",success:function(e){l.success(e)},fail:function(e){l.fail(e),a.showToast({title:"请稍后重试",icon:"none"})}})};l.ajax=t}).call(this,a("0de9")["default"],a("6e42")["default"])},"133f":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAIAAAC3ytZVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCQzJCRTM5MUQ0MjExRUE4RjRDOUFCNEJFRDdGMzg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCQzJCRTNBMUQ0MjExRUE4RjRDOUFCNEJFRDdGMzg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUJDMkJFMzcxRDQyMTFFQThGNEM5QUI0QkVEN0YzODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUJDMkJFMzgxRDQyMTFFQThGNEM5QUI0QkVEN0YzODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz77TgWXAAAFiElEQVR42uyca0xcRRTH/wPLUmi3gNBCVwjYmiAbMFhtiDYSoUoNbW2sH9Son3x8MMaaaIytVtPExFb9YPSLMbEffTQRmgaaVEtjCcZHIWJ4tGBtebW0UN6028KW8QzL7nIvl8de9i5se05uNsvszDnn/mbmzJw7N4inv5gAi0+iGAHjYByMg3EwDsbBOBgH42AcjINxMA7GwTgYB+NgHIyDhXEwDsaxULGFHrDAfU6kJSA+1rjChMSIG//14NLArEqcSdiwFo44pc1Qrt/E5SGcvaS0LVMc5HnJ/Xi2QCTGL6h+21V8/7s8fV5TuGk9nn9YZKUsSMPgdfzwh/ylAaFiIkJ1CkfduHureDQ76IY/N+Kbk5I6mTS8VixKcoPWUN2CL4/LkAyTkMWOV4vMsCCh+3/jCSGi1KcJFiSF2XilSCyjybJrE7bmGZRXNaNvVF9otyEzGfmZ8N/BYzlIcYjcdE18qW9Hex/Gb+mbJ6/CFpe+8Mk89A6jvHYZ4KBB8eIjxp2TnYb3f5KjboMwk5mC97aJtaunCqazoBh5sFJ29GFmSKDg+vEzxrZe2ix6R2RNy5JOFlc63izR+NfQFfiefhf2bhexNnVfmkuivRcflUvD6Phhmey4quroWpGePdsF6QzY6tS03V0iXOlLhyMjGXt3iOhpOn78U+4vlzWt0wbIOrxdKtR6qb05+ugZMtB5qFr2jUwOC2190vBOqSBtfiEr+49IsugvIU8Ur+SlwJG0Cvt2inh7oOTkGRz+S/XqVydk88VA+YNZeP1xoR/i0mB1HLiG31p9LLRLOGnYmBUoabqorJAtskh2/bIyVnlFvoUVx4oYfPCUSHEESuo78HWV9I5wjwcHKmVXf+DX4hy8sHn+4O+ZMGBBQm1Jg19I84EKSVa8847sknW/rHEo38jD8IVSWhTvWRP4c8yDujZZqF1oa/6VzxUEEOx6CF0D+LU5aFtFLtVWp7lgvaaErLucwu67G/KNPPz8mAwLDoHpc8S7dr5cOH/nr7SbsRY/o9V0ynO1Egh2u2pyslDGcVu2MomjuiXocdgzjNZuM7aoFbUNg4dmcUh09qP2QnCNyuqkueyIWh2pC+7eTl9QHppI7MwvtN+eku6xhVY+240Tjea3A5TmtSx4ZJFXh06ZzOfM4pC4Mqy20rSmzCvdg/i0YjLjlCZtUdvPjknSM6+QP+QV+WbO1qJ2pbRH3lc2j5e1bdhzWA66sahnEhL915Qe0jaHULJD/uh27uFK4WjHJXDuMt76Tm7JQbFLbEgNJKmUif7TgaN/y6Yu452VCXPDN/DJUZmbgZ0PiLwMxET7f8H5HlQ1yaoz8O7NTJuzLdJFsjvuwfEGuiSlm7QjjLNjyK3WgrHxKV9D9qxqsgMaO+mS9hhQNpwQpyJF74h62hgSW7ZQeUky7FaXZu8T0geZgUxH4OY4OvvQpbOwaHO2UHlpHYE5zIXcFh8sMA7GwTgYB+NgHIzjDsGh20dJeWfjEMtsdNjCYGN1nDpqcSaKGJ81QUmHB6M39DVTHNiRLxwrYLdpHmF0D8q6NpUQRTwOSjpL89W5pG6SCBi8qeJ9uUVXrI64U0RaIirrpdVELJ8sG7OgYyF8x7QwIjJb9CAlNMQiO3bQpKA5YnjDXiITEwbRdbaA4kwSkTpZyHFb9GTni6l3NHTd7rllHEg9UoUVXX3hG1TC4mcIwop/SZCRjHe3ibuTrHL63BUcrJAzX6RZjpMlOkq95WAdC5J7U9XLDZERO7KdSE2wPOZlrwOtNRGAg3YN4ZE4eyTg4Jzl9hELVhbhWxctTv5CeYJj4b7De+wShtzUAhO2SHGUYwfjYByMg3EwDsbBOBgH42AcjIOFcTAOxsE4GAfjYByMI1zyvwADAB+0/jiGSV4MAAAAAElFTkSuQmCC"},"209e":function(e,l,a){"use strict";(function(l,a){var t={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#53bb6e","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},n=function(e){for(var l=arguments.length,a=new Array(l>1?l-1:0),t=1;t<l;t++)a[t-1]=arguments[t];if(null==e)throw new TypeError("Cannot convert undefined or null to object");if(!a||a.length<=0)return e;function n(e,l){for(var a in l)e[a]=e[a]&&"[object Object]"===e[a].toString()?n(e[a],l[a]):e[a]=l[a];return e}return a.forEach(function(l){e=n(e,l)}),e},i={toFixed:function(e,l){return l=l||2,this.isFloat(e)&&(e=e.toFixed(l)),e},isFloat:function(e){return e%1!==0},approximatelyEqual:function(e,l){return Math.abs(e-l)<1e-10},isSameSign:function(e,l){return Math.abs(e)===e&&Math.abs(l)===l||Math.abs(e)!==e&&Math.abs(l)!==l},isSameXCoordinateArea:function(e,l){return this.isSameSign(e.x,l.x)},isCollision:function(e,l){e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,l.end={},l.end.x=l.start.x+l.width,l.end.y=l.start.y-l.height;var a=l.start.x>e.end.x||l.end.x<e.start.x||l.end.y>e.start.y||l.start.y<e.end.y;return!a}};function r(e,l){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=e.replace(a,function(e,l,a,t){return l+l+a+a+t+t}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(n[1],16),r=parseInt(n[2],16),o=parseInt(n[3],16);return"rgba("+i+","+r+","+o+","+l+")"}function o(e,l,a){if(isNaN(e))throw new Error("[uCharts] unvalid series data!");a=a||10,l=l||"upper";var t=1;while(a<1)a*=10,t*=10;e="upper"===l?Math.ceil(e*t):Math.floor(e*t);while(e%a!==0)"upper"===l?e++:e--;return e/t}function u(e,l,a,t){for(var n=[],i=0;i<e.length;i++){for(var r={data:[],name:l[i],color:a[i]},o=0,u=t.length;o<u;o++)if(o<e[i])r.data.push(null);else{for(var v=0,s=0;s<e[i];s++)v+=t[o-s][1];r.data.push(+(v/e[i]).toFixed(3))}n.push(r)}return n}function v(e,l,a,t,n){var i=n.width-n.area[1]-n.area[3],r=a.eachSpacing*(n.chartData.xAxisData.xAxisPoints.length-1),o=l;return l>=0?(o=0,e.event.trigger("scrollLeft")):Math.abs(l)>=r-i&&(o=i-r,e.event.trigger("scrollRight")),o}function s(e,l,a){function t(e){while(e<0)e+=2*Math.PI;while(e>2*Math.PI)e-=2*Math.PI;return e}return e=t(e),l=t(l),a=t(a),l>a&&(a+=2*Math.PI,e<l&&(e+=2*Math.PI)),e>=l&&e<=a}function b(e,l,a){var t=e,n=a-l,i=t+(a-n-t)/Math.sqrt(2);i*=-1;var r=(a-n)*(Math.sqrt(2)-1)-(a-n-t)/Math.sqrt(2);return{transX:i,transY:r}}function c(e,l){function a(e,l){return!(!e[l-1]||!e[l+1])&&(e[l].y>=Math.max(e[l-1].y,e[l+1].y)||e[l].y<=Math.min(e[l-1].y,e[l+1].y))}var t=.2,n=.2,i=null,r=null,o=null,u=null;if(l<1?(i=e[0].x+(e[1].x-e[0].x)*t,r=e[0].y+(e[1].y-e[0].y)*t):(i=e[l].x+(e[l+1].x-e[l-1].x)*t,r=e[l].y+(e[l+1].y-e[l-1].y)*t),l>e.length-3){var v=e.length-1;o=e[v].x-(e[v].x-e[v-1].x)*n,u=e[v].y-(e[v].y-e[v-1].y)*n}else o=e[l+1].x-(e[l+2].x-e[l].x)*n,u=e[l+1].y-(e[l+2].y-e[l].y)*n;return a(e,l+1)&&(u=e[l+1].y),a(e,l)&&(r=e[l].y),(r>=Math.max(e[l].y,e[l+1].y)||r<=Math.min(e[l].y,e[l+1].y))&&(r=e[l].y),(u>=Math.max(e[l].y,e[l+1].y)||u<=Math.min(e[l].y,e[l+1].y))&&(u=e[l+1].y),{ctrA:{x:i,y:r},ctrB:{x:o,y:u}}}function h(e,l,a){return{x:a.x+e,y:a.y-l}}function p(e,l){if(l)while(i.isCollision(e,l))e.start.x>0?e.start.y--:e.start.x<0?e.start.y++:e.start.y>0?e.start.y++:e.start.y--;return e}function f(e,l,a){var t=0;return e.map(function(e){if(e.color||(e.color=a.colors[t],t=(t+1)%a.colors.length),e.index||(e.index=0),e.type||(e.type=l.type),"undefined"==typeof e.show&&(e.show=!0),e.type||(e.type=l.type),e.pointShape||(e.pointShape="circle"),!e.legendShape)switch(e.type){case"line":e.legendShape="line";break;case"column":e.legendShape="rect";break;case"area":e.legendShape="triangle";break;default:e.legendShape="circle"}return e})}function d(e,l){var a=0,t=l-e;return a=t>=1e4?1e3:t>=1e3?100:t>=100?10:t>=10?5:t>=1?1:t>=.1?.1:t>=.01?.01:t>=.001?.001:t>=1e-4?1e-4:t>=1e-5?1e-5:1e-6,{minRange:o(e,"lower",a),maxRange:o(l,"upper",a)}}function g(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.fontSize;e=String(e);e=e.split("");for(var a=0,n=0;n<e.length;n++){var i=e[n];/[a-zA-Z]/.test(i)?a+=7:/[0-9]/.test(i)?a+=5.5:/\./.test(i)?a+=2.7:/-/.test(i)?a+=3.25:/[\u4e00-\u9fa5]/.test(i)?a+=10:/\(|\)/.test(i)?a+=3.73:/\s/.test(i)?a+=2.5:/%/.test(i)?a+=8:a+=10}return a*l/10}function y(e){return e.reduce(function(e,l){return(e.data?e.data:e).concat(l.data)},[])}function x(e,l){for(var a=new Array(l),t=0;t<a.length;t++)a[t]=0;for(var n=0;n<e.length;n++)for(t=0;t<a.length;t++)a[t]+=e[n].data[t];return e.reduce(function(e,l){return(e.data?e.data:e).concat(l.data).concat(a)},[])}function A(e,l,a){var t,n;return e.clientX?l.rotate?(n=l.height-e.clientX*l.pixelRatio,t=(e.pageY-a.currentTarget.offsetTop-l.height/l.pixelRatio/2*(l.pixelRatio-1))*l.pixelRatio):(t=e.clientX*l.pixelRatio,n=(e.pageY-a.currentTarget.offsetTop-l.height/l.pixelRatio/2*(l.pixelRatio-1))*l.pixelRatio):l.rotate?(n=l.height-e.x*l.pixelRatio,t=e.y*l.pixelRatio):(t=e.x*l.pixelRatio,n=e.y*l.pixelRatio),{x:t,y:n}}function m(e,l){for(var a=[],t=0;t<e.length;t++){var n=e[t];if(null!==n.data[l]&&"undefined"!==typeof n.data[l]&&n.show){var i={};i.color=n.color,i.type=n.type,i.style=n.style,i.pointShape=n.pointShape,i.disableLegend=n.disableLegend,i.name=n.name,i.show=n.show,i.data=n.format?n.format(n.data[l]):n.data[l],a.push(i)}}return a}function w(e){var l=e.map(function(e){return g(e)});return Math.max.apply(null,l)}function S(e){for(var l=2*Math.PI/e,a=[],t=0;t<e;t++)a.push(l*t);return a.map(function(e){return-1*e+Math.PI/2})}function M(e,l,a,t){for(var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=e.map(function(e){var l=[];return l=t||e.data,{text:n.format?n.format(e,l[a]):e.name+": "+e.data,color:e.color}}),r=[],o={x:0,y:0},u=0;u<l.length;u++){var v=l[u];"undefined"!==typeof v[a]&&null!==v[a]&&r.push(v[a])}for(var s=0;s<r.length;s++){var b=r[s];o.x=Math.round(b.x),o.y+=b.y}return o.y/=r.length,{textList:i,offset:o}}function D(e,l,a,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=e.map(function(e){return{text:n.format?n.format(e,t[a]):e.name+": "+e.data,color:e.color,disableLegend:!!e.disableLegend}});i=i.filter(function(e){if(!0!==e.disableLegend)return e});for(var r=[],o={x:0,y:0},u=0;u<l.length;u++){var v=l[u];"undefined"!==typeof v[a]&&null!==v[a]&&r.push(v[a])}for(var s=0;s<r.length;s++){var b=r[s];o.x=Math.round(b.x),o.y+=b.y}return o.y/=r.length,{textList:i,offset:o}}function T(e,l,a,t,n,i){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var r=i.color.upFill,o=i.color.downFill,u=[r,r,o,r],v=[],s={text:n[t],color:null};v.push(s),l.map(function(l){0==t&&l.data[1]-l.data[0]<0?u[1]=o:(l.data[0]<e[t-1][1]&&(u[0]=o),l.data[1]<l.data[0]&&(u[1]=o),l.data[2]>e[t-1][1]&&(u[2]=r),l.data[3]<e[t-1][1]&&(u[3]=o));var a={text:"开盘："+l.data[0],color:u[0]},n={text:"收盘："+l.data[1],color:u[1]},i={text:"最低："+l.data[2],color:u[2]},s={text:"最高："+l.data[3],color:u[3]};v.push(a,n,i,s)});for(var b=[],c={x:0,y:0},h=0;h<a.length;h++){var p=a[h];"undefined"!==typeof p[t]&&null!==p[t]&&b.push(p[t])}return c.x=Math.round(b[0][0].x),{textList:v,offset:c}}function O(e){for(var l=[],a=0;a<e.length;a++)1==e[a].show&&l.push(e[a]);return l}function R(e,l,a,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=-1,r=0,o=[];if(l[0])for(var u=0;u<l[0].length;u++)o.push(l[0][u].x);return"line"!=a.type&&"area"!=a.type||"justify"!=a.xAxis.boundaryGap||(r=a.chartData.eachSpacing/2),a.categories||(r=0),k(e,a,t)&&o.forEach(function(l,a){e.x+n+r>l&&(i=a)}),i}function I(e,l,a){var t=-1;if(E(e,l.area)){for(var n=l.points,i=-1,r=0,o=n.length;r<o;r++)for(var u=n[r],v=0;v<u.length;v++){i+=1;var s=u[v]["area"];if(e.x>s[0]&&e.x<s[2]&&e.y>s[1]&&e.y<s[3]){t=i;break}}return t}return t}function E(e,l){return e.x>l.start.x&&e.x<l.end.x&&e.y>l.start.y&&e.y<l.end.y}function k(e,l,a){return e.x<=l.width-l.area[1]+10&&e.x>=l.area[3]-10&&e.y>=l.area[0]&&e.y<=l.height-l.area[2]}function P(e,l,a){var t=2*Math.PI/a,n=-1;if(B(e,l.center,l.radius)){var i=function(e){return e<0&&(e+=2*Math.PI),e>2*Math.PI&&(e-=2*Math.PI),e},r=Math.atan2(l.center.y-e.y,e.x-l.center.x);r*=-1,r<0&&(r+=2*Math.PI);var o=l.angleList.map(function(e){return e=i(-1*e),e});o.forEach(function(e,l){var a=i(e-t/2),o=i(e+t/2);o<a&&(o+=2*Math.PI),(r>=a&&r<=o||r+2*Math.PI>=a&&r+2*Math.PI<=o)&&(n=l)})}return n}function C(e,l){for(var a=-1,t=0,n=l.series.length;t<n;t++){var i=l.series[t];if(e.x>i.funnelArea[0]&&e.x<i.funnelArea[2]&&e.y>i.funnelArea[1]&&e.y<i.funnelArea[3]){a=t;break}}return a}function L(e,l){for(var a=-1,t=0,n=l.length;t<n;t++){var i=l[t];if(e.x>i.area[0]&&e.x<i.area[2]&&e.y>i.area[1]&&e.y<i.area[3]){a=t;break}}return a}function j(e,l){for(var a=-1,t=l.chartData.mapData,n=l.series,i=_e(e.y,e.x,t.bounds,t.scale,t.xoffset,t.yoffset),r=[i.x,i.y],o=0,u=n.length;o<u;o++){var v=n[o].geometry.coordinates;if(Ge(r,v)){a=o;break}}return a}function F(e,l){var a=-1;if(B(e,l.center,l.radius)){var t=Math.atan2(l.center.y-e.y,e.x-l.center.x);t=-t;for(var n=0,i=l.series.length;n<i;n++){var r=l.series[n];if(s(t,r._start_,r._start_+2*r._proportion_*Math.PI)){a=n;break}}}return a}function B(e,l,a){return Math.pow(e.x-l.x,2)+Math.pow(e.y-l.y,2)<=Math.pow(a,2)}function N(e){var l=[],a=[];return e.forEach(function(e,t){null!==e?a.push(e):(a.length&&l.push(a),a=[])}),a.length&&l.push(a),l}function _(e,l,a,t){var n={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===l.legend.show)return t.legendData=n,n;var i=l.legend.padding,r=l.legend.margin,o=l.legend.fontSize,u=15*l.pixelRatio,v=5*l.pixelRatio,s=Math.max(l.legend.lineHeight*l.pixelRatio,o);if("top"==l.legend.position||"bottom"==l.legend.position){for(var b=[],c=0,h=[],p=[],f=0;f<e.length;f++){var d=e[f],y=u+v+g(d.name||"undefined",o)+l.legend.itemGap;c+y>l.width-l.padding[1]-l.padding[3]?(b.push(p),h.push(c-l.legend.itemGap),c=y,p=[d]):(c+=y,p.push(d))}if(p.length){b.push(p),h.push(c-l.legend.itemGap),n.widthArr=h;var x=Math.max.apply(null,h);switch(l.legend.float){case"left":n.area.start.x=l.padding[3],n.area.end.x=l.padding[3]+2*i;break;case"right":n.area.start.x=l.width-l.padding[1]-x-2*i,n.area.end.x=l.width-l.padding[1];break;default:n.area.start.x=(l.width-x)/2-i,n.area.end.x=(l.width+x)/2+i}n.area.width=x+2*i,n.area.wholeWidth=x+2*i,n.area.height=b.length*s+2*i,n.area.wholeHeight=b.length*s+2*i+2*r,n.points=b}}else{var A=e.length,m=l.height-l.padding[0]-l.padding[2]-2*r-2*i,w=Math.min(Math.floor(m/s),A);switch(n.area.height=w*s+2*i,n.area.wholeHeight=w*s+2*i,l.legend.float){case"top":n.area.start.y=l.padding[0]+r,n.area.end.y=l.padding[0]+r+n.area.height;break;case"bottom":n.area.start.y=l.height-l.padding[2]-r-n.area.height,n.area.end.y=l.height-l.padding[2]-r;break;default:n.area.start.y=(l.height-n.area.height)/2,n.area.end.y=(l.height+n.area.height)/2}for(var S=A%w===0?A/w:Math.floor(A/w+1),M=[],D=0;D<S;D++){var T=e.slice(D*w,D*w+w);M.push(T)}if(n.points=M,M.length){for(var O=0;O<M.length;O++){for(var R=M[O],I=0,E=0;E<R.length;E++){var k=u+v+g(R[E].name||"undefined",o)+l.legend.itemGap;k>I&&(I=k)}n.widthArr.push(I),n.heightArr.push(R.length*s+2*i)}for(var P=0,C=0;C<n.widthArr.length;C++)P+=n.widthArr[C];n.area.width=P-l.legend.itemGap+2*i,n.area.wholeWidth=n.area.width+i}}switch(l.legend.position){case"top":n.area.start.y=l.padding[0]+r,n.area.end.y=l.padding[0]+r+n.area.height;break;case"bottom":n.area.start.y=l.height-l.padding[2]-n.area.height-r,n.area.end.y=l.height-l.padding[2]-r;break;case"left":n.area.start.x=l.padding[3],n.area.end.x=l.padding[3]+n.area.width;break;case"right":n.area.start.x=l.width-l.padding[1]-n.area.width,n.area.end.x=l.width-l.padding[1];break}return t.legendData=n,n}function U(e,l,a,t){var n={angle:0,xAxisHeight:a.xAxisHeight},i=e.map(function(e){return g(e,l.xAxis.fontSize||a.fontSize)}),r=Math.max.apply(this,i);return 1==l.xAxis.rotateLabel&&r+2*a.xAxisTextPadding>t&&(n.angle=45*Math.PI/180,n.xAxisHeight=2*a.xAxisTextPadding+r*Math.sin(n.angle)),n}function G(e,l,a){var t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,n=y(e),i=[];n=n.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),n.map(function(e){"object"===typeof e?e.constructor==Array?"candle"==l.type?e.map(function(e){i.push(e)}):i.push(e[0]):i.push(e.value):i.push(e)});var r=0,o=0;if(i.length>0&&(r=Math.min.apply(this,i),o=Math.max.apply(this,i)),t>-1?("number"===typeof l.xAxis.data[t].min&&(r=Math.min(l.xAxis.data[t].min,r)),"number"===typeof l.xAxis.data[t].max&&(o=Math.max(l.xAxis.data[t].max,o))):("number"===typeof l.xAxis.min&&(r=Math.min(l.xAxis.min,r)),"number"===typeof l.xAxis.max&&(o=Math.max(l.xAxis.max,o))),r===o){var u=o||10;o+=u}for(var v=d(r,o),s=v.minRange,b=v.maxRange,c=[],h=(b-s)/l.xAxis.splitNumber,p=0;p<=l.xAxis.splitNumber;p++)c.push(s+h*p);return c}function z(e,l,a){var t={angle:0,xAxisHeight:a.xAxisHeight};t.ranges=G(e,l,a),t.rangesFormat=t.ranges.map(function(e){return e=l.xAxis.format?l.xAxis.format(e):i.toFixed(e,2),e});var n=t.ranges.map(function(e){return e=i.toFixed(e,2),e=l.xAxis.format?l.xAxis.format(Number(e)):e,e});t=Object.assign(t,ee(n,l,a));var r=t.eachSpacing,o=n.map(function(e){return g(e)}),u=Math.max.apply(this,o);return u+2*a.xAxisTextPadding>r&&(t.angle=45*Math.PI/180,t.xAxisHeight=2*a.xAxisTextPadding+u*Math.sin(t.angle)),!0===l.xAxis.disabled&&(t.xAxisHeight=0),t}function H(e,l,a,t,n){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=n.extra.radar||{};r.max=r.max||0;for(var o=Math.max(r.max,Math.max.apply(null,y(t))),u=[],v=function(n){var r=t[n],v={};v.color=r.color,v.legendShape=r.legendShape,v.pointShape=r.pointShape,v.data=[],r.data.forEach(function(t,n){var r={};r.angle=e[n],r.proportion=t/o,r.position=h(a*r.proportion*i*Math.cos(r.angle),a*r.proportion*i*Math.sin(r.angle),l),v.data.push(r)}),u.push(v)},s=0;s<t.length;s++)v(s);return u}function W(e,l){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=0,n=0,i=0;i<e.length;i++){var r=e[i];r.data=null===r.data?0:r.data,t+=r.data}for(var o=0;o<e.length;o++){var u=e[o];u.data=null===u.data?0:u.data,u._proportion_=0===t?1/e.length*a:u.data/t*a,u._radius_=l}for(var v=0;v<e.length;v++){var s=e[v];s._start_=n,n+=2*s._proportion_*Math.PI}return e}function Q(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e=e.sort(function(e,l){return parseInt(l.data)-parseInt(e.data)});for(var t=0;t<e.length;t++)e[t].radius=e[t].data/e[0].data*l*a,e[t]._proportion_=e[t].data/e[0].data;return e.reverse()}function Z(e,l,a,t){for(var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=0,r=0,o=[],u=0;u<e.length;u++){var v=e[u];v.data=null===v.data?0:v.data,i+=v.data,o.push(v.data)}for(var s=Math.min.apply(null,o),b=Math.max.apply(null,o),c=t-a,h=0;h<e.length;h++){var p=e[h];p.data=null===p.data?0:p.data,0===i||"area"==l?(p._proportion_=p.data/i*n,p._rose_proportion_=1/e.length*n):(p._proportion_=p.data/i*n,p._rose_proportion_=p.data/i*n),p._radius_=a+c*((p.data-s)/(b-s))}for(var f=0;f<e.length;f++){var d=e[f];d._start_=r,r+=2*d._rose_proportion_*Math.PI}return e}function Y(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==a&&(a=.999999);for(var t=0;t<e.length;t++){var n=e[t];n.data=null===n.data?0:n.data;var i=void 0;i="circle"==l.type?2:l.endAngle<l.startAngle?2+l.endAngle-l.startAngle:l.startAngle-l.endAngle,n._proportion_=i*n.data*a+l.startAngle,n._proportion_>=2&&(n._proportion_=n._proportion_%2)}return e}function V(e,l,a){for(var t=l-a+1,n=l,i=0;i<e.length;i++)e[i].value=null===e[i].value?0:e[i].value,e[i]._startAngle_=n,e[i]._endAngle_=t*e[i].value+l,e[i]._endAngle_>=2&&(e[i]._endAngle_=e[i]._endAngle_%2),n=e[i]._endAngle_;return e}function J(e,l,a){for(var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=0;n<e.length;n++){var i=e[n];if(i.data=null===i.data?0:i.data,"auto"==a.pointer.color){for(var r=0;r<l.length;r++)if(i.data<=l[r].value){i.color=l[r].color;break}}else i.color=a.pointer.color;var o=a.startAngle-a.endAngle+1;i._endAngle_=o*i.data+a.startAngle,i._oldAngle_=a.oldAngle,a.oldAngle<a.endAngle&&(i._oldAngle_+=2),i.data>=a.oldData?i._proportion_=(i._endAngle_-i._oldAngle_)*t+a.oldAngle:i._proportion_=i._oldAngle_-(i._oldAngle_-i._endAngle_)*t,i._proportion_>=2&&(i._proportion_=i._proportion_%2)}return e}function X(e){e=W(e);for(var l=0,a=0;a<e.length;a++){var t=e[a],n=t.format?t.format(+t._proportion_.toFixed(2)):i.toFixed(100*t._proportion_)+"%";l=Math.max(l,g(n))}return l}function q(e,l,a,t,n,i){return e.map(function(e){return null===e?null:(e.width=Math.ceil((l-2*n.columePadding)/a),i.extra.column&&i.extra.column.width&&+i.extra.column.width>0&&(e.width=Math.min(e.width,+i.extra.column.width)),e.width<=0&&(e.width=1),e.x+=(t+.5-a/2)*e.width,e)})}function K(e,l,a,t,n,i,r){return e.map(function(e){return null===e?null:(e.width=Math.ceil((l-2*n.columePadding)/2),i.extra.column&&i.extra.column.width&&+i.extra.column.width>0&&(e.width=Math.min(e.width,+i.extra.column.width)),t>0&&(e.width-=2*r),e)})}function $(e,l,a,t,n,i,r){return e.map(function(e,a){return null===e?null:(e.width=Math.ceil((l-2*n.columePadding)/2),i.extra.column&&i.extra.column.width&&+i.extra.column.width>0&&(e.width=Math.min(e.width,+i.extra.column.width)),e)})}function ee(e,l,a){var t=l.width-l.area[1]-l.area[3],n=l.enableScroll?Math.min(l.xAxis.itemCount,e.length):e.length;("line"==l.type||"area"==l.type)&&n>1&&"justify"==l.xAxis.boundaryGap&&(n-=1);var i=t/n,r=[],o=l.area[3],u=l.width-l.area[1];return e.forEach(function(e,l){r.push(o+l*i)}),"justify"!==l.xAxis.boundaryGap&&(!0===l.enableScroll?r.push(o+e.length*i):r.push(u)),{xAxisPoints:r,startX:o,endX:u,eachSpacing:i}}function le(e,l,a,t,n,i,r){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,u=[],v=i.height-i.area[0]-i.area[2];return e.forEach(function(e,r){if(null===e)u.push(null);else{var s=[];e.forEach(function(e,u){var b={};b.x=t[r]+Math.round(n/2);var c=e.value||e,h=v*(c-l)/(a-l);h*=o,b.y=i.height-Math.round(h)-i.area[2],s.push(b)}),u.push(s)}}),u}function ae(e,l,a,t,n,i,r){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,u="center";"line"!=i.type&&"area"!=i.type||(u=i.xAxis.boundaryGap);var v=[],s=i.height-i.area[0]-i.area[2],b=i.width-i.area[1]-i.area[3];return e.forEach(function(e,r){if(null===e)v.push(null);else{var c={};c.color=e.color,c.x=t[r];var h,p,f,d=e;if("object"===typeof e&&null!==e)if(e.constructor==Array)h=[].concat(i.chartData.xAxisData.ranges),p=h.shift(),f=h.pop(),d=e[1],c.x=i.area[3]+b*(e[0]-p)/(f-p);else d=e.value;"center"==u&&(c.x+=Math.round(n/2));var g=s*(d-l)/(a-l);g*=o,c.y=i.height-Math.round(g)-i.area[2],v.push(c)}}),v}function te(e,l,a,t,n,i,r,o,u){var v=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,s=[],b=i.height-i.area[0]-i.area[2];return e.forEach(function(e,r){if(null===e)s.push(null);else{var c={};if(c.color=e.color,c.x=t[r]+Math.round(n/2),o>0){for(var h=0,p=0;p<=o;p++)h+=u[p].data[r];var f=h-e,d=b*(h-l)/(a-l),g=b*(f-l)/(a-l)}else h=e,d=b*(h-l)/(a-l),g=0;var y=g;d*=v,y*=v,c.y=i.height-Math.round(d)-i.area[2],c.y0=i.height-Math.round(y)-i.area[2],s.push(c)}}),s}function ne(e,l,a,t){var n,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;n="stack"==t?x(e,l.categories.length):y(e);var r=[];n=n.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),n.map(function(e){"object"===typeof e?e.constructor==Array?"candle"==l.type?e.map(function(e){r.push(e)}):r.push(e[1]):r.push(e.value):r.push(e)});var o=0,u=0;if(r.length>0&&(o=Math.min.apply(this,r),u=Math.max.apply(this,r)),i>-1?("number"===typeof l.yAxis.data[i].min&&(o=Math.min(l.yAxis.data[i].min,o)),"number"===typeof l.yAxis.data[i].max&&(u=Math.max(l.yAxis.data[i].max,u))):("number"===typeof l.yAxis.min&&(o=Math.min(l.yAxis.min,o)),"number"===typeof l.yAxis.max&&(u=Math.max(l.yAxis.max,u))),o===u){var v=u||10;u+=v}for(var s=d(o,u),b=s.minRange,c=s.maxRange,h=[],p=(c-b)/l.yAxis.splitNumber,f=0;f<=l.yAxis.splitNumber;f++)h.push(b+p*f);return h.reverse()}function ie(e,l,a){var t=n({},{type:""},l.extra.column),r=l.yAxis.data.length,o=new Array(r);if(r>0){for(var u=0;u<r;u++){o[u]=[];for(var v=0;v<e.length;v++)e[v].index==u&&o[u].push(e[v])}for(var s=new Array(r),b=new Array(r),c=new Array(r),h=function(e){var n=l.yAxis.data[e];1==l.yAxis.disabled&&(n.disabled=!0),s[e]=ne(o[e],l,a,t.type,e);var r=n.fontSize||a.fontSize;c[e]={position:n.position?n.position:"left",width:0},b[e]=s[e].map(function(l){return l=i.toFixed(l,6),l=n.format?n.format(Number(l)):l,c[e].width=Math.max(c[e].width,g(l,r)+5),l});var u=n.calibration?4*l.pixelRatio:0;c[e].width+=u+3*l.pixelRatio,!0===n.disabled&&(c[e].width=0)},p=0;p<r;p++)h(p)}else{s=new Array(1),b=new Array(1),c=new Array(1);s[0]=ne(e,l,a,t.type),c[0]={position:"left",width:0};var f=l.yAxis.fontSize||a.fontSize;b[0]=s[0].map(function(e){return e=i.toFixed(e,6),e=l.yAxis.format?l.yAxis.format(Number(e)):e,c[0].width=Math.max(c[0].width,g(e,f)+5),e}),c[0].width+=3*l.pixelRatio,!0===l.yAxis.disabled?(c[0]={position:"left",width:0},l.yAxis.data[0]={disabled:!0}):l.yAxis.data[0]={disabled:!1,position:"left",max:l.yAxis.max,min:l.yAxis.min,format:l.yAxis.format}}return{rangesFormat:b,ranges:s,yAxisWidth:c}}function re(e,l,a,t,n){for(var i=[].concat(a.chartData.yAxisData.ranges),r=a.height-a.area[0]-a.area[2],o=a.area[0],u=[],v=0;v<i.length;v++){var s=i[v].shift(),b=i[v].pop(),c=s-(s-b)*(e-o)/r;c=a.yAxis.data[v].format?a.yAxis.data[v].format(Number(c)):c.toFixed(0),u.push(String(c))}return u}function oe(e,l){for(var a,t,n=l.height-l.area[0]-l.area[2],i=0;i<e.length;i++){e[i].yAxisIndex=e[i].yAxisIndex?e[i].yAxisIndex:0;var r=[].concat(l.chartData.yAxisData.ranges[e[i].yAxisIndex]);a=r.pop(),t=r.shift();var o=n*(e[i].value-a)/(t-a);e[i].y=l.height-Math.round(o)-l.area[2]}return e}function ue(e,l){!0!==l.rotateLock?(e.translate(l.height,0),e.rotate(90*Math.PI/180)):!0!==l._rotate_&&(e.translate(l.height,0),e.rotate(90*Math.PI/180),l._rotate_=!0)}function ve(e,l,a,t,n){t.beginPath(),"hollow"==n.dataPointShapeType?(t.setStrokeStyle(l),t.setFillStyle(n.background),t.setLineWidth(2*n.pixelRatio)):(t.setStrokeStyle("#ffffff"),t.setFillStyle(l),t.setLineWidth(1*n.pixelRatio)),"diamond"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y),t.lineTo(e.x,e.y+4.5),t.lineTo(e.x+4.5,e.y),t.lineTo(e.x,e.y-4.5))}):"circle"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x+2.5*n.pixelRatio,e.y),t.arc(e.x,e.y,3*n.pixelRatio,0,2*Math.PI,!1))}):"rect"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x-3.5,e.y-3.5),t.rect(e.x-3.5,e.y-3.5,7,7))}):"triangle"===a&&e.forEach(function(e,l){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y+4.5),t.lineTo(e.x+4.5,e.y+4.5),t.lineTo(e.x,e.y-4.5))}),t.closePath(),t.fill(),t.stroke()}function se(e,l,a,t){var n=e.title.fontSize||l.titleFontSize,i=e.subtitle.fontSize||l.subtitleFontSize,r=e.title.name||"",o=e.subtitle.name||"",u=e.title.color||l.titleColor,v=e.subtitle.color||l.subtitleColor,s=r?n:0,b=o?i:0,c=5;if(o){var h=g(o,i),p=t.x-h/2+(e.subtitle.offsetX||0),f=t.y+i/2+(e.subtitle.offsetY||0);r&&(f+=(s+c)/2),a.beginPath(),a.setFontSize(i),a.setFillStyle(v),a.fillText(o,p,f),a.closePath(),a.stroke()}if(r){var d=g(r,n),y=t.x-d/2+(e.title.offsetX||0),x=t.y+n/2+(e.title.offsetY||0);o&&(x-=(b+c)/2),a.beginPath(),a.setFontSize(n),a.setFillStyle(u),a.fillText(r,y,x),a.closePath(),a.stroke()}}function be(e,l,a,t){var n=l.data;e.forEach(function(e,i){if(null!==e){t.beginPath(),t.setFontSize(l.textSize||a.fontSize),t.setFillStyle(l.textColor||"#666666");var r=n[i];"object"===typeof n[i]&&null!==n[i]&&(r=n[i].constructor==Array?n[i][1]:n[i].value);var o=l.format?l.format(r):r;t.fillText(String(o),e.x-g(o,l.textSize||a.fontSize)/2,e.y-4),t.closePath(),t.stroke()}})}function ce(e,l,a,t,n,i){l-=e.width/2+n.gaugeLabelTextMargin;for(var r=e.startAngle-e.endAngle+1,o=r/e.splitLine.splitNumber,u=e.endNumber-e.startNumber,v=u/e.splitLine.splitNumber,s=e.startAngle,b=e.startNumber,c=0;c<e.splitLine.splitNumber+1;c++){var h={x:l*Math.cos(s*Math.PI),y:l*Math.sin(s*Math.PI)},p=e.labelFormat?e.labelFormat(b):b;h.x+=a.x-g(p)/2,h.y+=a.y;var f=h.x,d=h.y;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.labelColor||"#666666"),i.fillText(p,f,d+n.fontSize/2),i.closePath(),i.stroke(),s+=o,s>=2&&(s%=2),b+=v}}function he(e,l,a,t,n,r){var o=t.extra.radar||{};l+=n.radarLabelTextMargin,e.forEach(function(e,u){var v={x:l*Math.cos(e),y:l*Math.sin(e)},s=h(v.x,v.y,a),b=s.x,c=s.y;i.approximatelyEqual(v.x,0)?b-=g(t.categories[u]||"")/2:v.x<0&&(b-=g(t.categories[u]||"")),r.beginPath(),r.setFontSize(n.fontSize),r.setFillStyle(o.labelColor||"#666666"),r.fillText(t.categories[u]||"",b,c+n.fontSize/2),r.closePath(),r.stroke()})}function pe(e,l,a,t,n,r){for(var o=a.pieChartLinePadding,u=[],v=null,s=e.map(function(e){var l=e.format?e.format(+e._proportion_.toFixed(2)):i.toFixed(100*e._proportion_.toFixed(4))+"%";e._rose_proportion_&&(e._proportion_=e._rose_proportion_);var a=2*Math.PI-(e._start_+2*Math.PI*e._proportion_/2),t=e.color,n=e._radius_;return{arc:a,text:l,color:t,radius:n,textColor:e.textColor,textSize:e.textSize}}),b=0;b<s.length;b++){var c=s[b],f=Math.cos(c.arc)*(c.radius+o),d=Math.sin(c.arc)*(c.radius+o),y=Math.cos(c.arc)*c.radius,x=Math.sin(c.arc)*c.radius,A=f>=0?f+a.pieChartTextPadding:f-a.pieChartTextPadding,m=d,w=g(c.text,c.textSize||a.fontSize),S=m;v&&i.isSameXCoordinateArea(v.start,{x:A})&&(S=A>0?Math.min(m,v.start.y):f<0?Math.max(m,v.start.y):m>0?Math.max(m,v.start.y):Math.min(m,v.start.y)),A<0&&(A-=w);var M={lineStart:{x:y,y:x},lineEnd:{x:f,y:d},start:{x:A,y:S},width:w,height:a.fontSize,text:c.text,color:c.color,textColor:c.textColor,textSize:c.textSize};v=p(M,v),u.push(v)}for(var D=0;D<u.length;D++){var T=u[D],O=h(T.lineStart.x,T.lineStart.y,r),R=h(T.lineEnd.x,T.lineEnd.y,r),I=h(T.start.x,T.start.y,r);t.setLineWidth(1*l.pixelRatio),t.setFontSize(a.fontSize),t.beginPath(),t.setStrokeStyle(T.color),t.setFillStyle(T.color),t.moveTo(O.x,O.y);var E=T.start.x<0?I.x+T.width:I.x,k=T.start.x<0?I.x-5:I.x+5;t.quadraticCurveTo(R.x,R.y,E,I.y),t.moveTo(O.x,O.y),t.stroke(),t.closePath(),t.beginPath(),t.moveTo(I.x+T.width,I.y),t.arc(E,I.y,2,0,2*Math.PI),t.closePath(),t.fill(),t.beginPath(),t.setFontSize(T.textSize||a.fontSize),t.setFillStyle(T.textColor||"#666666"),t.fillText(T.text,k,I.y+3),t.closePath(),t.stroke(),t.closePath()}}function fe(e,l,a,t){var n=l.extra.tooltip||{};n.gridType=void 0==n.gridType?"solid":n.gridType,n.dashLength=void 0==n.dashLength?4:n.dashLength;var i=l.area[0],o=l.height-l.area[2];if("dash"==n.gridType&&t.setLineDash([n.dashLength,n.dashLength]),t.setStrokeStyle(n.gridColor||"#cccccc"),t.setLineWidth(1*l.pixelRatio),t.beginPath(),t.moveTo(e,i),t.lineTo(e,o),t.stroke(),t.setLineDash([]),n.xAxisLabel){var u=l.categories[l.tooltip.index];t.setFontSize(a.fontSize);var v=g(u,a.fontSize),s=e-.5*v,b=o;t.beginPath(),t.setFillStyle(r(n.labelBgColor||a.toolTipBackground,n.labelBgOpacity||a.toolTipOpacity)),t.setStrokeStyle(n.labelBgColor||a.toolTipBackground),t.setLineWidth(1*l.pixelRatio),t.rect(s-a.toolTipPadding,b,v+2*a.toolTipPadding,a.fontSize+2*a.toolTipPadding),t.closePath(),t.stroke(),t.fill(),t.beginPath(),t.setFontSize(a.fontSize),t.setFillStyle(n.labelFontColor||a.fontColor),t.fillText(String(u),s,b+a.toolTipPadding+a.fontSize),t.closePath(),t.stroke()}}function de(e,l,a){for(var t=n({},{type:"solid",dashLength:4,data:[]},e.extra.markLine),i=e.area[3],o=e.width-e.area[1],u=oe(t.data,e),v=0;v<u.length;v++){var s=n({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},u[v]);if("dash"==t.type&&a.setLineDash([t.dashLength,t.dashLength]),a.setStrokeStyle(s.lineColor),a.setLineWidth(1*e.pixelRatio),a.beginPath(),a.moveTo(i,s.y),a.lineTo(o,s.y),a.stroke(),a.setLineDash([]),s.showLabel){var b=e.yAxis.format?e.yAxis.format(Number(s.value)):s.value;a.setFontSize(l.fontSize);var c=g(b,l.fontSize),h=e.padding[3]+l.yAxisTitleWidth-l.toolTipPadding,p=Math.max(e.area[3],c+2*l.toolTipPadding),f=p-h,d=h+(f-c)/2,y=s.y;a.setFillStyle(r(s.labelBgColor,s.labelBgOpacity)),a.setStrokeStyle(s.labelBgColor),a.setLineWidth(1*e.pixelRatio),a.beginPath(),a.rect(h,y-.5*l.fontSize-l.toolTipPadding,f,l.fontSize+2*l.toolTipPadding),a.closePath(),a.stroke(),a.fill(),a.beginPath(),a.setFontSize(l.fontSize),a.setFillStyle(s.labelFontColor),a.fillText(String(b),d,y+.5*l.fontSize),a.stroke()}}}function ge(e,l,a,t,i){var o=n({},{gridType:"solid",dashLength:4},e.extra.tooltip),u=e.area[3],v=e.width-e.area[1];if("dash"==o.gridType&&a.setLineDash([o.dashLength,o.dashLength]),a.setStrokeStyle(o.gridColor||"#cccccc"),a.setLineWidth(1*e.pixelRatio),a.beginPath(),a.moveTo(u,e.tooltip.offset.y),a.lineTo(v,e.tooltip.offset.y),a.stroke(),a.setLineDash([]),o.yAxisLabel)for(var s=re(e.tooltip.offset.y,e.series,e,l,t),b=e.chartData.yAxisData.yAxisWidth,c=e.area[3],h=e.width-e.area[1],p=0;p<s.length;p++){a.setFontSize(l.fontSize);var f=g(s[p],l.fontSize),d=void 0,y=void 0,x=void 0;"left"==b[p].position?(d=c-b[p].width,y=Math.max(d,d+f+2*l.toolTipPadding)):(d=h,y=Math.max(d+b[p].width,d+f+2*l.toolTipPadding)),x=y-d;var A=d+(x-f)/2,m=e.tooltip.offset.y;a.beginPath(),a.setFillStyle(r(o.labelBgColor||l.toolTipBackground,o.labelBgOpacity||l.toolTipOpacity)),a.setStrokeStyle(o.labelBgColor||l.toolTipBackground),a.setLineWidth(1*e.pixelRatio),a.rect(d,m-.5*l.fontSize-l.toolTipPadding,x,l.fontSize+2*l.toolTipPadding),a.closePath(),a.stroke(),a.fill(),a.beginPath(),a.setFontSize(l.fontSize),a.setFillStyle(o.labelFontColor||l.fontColor),a.fillText(s[p],A,m+.5*l.fontSize),a.closePath(),a.stroke(),"left"==b[p].position?c-=b[p].width+e.yAxis.padding:h+=b[p].width+e.yAxis.padding}}function ye(e,l,a,t,i){var o=n({},{activeBgColor:"#000000",activeBgOpacity:.08},l.extra.tooltip),u=l.area[0],v=l.height-l.area[2];t.beginPath(),t.setFillStyle(r(o.activeBgColor,o.activeBgOpacity)),t.rect(e-i/2,u,i,v-u),t.closePath(),t.fill()}function xe(e,l,a,t,i,o,u){var v=n({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},a.extra.tooltip),s=4*a.pixelRatio,b=5*a.pixelRatio,c=8*a.pixelRatio,h=!1;"line"!=a.type&&"area"!=a.type&&"candle"!=a.type&&"mix"!=a.type||fe(a.tooltip.offset.x,a,t,i),l=n({x:0,y:0},l),l.y-=8*a.pixelRatio;var p=e.map(function(e){return g(e.text,t.fontSize)}),f=s+b+4*t.toolTipPadding+Math.max.apply(null,p),d=2*t.toolTipPadding+e.length*t.toolTipLineHeight;0!=v.showBox&&(l.x-Math.abs(a._scrollDistance_)+c+f>a.width&&(h=!0),d+l.y>a.height&&(l.y=a.height-d),i.beginPath(),i.setFillStyle(r(v.bgColor||t.toolTipBackground,v.bgOpacity||t.toolTipOpacity)),h?(i.moveTo(l.x,l.y+10*a.pixelRatio),i.lineTo(l.x-c,l.y+10*a.pixelRatio-5*a.pixelRatio),i.lineTo(l.x-c,l.y),i.lineTo(l.x-c-Math.round(f),l.y),i.lineTo(l.x-c-Math.round(f),l.y+d),i.lineTo(l.x-c,l.y+d),i.lineTo(l.x-c,l.y+10*a.pixelRatio+5*a.pixelRatio),i.lineTo(l.x,l.y+10*a.pixelRatio)):(i.moveTo(l.x,l.y+10*a.pixelRatio),i.lineTo(l.x+c,l.y+10*a.pixelRatio-5*a.pixelRatio),i.lineTo(l.x+c,l.y),i.lineTo(l.x+c+Math.round(f),l.y),i.lineTo(l.x+c+Math.round(f),l.y+d),i.lineTo(l.x+c,l.y+d),i.lineTo(l.x+c,l.y+10*a.pixelRatio+5*a.pixelRatio),i.lineTo(l.x,l.y+10*a.pixelRatio)),i.closePath(),i.fill(),e.forEach(function(e,a){if(null!==e.color){i.beginPath(),i.setFillStyle(e.color);var n=l.x+c+2*t.toolTipPadding,r=l.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*a+t.toolTipPadding+1;h&&(n=l.x-f-c+2*t.toolTipPadding),i.fillRect(n,r,s,t.fontSize),i.closePath()}}),e.forEach(function(e,a){var n=l.x+c+2*t.toolTipPadding+s+b;h&&(n=l.x-f-c+2*t.toolTipPadding+ +s+b);var r=l.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*a+t.toolTipPadding;i.beginPath(),i.setFontSize(t.fontSize),i.setFillStyle(v.fontColor),i.fillText(e.text,n,r+t.fontSize),i.closePath(),i.stroke()}))}function Ae(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=l.chartData.xAxisData,o=r.xAxisPoints,u=r.eachSpacing,v=n({},{type:"group",width:u/2,meter:{border:4,fillColor:"#FFFFFF"}},l.extra.column),s=[];t.save();var b=-2,c=o.length+2;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),b=Math.floor(-l._scrollDistance_/u)-2,c=b+l.xAxis.itemCount+4),l.tooltip&&l.tooltip.textList&&l.tooltip.textList.length&&1===i&&ye(l.tooltip.offset.x,l,a,t,u),e.forEach(function(n,r){var h,p,f;h=[].concat(l.chartData.yAxisData.ranges[n.index]),p=h.pop(),f=h.shift();var d=n.data;switch(v.type){case"group":var g=ae(d,p,f,o,u,l,a,i),y=te(d,p,f,o,u,l,a,r,e,i);s.push(y),g=q(g,u,e.length,r,a,l);for(var x=0;x<g.length;x++){var A=g[x];if(null!==A&&x>b&&x<c){t.beginPath(),t.setStrokeStyle(A.color||n.color),t.setLineWidth(1),t.setFillStyle(A.color||n.color);var m=A.x-A.width/2,w=l.height-A.y-l.area[2];t.moveTo(m-1,A.y),t.lineTo(m+A.width-2,A.y),t.lineTo(m+A.width-2,l.height-l.area[2]),t.lineTo(m,l.height-l.area[2]),t.lineTo(m,A.y),t.closePath(),t.stroke(),t.fill()}}break;case"stack":g=te(d,p,f,o,u,l,a,r,e,i);s.push(g),g=$(g,u,e.length,r,a,l,e);for(var S=0;S<g.length;S++){var M=g[S];if(null!==M&&S>b&&S<c){t.beginPath(),t.setFillStyle(M.color||n.color);m=M.x-M.width/2+1,w=l.height-M.y-l.area[2];var D=l.height-M.y0-l.area[2];r>0&&(w-=D),t.moveTo(m,M.y),t.fillRect(m,M.y,M.width-2,w),t.closePath(),t.fill()}}break;case"meter":g=ae(d,p,f,o,u,l,a,i);if(s.push(g),g=K(g,u,e.length,r,a,l,v.meter.border),0==r)for(var T=0;T<g.length;T++){var O=g[T];if(null!==O&&T>b&&T<c){t.beginPath(),t.setFillStyle(v.meter.fillColor);m=O.x-O.width/2,w=l.height-O.y-l.area[2];t.moveTo(m,O.y),t.fillRect(m,O.y,O.width,w),t.closePath(),t.fill(),v.meter.border>0&&(t.beginPath(),t.setStrokeStyle(n.color),t.setLineWidth(v.meter.border*l.pixelRatio),t.moveTo(m+.5*v.meter.border,O.y+w),t.lineTo(m+.5*v.meter.border,O.y+.5*v.meter.border),t.lineTo(m+O.width-.5*v.meter.border,O.y+.5*v.meter.border),t.lineTo(m+O.width-.5*v.meter.border,O.y+w),t.stroke())}}else for(var R=0;R<g.length;R++){var I=g[R];if(null!==I&&R>b&&R<c){t.beginPath(),t.setFillStyle(I.color||n.color);m=I.x-I.width/2,w=l.height-I.y-l.area[2];t.moveTo(m,I.y),t.fillRect(m,I.y,I.width,w),t.closePath(),t.fill()}}break}}),!1!==l.dataLabel&&1===i&&e.forEach(function(n,r){var s,b,c;s=[].concat(l.chartData.yAxisData.ranges[n.index]),b=s.pop(),c=s.shift();var h=n.data;switch(v.type){case"group":var p=ae(h,b,c,o,u,l,a,i);p=q(p,u,e.length,r,a,l),be(p,n,a,t);break;case"stack":p=te(h,b,c,o,u,l,a,r,e,i);be(p,n,a,t);break;case"meter":p=ae(h,b,c,o,u,l,a,i);be(p,n,a,t);break}}),t.restore(),{xAxisPoints:o,calPoints:s,eachSpacing:u}}function me(e,l,a,t,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=n({},{color:{},average:{}},a.extra.candle);o.color=n({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},o.color),o.average=n({},{show:!1,name:[],day:[],color:t.colors},o.average),a.extra.candle=o;var u=a.chartData.xAxisData,v=u.xAxisPoints,s=u.eachSpacing,b=[];i.save();var h=-2,p=v.length+2,f=0,d=a.width+s;return a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&(i.translate(a._scrollDistance_,0),h=Math.floor(-a._scrollDistance_/s)-2,p=h+a.xAxis.itemCount+4,f=-a._scrollDistance_-s+a.area[3],d=f+(a.xAxis.itemCount+4)*s),o.average.show&&l.forEach(function(e,l){var n,o,u;n=[].concat(a.chartData.yAxisData.ranges[e.index]),o=n.pop(),u=n.shift();for(var b=e.data,h=ae(b,o,u,v,s,a,t,r),p=N(h),g=0;g<p.length;g++){var y=p[g];if(i.beginPath(),i.setStrokeStyle(e.color),i.setLineWidth(1),1===y.length)i.moveTo(y[0].x,y[0].y),i.arc(y[0].x,y[0].y,1,0,2*Math.PI);else{i.moveTo(y[0].x,y[0].y);for(var x=0,A=0;A<y.length;A++){var m=y[A];if(0==x&&m.x>f&&(i.moveTo(m.x,m.y),x=1),A>0&&m.x>f&&m.x<d){var w=c(y,A-1);i.bezierCurveTo(w.ctrA.x,w.ctrA.y,w.ctrB.x,w.ctrB.y,m.x,m.y)}}i.moveTo(y[0].x,y[0].y)}i.closePath(),i.stroke()}}),e.forEach(function(e,l){var n,u,c;n=[].concat(a.chartData.yAxisData.ranges[e.index]),u=n.pop(),c=n.shift();var f=e.data,d=le(f,u,c,v,s,a,t,r);b.push(d);for(var g=N(d),y=0;y<g[0].length;y++)if(y>h&&y<p){var x=g[0][y];i.beginPath(),f[y][1]-f[y][0]>0?(i.setStrokeStyle(o.color.upLine),i.setFillStyle(o.color.upFill),i.setLineWidth(1*a.pixelRatio),i.moveTo(x[3].x,x[3].y),i.lineTo(x[1].x,x[1].y),i.lineTo(x[1].x-s/4,x[1].y),i.lineTo(x[0].x-s/4,x[0].y),i.lineTo(x[0].x,x[0].y),i.lineTo(x[2].x,x[2].y),i.lineTo(x[0].x,x[0].y),i.lineTo(x[0].x+s/4,x[0].y),i.lineTo(x[1].x+s/4,x[1].y),i.lineTo(x[1].x,x[1].y),i.moveTo(x[3].x,x[3].y)):(i.setStrokeStyle(o.color.downLine),i.setFillStyle(o.color.downFill),i.setLineWidth(1*a.pixelRatio),i.moveTo(x[3].x,x[3].y),i.lineTo(x[0].x,x[0].y),i.lineTo(x[0].x-s/4,x[0].y),i.lineTo(x[1].x-s/4,x[1].y),i.lineTo(x[1].x,x[1].y),i.lineTo(x[2].x,x[2].y),i.lineTo(x[1].x,x[1].y),i.lineTo(x[1].x+s/4,x[1].y),i.lineTo(x[0].x+s/4,x[0].y),i.lineTo(x[0].x,x[0].y),i.moveTo(x[3].x,x[3].y)),i.closePath(),i.fill(),i.stroke()}}),i.restore(),{xAxisPoints:v,calPoints:b,eachSpacing:s}}function we(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},l.extra.area),u=l.chartData.xAxisData,v=u.xAxisPoints,s=u.eachSpacing,b=l.height-l.area[2],h=[];t.save();var p=0,f=l.width+s;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),p=-l._scrollDistance_-s+l.area[3],f=p+(l.xAxis.itemCount+4)*s),e.forEach(function(e,n){var u,d,g;u=[].concat(l.chartData.yAxisData.ranges[e.index]),d=u.pop(),g=u.shift();var y=e.data,x=ae(y,d,g,v,s,l,a,i);h.push(x);for(var A=N(x),m=0;m<A.length;m++){var w=A[m];if(t.beginPath(),t.setStrokeStyle(r(e.color,o.opacity)),o.gradient){var S=t.createLinearGradient(0,l.area[0],0,l.height-l.area[2]);S.addColorStop("0",r(e.color,o.opacity)),S.addColorStop("1.0",r("#FFFFFF",.1)),t.setFillStyle(S)}else t.setFillStyle(r(e.color,o.opacity));if(t.setLineWidth(o.width*l.pixelRatio),w.length>1){var M=w[0],D=w[w.length-1];t.moveTo(M.x,M.y);var T=0;if("curve"===o.type)for(var O=0;O<w.length;O++){var R=w[O];if(0==T&&R.x>p&&(t.moveTo(R.x,R.y),T=1),O>0&&R.x>p&&R.x<f){var I=c(w,O-1);t.bezierCurveTo(I.ctrA.x,I.ctrA.y,I.ctrB.x,I.ctrB.y,R.x,R.y)}}else for(var E=0;E<w.length;E++){var k=w[E];0==T&&k.x>p&&(t.moveTo(k.x,k.y),T=1),E>0&&k.x>p&&k.x<f&&t.lineTo(k.x,k.y)}t.lineTo(D.x,b),t.lineTo(M.x,b),t.lineTo(M.x,M.y)}else{var P=w[0];t.moveTo(P.x-s/2,P.y),t.lineTo(P.x+s/2,P.y),t.lineTo(P.x+s/2,b),t.lineTo(P.x-s/2,b),t.moveTo(P.x-s/2,P.y)}if(t.closePath(),t.fill(),o.addLine){if("dash"==e.lineType){var C=e.dashLength?e.dashLength:8;C*=l.pixelRatio,t.setLineDash([C,C])}if(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(o.width*l.pixelRatio),1===w.length)t.moveTo(w[0].x,w[0].y),t.arc(w[0].x,w[0].y,1,0,2*Math.PI);else{t.moveTo(w[0].x,w[0].y);var L=0;if("curve"===o.type)for(var j=0;j<w.length;j++){var F=w[j];if(0==L&&F.x>p&&(t.moveTo(F.x,F.y),L=1),j>0&&F.x>p&&F.x<f){var B=c(w,j-1);t.bezierCurveTo(B.ctrA.x,B.ctrA.y,B.ctrB.x,B.ctrB.y,F.x,F.y)}}else for(var _=0;_<w.length;_++){var U=w[_];0==L&&U.x>p&&(t.moveTo(U.x,U.y),L=1),_>0&&U.x>p&&U.x<f&&t.lineTo(U.x,U.y)}t.moveTo(w[0].x,w[0].y)}t.stroke(),t.setLineDash([])}}!1!==l.dataPointShape&&ve(x,e.color,e.pointShape,t,l)}),!1!==l.dataLabel&&1===i&&e.forEach(function(e,n){var r,o,u;r=[].concat(l.chartData.yAxisData.ranges[e.index]),o=r.pop(),u=r.shift();var b=e.data,c=ae(b,o,u,v,s,l,a,i);be(c,e,a,t)}),t.restore(),{xAxisPoints:v,calPoints:h,eachSpacing:s}}function Se(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=n({},{type:"straight",width:2},l.extra.line);r.width*=l.pixelRatio;var o=l.chartData.xAxisData,u=o.xAxisPoints,v=o.eachSpacing,s=[];t.save();var b=0,h=l.width+v;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),b=-l._scrollDistance_-v+l.area[3],h=b+(l.xAxis.itemCount+4)*v),e.forEach(function(e,n){var o,p,f;o=[].concat(l.chartData.yAxisData.ranges[e.index]),p=o.pop(),f=o.shift();var d=e.data,g=ae(d,p,f,u,v,l,a,i);s.push(g);var y=N(g);if("dash"==e.lineType){var x=e.dashLength?e.dashLength:8;x*=l.pixelRatio,t.setLineDash([x,x])}t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(r.width),y.forEach(function(e,l){if(1===e.length)t.moveTo(e[0].x,e[0].y),t.arc(e[0].x,e[0].y,1,0,2*Math.PI);else{t.moveTo(e[0].x,e[0].y);var a=0;if("curve"===r.type)for(var n=0;n<e.length;n++){var i=e[n];if(0==a&&i.x>b&&(t.moveTo(i.x,i.y),a=1),n>0&&i.x>b&&i.x<h){var o=c(e,n-1);t.bezierCurveTo(o.ctrA.x,o.ctrA.y,o.ctrB.x,o.ctrB.y,i.x,i.y)}}else for(var u=0;u<e.length;u++){var v=e[u];0==a&&v.x>b&&(t.moveTo(v.x,v.y),a=1),u>0&&v.x>b&&v.x<h&&t.lineTo(v.x,v.y)}t.moveTo(e[0].x,e[0].y)}}),t.stroke(),t.setLineDash([]),!1!==l.dataPointShape&&ve(g,e.color,e.pointShape,t,l)}),!1!==l.dataLabel&&1===i&&e.forEach(function(e,n){var r,o,s;r=[].concat(l.chartData.yAxisData.ranges[e.index]),o=r.pop(),s=r.shift();var b=e.data,c=ae(b,o,s,u,v,l,a,i);be(c,e,a,t)}),t.restore(),{xAxisPoints:u,calPoints:s,eachSpacing:v}}function Me(e,l,a,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=l.chartData.xAxisData,o=i.xAxisPoints,u=i.eachSpacing,v=l.height-l.area[2],s=[],b=0,h=0;e.forEach(function(e,l){"column"==e.type&&(h+=1)}),t.save();var p=-2,f=o.length+2,d=0,g=l.width+u;if(l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),p=Math.floor(-l._scrollDistance_/u)-2,f=p+l.xAxis.itemCount+4,d=-l._scrollDistance_-u+l.area[3],g=d+(l.xAxis.itemCount+4)*u),e.forEach(function(e,i){var y,x,A;y=[].concat(l.chartData.yAxisData.ranges[e.index]),x=y.pop(),A=y.shift();var m=e.data,w=ae(m,x,A,o,u,l,a,n);if(s.push(w),"column"==e.type){w=q(w,u,h,b,a,l);for(var S=0;S<w.length;S++){var M=w[S];if(null!==M&&S>p&&S<f){t.beginPath(),t.setStrokeStyle(M.color||e.color),t.setLineWidth(1),t.setFillStyle(M.color||e.color);var D=M.x-M.width/2;l.height,M.y,l.area[2];t.moveTo(D,M.y),t.moveTo(D-1,M.y),t.lineTo(D+M.width-2,M.y),t.lineTo(D+M.width-2,l.height-l.area[2]),t.lineTo(D,l.height-l.area[2]),t.lineTo(D,M.y),t.closePath(),t.stroke(),t.fill(),t.closePath(),t.fill()}}b+=1}if("area"==e.type)for(var T=N(w),O=0;O<T.length;O++){var R=T[O];if(t.beginPath(),t.setStrokeStyle(e.color),t.setFillStyle(r(e.color,.2)),t.setLineWidth(2*l.pixelRatio),R.length>1){var I=R[0],E=R[R.length-1];t.moveTo(I.x,I.y);var k=0;if("curve"===e.style)for(var P=0;P<R.length;P++){var C=R[P];if(0==k&&C.x>d&&(t.moveTo(C.x,C.y),k=1),P>0&&C.x>d&&C.x<g){var L=c(R,P-1);t.bezierCurveTo(L.ctrA.x,L.ctrA.y,L.ctrB.x,L.ctrB.y,C.x,C.y)}}else for(var j=0;j<R.length;j++){var F=R[j];0==k&&F.x>d&&(t.moveTo(F.x,F.y),k=1),j>0&&F.x>d&&F.x<g&&t.lineTo(F.x,F.y)}t.lineTo(E.x,v),t.lineTo(I.x,v),t.lineTo(I.x,I.y)}else{var B=R[0];t.moveTo(B.x-u/2,B.y),t.lineTo(B.x+u/2,B.y),t.lineTo(B.x+u/2,v),t.lineTo(B.x-u/2,v),t.moveTo(B.x-u/2,B.y)}t.closePath(),t.fill()}if("line"==e.type){var _=N(w);_.forEach(function(a,n){if("dash"==e.lineType){var i=e.dashLength?e.dashLength:8;i*=l.pixelRatio,t.setLineDash([i,i])}if(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(2*l.pixelRatio),1===a.length)t.moveTo(a[0].x,a[0].y),t.arc(a[0].x,a[0].y,1,0,2*Math.PI);else{t.moveTo(a[0].x,a[0].y);var r=0;if("curve"==e.style)for(var o=0;o<a.length;o++){var u=a[o];if(0==r&&u.x>d&&(t.moveTo(u.x,u.y),r=1),o>0&&u.x>d&&u.x<g){var v=c(a,o-1);t.bezierCurveTo(v.ctrA.x,v.ctrA.y,v.ctrB.x,v.ctrB.y,u.x,u.y)}}else for(var s=0;s<a.length;s++){var b=a[s];0==r&&b.x>d&&(t.moveTo(b.x,b.y),r=1),s>0&&b.x>d&&b.x<g&&t.lineTo(b.x,b.y)}t.moveTo(a[0].x,a[0].y)}t.stroke(),t.setLineDash([])})}"point"==e.type&&(e.addPoint=!0),1==e.addPoint&&"column"!==e.type&&ve(w,e.color,e.pointShape,t,l)}),!1!==l.dataLabel&&1===n){b=0;e.forEach(function(e,i){var r,v,s;r=[].concat(l.chartData.yAxisData.ranges[e.index]),v=r.pop(),s=r.shift();var c=e.data,p=ae(c,v,s,o,u,l,a,n);"column"!==e.type?be(p,e,a,t):(p=q(p,u,h,b,a,l),be(p,e,a,t),b+=1)})}return t.restore(),{xAxisPoints:o,calPoints:s,eachSpacing:u}}function De(e,l,a,t,n,i){var r=e.extra.tooltip||{};r.horizentalLine&&e.tooltip&&1===t&&("line"==e.type||"area"==e.type||"column"==e.type||"candle"==e.type||"mix"==e.type)&&ge(e,l,a,n,i),a.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&a.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===t&&xe(e.tooltip.textList,e.tooltip.offset,e,l,a,n,i),a.restore()}function Te(e,l,a,t){var n=l.chartData.xAxisData,i=n.xAxisPoints,r=n.startX,o=n.endX,u=n.eachSpacing,v="center";"line"!=l.type&&"area"!=l.type||(v=l.xAxis.boundaryGap);var s=l.height-l.area[2],c=l.area[0];if(l.enableScroll&&l.xAxis.scrollShow){var h=l.height-l.area[2]+a.xAxisHeight,p=o-r,f=u*(i.length-1),d=p*p/f,y=0;l._scrollDistance_&&(y=-l._scrollDistance_*p/f),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*l.pixelRatio),t.setStrokeStyle(l.xAxis.scrollBackgroundColor||"#EFEBEF"),t.moveTo(r,h),t.lineTo(o,h),t.stroke(),t.closePath(),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*l.pixelRatio),t.setStrokeStyle(l.xAxis.scrollColor||"#A6A6A6"),t.moveTo(r+y,h),t.lineTo(r+y+d,h),t.stroke(),t.closePath(),t.setLineCap("butt")}if(t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&t.translate(l._scrollDistance_,0),!0===l.xAxis.calibration&&(t.setStrokeStyle(l.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*l.pixelRatio),i.forEach(function(e,a){a>0&&(t.beginPath(),t.moveTo(e-u/2,s),t.lineTo(e-u/2,s+3*l.pixelRatio),t.closePath(),t.stroke())})),!0!==l.xAxis.disableGrid&&(t.setStrokeStyle(l.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*l.pixelRatio),"dash"==l.xAxis.gridType&&t.setLineDash([l.xAxis.dashLength,l.xAxis.dashLength]),l.xAxis.gridEval=l.xAxis.gridEval||1,i.forEach(function(e,a){a%l.xAxis.gridEval==0&&(t.beginPath(),t.moveTo(e,s),t.lineTo(e,c),t.stroke())}),t.setLineDash([])),!0!==l.xAxis.disabled){var x=e.length;l.xAxis.labelCount&&(x=l.xAxis.itemCount?Math.ceil(e.length/l.xAxis.itemCount*l.xAxis.labelCount):l.xAxis.labelCount,x-=1);for(var A=Math.ceil(e.length/x),m=[],w=e.length,S=0;S<w;S++)S%A!==0?m.push(""):m.push(e[S]);m[w-1]=e[w-1];var M=l.xAxis.fontSize||a.fontSize;0===a._xAxisTextAngle_?m.forEach(function(e,n){var r=-g(String(e),M)/2;"center"==v&&(r+=u/2);var o=0;l.xAxis.scrollShow&&(o=6*l.pixelRatio),t.beginPath(),t.setFontSize(M),t.setFillStyle(l.xAxis.fontColor||"#666666"),t.fillText(String(e),i[n]+r,s+M+(a.xAxisHeight-o-M)/2),t.closePath(),t.stroke()}):m.forEach(function(e,n){t.save(),t.beginPath(),t.setFontSize(M),t.setFillStyle(l.xAxis.fontColor||"#666666");var r=g(String(e),M),o=-r;"center"==v&&(o+=u/2);var c=b(i[n]+u/2,s+M/2+5,l.height),h=c.transX,p=c.transY;t.rotate(-1*a._xAxisTextAngle_),t.translate(h,p),t.fillText(String(e),i[n]+o,s+M+5),t.closePath(),t.stroke(),t.restore()})}t.restore(),l.xAxis.axisLine&&(t.beginPath(),t.setStrokeStyle(l.xAxis.axisLineColor),t.setLineWidth(1*l.pixelRatio),t.moveTo(r,l.height-l.area[2]),t.lineTo(o,l.height-l.area[2]),t.stroke())}function Oe(e,l,a,t){if(!0!==l.yAxis.disableGrid){for(var n=l.height-l.area[0]-l.area[2],i=n/l.yAxis.splitNumber,r=l.area[3],o=l.chartData.xAxisData.xAxisPoints,u=l.chartData.xAxisData.eachSpacing,v=u*(o.length-1),s=r+v,b=[],c=0;c<l.yAxis.splitNumber+1;c++)b.push(l.height-l.area[2]-i*c);t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&t.translate(l._scrollDistance_,0),"dash"==l.yAxis.gridType&&t.setLineDash([l.yAxis.dashLength,l.yAxis.dashLength]),t.setStrokeStyle(l.yAxis.gridColor),t.setLineWidth(1*l.pixelRatio),b.forEach(function(e,l){t.beginPath(),t.moveTo(r,e),t.lineTo(s,e),t.stroke()}),t.setLineDash([]),t.restore()}}function Re(e,l,a,t){if(!0!==l.yAxis.disabled){var n=l.height-l.area[0]-l.area[2],i=n/l.yAxis.splitNumber,r=l.area[3],o=l.width-l.area[1],u=l.height-l.area[2],v=u+a.xAxisHeight;l.xAxis.scrollShow&&(v-=3*l.pixelRatio),l.xAxis.rotateLabel&&(v=l.height-l.area[2]+3),t.beginPath(),t.setFillStyle(l.background||"#ffffff"),l._scrollDistance_<0&&t.fillRect(0,0,r,v),1==l.enableScroll&&t.fillRect(o,0,l.width,v),t.closePath(),t.stroke();for(var s=[],b=0;b<=l.yAxis.splitNumber;b++)s.push(l.area[0]+i*b);for(var c=l.area[3],h=l.width-l.area[1],p=function(e){var n=l.yAxis.data[e];if(!0!==n.disabled){var i=l.chartData.yAxisData.rangesFormat[e],r=n.fontSize||a.fontSize,o=l.chartData.yAxisData.yAxisWidth[e];if(i.forEach(function(e,a){var i=s[a]?s[a]:u;t.beginPath(),t.setFontSize(r),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(n.axisLineColor||"#cccccc"),t.setFillStyle(n.fontColor||"#666666"),"left"==o.position?(t.fillText(String(e),c-o.width,i+r/2),1==n.calibration&&(t.moveTo(c,i),t.lineTo(c-3*l.pixelRatio,i))):(t.fillText(String(e),h+4*l.pixelRatio,i+r/2),1==n.calibration&&(t.moveTo(h,i),t.lineTo(h+3*l.pixelRatio,i))),t.closePath(),t.stroke()}),!1!==n.axisLine&&(t.beginPath(),t.setStrokeStyle(n.axisLineColor||"#cccccc"),t.setLineWidth(1*l.pixelRatio),"left"==o.position?(t.moveTo(c,l.height-l.area[2]),t.lineTo(c,l.area[0])):(t.moveTo(h,l.height-l.area[2]),t.lineTo(h,l.area[0])),t.stroke()),l.yAxis.showTitle){var v=n.titleFontSize||a.fontSize,b=n.title;t.beginPath(),t.setFontSize(v),t.setFillStyle(n.titleFontColor||"#666666"),"left"==o.position?t.fillText(b,c-g(b,v)/2,l.area[0]-10*l.pixelRatio):t.fillText(b,h-g(b,v)/2,l.area[0]-10*l.pixelRatio),t.closePath(),t.stroke()}"left"==o.position?c-=o.width+l.yAxis.padding:h+=o.width+l.yAxis.padding}},f=0;f<l.yAxis.data.length;f++)p(f)}}function Ie(e,l,a,t,n){if(!1!==l.legend.show){var i=n.legendData,r=i.points,o=i.area,u=l.legend.padding,v=l.legend.fontSize,s=15*l.pixelRatio,b=5*l.pixelRatio,c=l.legend.itemGap,h=Math.max(l.legend.lineHeight*l.pixelRatio,v);t.beginPath(),t.setLineWidth(l.legend.borderWidth),t.setStrokeStyle(l.legend.borderColor),t.setFillStyle(l.legend.backgroundColor),t.moveTo(o.start.x,o.start.y),t.rect(o.start.x,o.start.y,o.width,o.height),t.closePath(),t.fill(),t.stroke(),r.forEach(function(e,n){var r=0,p=0;r=i.widthArr[n],p=i.heightArr[n];var f=0,d=0;"top"==l.legend.position||"bottom"==l.legend.position?(f=o.start.x+(o.width-r)/2,d=o.start.y+u+n*h):(r=0==n?0:i.widthArr[n-1],f=o.start.x+u+r,d=o.start.y+u+(o.height-p)/2),t.setFontSize(a.fontSize);for(var y=0;y<e.length;y++){var x=e[y];switch(x.area=[0,0,0,0],x.area[0]=f,x.area[1]=d,x.area[3]=d+h,t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(x.show?x.color:l.legend.hiddenColor),t.setFillStyle(x.show?x.color:l.legend.hiddenColor),x.legendShape){case"line":t.moveTo(f,d+.5*h-2*l.pixelRatio),t.fillRect(f,d+.5*h-2*l.pixelRatio,15*l.pixelRatio,4*l.pixelRatio);break;case"triangle":t.moveTo(f+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio),t.lineTo(f+2.5*l.pixelRatio,d+.5*h+5*l.pixelRatio),t.lineTo(f+12.5*l.pixelRatio,d+.5*h+5*l.pixelRatio),t.lineTo(f+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio);break;case"diamond":t.moveTo(f+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio),t.lineTo(f+2.5*l.pixelRatio,d+.5*h),t.lineTo(f+7.5*l.pixelRatio,d+.5*h+5*l.pixelRatio),t.lineTo(f+12.5*l.pixelRatio,d+.5*h),t.lineTo(f+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio);break;case"circle":t.moveTo(f+7.5*l.pixelRatio,d+.5*h),t.arc(f+7.5*l.pixelRatio,d+.5*h,5*l.pixelRatio,0,2*Math.PI);break;case"rect":t.moveTo(f,d+.5*h-5*l.pixelRatio),t.fillRect(f,d+.5*h-5*l.pixelRatio,15*l.pixelRatio,10*l.pixelRatio);break;default:t.moveTo(f,d+.5*h-5*l.pixelRatio),t.fillRect(f,d+.5*h-5*l.pixelRatio,15*l.pixelRatio,10*l.pixelRatio)}t.closePath(),t.fill(),t.stroke(),f+=s+b;var A=.5*h+.5*v-2;t.beginPath(),t.setFontSize(v),t.setFillStyle(x.show?l.legend.fontColor:l.legend.hiddenColor),t.fillText(x.name,f,d+A),t.closePath(),t.stroke(),"top"==l.legend.position||"bottom"==l.legend.position?(f+=g(x.name,v)+c,x.area[2]=f):(x.area[2]=f+g(x.name,v)+c,f-=s+b,d+=h)}})}}function Ee(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{activeOpacity:.5,activeRadius:10*l.pixelRatio,offsetAngle:0,labelWidth:15*l.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},l.extra.pie),u={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.area[0]+(l.height-l.area[0]-l.area[2])/2};0==a.pieChartLinePadding&&(a.pieChartLinePadding=o.activeRadius);var v=Math.min((l.width-l.area[1]-l.area[3])/2-a.pieChartLinePadding-a.pieChartTextPadding-a._pieTextMaxLength_,(l.height-l.area[0]-l.area[2])/2-a.pieChartLinePadding-a.pieChartTextPadding);e=W(e,v,i);var s=o.activeRadius;if(e=e.map(function(e){return e._start_+=o.offsetAngle*Math.PI/180,e}),e.forEach(function(e,a){l.tooltip&&l.tooltip.index==a&&(t.beginPath(),t.setFillStyle(r(e.color,l.extra.pie.activeOpacity||.5)),t.moveTo(u.x,u.y),t.arc(u.x,u.y,e._radius_+s,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(o.borderWidth*l.pixelRatio),t.lineJoin="round",t.setStrokeStyle(o.borderColor),t.setFillStyle(e.color),t.moveTo(u.x,u.y),t.arc(u.x,u.y,e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill(),1==o.border&&t.stroke()}),"ring"===l.type){var b=.6*v;"number"===typeof l.extra.pie.ringWidth&&l.extra.pie.ringWidth>0&&(b=Math.max(0,v-l.extra.pie.ringWidth)),t.beginPath(),t.setFillStyle(l.background||"#ffffff"),t.moveTo(u.x,u.y),t.arc(u.x,u.y,b,0,2*Math.PI),t.closePath(),t.fill()}if(!1!==l.dataLabel&&1===i){for(var c=!1,h=0,p=e.length;h<p;h++)if(e[h].data>0){c=!0;break}c&&pe(e,l,a,t,v,u)}return 1===i&&"ring"===l.type&&se(l,a,t,u),{center:u,radius:v,series:e}}function ke(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{type:"area",activeOpacity:.5,activeRadius:10*l.pixelRatio,offsetAngle:0,labelWidth:15*l.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},l.extra.rose);0==a.pieChartLinePadding&&(a.pieChartLinePadding=o.activeRadius);var u={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.area[0]+(l.height-l.area[0]-l.area[2])/2},v=Math.min((l.width-l.area[1]-l.area[3])/2-a.pieChartLinePadding-a.pieChartTextPadding-a._pieTextMaxLength_,(l.height-l.area[0]-l.area[2])/2-a.pieChartLinePadding-a.pieChartTextPadding),s=o.minRadius||.5*v;e=Z(e,o.type,s,v,i);var b=o.activeRadius;if(e=e.map(function(e){return e._start_+=(o.offsetAngle||0)*Math.PI/180,e}),e.forEach(function(e,a){l.tooltip&&l.tooltip.index==a&&(t.beginPath(),t.setFillStyle(r(e.color,o.activeOpacity||.5)),t.moveTo(u.x,u.y),t.arc(u.x,u.y,b+e._radius_,e._start_,e._start_+2*e._rose_proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(o.borderWidth*l.pixelRatio),t.lineJoin="round",t.setStrokeStyle(o.borderColor),t.setFillStyle(e.color),t.moveTo(u.x,u.y),t.arc(u.x,u.y,e._radius_,e._start_,e._start_+2*e._rose_proportion_*Math.PI),t.closePath(),t.fill(),1==o.border&&t.stroke()}),!1!==l.dataLabel&&1===i){for(var c=!1,h=0,p=e.length;h<p;h++)if(e[h].data>0){c=!0;break}c&&pe(e,l,a,t,v,u)}return{center:u,radius:v,series:e}}function Pe(e,l,a,t){var i,r,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,u=n({},{startAngle:.75,endAngle:.25,type:"default",width:12*l.pixelRatio,gap:2*l.pixelRatio},l.extra.arcbar);e=Y(e,u,o),i=u.center?u.center:{x:l.width/2,y:l.height/2},u.radius?r=u.radius:(r=Math.min(i.x,i.y),r-=5*l.pixelRatio,r-=u.width/2);for(var v=0;v<e.length;v++){var s=e[v];t.setLineWidth(u.width),t.setStrokeStyle(u.backgroundColor||"#E9E9E9"),t.setLineCap("round"),t.beginPath(),"default"==u.type?t.arc(i.x,i.y,r-(u.width+u.gap)*v,u.startAngle*Math.PI,u.endAngle*Math.PI,!1):t.arc(i.x,i.y,r-(u.width+u.gap)*v,0,2*Math.PI,!1),t.stroke(),t.setLineWidth(u.width),t.setStrokeStyle(s.color),t.setLineCap("round"),t.beginPath(),t.arc(i.x,i.y,r-(u.width+u.gap)*v,u.startAngle*Math.PI,s._proportion_*Math.PI,!1),t.stroke()}return se(l,a,t,i),{center:i,radius:r,series:e}}function Ce(e,l,a,t,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,u=n({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},a.extra.gauge);void 0==u.oldAngle&&(u.oldAngle=u.startAngle),void 0==u.oldData&&(u.oldData=0),e=V(e,u.startAngle,u.endAngle);var v={x:a.width/2,y:a.height/2},s=Math.min(v.x,v.y);s-=5*a.pixelRatio,s-=u.width/2;var b=s-u.width,c=0;if("progress"==u.type){var h=s-3*u.width;i.beginPath();var p=i.createLinearGradient(v.x,v.y-h,v.x,v.y+h);p.addColorStop("0",r(l[0].color,.3)),p.addColorStop("1.0",r("#FFFFFF",.1)),i.setFillStyle(p),i.arc(v.x,v.y,h,0,2*Math.PI,!1),i.fill(),i.setLineWidth(u.width),i.setStrokeStyle(r(l[0].color,.3)),i.setLineCap("round"),i.beginPath(),i.arc(v.x,v.y,b,u.startAngle*Math.PI,u.endAngle*Math.PI,!1),i.stroke(),c=u.startAngle-u.endAngle+1;u.splitLine.splitNumber;var f=c/u.splitLine.splitNumber/u.splitLine.childNumber,d=-s-.5*u.width-u.splitLine.fixRadius,g=-s-u.width-u.splitLine.fixRadius+u.splitLine.width;i.save(),i.translate(v.x,v.y),i.rotate((u.startAngle-1)*Math.PI);for(var y=u.splitLine.splitNumber*u.splitLine.childNumber+1,x=l[0].data*o,A=0;A<y;A++)i.beginPath(),x>A/y?i.setStrokeStyle(r(l[0].color,1)):i.setStrokeStyle(r(l[0].color,.3)),i.setLineWidth(3*a.pixelRatio),i.moveTo(d,0),i.lineTo(g,0),i.stroke(),i.rotate(f*Math.PI);i.restore(),l=Y(l,u,o),i.setLineWidth(u.width),i.setStrokeStyle(l[0].color),i.setLineCap("round"),i.beginPath(),i.arc(v.x,v.y,b,u.startAngle*Math.PI,l[0]._proportion_*Math.PI,!1),i.stroke();var m=s-2.5*u.width;i.save(),i.translate(v.x,v.y),i.rotate((l[0]._proportion_-1)*Math.PI),i.beginPath(),i.setLineWidth(u.width/3);var w=i.createLinearGradient(0,.6*-m,0,.6*m);w.addColorStop("0",r("#FFFFFF",0)),w.addColorStop("0.5",r(l[0].color,1)),w.addColorStop("1.0",r("#FFFFFF",0)),i.setStrokeStyle(w),i.arc(0,0,m,.85*Math.PI,1.15*Math.PI,!1),i.stroke(),i.beginPath(),i.setLineWidth(1),i.setStrokeStyle(l[0].color),i.setFillStyle(l[0].color),i.moveTo(-m-u.width/3/2,-4),i.lineTo(-m-u.width/3/2-4,0),i.lineTo(-m-u.width/3/2,4),i.lineTo(-m-u.width/3/2,-4),i.stroke(),i.fill(),i.restore()}else{i.setLineWidth(u.width),i.setLineCap("butt");for(var S=0;S<e.length;S++){var M=e[S];i.beginPath(),i.setStrokeStyle(M.color),i.arc(v.x,v.y,s,M._startAngle_*Math.PI,M._endAngle_*Math.PI,!1),i.stroke()}i.save(),c=u.startAngle-u.endAngle+1;var D=c/u.splitLine.splitNumber,T=c/u.splitLine.splitNumber/u.splitLine.childNumber,O=-s-.5*u.width-u.splitLine.fixRadius,R=-s-.5*u.width-u.splitLine.fixRadius+u.splitLine.width,I=-s-.5*u.width-u.splitLine.fixRadius+u.splitLine.childWidth;i.translate(v.x,v.y),i.rotate((u.startAngle-1)*Math.PI);for(var E=0;E<u.splitLine.splitNumber+1;E++)i.beginPath(),i.setStrokeStyle(u.splitLine.color),i.setLineWidth(2*a.pixelRatio),i.moveTo(O,0),i.lineTo(R,0),i.stroke(),i.rotate(D*Math.PI);i.restore(),i.save(),i.translate(v.x,v.y),i.rotate((u.startAngle-1)*Math.PI);for(var k=0;k<u.splitLine.splitNumber*u.splitLine.childNumber+1;k++)i.beginPath(),i.setStrokeStyle(u.splitLine.color),i.setLineWidth(1*a.pixelRatio),i.moveTo(O,0),i.lineTo(I,0),i.stroke(),i.rotate(T*Math.PI);i.restore(),l=J(l,e,u,o);for(var P=0;P<l.length;P++){var C=l[P];i.save(),i.translate(v.x,v.y),i.rotate((C._proportion_-1)*Math.PI),i.beginPath(),i.setFillStyle(C.color),i.moveTo(u.pointer.width,0),i.lineTo(0,-u.pointer.width/2),i.lineTo(-b,0),i.lineTo(0,u.pointer.width/2),i.lineTo(u.pointer.width,0),i.closePath(),i.fill(),i.beginPath(),i.setFillStyle("#FFFFFF"),i.arc(0,0,u.pointer.width/6,0,2*Math.PI,!1),i.fill(),i.restore()}!1!==a.dataLabel&&ce(u,s,v,a,t,i)}return se(a,t,i,v),1===o&&"gauge"===a.type&&(a.extra.gauge.oldAngle=l[0]._proportion_,a.extra.gauge.oldData=l[0].data),{center:v,radius:s,innerRadius:b,categories:e,totalAngle:c}}function Le(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},l.extra.radar),u=S(l.categories.length),v={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.area[0]+(l.height-l.area[0]-l.area[2])/2},s=Math.min(v.x-(w(l.categories)+a.radarLabelTextMargin),v.y-a.radarLabelTextMargin);s-=l.padding[1],t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(o.gridColor),u.forEach(function(e){var l=h(s*Math.cos(e),s*Math.sin(e),v);t.moveTo(v.x,v.y),t.lineTo(l.x,l.y)}),t.stroke(),t.closePath();for(var b=function(e){var a={};t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(o.gridColor),u.forEach(function(l,n){var i=h(s/o.gridCount*e*Math.cos(l),s/o.gridCount*e*Math.sin(l),v);0===n?(a=i,t.moveTo(i.x,i.y)):t.lineTo(i.x,i.y)}),t.lineTo(a.x,a.y),t.stroke(),t.closePath()},c=1;c<=o.gridCount;c++)b(c);var p=H(u,v,s,e,l,i);return p.forEach(function(e,a){if(t.beginPath(),t.setFillStyle(r(e.color,o.opacity)),e.data.forEach(function(e,l){0===l?t.moveTo(e.position.x,e.position.y):t.lineTo(e.position.x,e.position.y)}),t.closePath(),t.fill(),!1!==l.dataPointShape){var n=e.data.map(function(e){return e.position});ve(n,e.color,e.pointShape,t,l)}}),he(u,s,v,l,a,t),{center:v,radius:s,angleList:u}}function je(e,l,a){a=0==a?1:a;for(var t=[],n=0;n<a;n++)t[n]=Math.random();return Math.floor(t.reduce(function(e,l){return e+l})/a*(l-e))+e}function Fe(e,l,a,t){for(var n=!1,i=0;i<l.length;i++)if(l[i].area){if(!(e[3]<l[i].area[1]||e[0]>l[i].area[2]||e[1]>l[i].area[3]||e[2]<l[i].area[0])){n=!0;break}if(e[0]<0||e[1]<0||e[2]>a||e[3]>t){n=!0;break}n=!1}return n}function Be(e){var l,a={};a.xMin=180,a.xMax=0,a.yMin=90,a.yMax=0;for(var t=0;t<e.length;t++)for(var n=e[t].geometry.coordinates,i=0;i<n.length;i++){l=n[i],1==l.length&&(l=l[0]);for(var r=0;r<l.length;r++){var o=l[r][0],u=l[r][1],v={x:o,y:u};a.xMin=a.xMin<v.x?a.xMin:v.x,a.xMax=a.xMax>v.x?a.xMax:v.x,a.yMin=a.yMin<v.y?a.yMin:v.y,a.yMax=a.yMax>v.y?a.yMax:v.y}}return a}function Ne(e,l,a,t,n,i){return{x:(l-a.xMin)*t+n,y:(a.yMax-e)*t+i}}function _e(e,l,a,t,n,i){return{x:(l-n)/t+a.xMin,y:a.yMax-(e-i)/t}}function Ue(e,l,a){if(l[1]==a[1])return!1;if(l[1]>e[1]&&a[1]>e[1])return!1;if(l[1]<e[1]&&a[1]<e[1])return!1;if(l[1]==e[1]&&a[1]>e[1])return!1;if(a[1]==e[1]&&l[1]>e[1])return!1;if(l[0]<e[0]&&a[1]<e[1])return!1;var t=a[0]-(a[0]-l[0])*(a[1]-e[1])/(a[1]-l[1]);return!(t<e[0])}function Ge(e,l){for(var a=0,t=0;t<l.length;t++){var n=l[t][0];1==l.length&&(n=l[t][0]);for(var i=0;i<n.length-1;i++){var r=n[i],o=n[i+1];Ue(e,r,o)&&(a+=1)}}return a%2==1}function ze(e,l,a,t){var i,o,u=n({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},l.extra.map),v=e,s=Be(v),b=l.width/Math.abs(s.xMax-s.xMin),c=l.height/Math.abs(s.yMax-s.yMin),h=b<c?b:c,p=l.width/2-Math.abs(s.xMax-s.xMin)/2*h,f=l.height/2-Math.abs(s.yMax-s.yMin)/2*h;t.beginPath(),t.clearRect(0,0,l.width,l.height),t.setFillStyle(l.background||"#FFFFFF"),t.rect(0,0,l.width,l.height),t.fill();for(var d=0;d<v.length;d++){t.beginPath(),t.setLineWidth(u.borderWidth*l.pixelRatio),t.setStrokeStyle(u.borderColor),t.setFillStyle(r(e[d].color,u.fillOpacity)),l.tooltip&&l.tooltip.index==d&&(t.setStrokeStyle(u.activeBorderColor),t.setFillStyle(r(u.activeFillColor,u.activeFillOpacity)));for(var y=v[d].geometry.coordinates,x=0;x<y.length;x++){i=y[x],1==i.length&&(i=i[0]);for(var A=0;A<i.length;A++)o=Ne(i[A][1],i[A][0],s,h,p,f),0===A?(t.beginPath(),t.moveTo(o.x,o.y)):t.lineTo(o.x,o.y);t.fill(),1==u.border&&t.stroke()}if(1==l.dataLabel){var m=v[d].properties.centroid;if(m){o=Ne(m[1],m[0],s,h,p,f);var w=v[d].textSize||a.fontSize,S=v[d].properties.name;t.beginPath(),t.setFontSize(w),t.setFillStyle(v[d].textColor||"#666666"),t.fillText(S,o.x-g(S,w)/2,o.y+w/2),t.closePath(),t.stroke()}}}l.chartData.mapData={bounds:s,scale:h,xoffset:p,yoffset:f},De(l,a,t,1),t.draw()}function He(e,l){var a=e.series.sort(function(e,l){return parseInt(l.textSize)-parseInt(e.textSize)});switch(l){case"normal":for(var t=0;t<a.length;t++){var n=a[t].name,i=a[t].textSize,r=g(n,i),o=void 0,u=void 0,v=void 0,s=0;while(1){s++,o=je(-e.width/2,e.width/2,5)-r/2,u=je(-e.height/2,e.height/2,5)+i/2,v=[o-5+e.width/2,u-5-i+e.height/2,o+r+5+e.width/2,u+5+e.height/2];var b=Fe(v,a,e.width,e.height);if(!b)break;if(1e3==s){v=[-100,-100,-100,-100];break}}a[t].area=v}break;case"vertical":for(var c=function(){return Math.random()>.7},h=0;h<a.length;h++){var p=a[h].name,f=a[h].textSize,d=g(p,f),y=c(),x=void 0,A=void 0,m=void 0,w=void 0,S=0;while(1){S++;var M=void 0;if(y?(x=je(-e.width/2,e.width/2,5)-d/2,A=je(-e.height/2,e.height/2,5)+f/2,m=[A-5-d+e.width/2,-x-5+e.height/2,A+5+e.width/2,-x+f+5+e.height/2],w=[e.width-(e.width/2-e.height/2)-(-x+f+5+e.height/2)-5,e.height/2-e.width/2+(A-5-d+e.width/2)-5,e.width-(e.width/2-e.height/2)-(-x+f+5+e.height/2)+f,e.height/2-e.width/2+(A-5-d+e.width/2)+d+5],M=Fe(w,a,e.height,e.width)):(x=je(-e.width/2,e.width/2,5)-d/2,A=je(-e.height/2,e.height/2,5)+f/2,m=[x-5+e.width/2,A-5-f+e.height/2,x+d+5+e.width/2,A+5+e.height/2],M=Fe(m,a,e.width,e.height)),!M)break;if(1e3==S){m=[-1e3,-1e3,-1e3,-1e3];break}}y?(a[h].area=w,a[h].areav=m):a[h].area=m,a[h].rotate=y}break}return a}function We(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;n({},{type:"normal",autoColors:!0},l.extra.word);t.beginPath(),t.setFillStyle(l.background||"#FFFFFF"),t.rect(0,0,l.width,l.height),t.fill(),t.save();var r=l.chartData.wordCloudData;t.translate(l.width/2,l.height/2);for(var o=0;o<r.length;o++){t.save(),r[o].rotate&&t.rotate(90*Math.PI/180);var u=r[o].name,v=r[o].textSize,s=g(u,v);t.beginPath(),t.setStrokeStyle(r[o].color),t.setFillStyle(r[o].color),t.setFontSize(v),r[o].rotate?r[o].areav[0]>0&&(l.tooltip&&l.tooltip.index==o?t.strokeText(u,(r[o].areav[0]+5-l.width/2)*i-s*(1-i)/2,(r[o].areav[1]+5+v-l.height/2)*i):t.fillText(u,(r[o].areav[0]+5-l.width/2)*i-s*(1-i)/2,(r[o].areav[1]+5+v-l.height/2)*i)):r[o].area[0]>0&&(l.tooltip&&l.tooltip.index==o?t.strokeText(u,(r[o].area[0]+5-l.width/2)*i-s*(1-i)/2,(r[o].area[1]+5+v-l.height/2)*i):t.fillText(u,(r[o].area[0]+5-l.width/2)*i-s*(1-i)/2,(r[o].area[1]+5+v-l.height/2)*i)),t.stroke(),t.restore()}t.restore()}function Qe(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},l.extra.funnel),u=(l.height-l.area[0]-l.area[2])/e.length,v={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.height-l.area[2]},s=o.activeWidth,b=Math.min((l.width-l.area[1]-l.area[3])/2-s,(l.height-l.area[0]-l.area[2])/2-s);e=Q(e,b,i),t.save(),t.translate(v.x,v.y);for(var c=0;c<e.length;c++)0==c?(l.tooltip&&l.tooltip.index==c&&(t.beginPath(),t.setFillStyle(r(e[c].color,o.activeOpacity)),t.moveTo(-s,0),t.lineTo(-e[c].radius-s,-u),t.lineTo(e[c].radius+s,-u),t.lineTo(s,0),t.lineTo(-s,0),t.closePath(),t.fill()),e[c].funnelArea=[v.x-e[c].radius,v.y-u,v.x+e[c].radius,v.y],t.beginPath(),t.setLineWidth(o.borderWidth*l.pixelRatio),t.setStrokeStyle(o.borderColor),t.setFillStyle(r(e[c].color,o.fillOpacity)),t.moveTo(0,0),t.lineTo(-e[c].radius,-u),t.lineTo(e[c].radius,-u),t.lineTo(0,0),t.closePath(),t.fill(),1==o.border&&t.stroke()):(l.tooltip&&l.tooltip.index==c&&(t.beginPath(),t.setFillStyle(r(e[c].color,o.activeOpacity)),t.moveTo(0,0),t.lineTo(-e[c-1].radius-s,0),t.lineTo(-e[c].radius-s,-u),t.lineTo(e[c].radius+s,-u),t.lineTo(e[c-1].radius+s,0),t.lineTo(0,0),t.closePath(),t.fill()),e[c].funnelArea=[v.x-e[c].radius,v.y-u*(c+1),v.x+e[c].radius,v.y-u*c],t.beginPath(),t.setLineWidth(o.borderWidth*l.pixelRatio),t.setStrokeStyle(o.borderColor),t.setFillStyle(r(e[c].color,o.fillOpacity)),t.moveTo(0,0),t.lineTo(-e[c-1].radius,0),t.lineTo(-e[c].radius,-u),t.lineTo(e[c].radius,-u),t.lineTo(e[c-1].radius,0),t.lineTo(0,0),t.closePath(),t.fill(),1==o.border&&t.stroke()),t.translate(0,-u);return t.restore(),!1!==l.dataLabel&&1===i&&Ze(e,l,t,u,o.labelAlign,s,v),{center:v,radius:b,series:e}}function Ze(e,l,a,t,n,r,o){for(var u=0;u<e.length;u++){var v=e[u],s=void 0,b=void 0,c=void 0,h=void 0,p=v.format?v.format(+v._proportion_.toFixed(2)):i.toFixed(100*v._proportion_)+"%";"right"==n?(s=0==u?(v.funnelArea[2]+o.x)/2:(v.funnelArea[2]+e[u-1].funnelArea[2])/2,b=s+2*r,c=v.funnelArea[1]+t/2,h=v.textSize||l.fontSize,a.setLineWidth(1*l.pixelRatio),a.setStrokeStyle(v.color),a.setFillStyle(v.color),a.beginPath(),a.moveTo(s,c),a.lineTo(b,c),a.stroke(),a.closePath(),a.beginPath(),a.moveTo(b,c),a.arc(b,c,2,0,2*Math.PI),a.closePath(),a.fill(),a.beginPath(),a.setFontSize(h),a.setFillStyle(v.textColor||"#666666"),a.fillText(p,b+5,c+h/2-2),a.closePath(),a.stroke(),a.closePath()):(s=0==u?(v.funnelArea[0]+o.x)/2:(v.funnelArea[0]+e[u-1].funnelArea[0])/2,b=s-2*r,c=v.funnelArea[1]+t/2,h=v.textSize||l.fontSize,a.setLineWidth(1*l.pixelRatio),a.setStrokeStyle(v.color),a.setFillStyle(v.color),a.beginPath(),a.moveTo(s,c),a.lineTo(b,c),a.stroke(),a.closePath(),a.beginPath(),a.moveTo(b,c),a.arc(b,c,2,0,2*Math.PI),a.closePath(),a.fill(),a.beginPath(),a.setFontSize(h),a.setFillStyle(v.textColor||"#666666"),a.fillText(p,b-5-g(p),c+h/2-2),a.closePath(),a.stroke(),a.closePath())}}function Ye(e,l){l.draw()}var Ve={easeIn:function(e){return Math.pow(e,3)},easeOut:function(e){return Math.pow(e-1,3)+1},easeInOut:function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},linear:function(e){return e}};function Je(e){this.isStop=!1,e.duration="undefined"===typeof e.duration?1e3:e.duration,e.timing=e.timing||"linear";var l=17;function a(){return"undefined"!==typeof setTimeout?function(e,l){setTimeout(function(){var l=+new Date;e(l)},l)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(e){e(null)}}var t=a(),n=null,i=function(a){if(null===a||!0===this.isStop)return e.onProcess&&e.onProcess(1),void(e.onAnimationFinish&&e.onAnimationFinish());if(null===n&&(n=a),a-n<e.duration){var r=(a-n)/e.duration,o=Ve[e.timing];r=o(r),e.onProcess&&e.onProcess(r),t(i,l)}else e.onProcess&&e.onProcess(1),e.onAnimationFinish&&e.onAnimationFinish()};i=i.bind(this),t(i,l)}function Xe(e,l,a,t){var i=this,r=l.series,o=l.categories;r=f(r,l,a);var v=l.animation?l.duration:0;i.animationInstance&&i.animationInstance.stop();var s=null;if("candle"==e){var b=n({},l.extra.candle.average);b.show?(s=u(b.day,b.name,b.color,r[0].data),s=f(s,l,a),l.seriesMA=s):s=l.seriesMA?l.seriesMA=f(l.seriesMA,l,a):r}else s=r;l._series_=r=O(r),l.area=new Array(4);for(var c=0;c<4;c++)l.area[c]=l.padding[c];var h=_(s,l,a,l.chartData),p=h.area.wholeHeight,d=h.area.wholeWidth;switch(l.legend.position){case"top":l.area[0]+=p;break;case"bottom":l.area[2]+=p;break;case"left":l.area[3]+=d;break;case"right":l.area[1]+=d;break}var g={},y=0;if("line"===l.type||"column"===l.type||"area"===l.type||"mix"===l.type||"candle"===l.type){if(g=ie(r,l,a),y=g.yAxisWidth,l.yAxis.showTitle){for(var x=0,A=0;A<l.yAxis.data.length;A++)x=Math.max(x,l.yAxis.data[A].titleFontSize?l.yAxis.data[A].titleFontSize:a.fontSize);l.area[0]+=(x+6)*l.pixelRatio}for(var m=0,w=0,S=0;S<y.length;S++)"left"==y[S].position?(l.area[3]+=w>0?y[S].width+l.yAxis.padding:y[S].width,w+=1):(l.area[1]+=m>0?y[S].width+l.yAxis.padding:y[S].width,m+=1)}else a.yAxisWidth=y;if(l.chartData.yAxisData=g,l.categories&&l.categories.length){l.chartData.xAxisData=ee(l.categories,l,a);var M=U(l.categories,l,a,l.chartData.xAxisData.eachSpacing),D=M.xAxisHeight,T=M.angle;a.xAxisHeight=D,a._xAxisTextAngle_=T,l.area[2]+=D,l.chartData.categoriesData=M}else if("line"===l.type||"area"===l.type||"points"===l.type){l.chartData.xAxisData=z(r,l,a),o=l.chartData.xAxisData.rangesFormat;var R=U(o,l,a,l.chartData.xAxisData.eachSpacing),I=R.xAxisHeight,E=R.angle;a.xAxisHeight=I,a._xAxisTextAngle_=E,l.area[2]+=I,l.chartData.categoriesData=R}else l.chartData.xAxisData={xAxisPoints:[]};if(l.enableScroll&&"right"==l.xAxis.scrollAlign&&void 0===l._scrollDistance_){var k=0,P=l.chartData.xAxisData.xAxisPoints,C=l.chartData.xAxisData.startX,L=l.chartData.xAxisData.endX,j=l.chartData.xAxisData.eachSpacing,F=j*(P.length-1),B=L-C;k=B-F,i.scrollOption={currentOffset:k,startTouchX:k,distance:0,lastMoveTime:0},l._scrollDistance_=k}switch("pie"!==e&&"ring"!==e&&"rose"!==e||(a._pieTextMaxLength_=!1===l.dataLabel?0:X(s)),e){case"word":var N=n({},{type:"normal",autoColors:!0},l.extra.word);1!=l.updateData&&void 0!=l.updateData||(l.chartData.wordCloudData=He(l,N.type)),this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),We(r,l,a,t,e),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"map":t.clearRect(0,0,l.width,l.height),ze(r,l,a,t);break;case"funnel":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.funnelData=Qe(r,l,a,t,e),Ie(l.series,l,a,t,l.chartData),De(l,a,t,e),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),Oe(o,l,a,t),Te(o,l,a,t);var n=Se(r,l,a,t,e),i=n.xAxisPoints,u=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=u,l.chartData.eachSpacing=v,Re(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Ie(l.series,l,a,t,l.chartData),De(l,a,t,e,v,i),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),Oe(o,l,a,t),Te(o,l,a,t);var n=Me(r,l,a,t,e),i=n.xAxisPoints,u=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=u,l.chartData.eachSpacing=v,Re(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Ie(l.series,l,a,t,l.chartData),De(l,a,t,e,v,i),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),Oe(o,l,a,t),Te(o,l,a,t);var n=Ae(r,l,a,t,e),i=n.xAxisPoints,u=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=u,l.chartData.eachSpacing=v,Re(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Ie(l.series,l,a,t,l.chartData),De(l,a,t,e,v,i),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),Oe(o,l,a,t),Te(o,l,a,t);var n=we(r,l,a,t,e),i=n.xAxisPoints,u=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=u,l.chartData.eachSpacing=v,Re(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Ie(l.series,l,a,t,l.chartData),De(l,a,t,e,v,i),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.pieData=Ee(r,l,a,t,e),Ie(l.series,l,a,t,l.chartData),De(l,a,t,e),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.pieData=ke(r,l,a,t,e),Ie(l.series,l,a,t,l.chartData),De(l,a,t,e),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.radarData=Le(r,l,a,t,e),Ie(l.series,l,a,t,l.chartData),De(l,a,t,e),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.arcbarData=Pe(r,l,a,t,e),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.gaugeData=Ce(o,r,l,a,t,e),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),Oe(o,l,a,t),Te(o,l,a,t);var n=me(r,s,l,a,t,e),i=n.xAxisPoints,u=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=u,l.chartData.eachSpacing=v,Re(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Ie(s||l.series,l,a,t,l.chartData),De(l,a,t,e,v,i),Ye(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break}}function qe(){this.events={}}Je.prototype.stop=function(){this.isStop=!0},qe.prototype.addEventListener=function(e,l){this.events[e]=this.events[e]||[],this.events[e].push(l)},qe.prototype.trigger=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];var n=a[0],i=a.slice(1);this.events[n]&&this.events[n].forEach(function(e){try{e.apply(null,i)}catch(a){console.error(l(a," at components\\u-charts\\u-charts.js:5187"))}})};var Ke=function(e){e.pixelRatio=e.pixelRatio?e.pixelRatio:1,e.fontSize=e.fontSize?e.fontSize*e.pixelRatio:13*e.pixelRatio,e.title=n({},e.title),e.subtitle=n({},e.subtitle),e.duration=e.duration?e.duration:1e3,e.yAxis=n({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*e.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},e.yAxis),e.yAxis.dashLength*=e.pixelRatio,e.yAxis.padding*=e.pixelRatio,e.xAxis=n({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},e.xAxis),e.xAxis.dashLength*=e.pixelRatio,e.legend=n({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:e.fontSize,lineHeight:e.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},e.legend),e.legend.borderWidth=e.legend.borderWidth*e.pixelRatio,e.legend.itemGap=e.legend.itemGap*e.pixelRatio,e.legend.padding=e.legend.padding*e.pixelRatio,e.legend.margin=e.legend.margin*e.pixelRatio,e.extra=n({},e.extra),e.rotate=!!e.rotate,e.animation=!!e.animation,e.rotate=!!e.rotate;var l=JSON.parse(JSON.stringify(t));if(l.colors=e.colors?e.colors:l.colors,l.yAxisTitleWidth=!0!==e.yAxis.disabled&&e.yAxis.title?l.yAxisTitleWidth:0,"pie"!=e.type&&"ring"!=e.type||(l.pieChartLinePadding=!1===e.dataLabel?0:e.extra.pie.labelWidth*e.pixelRatio||l.pieChartLinePadding*e.pixelRatio),"rose"==e.type&&(l.pieChartLinePadding=!1===e.dataLabel?0:e.extra.rose.labelWidth*e.pixelRatio||l.pieChartLinePadding*e.pixelRatio),l.pieChartTextPadding=!1===e.dataLabel?0:l.pieChartTextPadding*e.pixelRatio,l.yAxisSplit=e.yAxis.splitNumber?e.yAxis.splitNumber:t.yAxisSplit,l.rotate=e.rotate,e.rotate){var i=e.width,r=e.height;e.width=r,e.height=i}e.padding=e.padding?e.padding:l.padding;for(var o=0;o<4;o++)e.padding[o]*=e.pixelRatio;l.yAxisWidth=t.yAxisWidth*e.pixelRatio,l.xAxisHeight=t.xAxisHeight*e.pixelRatio,e.enableScroll&&e.xAxis.scrollShow&&(l.xAxisHeight+=6*e.pixelRatio),l.xAxisLineHeight=t.xAxisLineHeight*e.pixelRatio,l.fontSize=e.fontSize,l.titleFontSize=t.titleFontSize*e.pixelRatio,l.subtitleFontSize=t.subtitleFontSize*e.pixelRatio,l.toolTipPadding=t.toolTipPadding*e.pixelRatio,l.toolTipLineHeight=t.toolTipLineHeight*e.pixelRatio,l.columePadding=t.columePadding*e.pixelRatio,e.$this=e.$this?e.$this:this,this.context=a.createCanvasContext(e.canvasId,e.$this),e.chartData={},this.event=new qe,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=e,this.config=l,Xe.call(this,e.type,e,l,this.context)};Ke.prototype.updateData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=n({},this.opts,e),this.opts.updateData=!0;var l=e.scrollPosition||"current";switch(l){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var a=ie(this.opts.series,this.opts,this.config),t=a.yAxisWidth;this.config.yAxisWidth=t;var i=0,r=ee(this.opts.categories,this.opts,this.config),o=r.xAxisPoints,u=r.startX,v=r.endX,s=r.eachSpacing,b=s*(o.length-1),c=v-u;i=c-b,this.scrollOption={currentOffset:i,startTouchX:i,distance:0,lastMoveTime:0},this.opts._scrollDistance_=i;break}Xe.call(this,this.opts.type,this.opts,this.config,this.context)},Ke.prototype.zoom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var a=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=e.itemCount;var t=ie(this.opts.series,this.opts,this.config),n=t.yAxisWidth;this.config.yAxisWidth=n;var i=0,r=ee(this.opts.categories,this.opts,this.config),o=r.xAxisPoints,u=r.startX,v=r.endX,s=r.eachSpacing,b=s*a,c=v-u,h=c-s*(o.length-1);i=c/2-b,i>0&&(i=0),i<h&&(i=h),this.scrollOption={currentOffset:i,startTouchX:i,distance:0,lastMoveTime:0},this.opts._scrollDistance_=i,Xe.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(l("请启用滚动条后使用！"," at components\\u-charts\\u-charts.js:5363"))},Ke.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Ke.prototype.addEventListener=function(e,l){this.event.addEventListener(e,l)},Ke.prototype.getCurrentDataIndex=function(e){var l=null;if(l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],l){var a=A(l,this.opts,e);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?F({x:a.x,y:a.y},this.opts.chartData.pieData):"radar"===this.opts.type?P({x:a.x,y:a.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?C({x:a.x,y:a.y},this.opts.chartData.funnelData):"map"===this.opts.type?j({x:a.x,y:a.y},this.opts):"word"===this.opts.type?L({x:a.x,y:a.y},this.opts.chartData.wordCloudData):R({x:a.x,y:a.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Ke.prototype.getLegendDataIndex=function(e){var l=null;if(l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],l){var a=A(l,this.opts,e);return I({x:a.x,y:a.y},this.opts.chartData.legendData)}return-1},Ke.prototype.touchLegend=function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=null;if(a=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],a){A(a,this.opts,e);var t=this.getLegendDataIndex(e);t>=0&&(this.opts.series[t].show=!this.opts.series[t].show,this.opts.animation=!!l.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Xe.call(this,this.opts.type,this.opts,this.config,this.context))}},Ke.prototype.showToolTip=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=null;t=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],t||console.log(l("touchError"," at components\\u-charts\\u-charts.js:5500"));var i=A(t,this.opts,e),r=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:r,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var u=this.getCurrentDataIndex(e);if(u>-1){var v=m(this.opts.series,u);if(0!==v.length){var s=M(v,this.opts.chartData.calPoints,u,this.opts.categories,a),b=s.textList,c=s.offset;c.y=i.y,o.tooltip={textList:b,offset:c,option:a,index:u}}}Xe.call(this,o.type,o,this.config,this.context)}if("mix"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=m(this.opts.series,u);if(0!==v.length){var h=D(v,this.opts.chartData.calPoints,u,this.opts.categories,a);b=h.textList,c=h.offset;c.y=i.y,o.tooltip={textList:b,offset:c,option:a,index:u}}}Xe.call(this,o.type,o,this.config,this.context)}if("candle"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=m(this.opts.series,u);if(0!==v.length){s=T(this.opts.series[0].data,v,this.opts.chartData.calPoints,u,this.opts.categories,this.opts.extra.candle,a),b=s.textList,c=s.offset;c.y=i.y,o.tooltip={textList:b,offset:c,option:a,index:u}}}Xe.call(this,o.type,o,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=this.opts._series_[u],b=[{text:a.format?a.format(v):v.name+": "+v.data,color:v.color}],c={x:i.x,y:i.y};o.tooltip={textList:b,offset:c,option:a,index:u}}Xe.call(this,o.type,o,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=this.opts._series_[u],b=[{text:a.format?a.format(v):v.properties.name,color:v.color}],c={x:i.x,y:i.y};o.tooltip={textList:b,offset:c,option:a,index:u}}o.updateData=!1,Xe.call(this,o.type,o,this.config,this.context)}if("radar"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=m(this.opts.series,u);if(0!==v.length){b=v.map(function(e){return{text:a.format?a.format(e):e.name+": "+e.data,color:e.color}}),c={x:i.x,y:i.y};o.tooltip={textList:b,offset:c,option:a,index:u}}}Xe.call(this,o.type,o,this.config,this.context)}},Ke.prototype.translate=function(e){this.scrollOption={currentOffset:e,startTouchX:e,distance:0,lastMoveTime:0};var l=n({},this.opts,{_scrollDistance_:e,animation:!1});Xe.call(this,this.opts.type,l,this.config,this.context)},Ke.prototype.scrollStart=function(e){var l=null;l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0];var a=A(l,this.opts,e);l&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=a.x)},Ke.prototype.scroll=function(e){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var l=this.opts.extra.touchMoveLimit||20,a=Date.now(),t=a-this.scrollOption.lastMoveTime;if(!(t<Math.floor(1e3/l))){this.scrollOption.lastMoveTime=a;var i=null;if(i=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],i&&!0===this.opts.enableScroll){var r,o=A(i,this.opts,e);r=o.x-this.scrollOption.startTouchX;var u=this.scrollOption.currentOffset,s=v(this,u+r,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=r=s-u;var b=n({},this.opts,{_scrollDistance_:u+r,animation:!1});return Xe.call(this,b.type,b,this.config,this.context),u+r}}},Ke.prototype.scrollEnd=function(e){if(!0===this.opts.enableScroll){var l=this.scrollOption,a=l.currentOffset,t=l.distance;this.scrollOption.currentOffset=a+t,this.scrollOption.distance=0}},"object"===typeof e.exports&&(e.exports=Ke)}).call(this,a("0de9")["default"],a("6e42")["default"])},2448:function(e,l,a){},2877:function(e,l,a){"use strict";function t(e,l,a,t,n,i,r,o){var u,v="function"===typeof e?e.options:e;if(l&&(v.render=l,v.staticRenderFns=a,v._compiled=!0),t&&(v.functional=!0),i&&(v._scopeId="data-v-"+i),r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},v._ssrRegister=u):n&&(u=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(v.functional){v._injectStyles=u;var s=v.render;v.render=function(e,l){return u.call(l),s(e,l)}}else{var b=v.beforeCreate;v.beforeCreate=b?[].concat(b,u):[u]}return{exports:e,options:v}}a.d(l,"a",function(){return t})},"2f62":function(e,l,a){"use strict";a.r(l),a.d(l,"Store",function(){return p}),a.d(l,"install",function(){return R}),a.d(l,"mapState",function(){return I}),a.d(l,"mapMutations",function(){return E}),a.d(l,"mapGetters",function(){return k}),a.d(l,"mapActions",function(){return P}),a.d(l,"createNamespacedHelpers",function(){return C});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var t=function(e){var l=Number(e.version.split(".")[0]);if(l>=2)e.mixin({beforeCreate:t});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[t].concat(e.init):t,a.call(this,e)}}function t(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},n="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(e){n&&(e._devtoolHook=n,n.emit("vuex:init",e),n.on("vuex:travel-to-state",function(l){e.replaceState(l)}),e.subscribe(function(e,l){n.emit("vuex:mutation",e,l)}))}function r(e,l){Object.keys(e).forEach(function(a){return l(e[a],a)})}function o(e){return null!==e&&"object"===typeof e}function u(e){return e&&"function"===typeof e.then}var v=function(e,l){this.runtime=l,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},s={namespaced:{configurable:!0}};s.namespaced.get=function(){return!!this._rawModule.namespaced},v.prototype.addChild=function(e,l){this._children[e]=l},v.prototype.removeChild=function(e){delete this._children[e]},v.prototype.getChild=function(e){return this._children[e]},v.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},v.prototype.forEachChild=function(e){r(this._children,e)},v.prototype.forEachGetter=function(e){this._rawModule.getters&&r(this._rawModule.getters,e)},v.prototype.forEachAction=function(e){this._rawModule.actions&&r(this._rawModule.actions,e)},v.prototype.forEachMutation=function(e){this._rawModule.mutations&&r(this._rawModule.mutations,e)},Object.defineProperties(v.prototype,s);var b=function(e){this.register([],e,!1)};function c(e,l,a){if(l.update(a),a.modules)for(var t in a.modules){if(!l.getChild(t))return void 0;c(e.concat(t),l.getChild(t),a.modules[t])}}b.prototype.get=function(e){return e.reduce(function(e,l){return e.getChild(l)},this.root)},b.prototype.getNamespace=function(e){var l=this.root;return e.reduce(function(e,a){return l=l.getChild(a),e+(l.namespaced?a+"/":"")},"")},b.prototype.update=function(e){c([],this.root,e)},b.prototype.register=function(e,l,a){var t=this;void 0===a&&(a=!0);var n=new v(l,a);if(0===e.length)this.root=n;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],n)}l.modules&&r(l.modules,function(l,n){t.register(e.concat(n),l,a)})},b.prototype.unregister=function(e){var l=this.get(e.slice(0,-1)),a=e[e.length-1];l.getChild(a).runtime&&l.removeChild(a)};var h;var p=function(e){var l=this;void 0===e&&(e={}),!h&&"undefined"!==typeof window&&window.Vue&&R(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var t=e.strict;void 0===t&&(t=!1);var n=e.state;void 0===n&&(n={}),"function"===typeof n&&(n=n()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new b(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var r=this,o=this,u=o.dispatch,v=o.commit;this.dispatch=function(e,l){return u.call(r,e,l)},this.commit=function(e,l,a){return v.call(r,e,l,a)},this.strict=t,x(this,n,[],this._modules.root),y(this,n),a.forEach(function(e){return e(l)}),h.config.devtools&&i(this)},f={state:{configurable:!0}};function d(e,l){return l.indexOf(e)<0&&l.push(e),function(){var a=l.indexOf(e);a>-1&&l.splice(a,1)}}function g(e,l){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;x(e,a,[],e._modules.root,!0),y(e,a,l)}function y(e,l,a){var t=e._vm;e.getters={};var n=e._wrappedGetters,i={};r(n,function(l,a){i[a]=function(){return l(e)},Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var o=h.config.silent;h.config.silent=!0,e._vm=new h({data:{$$state:l},computed:i}),h.config.silent=o,e.strict&&D(e),t&&(a&&e._withCommit(function(){t._data.$$state=null}),h.nextTick(function(){return t.$destroy()}))}function x(e,l,a,t,n){var i=!a.length,r=e._modules.getNamespace(a);if(t.namespaced&&(e._modulesNamespaceMap[r]=t),!i&&!n){var o=T(l,a.slice(0,-1)),u=a[a.length-1];e._withCommit(function(){h.set(o,u,t.state)})}var v=t.context=A(e,r,a);t.forEachMutation(function(l,a){var t=r+a;w(e,t,l,v)}),t.forEachAction(function(l,a){var t=l.root?a:r+a,n=l.handler||l;S(e,t,n,v)}),t.forEachGetter(function(l,a){var t=r+a;M(e,t,l,v)}),t.forEachChild(function(t,i){x(e,l,a.concat(i),t,n)})}function A(e,l,a){var t=""===l,n={dispatch:t?e.dispatch:function(a,t,n){var i=O(a,t,n),r=i.payload,o=i.options,u=i.type;return o&&o.root||(u=l+u),e.dispatch(u,r)},commit:t?e.commit:function(a,t,n){var i=O(a,t,n),r=i.payload,o=i.options,u=i.type;o&&o.root||(u=l+u),e.commit(u,r,o)}};return Object.defineProperties(n,{getters:{get:t?function(){return e.getters}:function(){return m(e,l)}},state:{get:function(){return T(e.state,a)}}}),n}function m(e,l){var a={},t=l.length;return Object.keys(e.getters).forEach(function(n){if(n.slice(0,t)===l){var i=n.slice(t);Object.defineProperty(a,i,{get:function(){return e.getters[n]},enumerable:!0})}}),a}function w(e,l,a,t){var n=e._mutations[l]||(e._mutations[l]=[]);n.push(function(l){a.call(e,t.state,l)})}function S(e,l,a,t){var n=e._actions[l]||(e._actions[l]=[]);n.push(function(l,n){var i=a.call(e,{dispatch:t.dispatch,commit:t.commit,getters:t.getters,state:t.state,rootGetters:e.getters,rootState:e.state},l,n);return u(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):i})}function M(e,l,a,t){e._wrappedGetters[l]||(e._wrappedGetters[l]=function(e){return a(t.state,t.getters,e.state,e.getters)})}function D(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function T(e,l){return l.length?l.reduce(function(e,l){return e[l]},e):e}function O(e,l,a){return o(e)&&e.type&&(a=l,l=e,e=e.type),{type:e,payload:l,options:a}}function R(e){h&&e===h||(h=e,t(h))}f.state.get=function(){return this._vm._data.$$state},f.state.set=function(e){0},p.prototype.commit=function(e,l,a){var t=this,n=O(e,l,a),i=n.type,r=n.payload,o=(n.options,{type:i,payload:r}),u=this._mutations[i];u&&(this._withCommit(function(){u.forEach(function(e){e(r)})}),this._subscribers.forEach(function(e){return e(o,t.state)}))},p.prototype.dispatch=function(e,l){var a=this,t=O(e,l),n=t.type,i=t.payload,r={type:n,payload:i},o=this._actions[n];if(o)return this._actionSubscribers.forEach(function(e){return e(r,a.state)}),o.length>1?Promise.all(o.map(function(e){return e(i)})):o[0](i)},p.prototype.subscribe=function(e){return d(e,this._subscribers)},p.prototype.subscribeAction=function(e){return d(e,this._actionSubscribers)},p.prototype.watch=function(e,l,a){var t=this;return this._watcherVM.$watch(function(){return e(t.state,t.getters)},l,a)},p.prototype.replaceState=function(e){var l=this;this._withCommit(function(){l._vm._data.$$state=e})},p.prototype.registerModule=function(e,l,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,l),x(this,this.state,e,this._modules.get(e),a.preserveState),y(this,this.state)},p.prototype.unregisterModule=function(e){var l=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var a=T(l.state,e.slice(0,-1));h.delete(a,e[e.length-1])}),g(this)},p.prototype.hotUpdate=function(e){this._modules.update(e),g(this,!0)},p.prototype._withCommit=function(e){var l=this._committing;this._committing=!0,e(),this._committing=l},Object.defineProperties(p.prototype,f);var I=j(function(e,l){var a={};return L(l).forEach(function(l){var t=l.key,n=l.val;a[t]=function(){var l=this.$store.state,a=this.$store.getters;if(e){var t=F(this.$store,"mapState",e);if(!t)return;l=t.context.state,a=t.context.getters}return"function"===typeof n?n.call(this,l,a):l[n]},a[t].vuex=!0}),a}),E=j(function(e,l){var a={};return L(l).forEach(function(l){var t=l.key,n=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.commit;if(e){var i=F(this.$store,"mapMutations",e);if(!i)return;t=i.context.commit}return"function"===typeof n?n.apply(this,[t].concat(l)):t.apply(this.$store,[n].concat(l))}}),a}),k=j(function(e,l){var a={};return L(l).forEach(function(l){var t=l.key,n=l.val;n=e+n,a[t]=function(){if(!e||F(this.$store,"mapGetters",e))return this.$store.getters[n]},a[t].vuex=!0}),a}),P=j(function(e,l){var a={};return L(l).forEach(function(l){var t=l.key,n=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.dispatch;if(e){var i=F(this.$store,"mapActions",e);if(!i)return;t=i.context.dispatch}return"function"===typeof n?n.apply(this,[t].concat(l)):t.apply(this.$store,[n].concat(l))}}),a}),C=function(e){return{mapState:I.bind(null,e),mapGetters:k.bind(null,e),mapMutations:E.bind(null,e),mapActions:P.bind(null,e)}};function L(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(l){return{key:l,val:e[l]}})}function j(e){return function(l,a){return"string"!==typeof l?(a=l,l=""):"/"!==l.charAt(l.length-1)&&(l+="/"),e(l,a)}}function F(e,l,a){var t=e._modulesNamespaceMap[a];return t}var B={Store:p,install:R,version:"3.0.1",mapState:I,mapMutations:E,mapGetters:k,mapActions:P,createNamespacedHelpers:C};l["default"]=B},"2fd5":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB80lEQVRYR8WXTUsbURSGnysuU5oJSF0UuikoiBuh+AcEiwtBkMk23aQ/oO5KhUK3tlshG7VF7CRduBdR08bS/pcmqVKJyeSWJLZxmMn9yE101nPnfeac954PwT0/4p71iQKULuYIm0UQP3mQzrMiGomAn+vL0N4GPpH13rj8RBQgqL0D+frmgyek0s8TIYLqIbDafU/KAtlMfliIKMD+5SMmr09AzCohupFqlRF4rhBxDwQXU9A800IEv+aR4tQVItmEdwgx+BZ0IVoV4KkyHY6RUF/D4HIamuVxQujrgA0ElEE8/G9M33uJEFJ1Q/QAndOmEAe1BSbax30I9vDTORWEGUAf4jvwROkJSwhzgI7qlz+PCRtfRwlhBzAGCHuAQRCkV/DFVcRwvXScgkj1jBn3xHAASRCSLbLeRszxpfoi7fDoFkSOrLf7773RAcB7fO+VFgBe4Hs7bgAxM8oKeEt3kwI7cW1NsEvBiMU7aTAH6FXDW4VIGXbtn9t5IKkUD752xuJmETDtA522HGlG+j6gB7ARj0xHZuJqgKHFZQGDNqz2gIu45YQ8YCgd/yiWHIGgnoHwm34i/j2DDM9dJ+K4B4LqJvDWYDEpAuuuO0Ec4KD+jIlwDyl+KFezoLoGfEDycbSr2bD7lcM581LsIKI6+hfMJHMwHgrDAQAAAABJRU5ErkJggg=="},3161:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__7280200"};l.default=t},"37fa":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAACZCAYAAAAclZBuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExQ0MzRTMzMUQ0MjExRUE5QjkxQzhGMDBBRjk2MkZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExQ0MzRTM0MUQ0MjExRUE5QjkxQzhGMDBBRjk2MkZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTFDQzNFMzExRDQyMTFFQTlCOTFDOEYwMEFGOTYyRkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTFDQzNFMzIxRDQyMTFFQTlCOTFDOEYwMEFGOTYyRkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6/4HKSAAAUC0lEQVR42uzdCZAc1X3H8X/PtauVQBeIQ0JCSLJAHIJAJA4ZY04jG1ccGxlKrsJOBA7GhkospwxV2CmcGMfGqUBCSAiOrTiEwqZCsIlCuC9zCBmQxC1hdCAESNZ97DFH+t/bPbzp6Z7uOXa2d/X9UK9mNdPTM9uz/Po/r1+/tkq7V0mdrJj3AcD+qBTzvlCZOsPYCrjfighnQhvA/hC+5v0l3zKW77GmgtkKuDXDOBUQzlFBDQDDLaBLAT8XQ0I6sorONBDIKSOQ/bdWQHgDwHAOZn8rBtwW6wnoTIxQTvkCOW38nPE9lgqprAFgOIeyGAHstULIz15Ye90blj+cMzVC2ayE0wEt4/t3UPUctG4AGOpdFxLQbVEyQthred+/vWb5ujoqwjmsYvZXwV4IZ92WCWheNW2GMwAM96D2QtmrivMBrc9tllFdiy+cAytm/0G9lFENe4Gcc287fCGdDaicORAIYDhXzf5+Za8a7vOFcY+RjX3ucwvG+gpGRpbCKmazSyJjBHCHr42y29l2+7jdZtltnMQffgcAw0233bbYbY3dnrTbY3bb7eZij69o7TNCPWVUzv2VrHuCiX/URcYIZa2SO43WZbdz7fZVux3OZwEAgd6z2+12e8hue93g9lqvUVnnpXLURino4J+/C6PDCGStkq+y2wK2OQDUpIXrX7k9CrfKR6PWwobXVR3881fMaaNaNoP563a7mO0NALEtcLP1FqkeUmcOpSv3M5ujJ4KqZa9i1lC+gFAGgIZc7GZol1QOnvAPmnCyOBXQjeGFc0YqD/RdybYFgIZd6Wapl6sZqTxhrzx6LeV7omWEcsaomM+z23i2KwA0bLybpV7FnDHCuWJIcSqkWvb3MZ/BNgWAps1zM9U7JyQdVDX757bwn4LtVc0z2J4A0LTpRrWcluqzpcvBHDQ/hr87YwzbEwCaNkaquzGqpk82K2aR6jkyzIAGADTHH8ipgAJZ/KMywrozAACtC+fQboywYBapnoMZANAa/ouNSK1gFgm/KgkAoDWskKyVqIqZS0QBwMAGc9j1UgO7KayQsAYAtC6YgzK3IpgJXwBIRmhHHtijYgaAga2YJaxiDkxtAMDAV8hxgxkAMEgIZgAgmAEABDMAEMwDa8vvt8lrb7wtL/z2lWH/Ae3d2+20Rp8LgGBui5v/6U6Zd95X5Iqrbxj24XPf/Y/KpJnny5f+9Nq6Q1mf96nPXblf7MCA4WRIzhx3zdcWyq23/0LWrX9fnl++Uj555pwBe627frG0Jes59NCDGnqfS+76tXN74gkz63qebhe1bPmrMvXIiW35XL6x+Mamnr/46stkyuTD+b8SBPNQfNMHjR8rV12xwAnnnyy5d0CD+apv/qAl61n4xQvrfp+6U9BgVTt27o7cScy2w3vW0dOcn3W7qCmTD5WHHnm27h3H7T+9R1a9ujrW+/yHm/qr+Tvv/t+mttGVixbwfySQpGB+7Mll8v77W+p+3tIHf+OEyAEju2I/59IF8+t+nTmnHCszpk2u+3mr315fDtd6uyJ+ePPPyv/WnVCUW3/8bSeYtetCt4vSbxVxdi7+HYeGctyg9YLZc93iP5GJh00I3MHVegxAwoL5v371SMMV17e/c0tdyzcSzJddelFDzzOr3nrc+OM7nFBVP7jhamfHo90aui6tgv/ymi8HVswa6Nf/9a3lnYm+b6Uhr+ubf/4Z8ukLPh5YMZv++LPnyOlzZld0qehrm+sMM99ev1e5+8O31mMAEhbMxx87w67aalecWtVF2bZtZ7la1BAaO/bAIfehaJh7FbKG8hVf+UI5ePWgpwbsdLt6/8OTj6t6rn578LbX3924uByCo0Z1yWVf/Y6zba771qKqcPTzd7s8s2yFs1791tDIDgrAEAxmL3yCujg+v3Cx8/Pf3vDn0tXVWXM95tf4//jJjUPuA9Hft1xd2juWL33xM+XHNEy9vnUdkfKbh/69vD20UtYDfrfd0R/oupwZvhfNP8vZsem3kr+49iZ54N7b+OsHEirxw+XmnnJC+edXX18TufxLK9+IXV0n9ffVfljtrvib736jakekI1LUIRPGy9r1G52fdUy3Do3THZhWyfr8a7+5qGrdOurB64pgjDNAxdwwDSatHLUKfuLp5YFf303aV63OP/u0IfmB6O+7+Jovy9cuvyTw24GOSHnr5fucW7OS9rbRo08sk+9d//XAdetQtHZUyt//0R2hXUi1HgMwRIJZ6cEqDZ2HH3/eCa0w69a/V+5fPW3u7CH7oTQyHnjL1u3OrXZzbN+xq+7n+0dWNMPrSqr3MQBDKJhnuydXaOhq+IadhPDLex8sd2OYFWUr6KgEPQBWLz14Wa9mxwM38vxWBvOSf7lBph11RMV9etAy6jEACQzmcUecGbnMSWdcEiuYaoWTBne9QaQ7hUaGvTVD36c5ZK3VdEfT7E4giAZv2KiPWo8BGEIV82DSkzZawT9OOA4N5YEemhYWzDpRlHnGoFf56615BqJ5tiGAYRzMOqpgfsBJEK0ysmtE7GWTMGbXH5LNOu+c0yK7ej7cvDXwxA//NwfvbEMAwzyY9ZRd/mePDslGPf3QT1veB296+3cbGnoMyVDcs0Xy656T4ta1Uurb19qVp7OSHj1JMpPnSGrs5MbXUypK/t0XJb/hBSn17Bara7xkp8yV9KHHViyW37DcaaWeXWKNtJc58nRJTziaYEb9vO6T2QEzygXNNRHHxk0fyvdv+reK+3T9YV01umPcuuHJ8r91pIh2e8Tpn9czDBt5DIOv8OGb0vv6/9jpXBigF+iTwtZ3nJaxQzI79Yz6dxzbN0jfWw87O5ByTu/9vf2+l0o23y2ZSSc79+ky+Y0vfbTMHnuZV38tqfdWSO5j5zphTjAPAdp3Wk9lqqFmdnXEOXjpr1yDvhnU6j4JmmsiDj0JxR/Muh6+mcCslHtfu9+pRtshv/YZSdlVbD0VrFbyfb97KvRxfUzXV9q3vSKUK37Pbeul+4Ulkjv6U5I+ZBbBjOHNrLD9vJ1W2M4Igy+/9tm2hfJHQfp07GAu7nyvZih7FXnfmw863Ru1V1aQ3jcekM7RE8XqHE0wDxUaIGH07LVaJ0pEHbxsZtwuY34xYBXz1nfa/pqlfduk1L3TDsfos0EL78cbrlrYsibmL1xwum60v5tgDmHO3TB92uRBfz+1qrqoU4o5eImhqJTvGZzX1QNzMYI5sgpu5LV799CVUYs3IY8aOXIE/5fUqOQJfQyvPUK87pP+g3VrWvrSqVETErlJ6MpAw99wHnn8Obn1X+92JkaKeymqWpMY6ZzcYdO/ApnDT5D8u8tbNmLE6hgl6Qkzk/m7JuWNmONbqQjDLf2/p2TFyjebXk+jF4fVM/+u/94/Vl3qKu6lqGr1zQddKAEoB+mIMZI54hTJr3u+JevLTjvLLpmTWZsm5l29uXqtc6vzBaNGxekb8taouBeH1UmjVr7yVvmUbPPMP/2srrq8P039l6Lyq3XNP3NnAfgVd26S4q4PnEq51Lu3Rr9ERtLjpojVNU4k3yvFHRsrxjr76YHH/IbfipXJSUpHZ+jzCOZKOqWnOvesufwl1tDoCSYe79p9Ud0Ues3B+x94snzdQY9O4L9wwfyq8dRRIV/rmn9AcCLnnXHVhc3RXWTpQ46R7IyzxcpWXpRZz17UE0+CDvL1vVP57U2r8ez0TxLMHp0LwguLk0+axR9kDc0Gm3ftvlp0gn4zlL0w/sS8UyIvVAC0io5ZjhPKmcNnS3bm+cFF9LgjpePkhdKz/OeRp5frqdtOd8nEkwhmZU7QY15KajCZM6j5Rc2x3Mi8zUlz5aIFzpW5mT0OgyW/aWXkMnoATyvlmst0jpbstE84J5REvqYdzgSz+7X5hzf/rP/r7hULIi+22i7NTBoUNR90M5o9+Bd34v56RkdoP/SevfEmu4kziRE7AjhjqvO9MbowZsU6gKddHbL6EefMwJqvu287XRnqvvsfLX9lvvTiC/mLjNCqg3+tdNMtS2LviOJMYlTr1G6goqti1MExF8xIasRYKe7+cEj8XoMezF61rKMEklQp1QoHb6a1MP7JjfzqnezIpBddbeZipk8/+1LVAT1gyKpjTHNpoGbMG47B/N93/b1TcX332j8b9I2hw7V0BxFFT4TQMbf+4V3ec6OGfXnL1TNhv+e6by1qagemO5V161vbzbL46sucPmmgVSz7v1i5vPM9SR92fHQo93U7w+OGzO9f2r0q5QZ0zm7awavjTUbZ7QC76WzqOrjvTv5UhgevP1h3CmEXtcX+ad9jPxqU1+046RJJjTmi6v7uZ26Lnh8jnZXOUy8XKzey5mI6xah/eFxgII4Y46xvgC3UL+V20z2FXtJef0kdoK0TBmnHej7Fn+P+RcNYK25CGYn/Oj/l1OiFCn3O5Pe1DuoVt62TvrXxLs2WjfOabUAwA0hmME88SbJHnRk56kKvaNLz4n86E+BXdF/ke5w5pntW3BM9UVI655xcEqdbpC2/Ox8/gORWzXMlM+kPpOgMYyvZIfyu9OmwN3847/5Qel6+2+nSsEaMte/o6z8du8YBv+yMcyQ1ZpKIZTkjNpI0bwbBDCDZ0tnysLj8+mU1F9VTr+POsaxhrqGfRHRlABgSdDKjwgevt2x9hU2rEjuumWAGMCQUYpyiXf86XyGYAaA6heL1qBb37Wj5S+tlrQhmAImlEwINyuvGvEp1qmts6wMw7indBDOAwZA++GPtD6DRk8TKdcV7f4efaKd4dGSlJxwd76BeOpuY4XEEM4BAekJH3JBsTamckuz0s+qqbnPHXmS/0VyNhTLOOjNT54mVDZ/ywMp2Ssdxf2R/SziAYAaQXDoGOHfCF9oTVna1mjv2s5I68LC6q/rOuYv6p/us+gUsyc0833n/VqZDsjMvCKywtUrusNehk+gn9rNgrgwAFQq9ktehZFvfkVLPntau265UtfsiM/HEyPktoujJJnrV7NK+HeULteq1+yqW2fWBM/l9ac+W/mUmz6l7ZzAAIufKIJgBIGHBTFcGACQMwQwABDMAgGAGgCGE2eUAVErYqAy9JFR+4wop7toU68rZsVmWM7QufdB092rbaYIZQPLo8LLeVfcO6BwSOqF9fsMLkjvm05I+eEbNZfMbX5K+1Y9GT3TfKPv3LWxZI6kNyyV3wufF6jwwEZ8DXRkA+ivT3j3Su/Ke9kzs41wS6lfOVJ6hi2x+U/reenjgQtncWezZIj0rfmn/kCeYASRHft1zdjjvbeOeoCh9ax4PeaxkV8qPtXfHtHerXaG/TDADSI7C5rfa/prFHe8G7gy0S2UwpuQsbF5NMANIjlLP7sF53e4dAfdtH6RtsJNgBoDAft2E9PUSzAAAghkACGYAAMEMAAQzAIBgBgCCGQBAMAMAwQwAIJgBAAQzABDMAACCGQAIZgAAwQwABDMAgGAGAIIZAAaclYp3H8EMYL/Lx0zH4LxuxwGx7mvPNugkmAEkqEobN7X9QThirFidB1a/lwMPE0nn2r8Nxk9NxmfBnyMAlTnytLZ3IWSPmheSTBnJTjm17dVyZtLJBDOABFXMIw+S3KzP2D+k27QjOF3SE44Of3zKXEkfelybQrlDcsd/TqzcyGTsJPlzBOBJT5gpHSPHS37dc1LculZKffta/AJZSY+eJJnJcyQ1dnLk4rljLpTCQUdJ/t0Xpbhzk0ix0NpA7hgl6fHTnG8Lg9WvTTADiF85J2VncfBMp+1XnwF/hgBAMAMACGYAIJgBAAQzABDMAACCGQAIZgAAwQwABDMAgGAGABDMAEAwAwAIZgAgmAEA7QrmEpsGAAZcqZGKuURIA0DLw7gUp2ImfAEgIRV0KqK0pmIGgIGtmEthFbO5cFADALQ2mM18rcjaVI0nFI1bAEBrg7nou61ZMYvvCdq62ZYA0LS8katm4RtaMftTvGC0HWxPAGjaDjecvWw1M7cqmM1+jqLRCu5K1rM9AaBp7xjBXPRVz+UsToWEshfI2vrstoztCQBNe97NVLNq9lfMJbNiNlvBCGddyZN228Y2BYCGaYY+ZQSzF85V3RmpgGrZW1if3Gu3HrvtttvP2a4A0DDN0F1upva6GWtWzUUJOcGkZISzVy3rSnRUxmN2W8q2BYC6LXUztNvN1KCquSwTEMpmH3OPu0y3e7vEbh12O4ftDACxPOJm5z4jmHul+iBgyQxm/YdlBLNXWmuip41wTrntn+32mt0usdvBbHMACLTZbnfb7Qnp7w7e44ZzWFdG+eBfxqiWxRfOeffJXiBb7jL6+KN2W263eXY7xW5T7DbaDXIA2B9553ysc/PxabvtdMNYQ3mvL5jzUj0qw8liq7R7lbih67WUWyFry9otZ7dOt41wW6fRcm7LusGc9gW5xecFYJgJKmbNQRO9breF1/YZXRndRsXs9TNXhLO/YvZ+LhihavnegFdJewcFs27LGF0elu+5hDOA4RjKJQkeNOENnAhqQQf+KirmTMCLFt0g9V5IQl7cC2cvkP3VMsEMYH8KZvP8j7xRFfcYlXRQlVw1UVwm4MUs34JBL543ujrSRqWcNrpDCGMA+0NIm/ML+c8FMavovC+UixIyiVGmxt6gWKMvxQvj3oBKOeWrloWqGcAwq5YloDfBXzkXpPLUa7MFTl4UFszm0DlxV5AKCOWU+4Jmhew1MW4JYwDDPaSLxm1RqmfoLEr1eOWgwleiKmbLuC1K5TjnohHMKanuU7ZCKmYAGI7hHNT8IVw1JC4slMOCOXBBqT4RRQK6LTjgB2B/rJqDLhNVDAjvmoEcFcxRAS1G6R4VxAQ0gOEayHGCWuIGctxgDlqhFXA/4QsA8QraSP8vwADK14lliZN54gAAAABJRU5ErkJggg=="},"42bb":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={down:{textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",offset:80},up:{textLoading:"加载中 ...",textNoMore:"-- END --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png?v=1",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png?v=1",tip:"~ 暂无相关数据 ~"}}},n=t;l.default=n},"44ec":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/login/login":{navigationBarTitleText:""},"pages/index/index":{navigationBarTitleText:""},"pages/user/user":{navigationBarTitleText:""},"pages/message/message":{navigationBarTitleText:""},"pages/product/product":{navigationBarTitleText:""},"pages/report/report":{navigationBarTitleText:"",bounce:"none"},"pages/set/set":{navigationBarTitleText:""},"pages/modify/modify":{navigationBarTitleText:""},"pages/look/look":{navigationBarTitleText:""},"pages/read/read":{navigationBarTitleText:""},"pages/addUser/addUser":{navigationBarTitleText:""},"pages/reset/reset":{navigationBarTitleText:""},"pages/carsCount/carsCount":{navigationBarTitleText:""},"pages/editor/editor":{navigationBarTitleText:""},"pages/text/text":{navigationBarTitleText:""}},globalStyle:{navigationStyle:"custom",navigationBarTextStyle:"black"}};l.default=t},"482e":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=i(a("66fd")),n=i(a("2f62"));function i(e){return e&&e.__esModule?e:{default:e}}t.default.use(n.default);var r=new n.default.Store({state:{uid:"",history:[],count:0},mutations:{changeUid:function(e,l){e.uid=l},changeHistory:function(e,l){e.history=l},changeCount:function(e,l){e.count=l}}}),o=r;l.default=o},5091:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAIAAAC3ytZVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgxRjQ3NzkzMUQ0MjExRUE5RTJFOEIwNTRBQjUwNDY4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxRjQ3Nzk0MUQ0MjExRUE5RTJFOEIwNTRBQjUwNDY4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODFGNDc3OTExRDQyMTFFQTlFMkU4QjA1NEFCNTA0NjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODFGNDc3OTIxRDQyMTFFQTlFMkU4QjA1NEFCNTA0NjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6YpB8cAAAEvUlEQVR42uzaf2gbVRwA8Lvru8slTbulWWc1rc5uc47O1qn7x82BCjp/ggNFQQUR/WMoigxFxCHMIfQfQf/YP8qUFYTJ9A9BmM6x1U2dU+bqStO5tbWuadotyZrkcvfu1/Otydq0tmUz9+4u9PsllBwp79597vu+771L+NauUQ7iSghAABzAARzAARzAARzAARzAARzAARzAARzAARzAARwQwAEcwHG1gVw4xwMt8ra22lsjSBR4xxvPG+RYEneezA3lrCrIjqdXhXZvXnpbVGRhQSMs8g+2yF9vibbWI79zhBD/9h11LiRgvSRsvz3sd472qEjvnlOtjar2Ap/ec33A7xxB5JjFF4P4+aP53f0amT8TfVFKaS9WLUEr6tF/+7OuQXTE4kDC2HMO0zf7h3EY8c+tDDC6f5Vy1PDc1tYg5Zjz05ZwTeVd/DVlfhhXSweE6xrQtsTERplJXlfa6MamwHwWjkTfhLXrT5WUjRDD5k5cNH26DKMzKDuLYcV+r0fFZeuJIsuEQXzKUSfx7DhOpMxs8cqn/0yOcGbnrJSDIQbHPdEiPRIrZd/keCmB3BASfMrBdkPFc6+skR9vFsnMO9AeQYuRoxg3hYXyytERQXUiv3g5/lamF6N0yDzWLC3eDb5pc91jxlRy0KqxuUlcvBz7h/UMnq6iL62WEcvq7WuO/qy1dxBPTSsbliGmqeEXjiHFPl+YvVs9k7V2nFJNu7QipeVze1uQZ9wT5LnFQN5+t0ejK8+31gbWRy7vcSzCfTuif3oWY7s0RuiMu6M9tCzA/OZ5zJHUyM5erWARmgM7T2tbm8WcQY6nzAuaXb5PeW2tvL7Bja56yUG3HpRgagNCk2LfsE4VSNm0yvPcq2vkh2OSO13yjEO1yPu9mGbH9NVzMxaf9EASuDfbgpuWi671yhsOeqmdcX1Ascnk+9KLzPiHWEh4Z13w5rCrxd4bDjourjz4nJ0RxeNHY+KLKwOBGt7ljnkz0dKl1K52ubV2jrNviKKP7wptu0V238LL2hGV+A865CPj5u9pa0InQcStDgubGlEs5OVSyMuZhebI/dch+vLRIwUOwjUOQty7Et0mfufIYNs1kN606XcOxSTxjOmCBUX/qCdfBbXj5zF8Om0wTZI0tl8/eql7FHs/s2gmWfiBDIX4ZUw/edFYKgno2vGXB4U7G+fYsPwwgj+PK5c3PjrpyxiWQ9yVcvw1YV7NN0/YImPq//k5yohiJRT7oRvlWZTJgnUsqftuZjmcwFmd4UjQLa7zj9zLRzIF042iXGl25A2yJ67c3SStqEPipO2SwBw/86HJnNPta2qZXj5NgZ+SekqzE4r17MH0J/dGGhg/AXJgRUjv28HztIyVKtkbHeFZ2w06Ur48p/6Tr+i3W6dSxlPfpT+7L9JcW8OOg/nMQtOn60yhQotiDGbNJw+k4pfMauVIa/be/sK4ajvVIG3qme/Tx8d1/w6W+WK0YO07qzpeArO6/cKhzMYmqZo4BrPWVwOqzmb5RYvRoRFcNRx9GfObIdVycf/mX47fLhg/JnAVUrDh6E5grmoDHv8AB3AAB3AAB3AAB3AAB3AAB3AAB3AAB3AAB3AABwRwAMdC8a8AAwAXZ8uTQnInBAAAAABJRU5ErkJggg=="},5264:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a={showToast:function(l){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",t=arguments.length>2?arguments[2]:void 0;e.showToast({title:l,icon:a,duration:2e3,mask:!0,success:t})},hideToast:function(){e.hideToast()},showLoading:function(l,a){e.showLoading({title:l,mask:!0,success:a})},hideLoading:function(){e.hideLoading()}},t=a;l.default=t}).call(this,a("6e42")["default"])},"52f3":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAIAAAC3ytZVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZCMTBGRkZDMUQ0MjExRUE5RUUxQkQ3NzBFQTRDMERDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZCMTBGRkZEMUQ0MjExRUE5RUUxQkQ3NzBFQTRDMERDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkIxMEZGRkExRDQyMTFFQTlFRTFCRDc3MEVBNEMwREMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkIxMEZGRkIxRDQyMTFFQTlFRTFCRDc3MEVBNEMwREMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5976xaAAAEDUlEQVR42uyaS08TURTH586jQwt9SElQoDbhYSECstKgqAtNEKMRH4mPhTERVxKi7oxfwvghdMtacIcL3WqoCJoQFroA5NFCH9Ne/6QBH7HTB3OnnXpuZjGd3vPv7e+eOffcB7t7b1misltkQkA4CAfhIByEg3AQDsJBOAgH4SAchINwEA7CQTgIB+GgIqmVb4Eq6TrDTTLJDeO/xNHYKJ84rvf0qKGQ2njgl4eu/sguLRnRqPHufXJ1NWt/w5jNGwsd7eroqKevV2PMrBrn0oeP6cnJrS9fjdr0jvp6dud2/dApvaheYlJ/n9bf5595m3z5Kh6P85rCEQopjyZ8TU0lR27g645oz19sLC1lamRk6exQnz31l8EiV2AIc4jUAo7WFuXJY5/bzfYjAnOIQMrZOFwuNv7Qi6hhSeiBFAQdjGP0irvFui6FFASdigPv/IVhi1sPwbJjUIVxjAy7FatfdgiODLudh0PTpMFBXYQyZCHuMByRI5olEfSfMRXiTsMR0cS5tDhxITiQYre2CswRIM6Yo7zj93mqg8RF6ep1AvMlceLCcIhMH8WJ0+Ig4SAcFcYhi+TsvKzU6xUYSr1eWVGcg8Pvl1VVIA7kYE1BxTE42tqEL1sdDjsHR0e78HXNrk5NRJ4ui/Dk3qOFY51hSGtr2VSK8909A9zgIx4Wsxd3rF9zhncgcHR1FWjr+kZWVaVAQHa52F4n4wYf8RBfoYK5QnOzEg6rDsBxclA3cWP0PC6/r8DvokKupkk5e0avdhyqIp0/V2fCAqTU4joV1VDZhMjpId3nk6sax9CQHgzK+XHwkvIFVIZJ/mSMXb7krl4cHg+7dtVjEi/qSp+Yw8QkjsATQ5YO6lbiuHWzHnHUBFbZlE2mAg/GGizMUC3DgZHPJLYlk1wrN0+FIczzfYvx5cZ1T3XhwAA5dr/BpEIisa8TCebmF0fcPd1aFeHw+Zh5kN/nBLeguVUr1dZkMisr2fGJ1dw2/cYGz+7Evj/6c2DAJTPG/35cTJIryWwnYZ37nM4XIzJG4bTNVhxobizGceV1H6+8HweBPpJ38wpVhKNgg5gsNTSUP+Xa2uLcluNQNh2GSiZ4sLF891hetukUoU1rpd++ZypoXnU4Fhcz6XSZtjCEeU3hSKV4NFomDxjCvKZwoGCkXF8v+V/BBIa2NdI+HJmMNDOTKCk93d7mMMlkpBrEgbIZ41PTiSJ9BNWm3yQ2Y9zOFtp9RD8e56+ntiMRDbOMfLtHiJ3RT+m5ubSdflEZHLm3ZnY2vbBghMPKoYNKICDn1kHwHiH1xJiKccS22Fl5HHtjzfy8gUuqpkJb1oSDcBAOwkE4CAfhIByEg3AQDsJBOAgH4SAchINwEA4qkvRTgAEAbv80NeNu/iEAAAAASUVORK5CYII="},6058:function(e,l,a){"use strict";
/*! mescroll-uni
 * version 1.0.0
 * 2019-03-10 文举
 * http://www.mescroll.com
 */
function t(e){var l=this;l.version="1.0.0",l.options=e||{},l.isDownScrolling=!1,l.isUpScrolling=!1;var a=l.options.down&&l.options.down.callback;l.initDownScroll(),l.initUpScroll(),setTimeout(function(){l.optDown.use&&l.optDown.auto&&a&&(l.optDown.autoShowLoading?l.triggerDownScroll():l.optDown.callback&&l.optDown.callback(l)),l.optUp.use&&l.optUp.auto&&!l.isUpAutoLoad&&l.triggerUpScroll()},30)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=t,t.prototype.extendDownScroll=function(e){t.extend(e,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",inited:null,inOffset:null,outOffset:null,onMoving:null,beforeLoading:null,showLoading:null,afterLoading:null,endDownScroll:null,callback:function(e){e.resetUpScroll()}})},t.prototype.extendUpScroll=function(e){t.extend(e,{use:!0,auto:!0,isLock:!1,isBoth:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,textLoading:"加载中 ...",textNoMore:"-- END --",inited:null,showLoading:null,showNoMore:null,hideUpScroll:null,toTop:{src:null,offset:1e3,duration:300,btnClick:null,onShow:null},empty:{use:!0,icon:null,tip:"~ 暂无相关数据 ~",btnText:"",btnClick:null,onShow:null}})},t.extend=function(e,l){if(!e)return l;for(var a in l)null==e[a]?e[a]=l[a]:"object"===typeof e[a]&&t.extend(e[a],l[a]);return e},t.prototype.initDownScroll=function(){var e=this;e.optDown=e.options.down||{},e.extendDownScroll(e.optDown),e.downHight=0,e.optDown.use&&e.optDown.inited&&setTimeout(function(){e.optDown.inited(e)},0)},t.prototype.touchstartEvent=function(e){if(this.optDown.use){var l=this;l.startPoint=l.getPoint(e),l.lastPoint=l.startPoint,l.maxTouchmoveY=l.getBodyHeight()-l.optDown.bottomOffset,l.inTouchend=!1}},t.prototype.touchmoveEvent=function(e){if(this.startPoint){var l=this,a=l.getScrollTop(),t=l.getPoint(e),n=t.y-l.startPoint.y;if(n>0&&a<=0&&l.optDown.use&&!l.inTouchend&&!l.isDownScrolling&&!l.optDown.isLock&&(!l.isUpScrolling||l.isUpScrolling&&l.optUp.isBoth)){var i=Math.abs(l.lastPoint.x-t.x),r=Math.abs(l.lastPoint.y-t.y),o=Math.sqrt(i*i+r*r);if(0!==o){var u=Math.asin(r/o)/Math.PI*180;if(u<l.optDown.minAngle)return}if(l.maxTouchmoveY>0&&t.y>=l.maxTouchmoveY)return l.inTouchend=!0,void l.touchendEvent();var v=t.y-l.lastPoint.y;l.downHight<l.optDown.offset?(1!==l.movetype&&(l.movetype=1,l.optDown.inOffset&&l.optDown.inOffset(l),l.isMoveDown=!0),l.downHight+=v*l.optDown.inOffsetRate):(2!==l.movetype&&(l.movetype=2,l.optDown.outOffset&&l.optDown.outOffset(l),l.isMoveDown=!0),l.downHight+=v>0?v*l.optDown.outOffsetRate:v);var s=l.downHight/l.optDown.offset;l.optDown.onMoving&&l.optDown.onMoving(l,s,l.downHight)}l.lastPoint=t}},t.prototype.touchendEvent=function(e){var l=this;l.optDown.use&&l.isMoveDown&&(l.downHight>=l.optDown.offset?l.triggerDownScroll():(l.downHight=0,l.optDown.endDownScroll&&l.optDown.endDownScroll(l)),l.movetype=0,l.isMoveDown=!1)},t.prototype.getPoint=function(e){return{x:e.touches?e.touches[0].pageX:e.clientX,y:e.touches?e.touches[0].pageY:e.clientY}},t.prototype.triggerDownScroll=function(){this.optDown.beforeLoading&&this.optDown.beforeLoading(this)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},t.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.downHight=this.optDown.offset,this.optDown.showLoading(this,this.downHight)},t.prototype.endDownScroll=function(){var e=this,l=function(){e.downHight=0,e.isDownScrolling=!1,e.optDown.endDownScroll&&e.optDown.endDownScroll(e)},a=0;e.optDown.afterLoading&&(a=e.optDown.afterLoading(e)),"number"===typeof a&&a>0?setTimeout(l,a):l()},t.prototype.lockDownScroll=function(e){null==e&&(e=!0),this.optDown.isLock=e},t.prototype.initUpScroll=function(){var e=this;e.optUp=e.options.up||{use:!1},e.extendUpScroll(e.optUp),!1!==e.optUp.use&&(e.optUp.hasNext=!0,e.optUp.empty.btnText=e.optUp.empty.btnText||e.optUp.empty.btntext,e.optUp.inited&&setTimeout(function(){e.optUp.inited(e)},0))},t.prototype.onReachBottom=function(){var e=this;!e.isUpScrolling&&(!e.isDownScrolling||e.isDownScrolling&&e.optDown.isBoth)&&!e.optUp.isLock&&e.optUp.hasNext&&e.triggerUpScroll()},t.prototype.onPageScroll=function(e){var l=this,a=e.scrollTop;if(l.optUp.toTop.src&&(a>=l.optUp.toTop.offset?l.showTopBtn():l.hideTopBtn()),l.optUp.onScroll){null==l.preScrollY&&(l.preScrollY=0);var t=a-l.preScrollY>0;l.preScrollY=a,l.optUp.onScroll(l,a,t)}l.setScrollTop(a)},t.prototype.triggerUpScroll=function(){this.optUp.callback&&!this.isUpScrolling&&(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.num=this.optUp.page.num,this.size=this.optUp.page.size,this.time=this.optUp.page.time,this.optUp.callback(this))},t.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.optUp.showLoading&&this.optUp.showLoading(this)},t.prototype.showNoMore=function(){this.optUp.hasNext=!1,this.optUp.showNoMore&&this.optUp.showNoMore(this)},t.prototype.hideUpScroll=function(){this.optUp.hideUpScroll&&this.optUp.hideUpScroll(this)},t.prototype.endUpScroll=function(e){null!=e&&(e?this.showNoMore():this.hideUpScroll()),this.isUpScrolling=!1},t.prototype.resetUpScroll=function(e){if(this.optUp&&this.optUp.use){var l=this.optUp.page;this.prePageNum=l.num,this.prePageTime=l.time,l.num=1,l.time=null,this.isDownScrolling||!1===e||(null==e?(this.removeEmpty(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.num=l.num,this.size=l.size,this.time=l.time,this.optUp.callback&&this.optUp.callback(this)}},t.prototype.setPageNum=function(e){this.optUp.page.num=e-1},t.prototype.setPageSize=function(e){this.optUp.page.size=e},t.prototype.endByPage=function(e,l,a){var t;this.optUp.use&&null!=l&&(t=this.optUp.page.num<l),this.endSuccess(e,t,a)},t.prototype.endBySize=function(e,l,a){var t;if(this.optUp.use&&null!=l){var n=(this.optUp.page.num-1)*this.optUp.page.size+e;t=n<l}this.endSuccess(e,t,a)},t.prototype.endSuccess=function(e,l,a){var t=this;if(t.isDownScrolling&&t.endDownScroll(),t.optUp.use){var n;if(null!=e){var i=t.optUp.page.num,r=t.optUp.page.size;if(1===i&&a&&(t.optUp.page.time=a),e<r||!1===l)if(t.optUp.hasNext=!1,0===e&&1===i)n=!1,t.showEmpty();else{var o=(i-1)*r+e;n=!(o<t.optUp.noMoreSize),t.removeEmpty()}else n=!1,t.optUp.hasNext=!0,t.removeEmpty()}t.endUpScroll(n)}},t.prototype.endErr=function(){if(this.isDownScrolling){var e=this.optUp.page;e&&this.prePageNum&&(e.num=this.prePageNum,e.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},t.prototype.showEmpty=function(){this.optUp.empty.onShow&&this.optUp.empty.onShow(!0)},t.prototype.removeEmpty=function(){this.optUp.empty.onShow&&this.optUp.empty.onShow(!1)},t.prototype.showTopBtn=function(){this.optUp.toTop.src&&!this.topBtnShow&&(this.topBtnShow=!0,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!0))},t.prototype.hideTopBtn=function(){this.optUp.toTop.src&&this.topBtnShow&&(this.topBtnShow=!1,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!1))},t.prototype.getScrollTop=function(){return this.scrollTop||0},t.prototype.setScrollTop=function(e){this.scrollTop=e},t.prototype.getBodyHeight=function(){return this.bodyHeight||0},t.prototype.setBodyHeight=function(e){this.bodyHeight=e}},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function n(e){return void 0!==e&&null!==e}function i(e){return!0===e}function r(e){return!1===e}function o(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function u(e){return null!==e&&"object"===typeof e}var v=Object.prototype.toString;function s(e){return"[object Object]"===v.call(e)}function b(e){return"[object RegExp]"===v.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function h(e){return n(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||s(e)&&e.toString===v?JSON.stringify(e,null,2):String(e)}function f(e){var l=parseFloat(e);return isNaN(l)?e:l}function d(e,l){for(var a=Object.create(null),t=e.split(","),n=0;n<t.length;n++)a[t[n]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}d("slot,component",!0);var g=d("key,ref,slot,slot-scope,is");function y(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var x=Object.prototype.hasOwnProperty;function A(e,l){return x.call(e,l)}function m(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,S=m(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),M=m(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),D=/\B([A-Z])/g,T=m(function(e){return e.replace(D,"-$1").toLowerCase()});function O(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function R(e,l){return e.bind(l)}var I=Function.prototype.bind?R:O;function E(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function k(e,l){for(var a in l)e[a]=l[a];return e}function P(e){for(var l={},a=0;a<e.length;a++)e[a]&&k(l,e[a]);return l}function C(e,l,a){}var L=function(e,l,a){return!1},j=function(e){return e};function F(e,l){if(e===l)return!0;var a=u(e),t=u(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var n=Array.isArray(e),i=Array.isArray(l);if(n&&i)return e.length===l.length&&e.every(function(e,a){return F(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(n||i)return!1;var r=Object.keys(e),o=Object.keys(l);return r.length===o.length&&r.every(function(a){return F(e[a],l[a])})}catch(v){return!1}}function B(e,l){for(var a=0;a<e.length;a++)if(F(e[a],l))return a;return-1}function N(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var _=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],G={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:C,parsePlatformTagName:j,mustUseProp:L,async:!0,_lifecycleHooks:U},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function W(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var Q=new RegExp("[^"+z.source+".$_\\d]");function Z(e){if(!Q.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var Y,V="__proto__"in{},J="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,q=X&&WXEnvironment.platform.toLowerCase(),K=J&&window.navigator.userAgent.toLowerCase(),$=K&&/msie|trident/.test(K),ee=(K&&K.indexOf("msie 9.0"),K&&K.indexOf("edge/")>0),le=(K&&K.indexOf("android"),K&&/iphone|ipad|ipod|ios/.test(K)||"ios"===q),ae=(K&&/chrome\/\d+/.test(K),K&&/phantomjs/.test(K),K&&K.match(/firefox\/(\d+)/),{}.watch);if(J)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(en){}var ne=function(){return void 0===Y&&(Y=!J&&!X&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),Y},ie=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var oe,ue="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);oe="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ve=C,se=0,be=function(){this.id=se++,this.subs=[]};function ce(e){be.SharedObject.targetStack.push(e),be.SharedObject.target=e}function he(){be.SharedObject.targetStack.pop(),be.SharedObject.target=be.SharedObject.targetStack[be.SharedObject.targetStack.length-1]}be.prototype.addSub=function(e){this.subs.push(e)},be.prototype.removeSub=function(e){y(this.subs,e)},be.prototype.depend=function(){be.SharedObject.target&&be.SharedObject.target.addDep(this)},be.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},be.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},be.SharedObject.target=null,be.SharedObject.targetStack=[];var pe=function(e,l,a,t,n,i,r,o){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=n,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=o,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},fe={child:{configurable:!0}};fe.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,fe);var de=function(e){void 0===e&&(e="");var l=new pe;return l.text=e,l.isComment=!0,l};function ge(e){return new pe(void 0,void 0,void 0,String(e))}function ye(e){var l=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var xe=Array.prototype,Ae=Object.create(xe),me=["push","pop","shift","unshift","splice","sort","reverse"];me.forEach(function(e){var l=xe[e];W(Ae,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var n,i=l.apply(this,a),r=this.__ob__;switch(e){case"push":case"unshift":n=a;break;case"splice":n=a.slice(2);break}return n&&r.observeArray(n),r.dep.notify(),i})});var we=Object.getOwnPropertyNames(Ae),Se=!0;function Me(e){Se=e}var De=function(e){this.value=e,this.dep=new be,this.vmCount=0,W(e,"__ob__",this),Array.isArray(e)?(V?e.push!==e.__proto__.push?Oe(e,Ae,we):Te(e,Ae):Oe(e,Ae,we),this.observeArray(e)):this.walk(e)};function Te(e,l){e.__proto__=l}function Oe(e,l,a){for(var t=0,n=a.length;t<n;t++){var i=a[t];W(e,i,l[i])}}function Re(e,l){var a;if(u(e)&&!(e instanceof pe))return A(e,"__ob__")&&e.__ob__ instanceof De?a=e.__ob__:Se&&!ne()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new De(e)),l&&a&&a.vmCount++,a}function Ie(e,l,a,t,n){var i=new be,r=Object.getOwnPropertyDescriptor(e,l);if(!r||!1!==r.configurable){var o=r&&r.get,u=r&&r.set;o&&!u||2!==arguments.length||(a=e[l]);var v=!n&&Re(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=o?o.call(e):a;return be.SharedObject.target&&(i.depend(),v&&(v.dep.depend(),Array.isArray(l)&&Pe(l))),l},set:function(l){var t=o?o.call(e):a;l===t||l!==l&&t!==t||o&&!u||(u?u.call(e,l):a=l,v=!n&&Re(l),i.notify())}})}}function Ee(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(Ie(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function ke(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||A(e,l)&&(delete e[l],a&&a.dep.notify())}}function Pe(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Pe(l)}De.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Ie(e,l[a])},De.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Re(e[l])};var Ce=G.optionMergeStrategies;function Le(e,l){if(!l)return e;for(var a,t,n,i=ue?Reflect.ownKeys(l):Object.keys(l),r=0;r<i.length;r++)a=i[r],"__ob__"!==a&&(t=e[a],n=l[a],A(e,a)?t!==n&&s(t)&&s(n)&&Le(t,n):Ee(e,a,n));return e}function je(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,n="function"===typeof e?e.call(a,a):e;return t?Le(t,n):n}:l?e?function(){return Le("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Fe(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Be(a):a}function Be(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Ne(e,l,a,t){var n=Object.create(e||null);return l?k(n,l):n}Ce.data=function(e,l,a){return a?je(e,l,a):l&&"function"!==typeof l?e:je(e,l)},U.forEach(function(e){Ce[e]=Fe}),_.forEach(function(e){Ce[e+"s"]=Ne}),Ce.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var n={};for(var i in k(n,e),l){var r=n[i],o=l[i];r&&!Array.isArray(r)&&(r=[r]),n[i]=r?r.concat(o):Array.isArray(o)?o:[o]}return n},Ce.props=Ce.methods=Ce.inject=Ce.computed=function(e,l,a,t){if(!e)return l;var n=Object.create(null);return k(n,e),l&&k(n,l),n},Ce.provide=je;var _e=function(e,l){return void 0===l?e:l};function Ue(e,l){var a=e.props;if(a){var t,n,i,r={};if(Array.isArray(a)){t=a.length;while(t--)n=a[t],"string"===typeof n&&(i=S(n),r[i]={type:null})}else if(s(a))for(var o in a)n=a[o],i=S(o),r[i]=s(n)?n:{type:n};else 0;e.props=r}}function Ge(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var n=0;n<a.length;n++)t[a[n]]={from:a[n]};else if(s(a))for(var i in a){var r=a[i];t[i]=s(r)?k({from:i},r):{from:r}}else 0}}function ze(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function He(e,l,a){if("function"===typeof l&&(l=l.options),Ue(l,a),Ge(l,a),ze(l),!l._base&&(l.extends&&(e=He(e,l.extends,a)),l.mixins))for(var t=0,n=l.mixins.length;t<n;t++)e=He(e,l.mixins[t],a);var i,r={};for(i in e)o(i);for(i in l)A(e,i)||o(i);function o(t){var n=Ce[t]||_e;r[t]=n(e[t],l[t],a,t)}return r}function We(e,l,a,t){if("string"===typeof a){var n=e[l];if(A(n,a))return n[a];var i=S(a);if(A(n,i))return n[i];var r=M(i);if(A(n,r))return n[r];var o=n[a]||n[i]||n[r];return o}}function Qe(e,l,a,t){var n=l[e],i=!A(a,e),r=a[e],o=Je(Boolean,n.type);if(o>-1)if(i&&!A(n,"default"))r=!1;else if(""===r||r===T(e)){var u=Je(String,n.type);(u<0||o<u)&&(r=!0)}if(void 0===r){r=Ze(t,n,e);var v=Se;Me(!0),Re(r),Me(v)}return r}function Ze(e,l,a){if(A(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==Ye(l.type)?t.call(e):t}}function Ye(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Ve(e,l){return Ye(e)===Ye(l)}function Je(e,l){if(!Array.isArray(l))return Ve(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(Ve(l[a],e))return a;return-1}function Xe(e,l,a){ce();try{if(l){var t=l;while(t=t.$parent){var n=t.$options.errorCaptured;if(n)for(var i=0;i<n.length;i++)try{var r=!1===n[i].call(t,e,l,a);if(r)return}catch(en){Ke(en,t,"errorCaptured hook")}}}Ke(e,l,a)}finally{he()}}function qe(e,l,a,t,n){var i;try{i=a?e.apply(l,a):e.call(l),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(e){return Xe(e,t,n+" (Promise/async)")}),i._handled=!0)}catch(en){Xe(en,t,n)}return i}function Ke(e,l,a){if(G.errorHandler)try{return G.errorHandler.call(null,e,l,a)}catch(en){en!==e&&$e(en,null,"config.errorHandler")}$e(e,l,a)}function $e(e,l,a){if(!J&&!X||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&re(Promise)){var nl=Promise.resolve();el=function(){nl.then(tl),le&&setTimeout(C)}}else if($||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var il=1,rl=new MutationObserver(tl),ol=document.createTextNode(String(il));rl.observe(ol,{characterData:!0}),el=function(){il=(il+1)%2,ol.data=String(il)}}function ul(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(en){Xe(en,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var vl=new oe;function sl(e){bl(e,vl),vl.clear()}function bl(e,l){var a,t,n=Array.isArray(e);if(!(!n&&!u(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var i=e.__ob__.dep.id;if(l.has(i))return;l.add(i)}if(n){a=e.length;while(a--)bl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)bl(e[t[a]],l)}}}var cl=m(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function hl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return qe(t,null,arguments,l,"v-on handler");for(var n=t.slice(),i=0;i<n.length;i++)qe(n[i],null,e,l,"v-on handler")}return a.fns=e,a}function pl(e,l,a,n,r,o){var u,v,s,b;for(u in e)v=e[u],s=l[u],b=cl(u),t(v)||(t(s)?(t(v.fns)&&(v=e[u]=hl(v,o)),i(b.once)&&(v=e[u]=r(b.name,v,b.capture)),a(b.name,v,b.capture,b.passive,b.params)):v!==s&&(s.fns=v,e[u]=s));for(u in l)t(e[u])&&(b=cl(u),n(b.name,l[u],b.capture))}function fl(e,l,a){var i=l.options.props;if(!t(i)){var r={},o=e.attrs,u=e.props;if(n(o)||n(u))for(var v in i){var s=T(v);dl(r,u,v,s,!0)||dl(r,o,v,s,!1)}return r}}function dl(e,l,a,t,i){if(n(l)){if(A(l,a))return e[a]=l[a],i||delete l[a],!0;if(A(l,t))return e[a]=l[t],i||delete l[t],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function yl(e){return o(e)?[ge(e)]:Array.isArray(e)?Al(e):void 0}function xl(e){return n(e)&&n(e.text)&&r(e.isComment)}function Al(e,l){var a,r,u,v,s=[];for(a=0;a<e.length;a++)r=e[a],t(r)||"boolean"===typeof r||(u=s.length-1,v=s[u],Array.isArray(r)?r.length>0&&(r=Al(r,(l||"")+"_"+a),xl(r[0])&&xl(v)&&(s[u]=ge(v.text+r[0].text),r.shift()),s.push.apply(s,r)):o(r)?xl(v)?s[u]=ge(v.text+r):""!==r&&s.push(ge(r)):xl(r)&&xl(v)?s[u]=ge(v.text+r.text):(i(e._isVList)&&n(r.tag)&&t(r.key)&&n(l)&&(r.key="__vlist"+l+"_"+a+"__"),s.push(r)));return s}function ml(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function wl(e){var l=Sl(e.$options.inject,e);l&&(Me(!1),Object.keys(l).forEach(function(a){Ie(e,a,l[a])}),Me(!0))}function Sl(e,l){if(e){for(var a=Object.create(null),t=ue?Reflect.ownKeys(e):Object.keys(e),n=0;n<t.length;n++){var i=t[n];if("__ob__"!==i){var r=e[i].from,o=l;while(o){if(o._provided&&A(o._provided,r)){a[i]=o._provided[r];break}o=o.$parent}if(!o)if("default"in e[i]){var u=e[i].default;a[i]="function"===typeof u?u.call(l):u}else 0}}return a}}function Ml(e,l){if(!e||!e.length)return{};for(var a={},t=0,n=e.length;t<n;t++){var i=e[t],r=i.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,i.context!==l&&i.fnContext!==l||!r||null==r.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(i):(a.default||(a.default=[])).push(i);else{var o=r.slot,u=a[o]||(a[o]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var v in a)a[v].every(Dl)&&delete a[v];return a}function Dl(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Tl(e,l,t){var n,i=Object.keys(l).length>0,r=e?!!e.$stable:!i,o=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&t&&t!==a&&o===t.$key&&!i&&!t.$hasNormal)return t;for(var u in n={},e)e[u]&&"$"!==u[0]&&(n[u]=Ol(l,u,e[u]))}else n={};for(var v in l)v in n||(n[v]=Rl(l,v));return e&&Object.isExtensible(e)&&(e._normalized=n),W(n,"$stable",r),W(n,"$key",o),W(n,"$hasNormal",i),n}function Ol(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:yl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function Rl(e,l){return function(){return e[l]}}function Il(e,l){var a,t,i,r,o;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,i=e.length;t<i;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(u(e))if(ue&&e[Symbol.iterator]){a=[];var v=e[Symbol.iterator](),s=v.next();while(!s.done)a.push(l(s.value,a.length)),s=v.next()}else for(r=Object.keys(e),a=new Array(r.length),t=0,i=r.length;t<i;t++)o=r[t],a[t]=l(e[o],o,t);return n(a)||(a=[]),a._isVList=!0,a}function El(e,l,a,t){var n,i=this.$scopedSlots[e];i?(a=a||{},t&&(a=k(k({},t),a)),n=i(a)||l):n=this.$slots[e]||l;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},n):n}function kl(e){return We(this.$options,"filters",e,!0)||j}function Pl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Cl(e,l,a,t,n){var i=G.keyCodes[l]||a;return n&&t&&!G.keyCodes[l]?Pl(n,t):i?Pl(i,e):t?T(t)!==l:void 0}function Ll(e,l,a,t,n){if(a)if(u(a)){var i;Array.isArray(a)&&(a=P(a));var r=function(r){if("class"===r||"style"===r||g(r))i=e;else{var o=e.attrs&&e.attrs.type;i=t||G.mustUseProp(l,o,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var u=S(r),v=T(r);if(!(u in i)&&!(v in i)&&(i[r]=a[r],n)){var s=e.on||(e.on={});s["update:"+r]=function(e){a[r]=e}}};for(var o in a)r(o)}else;return e}function jl(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Bl(t,"__static__"+e,!1),t)}function Fl(e,l,a){return Bl(e,"__once__"+l+(a?"_"+a:""),!0),e}function Bl(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&Nl(e[t],l+"_"+t,a);else Nl(e,l,a)}function Nl(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function _l(e,l){if(l)if(s(l)){var a=e.on=e.on?k({},e.on):{};for(var t in l){var n=a[t],i=l[t];a[t]=n?[].concat(n,i):i}}else;return e}function Ul(e,l,a,t){l=l||{$stable:!a};for(var n=0;n<e.length;n++){var i=e[n];Array.isArray(i)?Ul(i,l,a):i&&(i.proxy&&(i.fn.proxy=!0),l[i.key]=i.fn)}return t&&(l.$key=t),l}function Gl(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function zl(e,l){return"string"===typeof e?l+e:e}function Hl(e){e._o=Fl,e._n=f,e._s=p,e._l=Il,e._t=El,e._q=F,e._i=B,e._m=jl,e._f=kl,e._k=Cl,e._b=Ll,e._v=ge,e._e=de,e._u=Ul,e._g=_l,e._d=Gl,e._p=zl}function Wl(e,l,t,n,r){var o,u=this,v=r.options;A(n,"_uid")?(o=Object.create(n),o._original=n):(o=n,n=n._original);var s=i(v._compiled),b=!s;this.data=e,this.props=l,this.children=t,this.parent=n,this.listeners=e.on||a,this.injections=Sl(v.inject,n),this.slots=function(){return u.$slots||Tl(e.scopedSlots,u.$slots=Ml(t,n)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Tl(e.scopedSlots,this.slots())}}),s&&(this.$options=v,this.$slots=this.slots(),this.$scopedSlots=Tl(e.scopedSlots,this.$slots)),v._scopeId?this._c=function(e,l,a,t){var i=ta(o,e,l,a,t,b);return i&&!Array.isArray(i)&&(i.fnScopeId=v._scopeId,i.fnContext=n),i}:this._c=function(e,l,a,t){return ta(o,e,l,a,t,b)}}function Ql(e,l,t,i,r){var o=e.options,u={},v=o.props;if(n(v))for(var s in v)u[s]=Qe(s,v,l||a);else n(t.attrs)&&Yl(u,t.attrs),n(t.props)&&Yl(u,t.props);var b=new Wl(t,u,r,i,e),c=o.render.call(null,b._c,b);if(c instanceof pe)return Zl(c,t,b.parent,o,b);if(Array.isArray(c)){for(var h=yl(c)||[],p=new Array(h.length),f=0;f<h.length;f++)p[f]=Zl(h[f],t,b.parent,o,b);return p}}function Zl(e,l,a,t,n){var i=ye(e);return i.fnContext=a,i.fnOptions=t,l.slot&&((i.data||(i.data={})).slot=l.slot),i}function Yl(e,l){for(var a in l)e[S(a)]=l[a]}Hl(Wl.prototype);var Vl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Vl.prepatch(a,a)}else{var t=e.componentInstance=ql(e,wa);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;Ta(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ea(a,"mounted")),e.data.keepAlive&&(l._isMounted?za(a):Ra(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Ia(l,!0):l.$destroy())}},Jl=Object.keys(Vl);function Xl(e,l,a,r,o){if(!t(e)){var v=a.$options._base;if(u(e)&&(e=v.extend(e)),"function"===typeof e){var s;if(t(e.cid)&&(s=e,e=ha(s,v),void 0===e))return ca(s,l,a,r,o);l=l||{},bt(e),n(l.model)&&ea(e.options,l);var b=fl(l,e,o);if(i(e.options.functional))return Ql(e,b,l,a,r);var c=l.on;if(l.on=l.nativeOn,i(e.options.abstract)){var h=l.slot;l={},h&&(l.slot=h)}Kl(l);var p=e.options.name||o,f=new pe("vue-component-"+e.cid+(p?"-"+p:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:b,listeners:c,tag:o,children:r},s);return f}}}function ql(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return n(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Kl(e){for(var l=e.hook||(e.hook={}),a=0;a<Jl.length;a++){var t=Jl[a],n=l[t],i=Vl[t];n===i||n&&n._merged||(l[t]=n?$l(i,n):i)}}function $l(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var i=l.on||(l.on={}),r=i[t],o=l.model.callback;n(r)?(Array.isArray(r)?-1===r.indexOf(o):r!==o)&&(i[t]=[o].concat(r)):i[t]=o}var la=1,aa=2;function ta(e,l,a,t,n,r){return(Array.isArray(a)||o(a))&&(n=t,t=a,a=void 0),i(r)&&(n=aa),na(e,l,a,t,n)}function na(e,l,a,t,i){if(n(a)&&n(a.__ob__))return de();if(n(a)&&n(a.is)&&(l=a.is),!l)return de();var r,o,u;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),i===aa?t=yl(t):i===la&&(t=gl(t)),"string"===typeof l)?(o=e.$vnode&&e.$vnode.ns||G.getTagNamespace(l),r=G.isReservedTag(l)?new pe(G.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!n(u=We(e.$options,"components",l))?new pe(l,a,t,void 0,void 0,e):Xl(u,a,e,t,l)):r=Xl(l,a,e,t);return Array.isArray(r)?r:n(r)?(n(o)&&ia(r,o),n(a)&&ra(a),r):de()}function ia(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),n(e.children))for(var r=0,o=e.children.length;r<o;r++){var u=e.children[r];n(u.tag)&&(t(u.ns)||i(a)&&"svg"!==u.tag)&&ia(u,l,a)}}function ra(e){u(e.style)&&sl(e.style),u(e.class)&&sl(e.class)}function oa(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,n=t&&t.context;e.$slots=Ml(l._renderChildren,n),e.$scopedSlots=a,e._c=function(l,a,t,n){return ta(e,l,a,t,n,!1)},e.$createElement=function(l,a,t,n){return ta(e,l,a,t,n,!0)};var i=t&&t.data;Ie(e,"$attrs",i&&i.attrs||a,null,!0),Ie(e,"$listeners",l._parentListeners||a,null,!0)}var ua,va=null;function sa(e){Hl(e.prototype),e.prototype.$nextTick=function(e){return ul(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,n=a._parentVnode;n&&(l.$scopedSlots=Tl(n.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=n;try{va=l,e=t.call(l._renderProxy,l.$createElement)}catch(en){Xe(en,l,"render"),e=l._vnode}finally{va=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=de()),e.parent=n,e}}function ba(e,l){return(e.__esModule||ue&&"Module"===e[Symbol.toStringTag])&&(e=e.default),u(e)?l.extend(e):e}function ca(e,l,a,t,n){var i=de();return i.asyncFactory=e,i.asyncMeta={data:l,context:a,children:t,tag:n},i}function ha(e,l){if(i(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=va;if(a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),i(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var r=e.owners=[a],o=!0,v=null,s=null;a.$on("hook:destroyed",function(){return y(r,a)});var b=function(e){for(var l=0,a=r.length;l<a;l++)r[l].$forceUpdate();e&&(r.length=0,null!==v&&(clearTimeout(v),v=null),null!==s&&(clearTimeout(s),s=null))},c=N(function(a){e.resolved=ba(a,l),o?r.length=0:b(!0)}),p=N(function(l){n(e.errorComp)&&(e.error=!0,b(!0))}),f=e(c,p);return u(f)&&(h(f)?t(e.resolved)&&f.then(c,p):h(f.component)&&(f.component.then(c,p),n(f.error)&&(e.errorComp=ba(f.error,l)),n(f.loading)&&(e.loadingComp=ba(f.loading,l),0===f.delay?e.loading=!0:v=setTimeout(function(){v=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,b(!1))},f.delay||200)),n(f.timeout)&&(s=setTimeout(function(){s=null,t(e.resolved)&&p(null)},f.timeout)))),o=!1,e.loading?e.loadingComp:e.resolved}}function pa(e){return e.isComment&&e.asyncFactory}function fa(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(n(a)&&(n(a.componentOptions)||pa(a)))return a}}function da(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&Aa(e,l)}function ga(e,l){ua.$on(e,l)}function ya(e,l){ua.$off(e,l)}function xa(e,l){var a=ua;return function t(){var n=l.apply(null,arguments);null!==n&&a.$off(e,t)}}function Aa(e,l,a){ua=e,pl(l,a||{},ga,ya,xa,e),ua=void 0}function ma(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var n=0,i=e.length;n<i;n++)t.$on(e[n],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)a.$off(e[t],l);return a}var i,r=a._events[e];if(!r)return a;if(!l)return a._events[e]=null,a;var o=r.length;while(o--)if(i=r[o],i===l||i.fn===l){r.splice(o,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?E(a):a;for(var t=E(arguments,1),n='event handler for "'+e+'"',i=0,r=a.length;i<r;i++)qe(a[i],l,t,l,n)}return l}}var wa=null;function Sa(e){var l=wa;return wa=e,function(){wa=l}}function Ma(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Da(e){e.prototype._update=function(e,l){var a=this,t=a.$el,n=a._vnode,i=Sa(a);a._vnode=e,a.$el=n?a.__patch__(n,e):a.__patch__(a.$el,e,l,!1),i(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ea(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||y(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ea(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Ta(e,l,t,n,i){var r=n.data.scopedSlots,o=e.$scopedSlots,u=!!(r&&!r.$stable||o!==a&&!o.$stable||r&&e.$scopedSlots.$key!==r.$key),v=!!(i||e.$options._renderChildren||u);if(e.$options._parentVnode=n,e.$vnode=n,e._vnode&&(e._vnode.parent=n),e.$options._renderChildren=i,e.$attrs=n.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){Me(!1);for(var s=e._props,b=e.$options._propKeys||[],c=0;c<b.length;c++){var h=b[c],p=e.$options.props;s[h]=Qe(h,p,l,e)}Me(!0),e.$options.propsData=l}t=t||a;var f=e.$options._parentListeners;e.$options._parentListeners=t,Aa(e,t,f),v&&(e.$slots=Ml(i,n.context),e.$forceUpdate())}function Oa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Ra(e,l){if(l){if(e._directInactive=!1,Oa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Ra(e.$children[a]);Ea(e,"activated")}}function Ia(e,l){if((!l||(e._directInactive=!0,!Oa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Ia(e.$children[a]);Ea(e,"deactivated")}}function Ea(e,l){ce();var a=e.$options[l],t=l+" hook";if(a)for(var n=0,i=a.length;n<i;n++)qe(a[n],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),he()}var ka=[],Pa=[],Ca={},La=!1,ja=!1,Fa=0;function Ba(){Fa=ka.length=Pa.length=0,Ca={},La=ja=!1}var Na=Date.now;if(J&&!$){var _a=window.performance;_a&&"function"===typeof _a.now&&Na()>document.createEvent("Event").timeStamp&&(Na=function(){return _a.now()})}function Ua(){var e,l;for(Na(),ja=!0,ka.sort(function(e,l){return e.id-l.id}),Fa=0;Fa<ka.length;Fa++)e=ka[Fa],e.before&&e.before(),l=e.id,Ca[l]=null,e.run();var a=Pa.slice(),t=ka.slice();Ba(),Ha(a),Ga(t),ie&&G.devtools&&ie.emit("flush")}function Ga(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&Ea(t,"updated")}}function za(e){e._inactive=!1,Pa.push(e)}function Ha(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Ra(e[l],!0)}function Wa(e){var l=e.id;if(null==Ca[l]){if(Ca[l]=!0,ja){var a=ka.length-1;while(a>Fa&&ka[a].id>e.id)a--;ka.splice(a+1,0,e)}else ka.push(e);La||(La=!0,ul(Ua))}}var Qa=0,Za=function(e,l,a,t,n){this.vm=e,n&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Qa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"===typeof l?this.getter=l:(this.getter=Z(l),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Za.prototype.get=function(){var e;ce(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(en){if(!this.user)throw en;Xe(en,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&sl(e),he(),this.cleanupDeps()}return e},Za.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Za.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Za.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Wa(this)},Za.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(en){Xe(en,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Za.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Za.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Za.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ya={enumerable:!0,configurable:!0,get:C,set:C};function Va(e,l,a){Ya.get=function(){return this[l][a]},Ya.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Ya)}function Ja(e){e._watchers=[];var l=e.$options;l.props&&Xa(e,l.props),l.methods&&nt(e,l.methods),l.data?qa(e):Re(e._data={},!0),l.computed&&et(e,l.computed),l.watch&&l.watch!==ae&&it(e,l.watch)}function Xa(e,l){var a=e.$options.propsData||{},t=e._props={},n=e.$options._propKeys=[],i=!e.$parent;i||Me(!1);var r=function(i){n.push(i);var r=Qe(i,l,a,e);Ie(t,i,r),i in e||Va(e,"_props",i)};for(var o in l)r(o);Me(!0)}function qa(e){var l=e.$options.data;l=e._data="function"===typeof l?Ka(l,e):l||{},s(l)||(l={});var a=Object.keys(l),t=e.$options.props,n=(e.$options.methods,a.length);while(n--){var i=a[n];0,t&&A(t,i)||H(i)||Va(e,"_data",i)}Re(l,!0)}function Ka(e,l){ce();try{return e.call(l,l)}catch(en){return Xe(en,l,"data()"),{}}finally{he()}}var $a={lazy:!0};function et(e,l){var a=e._computedWatchers=Object.create(null),t=ne();for(var n in l){var i=l[n],r="function"===typeof i?i:i.get;0,t||(a[n]=new Za(e,r||C,C,$a)),n in e||lt(e,n,i)}}function lt(e,l,a){var t=!ne();"function"===typeof a?(Ya.get=t?at(l):tt(a),Ya.set=C):(Ya.get=a.get?t&&!1!==a.cache?at(l):tt(a.get):C,Ya.set=a.set||C),Object.defineProperty(e,l,Ya)}function at(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),be.SharedObject.target&&l.depend(),l.value}}function tt(e){return function(){return e.call(this,this)}}function nt(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?C:I(l[a],e)}function it(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var n=0;n<t.length;n++)rt(e,a,t[n]);else rt(e,a,t)}}function rt(e,l,a,t){return s(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function ot(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Ee,e.prototype.$delete=ke,e.prototype.$watch=function(e,l,a){var t=this;if(s(l))return rt(t,e,l,a);a=a||{},a.user=!0;var n=new Za(t,e,l,a);if(a.immediate)try{l.call(t,n.value)}catch(i){Xe(i,t,'callback for immediate watcher "'+n.expression+'"')}return function(){n.teardown()}}}var ut=0;function vt(e){e.prototype._init=function(e){var l=this;l._uid=ut++,l._isVue=!0,e&&e._isComponent?st(l,e):l.$options=He(bt(l.constructor),e||{},l),l._renderProxy=l,l._self=l,Ma(l),da(l),oa(l),Ea(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&wl(l),Ja(l),"mp-toutiao"!==l.mpHost&&ml(l),"mp-toutiao"!==l.mpHost&&Ea(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function st(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var n=t.componentOptions;a.propsData=n.propsData,a._parentListeners=n.listeners,a._renderChildren=n.children,a._componentTag=n.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function bt(e){var l=e.options;if(e.super){var a=bt(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var n=ct(e);n&&k(e.extendOptions,n),l=e.options=He(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function ct(e){var l,a=e.options,t=e.sealedOptions;for(var n in a)a[n]!==t[n]&&(l||(l={}),l[n]=a[n]);return l}function ht(e){this._init(e)}function pt(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=E(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function ft(e){e.mixin=function(e){return this.options=He(this.options,e),this}}function dt(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,n=e._Ctor||(e._Ctor={});if(n[t])return n[t];var i=e.name||a.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=l++,r.options=He(a.options,e),r["super"]=a,r.options.props&&gt(r),r.options.computed&&yt(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,_.forEach(function(e){r[e]=a[e]}),i&&(r.options.components[i]=r),r.superOptions=a.options,r.extendOptions=e,r.sealedOptions=k({},r.options),n[t]=r,r}}function gt(e){var l=e.options.props;for(var a in l)Va(e.prototype,"_props",a)}function yt(e){var l=e.options.computed;for(var a in l)lt(e.prototype,a,l[a])}function xt(e){_.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&s(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function At(e){return e&&(e.Ctor.options.name||e.tag)}function mt(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!b(e)&&e.test(l)}function wt(e,l){var a=e.cache,t=e.keys,n=e._vnode;for(var i in a){var r=a[i];if(r){var o=At(r.componentOptions);o&&!l(o)&&St(a,i,t,n)}}}function St(e,l,a,t){var n=e[l];!n||t&&n.tag===t.tag||n.componentInstance.$destroy(),e[l]=null,y(a,l)}vt(ht),ot(ht),ma(ht),Da(ht),sa(ht);var Mt=[String,RegExp,Array],Dt={name:"keep-alive",abstract:!0,props:{include:Mt,exclude:Mt,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)St(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){wt(e,function(e){return mt(l,e)})}),this.$watch("exclude",function(l){wt(e,function(e){return!mt(l,e)})})},render:function(){var e=this.$slots.default,l=fa(e),a=l&&l.componentOptions;if(a){var t=At(a),n=this,i=n.include,r=n.exclude;if(i&&(!t||!mt(i,t))||r&&t&&mt(r,t))return l;var o=this,u=o.cache,v=o.keys,s=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;u[s]?(l.componentInstance=u[s].componentInstance,y(v,s),v.push(s)):(u[s]=l,v.push(s),this.max&&v.length>parseInt(this.max)&&St(u,v[0],v,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},Tt={KeepAlive:Dt};function Ot(e){var l={get:function(){return G}};Object.defineProperty(e,"config",l),e.util={warn:ve,extend:k,mergeOptions:He,defineReactive:Ie},e.set=Ee,e.delete=ke,e.nextTick=ul,e.observable=function(e){return Re(e),e},e.options=Object.create(null),_.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,k(e.options.components,Tt),pt(e),ft(e),dt(e),xt(e)}Ot(ht),Object.defineProperty(ht.prototype,"$isServer",{get:ne}),Object.defineProperty(ht.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ht,"FunctionalRenderContext",{value:Wl}),ht.version="2.6.10";var Rt="[object Array]",It="[object Object]";function Et(e,l){var a={};return kt(e,l),Pt(e,l,"",a),a}function kt(e,l){if(e!==l){var a=Lt(e),t=Lt(l);if(a==It&&t==It){if(Object.keys(e).length>=Object.keys(l).length)for(var n in l){var i=e[n];void 0===i?e[n]=null:kt(i,l[n])}}else a==Rt&&t==Rt&&e.length>=l.length&&l.forEach(function(l,a){kt(e[a],l)})}}function Pt(e,l,a,t){if(e!==l){var n=Lt(e),i=Lt(l);if(n==It)if(i!=It||Object.keys(e).length<Object.keys(l).length)Ct(t,a,e);else{var r=function(n){var i=e[n],r=l[n],o=Lt(i),u=Lt(r);if(o!=Rt&&o!=It)i!=l[n]&&Ct(t,(""==a?"":a+".")+n,i);else if(o==Rt)u!=Rt?Ct(t,(""==a?"":a+".")+n,i):i.length<r.length?Ct(t,(""==a?"":a+".")+n,i):i.forEach(function(e,l){Pt(e,r[l],(""==a?"":a+".")+n+"["+l+"]",t)});else if(o==It)if(u!=It||Object.keys(i).length<Object.keys(r).length)Ct(t,(""==a?"":a+".")+n,i);else for(var v in i)Pt(i[v],r[v],(""==a?"":a+".")+n+"."+v,t)};for(var o in e)r(o)}else n==Rt?i!=Rt?Ct(t,a,e):e.length<l.length?Ct(t,a,e):e.forEach(function(e,n){Pt(e,l[n],a+"["+n+"]",t)}):Ct(t,a,e)}}function Ct(e,l,a){e[l]=a}function Lt(e){return Object.prototype.toString.call(e)}function jt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function Ft(e){return ka.find(function(l){return e._watcher===l})}function Bt(e,l){if(!e.__next_tick_pending&&!Ft(e)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return ul(l,e)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var n;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(en){Xe(en,e,"nextTick")}else n&&n(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}function Nt(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var _t=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,n=Object.create(null);try{n=Nt(this)}catch(o){console.error(o)}n.__webviewId__=t.data.__webviewId__;var i=Object.create(null);Object.keys(n).forEach(function(e){i[e]=t.data[e]});var r=Et(n,i);Object.keys(r).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,t.setData(r,function(){a.__next_tick_pending=!1,jt(a)})):jt(this)}};function Ut(){}function Gt(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Ut),e.$options.render||(e.$options.render=Ut),"mp-toutiao"!==e.mpHost&&Ea(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new Za(e,t,C,{before:function(){e._isMounted&&!e._isDestroyed&&Ea(e,"beforeUpdate")}},!0),a=!1,e}function zt(e,l){return n(e)||n(l)?Ht(e,Wt(l)):""}function Ht(e,l){return e?l?e+" "+l:e:l||""}function Wt(e){return Array.isArray(e)?Qt(e):u(e)?Zt(e):"string"===typeof e?e:""}function Qt(e){for(var l,a="",t=0,i=e.length;t<i;t++)n(l=Wt(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Zt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Yt=m(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Vt(e){return Array.isArray(e)?P(e):"string"===typeof e?Yt(e):e}var Jt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Xt(e[t],a.slice(1).join("."))}function qt(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:E(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Bt(this,e)},Jt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=ml,e.prototype.__init_injections=wl,e.prototype.__call_hook=function(e,l){var a=this;ce();var t,n=a.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)t=qe(n[r],a,l?[l]:null,a,i);return a._hasHookEvent&&a.$emit("hook:"+e),he(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return s(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Xt(l||this,e)},e.prototype.__get_class=function(e,l){return zt(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Vt(e),t=l?k(l,a):a;return Object.keys(t).map(function(e){return T(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,n,i,r;if(Array.isArray(e)){for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);return a}if(u(e)){for(i=Object.keys(e),a=Object.create(null),t=0,n=i.length;t<n;t++)r=i[t],a[r]=l(e[r],r,t);return a}return[]}}var Kt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function $t(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Kt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Kt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Kt}ht.prototype.__patch__=_t,ht.prototype.$mount=function(e,l){return Gt(this,e,l)},$t(ht),qt(ht),l["default"]=ht}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=pl,l.createComponent=Ml,l.createPage=Sl,l.default=void 0;var t=n(a("66fd"));function n(e){return e&&e.__esModule?e:{default:e}}function i(e,l){return u(e)||o(e,l)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,l){var a=[],t=!0,n=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0)if(a.push(r.value),l&&a.length===l)break}catch(u){n=!0,i=u}finally{try{t||null==o["return"]||o["return"]()}finally{if(n)throw i}}return a}function u(e){if(Array.isArray(e))return e}function v(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function s(e){return h(e)||c(e)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function h(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var p=Object.prototype.toString,f=Object.prototype.hasOwnProperty;function d(e){return"function"===typeof e}function g(e){return"string"===typeof e}function y(e){return"[object Object]"===p.call(e)}function x(e,l){return f.call(e,l)}function A(){}function m(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,S=m(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),M=["invoke","success","fail","complete","returnValue"],D={},T={};function O(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?R(a):a}function R(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function I(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function E(e,l){Object.keys(l).forEach(function(a){-1!==M.indexOf(a)&&d(l[a])&&(e[a]=O(e[a],l[a]))})}function k(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==M.indexOf(a)&&d(l[a])&&I(e[a],l[a])})}function P(e,l){"string"===typeof e&&y(l)?E(T[e]||(T[e]={}),l):y(e)&&E(D,e)}function C(e,l){"string"===typeof e?y(l)?k(T[e],l):delete T[e]:y(e)&&k(D,e)}function L(e){return function(l){return e(l)||l}}function j(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function F(e,l){for(var a=!1,t=0;t<e.length;t++){var n=e[t];if(a)a=Promise.then(L(n));else{var i=n(l);if(j(i)&&(a=Promise.resolve(i)),!1===i)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function B(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){F(e[a],l).then(function(e){return d(t)&&t(e)||e})}}}),l}function N(e,l){var a=[];Array.isArray(D.returnValue)&&a.push.apply(a,s(D.returnValue));var t=T[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,s(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function _(e){var l=Object.create(null);Object.keys(D).forEach(function(e){"returnValue"!==e&&(l[e]=D[e].slice())});var a=T[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function U(e,l,a){for(var t=arguments.length,n=new Array(t>3?t-3:0),i=3;i<t;i++)n[i-3]=arguments[i];var r=_(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var o=F(r.invoke,a);return o.then(function(e){return l.apply(void 0,[B(r,e)].concat(n))})}return l.apply(void 0,[B(r,a)].concat(n))}return l.apply(void 0,[a].concat(n))}var G={returnValue:function(e){return j(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},z=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,W=/^on/;function Q(e){return H.test(e)}function Z(e){return z.test(e)}function Y(e){return W.test(e)}function V(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function J(e){return!(Q(e)||Z(e)||Y(e))}function X(e,l){return J(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return d(a.success)||d(a.fail)||d(a.complete)?N(e,U.apply(void 0,[e,l,a].concat(n))):N(e,V(new Promise(function(t,i){U.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:i})].concat(n)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var q=1e-4,K=750,$=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,le=a,$="ios"===l}function te(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/K*(l||ee);return a<0&&(a=-a),a=Math.floor(a+q),0===a?1!==le&&$?.5:1:e<0?-a:a}var ne={promiseInterceptor:G},ie=Object.freeze({upx2px:te,interceptors:ne,addInterceptor:P,removeInterceptor:C}),re={},oe=[],ue=[],ve=["success","fail","cancel","complete"];function se(e,l,a){return function(t){return l(ce(e,t,a))}}function be(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(l)){var i=!0===n?l:{};for(var r in d(a)&&(a=a(l,i)||{}),l)if(x(a,r)){var o=a[r];d(o)&&(o=o(l[r],l,i)),o?g(o)?i[o]=l[r]:y(o)&&(i[o.name?o.name:r]=o.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==ve.indexOf(r)?i[r]=se(e,l[r],t):n||(i[r]=l[r]);return i}return d(l)&&(l=se(e,l,t)),l}function ce(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(re.returnValue)&&(l=re.returnValue(e,l)),be(e,l,a,{},t)}function he(e,l){if(x(re,e)){var a=re[e];return a?function(l,t){var n=a;d(a)&&(n=a(l)),l=be(e,l,n.args,n.returnValue);var i=[l];"undefined"!==typeof t&&i.push(t);var r=wx[n.name||e].apply(wx,i);return Z(e)?ce(e,r,n.returnValue,Q(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var pe=Object.create(null),fe=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function de(e){return function(l){var a=l.fail,t=l.complete,n={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};d(a)&&a(n),d(t)&&t(n)}}fe.forEach(function(e){pe[e]=de(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ye(e,l,a){return e[l].apply(e,a)}function xe(){return ye(ge(),"$on",Array.prototype.slice.call(arguments))}function Ae(){return ye(ge(),"$off",Array.prototype.slice.call(arguments))}function me(){return ye(ge(),"$once",Array.prototype.slice.call(arguments))}function we(){return ye(ge(),"$emit",Array.prototype.slice.call(arguments))}var Se=Object.freeze({$on:xe,$off:Ae,$once:me,$emit:we});function Me(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function De(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var l=e.mask;Me("uni-tabview").setMask({color:l})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),n=e.show,i=e.hide,r=e.close,o=function(){t.setStyle({mask:a})},u=function(){t.setStyle({mask:"none"})};e.show=function(){o();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.hide=function(){u();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return i.apply(e,a)},e.close=function(){u(),l=[];for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return r.apply(e,t)}}}function Te(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&De(l),l}var Oe=Object.freeze({getSubNVueById:Te,requireNativePlugin:Me}),Re=Page,Ie=Component,Ee=/:/g,ke=m(function(e){return S(e.replace(Ee,"-"))});function Pe(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return l.apply(e,[ke(a)].concat(n))}}}function Ce(e,l){var a=l[e];l[e]=a?function(){Pe(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){Pe(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("onLoad",e),Re(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("created",e),Ie(e)};var Le=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function je(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){x(a,l)&&(e[l]=a[l])})}function Fe(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,d(l))return!!d(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(d(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Fe(e,l)}):void 0}function Be(e,l,a){l.forEach(function(l){Fe(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Ne(e,l){var a;return l=l.default||l,d(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function _e(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ue(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Ge(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(n){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(n){}return y(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||x(a,e)||(a[e]=t[e])}),a}var ze=[String,Number,Boolean,Object,Array,null];function He(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function We(e,l){var a=e["behaviors"],t=e["extends"],n=e["mixins"],i=e["props"];i||(e["props"]=i=[]);var r=[];return Array.isArray(a)&&a.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(t)&&t.props&&r.push(l({properties:Ze(t.props,!0)})),Array.isArray(n)&&n.forEach(function(e){y(e)&&e.props&&r.push(l({properties:Ze(e.props,!0)}))}),r}function Qe(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function Ze(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:He(e)}}):y(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(y(t)){var n=t["default"];d(n)&&(n=n()),t.type=Qe(l,t.type),a[l]={type:-1!==ze.indexOf(t.type)?t.type:null,value:n,observer:He(l)}}else{var i=Qe(l,t);a[l]={type:-1!==ze.indexOf(i)?i:null,observer:He(l)}}}),a}function Ye(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=A,e.preventDefault=A,e.target=e.target||{},x(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Ve(e,l){var a=e;return l.forEach(function(l){var t=l[0],n=l[2];if(t||"undefined"!==typeof n){var i=l[1],r=l[3],o=t?e.__get_value(t,a):a;Number.isInteger(o)?a=n:i?Array.isArray(o)?a=o.find(function(l){return e.__get_value(i,l)===n}):y(o)?a=Object.keys(o).find(function(l){return e.__get_value(i,o[l])===n}):console.error("v-for 暂不支持循环数据：",o):a=o[n],r&&(a=e.__get_value(r,a))}}),a}function Je(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,n){"string"===typeof l?l?"$event"===l?t["$"+n]=a:0===l.indexOf("$event.")?t["$"+n]=e.__get_value(l.replace("$event.",""),a):t["$"+n]=e.__get_value(l):t["$"+n]=e:t["$"+n]=Ve(e,l)}),t}function Xe(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function qe(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,r=!1;if(n&&(r=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return r?[l]:l.detail.__args__||l.detail;var o=Je(e,t,l),u=[];return a.forEach(function(e){"$event"===e?"__set_model"!==i||n?n&&!r?u.push(l.detail.__args__[0]):u.push(l):u.push(l.target.value):Array.isArray(e)&&"o"===e[0]?u.push(Xe(e)):"string"===typeof e&&x(o,e)?u.push(o[e]):u.push(e)}),u}var Ke="~",$e="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Ye(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var n=e.type,i=[];return t.forEach(function(a){var t=a[0],r=a[1],o=t.charAt(0)===$e;t=o?t.slice(1):t;var u=t.charAt(0)===Ke;t=u?t.slice(1):t,r&&el(n,t)&&r.forEach(function(a){var t=a[0];if(t){var n=l.$vm;n.$options.generic&&n.$parent&&n.$parent.$parent&&(n=n.$parent.$parent);var r=n[t];if(!d(r))throw new Error(" _vm.".concat(t," is not a function"));if(u){if(r.once)return;r.once=!0}i.push(r.apply(n,qe(l.$vm,e,a[1],a[2],o,t)))}})}),"input"===n&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function tl(e,l){var a=l.mocks,n=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=v({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(n(this),je(this,a)))}});var i={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return i.globalData=e.$options.globalData||{},Be(i,al),i}var nl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function il(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var n=a.length-1;n>=0;n--)if(t=il(a[n],l),t)return t}function rl(e){return Behavior(e)}function ol(){return!!this.route}function ul(e){this.triggerEvent("__l",e)}function vl(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function sl(e){var l,a=e.detail||e.value,t=a.vuePid,n=a.vueOptions;t&&(l=il(this.$vm,t)),l||(l=this.$vm),n.parent=l}function bl(e){return tl(e,{mocks:nl,initRefs:vl})}var cl=["onUniNViewMessage"];function hl(e){var l=bl(e);return Be(l,cl),l}function pl(e){return App(hl(e)),e}function fl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,n=l.initRelation,r=Ne(t.default,e),o=i(r,2),u=o[0],v=o[1],s={options:{multipleSlots:!0,addGlobalClass:!0},data:Ge(v,t.default.prototype),behaviors:We(v,rl),properties:Ze(v.props,!1,v.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ue(e.vueId,this),n.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new u(l),_e(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:sl,__e:ll}};return Array.isArray(v.wxsCallMethods)&&v.wxsCallMethods.forEach(function(e){s.methods[e]=function(l){return this.$vm[e](l)}}),a?s:[s,u]}function dl(e){return fl(e,{isPage:ol,initRelation:ul})}function gl(e){var l=dl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var yl=["onShow","onHide","onUnload"];function xl(e,l){l.isPage,l.initRelation;var a=gl(e);return Be(a.methods,yl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function Al(e){return xl(e,{isPage:ol,initRelation:ul})}yl.push.apply(yl,Le);var ml=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function wl(e){var l=Al(e);return Be(l.methods,ml),l}function Sl(e){return Component(wl(e))}function Ml(e){return Component(gl(e))}oe.forEach(function(e){re[e]=!1}),ue.forEach(function(e){var l=re[e]&&re[e].name?re[e].name:e;wx.canIUse(l)||(re[e]=!1)});var Dl={};Object.keys(ie).forEach(function(e){Dl[e]=ie[e]}),Object.keys(Se).forEach(function(e){Dl[e]=Se[e]}),Object.keys(Oe).forEach(function(e){Dl[e]=X(e,Oe[e])}),Object.keys(wx).forEach(function(e){(x(wx,e)||x(re,e))&&(Dl[e]=X(e,he(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=Dl,e.UniEmitter=Se),wx.createApp=pl,wx.createPage=Sl,wx.createComponent=Ml;var Tl=Dl,Ol=Tl;l.default=Ol}).call(this,a("c8ba"))},7422:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNFQURFMTNGMUQ0MjExRUFBNTczQTc3RDI4RkJDMEIwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNFQURFMTQwMUQ0MjExRUFBNTczQTc3RDI4RkJDMEIwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0VBREUxM0QxRDQyMTFFQUE1NzNBNzdEMjhGQkMwQjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0VBREUxM0UxRDQyMTFFQUE1NzNBNzdEMjhGQkMwQjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz41SXQpAAAEXUlEQVR42tSZaUhVQRTHn5WmZZuWbUaYRVHZvi+0EJUlrdiC0B5BICVUX+pDXyKKFqRAhJCIaF9sX4hs/VC0L1aGVpDlo9JK26x8/Q+dK8Np7r3vvsWXB37izL0z93/nnZlzZm6Yx+Nx1SarR39iYmIC0VdzkAjiQSOu+wDc4Bn45O8DSktL/wr20aLABDANDAXtbe4vAhfASXAW/PTloWHkEg5HuDXIAItBUx9flkY9C2SCj05GuI6Dh9QHa8BzsNIPsWQtwVrwEiwHdQM9wl3BXtDD5PoXcA08BIVc/gZagHagFxim+La0m2AWeBEIH04GB0FDUU/Ly1GQA8574ZPhYDRYAqbQYCnXBoDbYDrIs+rEziXSeJJIscdBF37AKS8nEN1zjidpd26nWjOejJN8FZwCdop7ysBMMBkU+OHD+dw/DUiFUh/Bv+Yop4K7sM+qLkOTbRA4EMA4sIfd4bUQfRgkeCuYGhwC0UodTaThfo6qmT0Bg0GxcI99utVDJ3gV6CbcYAyvncEyGuFxvLqoEzHdTjAFhdWibi6vl8G2x2CpqFsr13speAWIVMrkrydqMLfZxUukYU3AMrPAQblBCWjM136DTnaLeRAsCdxX1mk3B5+fMjRPVsSS7Q+BWBdHy1MijI/XuUSKaLgzhGnvDk1M+EfwGOX/z+BiCAWTH3/XaTMEt+KhN+wa+7DORnCEamFyndbxqUyEyT1x3McIk+uUON1Qyh14AlYL7iwaPDLpaCO4BHbzgp+o2cFcAUeYKyJaurhNPvdxifvU2T1R7qwKjhMXdZMtkhN3w2LBInHPSDBQKQ/kOtUWcVvDMsRSalixJoeuFhwtLlZoOqjSZGWVmozMZVOna1OlafdOlGOtkh9dfSVHQY+yR8sS95AL5CrlXK5TLUv5BT3cZ6WjXbOI4boRN2wrOAbagFtiJhsCKN/tw+U7ygsaVsI7mP7gDSdWOpOTulwV7NZMDKvdb5HFdQ/vHqyMXvSqzT1tNQlS9U8v08ae/8GZSV9RLlQFvxWjPIR3yaGyKCH4FXgvJ1eeaJAcQsHJrEGdzP+sBrmi0YIQCl4oysfM0ku3ODtIsoh6wTLaUT9Q0ssynoDfZHpJ8Ttbs4zVtG0WZxbZrE0bILaoFzlLml+DYulZY0XEzbSKaLRarBN122tomaPjrG2ibj0HGssQvEn4bQM+kUkIotiOvMtQT5jushbbnOEHSBXhuhVvSOsEaWQvc7hXXSFNl2OYCXgKZoBfSl0/0DsIPntdiK3iAXvi9GzttCa5bhcgofTidBqfwy6nip3DLmiZrZnZuwCOJgmbCOa5/n5qkEYuONvuHMTpN47RLu9P3iM5CCVwAKLdR7jF+Voqn/64/BFcIsrpAfZhSjM38PL1w0kCb2ZnODQ2C7DQcvbfDbz2e212gunbGp2y0/Grvx/z3JwRnuBE66svnXjjw3l8LkBhOl7EebuX/cJCC5yOpJmF1bZPt38EGAA8ngOoTyvMKAAAAABJRU5ErkJggg=="},"766a":function(e,l,a){"use strict";(function(e){function a(e){return i(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=function(e){return e<10?"0"+e:e+""},o={date:{init:function(e,l){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,u=arguments.length>6?arguments[6]:void 0,v=new Date,s=[],b=new Date(e.toString()),c=new Date(l.toString());e>l&&(b=new Date(l.toString()),c=new Date(e.toString()));var h=b.getFullYear(),p=(b.getMonth(),c.getFullYear()),f=[],d=[],g=[],y=[],x=[],A=[],m=[],w=[],S=[];switch(t){case"half":S=[].concat(a(i.split(" ")[0].split("-")),o?a(i.split(" ")[1].split(":")):[i.split(" ")[1]]);break;case"date":case"yearMonth":S=i.split("-");break;case"dateTime":S=[].concat(a(i.split(" ")[0].split("-")),a(i.split(" ")[1].split(":")));break;case"time":S=i.split(":");break}var M=o?1*S[1]:S[1]+1,D=v.getFullYear(),T=v.getMonth()+1,O=v.getDate(),R=new Date(h,M,0).getDate();switch(t){case"half":case"date":case"yearMonth":var I=S[0],E=S[1];if(u){for(var k=h;k<=D;k++)f.push(k+"");if(I==D)for(var P=1;P<=T;P++)d.push(r(P));else for(var C=1;C<=12;C++)d.push(r(C));if(E==T)for(var L=1;L<=O;L++)g.push(r(L));else for(var j=1;j<=R;j++)g.push(r(j))}else{for(var F=h;F<=p;F++)f.push(F+"");for(var B=1;B<=12;B++)d.push(r(B));for(var N=1;N<=R;N++)g.push(r(N))}break;default:for(var _=h;_<=p;_++)f.push(_+"");for(var U=1;U<=12;U++)d.push(r(U));for(var G=1;G<=R;G++)g.push(r(G));break}for(var z=0;z<24;z++)y.push(r(z));for(var H=0;H<60;H+=1*n)x.push(r(H));for(var W=0;W<60;W++)A.push(r(W));switch(o&&(w=[f.indexOf(S[0]),d.indexOf(S[1]),g.indexOf(S[2]),y.indexOf(S[3]),-1==x.indexOf(S[4])?0:x.indexOf(S[4]),A.indexOf(S[5])]),t){case"date":return o?(s=[w[0],w[1],w[2]],{years:f,months:d,days:g,defaultVal:s}):(s=[-1==f.indexOf(S[0])?0:f.indexOf(S[0]),-1==d.indexOf(S[1])?0:d.indexOf(S[1]),-1==g.indexOf(S[2])?0:g.indexOf(S[2])],{years:f,months:d,days:g,defaultVal:s});case"half":if(m=[{label:"上午",value:0},{label:"下午",value:1}],o)return s=[w[0],w[1],w[2],w[3]],{years:f,months:d,days:g,areas:m,defaultVal:s};var Q=0;return m.map(function(e,l){e.label==S[3]&&(Q=e.value)}),s=[-1==f.indexOf(S[0])?0:f.indexOf(S[0]),-1==d.indexOf(S[1])?0:d.indexOf(S[1]),-1==g.indexOf(S[2])?0:g.indexOf(S[2]),Q],{years:f,months:d,days:g,areas:m,defaultVal:s};case"yearMonth":return o?(s=[w[0],w[1]],{years:f,months:d,defaultVal:s}):(s=[-1==f.indexOf(S[0])?0:f.indexOf(S[0]),-1==d.indexOf(S[1])?0:d.indexOf(S[1])],{years:f,months:d,defaultVal:s});case"dateTime":return s=o?w:[-1==f.indexOf(S[0])?0:f.indexOf(S[0]),-1==d.indexOf(S[1])?0:d.indexOf(S[1]),-1==g.indexOf(S[2])?0:g.indexOf(S[2]),-1==y.indexOf(S[3])?0:y.indexOf(S[3]),-1==x.indexOf(S[4])?0:x.indexOf(S[4]),-1==A.indexOf(S[5])?0:A.indexOf(S[5])],{years:f,months:d,days:g,hours:y,minutes:x,seconds:A,defaultVal:s};case"time":return s=o?[w[3],w[4],w[5]]:[-1==y.indexOf(S[0])?0:y.indexOf(S[0]),-1==x.indexOf(S[1])?0:x.indexOf(S[1]),-1==A.indexOf(S[2])?0:A.indexOf(S[2])],{hours:y,minutes:x,seconds:A,defaultVal:s}}},initMonths:function(e,l){var a=new Date,t=a.getFullYear(),n=a.getMonth()+1,i=(a.getDate(),t==e),o=[];if(l)if(i)for(var u=1;u<=n;u++)o.push(r(u));else for(var v=1;v<=12;v++)o.push(r(v));else for(var s=1;s<=12;s++)o.push(r(s));return o},initDays:function(e,l,a){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),u=n==e&&i==l,v=new Date(e,l,0).getDate(),s=[];if(u&&a)for(var b=1;b<=o;b++)s.push(r(b));else for(var c=1;c<=v;c++)s.push(r(c));return s}},limitHour:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=arguments.length>1?arguments[1]:void 0,a=new Date,t=[],n=[],i=[],o=(new Date).getHours(),u=["周日","周一","周二","周三","周四","周五","周六"],v=[],s=0,b=0,c=0,h=0;h<e;h++){var p=void 0,f=void 0,d=void 0,g=void 0;p=a.getFullYear(),f=r(a.getMonth()+1),d=r(a.getDate()),g=u[a.getDay()];var y="";switch(h){case 0:y="今天";break;case 1:y="明天";break;case 2:y="后天";break;default:y=f+"月"+d+"日 "+g;break}t.push({label:y,value:p+"-"+f+"-"+d,today:0==h}),a.setDate(a.getDate()+1)}n=o>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}];for(var x=o>12?o-12:o;x<=12;x++)i.push({label:r(x),value:r(o>12?x+12:x)});return t.map(function(e,a){e.label==l[0]&&(s=a)}),0!=s&&(n=this.initAreas(t[s]),i=this.initHours(t[s],n[b])),n.map(function(e,a){e.label==l[1]&&(b=a)}),i.map(function(e,a){e.label==l[2]&&(c=a)}),v=[s,b,c],{date:t,areas:n,hours:i,defaultVal:v}},initAreas:function(e){var l=[],a=(new Date).getHours();return l=e.today&&a>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}],l},initHours:function(e,l){var a=[],t=(new Date).getHours();if(e.today)if(1==l.value&&t<=12)for(var n=1;n<=12;n++)a.push({label:r(n),value:r(1==l.value?n+12:n)});else for(var i=t>12?t-12:t;i<=12;i++)a.push({label:r(i),value:r(1==l.value?i+12:i)});else for(var o=1;o<=12;o++)a.push({label:r(o),value:r(1==l.value?o+12:o)});return a}},limit:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,i=arguments.length>5?arguments[5]:void 0,o=new Date,u=new Date((new Date).getTime()+60*n*1e3),v=[],s=[],b=[],c=u.getHours(),h=Math.floor(u.getMinutes()/t)*t,p=["周日","周一","周二","周三","周四","周五","周六"],f=0,d=0,g=0,y=[],x=0;x<e;x++){var A=void 0,m=void 0,w=void 0,S=void 0;A=o.getFullYear(),m=r(o.getMonth()+1),w=r(o.getDate()),S=p[o.getDay()];var M="";switch(x){case 0:M="今天";break;case 1:M="明天";break;case 2:M="后天";break;default:M=m+"月"+w+"日 "+S;break}v.push({label:M,value:A+"-"+m+"-"+w,flag:0==x}),o.setDate(o.getDate()+1)}c<l&&(c=l),c>a&&(c=a);for(var D=1*c;D<=1*a;D++)s.push({label:r(D),value:r(D),flag:D==c});for(var T=h;T<60;T+=1*t)b.push({label:r(T),value:r(T)});return v.map(function(e,l){e.label==i[0]&&(f=l)}),0!=f&&(s=this.initHours(l=8,a=20,t=1,n=30,v[f].value)),s.map(function(e,l){e.label==i[1]&&(d=l)}),b.map(function(e,l){e.label==i[2]&&(g=l)}),y=[f,d,g],{date:v,hours:s,minutes:b,defaultVal:y}},initHours:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:30),t=arguments.length>4?arguments[4]:void 0,n=[],i=t.split("-"),o=new Date,u=o.getFullYear(),v=o.getMonth()+1,s=o.getDate(),b=new Date((new Date).getTime()+60*a*1e3),c=b.getHours(),h=u==i[0]&&v==i[1]&&s==i[2];if(c>l&&(c=l),h)for(var p=1*c;p<=1*l;p++)n.push({label:r(p),value:r(p),flag:p==c});else for(var f=1*e;f<=1*l;f++)n.push({label:r(f),value:r(f),flag:!1});return n},initMinutes:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,a=arguments.length>4?arguments[4]:void 0,t=arguments.length>5?arguments[5]:void 0,n=[],i=new Date((new Date).getTime()+60*l*1e3),o=a.split("-"),u=new Date,v=u.getFullYear(),s=u.getMonth()+1,b=u.getDate(),c=i.getHours(),h=Math.floor(i.getMinutes()/e)*e,p=v==o[0]&&s==o[1]&&b==o[2];if(p)if(t==c)for(var f=h;f<60;f+=1*e)n.push({label:r(f),value:r(f)});else for(var d=0;d<60;d+=1*e)n.push({label:r(d),value:r(d)});else for(var g=0;g<60;g+=1*e)n.push({label:r(g),value:r(g)});return n}},range:{init:function(e,l,a,t){new Date;var n=[],i=new Date(e.toString()),o=new Date(l.toString());e>l&&(i=new Date(l.toString()),o=new Date(e.toString()));var u=i.getFullYear(),v=(i.getMonth(),o.getFullYear()),s=[],b=[],c=[],h=[],p=[],f=[],d=[],g=[];d=a[0].split("-"),g=a[1].split("-");for(var y=t?1*d[1]:d[1]+1,x=new Date(u,y,0).getDate(),A=u;A<=v;A++)s.push(A+"");for(var m=1;m<=12;m++)b.push(r(m));for(var w=1;w<=x;w++)c.push(r(w));for(var S=d[0];S<=v;S++)h.push(S+"");for(var M=d[1];M<=12;M++)p.push(r(M));for(var D=d[2];D<=x;D++)f.push(r(D));return n=[-1==s.indexOf(d[0])?0:s.indexOf(d[0]),-1==b.indexOf(d[1])?0:b.indexOf(d[1]),-1==c.indexOf(d[2])?0:c.indexOf(d[2]),0,-1==h.indexOf(g[0])?0:h.indexOf(g[0]),-1==p.indexOf(g[1])?0:p.indexOf(g[1]),-1==f.indexOf(g[2])?0:f.indexOf(g[2])],{fyears:s,fmonths:b,fdays:c,tyears:h,tmonths:p,tdays:f,defaultVal:n}},initStartDays:function(e,l){for(var a=new Date(e,l,0).getDate(),t=[],n=1;n<=a;n++)t.push(r(n));return t},initEndYears:function(e,l,a){for(var t=[],n=e;n<=a;n++)t.push(r(n));return t},initEndMonths:function(e){for(var l=[],a=1*e;a<=12;a++)l.push(r(a));return l},initEndDays:function(e,l,a,t,n){for(var i=new Date(e,l,0).getDate(),o=[],u=1*a;u<=i;u++)o.push(r(u));return o},initToMonths:function(l,a,t,n){var i=new Date(l,a,t).getTime(),o=new Date(n,a,t).getTime(),u=[];if(o-i>0){console.log(e(1," at components\\w-picker\\w-picker.js:620"));for(var v=1;v<=12;v++)u.push(r(v))}else for(var s=1*a;s<=12;s++)u.push(r(s));return u},initToDays:function(e,l,a,t,n){var i=new Date(e,l,a).getTime(),o=new Date(t,n,a).getTime(),u=new Date(t,n,0).getDate(),v=[];if(o-i>0)for(var s=1;s<=u;s++)v.push(r(s));else for(var b=1*a;b<=u;b++)v.push(r(b));return v}}},u=o;l.default=u}).call(this,a("0de9")["default"])},"7dd3":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC+ElEQVRYR8XXW6hUdRTH8c9Jy9DC1CylsIuSaGaEL2JSEWZo9dJFNCjBy4spPVgGSjejMipDyQuGoQ+CUPQglqTkU2EkQlJWCqWWIWQXKrLwFMY6rAP7nDMze49zOP5fhpn5r7W+e/3/67fWbnOeV9t5jq8qwNV4CPdhFOL7X/gRX+AdfIAzzT5QGcCNeBYPUgr7M17FmzhdFaQRwEJsxAUFZ4fziY/iUozGrRhY2PMd7kJ8lq56ACvxdFqfxRa8iG9reLwQM7AG1+b/vyXEgTKCWgDTsCcNf8f92FvmCAOwCY/m3pO4Gaca2XYHGIKvcWUa3oGvKgQvbnkNS/OHXZjZDMArWIY/MDlhmozfsX0z5qXhTfiynpNiBi7HD7gYK/DSuUROm0E4jmHYjjlVAII4yP/EFfinBYAwXZ4XN0oyjramRhQz8C4ewHv52WJ81xVK8W7sruWwCHAI47EY61qNnvahF1Gaj2NtGcAvGIp78X4vAXyI6Xg5j6SH22IG/s4LOAX7egkgBGxuyvOSsgwcwzW9nIEd2cCex3NlAJ8gnv4xrO+lDHyeajgfb5cBrMJT2JnUrTIMRvSEOOYxdfpIlxYbTx9ZiHq9CtFeW1nRE7YiqmtCFSEK0m9wA1YX9PxcIMJXyG9pWXdvRp3U/2YvKG2ndeieyOHkp7zYdVW1O0B/fIZbcAJTU9ObycICvJUGG7CokXGteWAkDmJ4tuR7sL8CQUxOMb49U9gbw8wj2FblDhT3jEWoWOjCfynNr+P7Go764Xa8gYmZsYezo8Ys0BCi0UwYGYhWemchaNzoGFBCtC7B9akdMR9GoJiInsyOelFOVrflf7MQDa/LKpuKY3NIaejDuDppbM9shY5EGRdXDKsf5YWOTM7uDlEFoNNhNKpJ+U4wAr/mkXyaglPvmCNTARbHExAxY4ZEd6xmACrcw7pbAv7jzGKUeMwdHRB9BRCx4k5Ficd8EFPSZWjvS4CAiNe6eL84ghf6OgM1z6evM9AD4n8UO5AhnhAvagAAAABJRU5ErkJggg=="},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?n(e):l}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function r(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&o(e,l)}function o(e,l){return o=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},o(e,l)}function u(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function v(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,l,a){return l&&v(e.prototype,l),a&&v(e,a),e}var b=l.version,c="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",p=1800,f=300,d=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function x(){var l="";if("n"===S()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(g)}catch(a){l=y}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,l)}catch(a){e.setStorageSync(g,y)}}return l}var A=function(e){var l=Object.keys(e),a=l.sort(),t={},n="";for(var i in a)t[a[i]]=e[a[i]],n+=a[i]+"="+e[a[i]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},m=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},M=function(){var l="";return"wx"!==S()&&"qq"!==S()||e.canIUse("getAccountInfoSync")&&(l=e.getAccountInfoSync().miniProgram.appId||""),l},D=function(){return"n"===S()?plus.runtime.version:""},T=function(){var e=S(),l="";return"n"===e&&(l=plus.runtime.channel),l},O=function(l){var a=S(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},R="First__Visit__Time",I="Last__Visit__Time",E=function(){var l=e.getStorageSync(R),a=0;return l?a=l:(a=w(),e.setStorageSync(R,a),e.removeStorageSync(I)),a},k=function(){var l=e.getStorageSync(I),a=0;return a=l||"",e.setStorageSync(I,w()),a},P="__page__residence__time",C=0,L=0,j=function(){return C=w(),"n"===S()&&e.setStorageSync(P,w()),C},F=function(){return L=w(),"n"===S()&&(C=e.getStorageSync(P)),L-C},B="Total__Visit__Count",N=function(){var l=e.getStorageSync(B),a=1;return l&&(a=l,a++),e.setStorageSync(B,a),a},_=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},U=0,G=0,z=function(){var e=(new Date).getTime();return U=e,G=0,e},H=function(){var e=(new Date).getTime();return G=e,e},W=function(e){var l=0;if(0!==U&&(l=G-U),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>f;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>p;return{residenceTime:l,overtime:t}}return{residenceTime:l}},Q=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===S()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},Z=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,n=e._query,i=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return e._query="","bd"===S()?t.$mp&&t.$mp.page.is+i:t.$scope&&t.$scope.route+i||t.$mp&&t.$mp.page.route+i},Y=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},V=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=a("44ec").default,X=a("3161").default||a("3161"),q=e.getSystemInfoSync(),K=function(){function l(){u(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:x(),ut:S(),mpn:M(),ak:X.appid,usv:b,v:D(),ch:T(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===q.platform?"a":"i",brand:q.brand||"",md:q.model,sv:q.system.replace(/(Android|iOS)\s/,""),mpsdk:q.SDKVersion||"",mpv:q.version||"",lang:q.language,pr:q.pixelRatio,ww:q.windowWidth,wh:q.windowHeight,sw:q.screenWidth,sh:q.screenHeight}}return s(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var e=W("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,H();var a=W();z();var t=Z(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=Z(this),l=Q();if(this._navigationBarTitle.config=J&&J.pages[l]&&J.pages[l].titleNView&&J.pages[l].titleNView.titleText||J&&J.pages[l]&&J.pages[l].navigationBarTitleText||"",this.__licationShow)return z(),this.__licationShow=!1,void(this._lastPageRoute=e);H(),this._lastPageRoute=e;var a=W("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}z()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var e=W("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=w(),this.statData.sc=O(e.scene),this.statData.fvts=E(),this.statData.lvts=k(),this.statData.tvc=N(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,n=void 0===t?"":t,i=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:a,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;X.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,n=w(),i=this._navigationBarTitle;l.ttn=i.page,l.ttpj=i.config,l.ttc=i.report;var r=this._reportingRequestData;if("n"===S()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[l.lt]||(r[l.lt]=[]),r[l.lt].push(l),"n"===S()&&e.setStorageSync("__UNI__STAT__DATA",r),!(F()<d)||a){var o=this._reportingRequestData;"n"===S()&&(o=e.getStorageSync("__UNI__STAT__DATA")),j();var u=[],v=[],s=[],c=function(e){var l=o[e];l.forEach(function(l){var a=m(l);0===e?u.push(a):3===e?s.push(a):v.push(a)})};for(var h in o)c(h);u.push.apply(u,v.concat(s));var p={usv:b,t:n,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===S()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){t._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:c,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=A(_(e)).options;l.src=h+"?"+a}},{key:"sendEvent",value:function(e,l){V(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),$=function(l){function a(){var l;return u(this,a),l=t(this,i(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return r(a,l),s(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),s(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,j(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,Y(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,Y(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}}]),a}(K),ee=$.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},"96cf":function(e,l){!function(l){"use strict";var a,t=Object.prototype,n=t.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",v="object"===typeof e,s=l.regeneratorRuntime;if(s)v&&(e.exports=s);else{s=l.regeneratorRuntime=v?e.exports:{},s.wrap=A;var b="suspendedStart",c="suspendedYield",h="executing",p="completed",f={},d={};d[r]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(P([])));y&&y!==t&&n.call(y,r)&&(d=y);var x=M.prototype=w.prototype=Object.create(d);S.prototype=x.constructor=M,M.constructor=S,M[u]=S.displayName="GeneratorFunction",s.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===S||"GeneratorFunction"===(l.displayName||l.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,M):(e.__proto__=M,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(x),e},s.awrap=function(e){return{__await:e}},D(T.prototype),T.prototype[o]=function(){return this},s.AsyncIterator=T,s.async=function(e,l,a,t){var n=new T(A(e,l,a,t));return s.isGeneratorFunction(l)?n:n.next().then(function(e){return e.done?e.value:n.next()})},D(x),x[u]="Generator",x[r]=function(){return this},x.toString=function(){return"[object Generator]"},s.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var t=l.pop();if(t in e)return a.value=t,a.done=!1,a}return a.done=!0,a}},s.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(E),!e)for(var l in this)"t"===l.charAt(0)&&n.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,n){return o.type="throw",o.arg=e,l.next=t,n&&(l.method="next",l.arg=a),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var u=n.call(r,"catchLoc"),v=n.call(r,"finallyLoc");if(u&&v){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(u){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!v)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&n.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var i=t;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=l&&l<=i.finallyLoc&&(i=null);var r=i?i.completion:{};return r.type=e,r.arg=l,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(r)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),f},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),f}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var t=a.completion;if("throw"===t.type){var n=t.arg;E(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:P(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=a),f}}}function A(e,l,a,t){var n=l&&l.prototype instanceof w?l:w,i=Object.create(n.prototype),r=new k(t||[]);return i._invoke=O(e,a,r),i}function m(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(t){return{type:"throw",arg:t}}}function w(){}function S(){}function M(){}function D(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function T(e){function l(a,t,i,r){var o=m(e[a],e,t);if("throw"!==o.type){var u=o.arg,v=u.value;return v&&"object"===typeof v&&n.call(v,"__await")?Promise.resolve(v.__await).then(function(e){l("next",e,i,r)},function(e){l("throw",e,i,r)}):Promise.resolve(v).then(function(e){u.value=e,i(u)},function(e){return l("throw",e,i,r)})}r(o.arg)}var a;function t(e,t){function n(){return new Promise(function(a,n){l(e,t,a,n)})}return a=a?a.then(n,n):n()}this._invoke=t}function O(e,l,a){var t=b;return function(n,i){if(t===h)throw new Error("Generator is already running");if(t===p){if("throw"===n)throw i;return C()}a.method=n,a.arg=i;while(1){var r=a.delegate;if(r){var o=R(r,a);if(o){if(o===f)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===b)throw t=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=h;var u=m(e,l,a);if("normal"===u.type){if(t=a.done?p:c,u.arg===f)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(t=p,a.method="throw",a.arg=u.arg)}}}function R(e,l){var t=e.iterator[l.method];if(t===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,R(e,l),"throw"===l.method))return f;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=m(t,e.iterator,l.arg);if("throw"===n.type)return l.method="throw",l.arg=n.arg,l.delegate=null,f;var i=n.arg;return i?i.done?(l[e.resultName]=i.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,f):i:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,f)}function I(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function E(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function P(e){if(e){var l=e[r];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,i=function l(){while(++t<e.length)if(n.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=a,l.done=!0,l};return i.next=i}}return{next:C}}function C(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9cad":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4MDAzMTkyMUQ0MjExRUE4MzFCRjk1NzE1RTMyMTM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4MDAzMTkzMUQ0MjExRUE4MzFCRjk1NzE1RTMyMTM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTgwMDMxOTAxRDQyMTFFQTgzMUJGOTU3MTVFMzIxMzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTgwMDMxOTExRDQyMTFFQTgzMUJGOTU3MTVFMzIxMzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Ktj7QAAAH9klEQVR42txc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"},"9d63":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWcAAACZCAYAAADzV/tQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk5QTNCNEJDMUQ0MjExRUE4ODlBOTI2QjdBRTBCRERBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk5QTNCNEJEMUQ0MjExRUE4ODlBOTI2QjdBRTBCRERBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTlBM0I0QkExRDQyMTFFQTg4OUE5MjZCN0FFMEJEREEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTlBM0I0QkIxRDQyMTFFQTg4OUE5MjZCN0FFMEJEREEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5hO7HjAAAYAElEQVR42uyd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"},"9e20":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAIAAAC3ytZVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhCNENERTQ5MUQ0MjExRUE5Njk3OTVENjI3Q0MzNDY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhCNENERTRBMUQ0MjExRUE5Njk3OTVENjI3Q0MzNDY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEI0Q0RFNDcxRDQyMTFFQTk2OTc5NUQ2MjdDQzM0NjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEI0Q0RFNDgxRDQyMTFFQTk2OTc5NUQ2MjdDQzM0NjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz42AMjbAAAF/ElEQVR42uyc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"},a34a:function(e,l,a){e.exports=a("bbdd")},adf7:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],n=t;l.default=n},bbdd:function(e,l,a){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),n=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,i=n&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=a("96cf"),n)t.regeneratorRuntime=i;else try{delete t.regeneratorRuntime}catch(r){t.regeneratorRuntime=void 0}},c42a:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a={data:function(){return{position:[],button:[]}},computed:{pos:function(){return JSON.stringify(this.position)},btn:function(){return JSON.stringify(this.button)}},watch:{show:function(e){if(!this.autoClose){var l=this.position[0];l?(l.show=e,this.$set(this.position,0,l)):this.init()}}},created:function(){void 0!==this.swipeaction.children&&this.swipeaction.children.push(this)},mounted:function(){this.init()},beforeDestroy:function(){var e=this;this.swipeaction.children.forEach(function(l,a){l===e&&e.swipeaction.children.splice(a,1)})},methods:{init:function(){var e=this;setTimeout(function(){e.getSize(),e.getButtonSize()},50)},closeSwipe:function(e){this.autoClose&&this.swipeaction.closeOther(this)},change:function(e){this.$emit("change",e.open);var l=this.position[0];l.show!==e.open&&(l.show=e.open,this.$set(this.position,0,l))},onClick:function(e,l){this.$emit("click",{content:l,index:e})},getSize:function(){var l=this,a=e.createSelectorQuery().in(this);a.selectAll(".selector-query-hock").boundingClientRect(function(e){l.autoClose?e[0].show=!1:e[0].show=l.show,l.position=e}).exec()},getButtonSize:function(){var l=this,a=e.createSelectorQuery().in(this);a.selectAll(".button-hock").boundingClientRect(function(e){l.button=e}).exec()}}};l.default=a}).call(this,a("6e42")["default"])},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},d0f1:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],n=t;l.default=n},d97c:function(e,l,a){e.exports=a.p+"static/img/bg.b878fe55.png"},e88d:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRBQ0E1MUVBMUQ0MjExRUFBMjMwRDEzNzhCNjM4NDdDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRBQ0E1MUVCMUQ0MjExRUFBMjMwRDEzNzhCNjM4NDdDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REFDQTUxRTgxRDQyMTFFQUEyMzBEMTM3OEI2Mzg0N0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REFDQTUxRTkxRDQyMTFFQUEyMzBEMTM3OEI2Mzg0N0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6H/nC2AAAArUlEQVR42mKcOXOmFgMDAysQX2QgAJiAeCcQnwZiP2IUt0JNXkNIA0jxDCDOIkYDE5SeTowGJiQ2QQ1MaHy8Gpiw2AbSkAzEzOgamHD4ZR4Qx6FrYMITUkvRNKgzEYgHPqiBf4D4Fz7FmUA8DYi/A7EPEN9nIlLhPlxuxqoQm+J0XArRFUfjU4isGKRwERD/xKUQpjiSGIUwxTXEKAQBFiAOA+J/QHydUE4BCDAAMqUv1AeHAjgAAAAASUVORK5CYII="},ef3d:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEwNkY0RjM4MUQ0MjExRUFBRUEyQ0U1NDgxNUI3NTEyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEwNkY0RjM5MUQ0MjExRUFBRUEyQ0U1NDgxNUI3NTEyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTA2RjRGMzYxRDQyMTFFQUFFQTJDRTU0ODE1Qjc1MTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTA2RjRGMzcxRDQyMTFFQUFFQTJDRTU0ODE1Qjc1MTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5LtIaJAAADRklEQVR42uyYfWhNYRzH7x2NVviDlZf9IVtqzLw1L+XO5N1IQhIJk5im5cpLJBTLexOxYkjjKmRCeUnu7rD9QXmbP7xmhSGbP9jadK/vr76rp9s5557nnDvdP/arT895nvOcc7/neX7P7/c81xuJRDyJZEmeBLOEE9TVqNHn89l51gsWgbVgLOtPQBk4D8KxXhAKheI2QrPAU3AR5IJuIBmMB2fBSzCPIjt0ymTo5LNughFsqwUFYDkIsi0TXOW9KR0haCS4BarABLa9AHPBOFAOzoE8MJ1TJ5YD7oL77OdaUDoIcHpmsu0dWMoRum7wzB0KWQBes20SeAyugSFOBa0CdXRcsa90YJmOihhOK8HtCsgGK0A922VEn4HVuoJyuVrEURvBZjAInARtGi7xl06eAYrBN67sMk6vbUE7eO8jyAL7QbOL8NIKSjlib9m2XUdQDksR8jmOca8BHOL1GB1BPVm6FZNMf/vAaRP7wrKH7UhNh01iwHNqKaBSiUOZnK5U1pt1Rugny94OxfRi3GoXcwzc4HUflk06ghpYphmMaCXjT6qFGIlFE1nfB4oYClRB9TqC3rMcHNUuIzaHSPTtG3VfRFYrDisraUtUn09KyrEtqI5ltsHIFfE6iz+epoxmkO1ifrDH4N1H+aHFOoJqlRGKnprjTKZhppYaMBk8oOOKFYLDFj72xizSmwmqVuZ8msF9SaZLGLUHgHsUF2aeO2HyXulbogi3Leg7k6HYQpM+ASbQFtbbmPcqLEbmAH1qt5PkGmCZD/qb9JHVNoP7I3H0yxbvk9U1n9c1TgTJNvQ3l7rfop848mxwO0Zs8jNyt3LvpC2oiVlZbB2zvVPLUFbVKfDD6QathNsPSSGnHe7B5dlLoDv4BXa62THKl2zkdR4F6lgXcAaMYn0NF4yrPXW54uCbwFaN5CqnksWslyrvcb3JL1BWxl5OX4pF/2HgkRIyLoAN8Tx1/OHyrmJ9JXhucPbqxwgth4LhSuxZZufgaLUfMjJxyKngIPNZOs9er8BDJt58Oq+H++dCbvbdHaVj7I3X80eO8Lw2lLRbC8PFLq7Q//JngwTD0RyRoBK3toGBjDmNTl7s7fx/qFOQS/snwAAVubH7SoNpGAAAAABJRU5ErkJggg=="},f86e:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMDRDQzIxMUQ0MjExRUE4QkUxQUM0NTg3ODhBREI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwMDRDQzIyMUQ0MjExRUE4QkUxQUM0NTg3ODhBREI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDAwNENDMUYxRDQyMTFFQThCRTFBQzQ1ODc4OEFEQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDAwNENDMjAxRDQyMTFFQThCRTFBQzQ1ODc4OEFEQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Y28XKAAABk0lEQVR42uyYsUvDQBTGkxoQW9FJBKeKo1CHbkr2KI4qgptDwP9AcBb8DxQnBwdBx6LFNThJF8FFqN2K4iCCUoRq/A6+Sih35ggXzHAf/LhcQt77uJeDe3HjOHaKIi858X1/cDkLdsEqmDGYrwsa4AB0xI0oin4fliQvBOAOhIaNOIwXMn7w58pAc+ACVMAXOAM3oGfAyBhYAptgnHkWQFtlZi9hRJSoaXhlDsEpS1Vhvm1VmVY4nudgZKAm4yfzSc1Mc2zlvHFaQ/mUH7BQP2cz0vglp0CyZqwZa8aasWasGWtG90CuMLsMpgzkegFX4DurmZBHRVPaAUdZy/Ro8KDVZ7zMZboGE2DUgJnPtC7D0wjSSwnigknwBuL/3E1l8ABeOZbzMONpvi9KWOV1lfPMu3j45jPbh7pm0CewCObBPec6qifyKVfmkuO6rBdW6BaccNRRwPjJfNKV2QcbbD0bOfbaI+CD+ZRmRBO+xvZTNOdbxLTeuTrttA9Y9MI1cMz/KSbVZdyarJd3i/Tn6keAAQC70E/wI9UoYAAAAABJRU5ErkJggg=="}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/cu-custom.js';

define('colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/cu-custom"], {
  1753: function _(t, n, a) {
    "use strict";

    a.r(n);
    var o = a("5a51"),
        c = a.n(o);

    for (var e in o) {
      "default" !== e && function (t) {
        a.d(n, t, function () {
          return o[t];
        });
      }(e);
    }

    n["default"] = c.a;
  },
  "5a51": function a51(t, n, a) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "cu-custom",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                n = this.CustomBar,
                a = this.bgImage,
                o = this.Color,
                c = this.backColor,
                e = "height:".concat(n, "px;padding-top:").concat(t, "px;color:").concat(o, ";background-color:").concat(c);
            return this.bgImage && (e = "".concat(e, "background-image:url(").concat(a, ");color:").concat(o, ";background-color:").concat(c)), e;
          }
        },
        props: {
          bgColor: {
            type: String,
            default: ""
          },
          isBack: {
            type: [Boolean, String],
            default: !1
          },
          isIcon: {
            type: [Boolean, String],
            default: !1
          },
          isBacks: {
            type: [Boolean, String],
            default: !1
          },
          isIcons: {
            type: [Boolean, String],
            default: !1
          },
          bgImage: {
            type: String,
            default: ""
          },
          Color: {
            type: String,
            default: ""
          },
          backColor: {
            type: String,
            default: "#FFFFFF"
          }
        },
        methods: {
          BackPage: function BackPage() {
            t.navigateBack({
              delta: 1
            });
          },
          goRight: function goRight() {
            this.$emit("goRight");
          },
          Back: function Back() {
            this.$emit("Back");
          }
        }
      };
      n.default = a;
    }).call(this, a("6e42")["default"]);
  },
  9700: function _(t, n, a) {
    "use strict";

    a.r(n);
    var o = a("d519"),
        c = a("1753");

    for (var e in c) {
      "default" !== e && function (t) {
        a.d(n, t, function () {
          return c[t];
        });
      }(e);
    }

    a("b0c5");
    var u = a("2877"),
        r = Object(u["a"])(c["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  b0c5: function b0c5(t, n, a) {
    "use strict";

    var o = a("de9d"),
        c = a.n(o);
    c.a;
  },
  d519: function d519(t, n, a) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    a.d(n, "a", function () {
      return o;
    }), a.d(n, "b", function () {
      return c;
    });
  },
  de9d: function de9d(t, n, a) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['colorui/components/cu-custom-create-component', {
  'colorui/components/cu-custom-create-component': function coloruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9700"));
  }
}, [['colorui/components/cu-custom-create-component']]]);
});
require('colorui/components/cu-custom.js');
__wxRoute = 'components/chunLei-modal/chunLei-modal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chunLei-modal/chunLei-modal.js';

define('components/chunLei-modal/chunLei-modal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chunLei-modal/chunLei-modal"], {
  1651: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("5405"),
        a = e("f080");

    for (var r in a) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    e("73de");
    var o = e("2877"),
        u = Object(o["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = u.exports;
  },
  4879: function _(t, n, e) {},
  5405: function _(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  "73de": function de(t, n, e) {
    "use strict";

    var i = e("4879"),
        a = e.n(i);
    a.a;
  },
  bb24: function bb24(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = a(e("a34a"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function r(t, n, e, i, a, r, o) {
        try {
          var u = t[r](o),
              s = u.value;
        } catch (c) {
          return void e(c);
        }

        u.done ? n(s) : Promise.resolve(s).then(i, a);
      }

      function o(t) {
        return function () {
          var n = this,
              e = arguments;
          return new Promise(function (i, a) {
            var o = t.apply(n, e);

            function u(t) {
              r(o, i, a, u, s, "next", t);
            }

            function s(t) {
              r(o, i, a, u, s, "throw", t);
            }

            u(void 0);
          });
        };
      }

      var u = {
        props: {
          type: {
            type: String,
            default: "default"
          },
          value: {
            type: Boolean,
            default: !1
          },
          maskEnable: {
            type: Boolean,
            default: !0
          },
          mData: {
            type: [Object, Array],
            default: function _default() {}
          },
          nav: {
            type: Boolean,
            default: !0
          },
          navMask: {
            type: Boolean,
            default: !1
          }
        },
        data: function data() {
          return {
            navList: [],
            tabbarList: []
          };
        },
        mounted: function mounted() {
          this.init();
        },
        methods: {
          checkboxChange: function checkboxChange(t) {
            for (var n = this.mData, e = t.detail.value, i = 0, a = n.length; i < a; ++i) {
              var r = n[i];
              e.includes(r.title) ? this.$set(r, "flag", !0) : this.$set(r, "flag", !1);
            }
          },
          inputConfirm: function inputConfirm() {
            this.$emit("onConfirm", this.mData.content), this.$emit("input", !1);
          },
          tapCancel: function tapCancel() {
            this.$emit("cancel"), this.$emit("input", !1);
          },
          tapConfirm: function tapConfirm(t) {
            this.$emit("onConfirm", t), this.$emit("input", !1);
          },
          tapMask: function tapMask() {
            this.maskEnable && ("multiSelect" == this.type ? this.$emit("onConfirm", this.mData) : this.$emit("cancel", this.mData), this.$emit("input", !1));
          },
          creatPlusMask: function creatPlusMask(t, n, e) {
            for (var i = this, a = 1; a <= 10; a++) {
              var r = new plus.nativeObj.View("nav", {
                top: "0px",
                left: "0px",
                height: "".concat(t, "px"),
                width: "100%"
              });
              r.draw([{
                tag: "rect",
                id: "rect",
                color: "rgba(0,0,0,0.1)",
                position: {
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%"
                }
              }]), r.addEventListener("click", function (t) {
                i.tapMask();
              }, !1);
              var o = new plus.nativeObj.View("tabbar", {
                bottom: "0px",
                left: "0px",
                height: "".concat(n, "px"),
                width: "100%"
              });
              o.draw([{
                tag: "rect",
                id: "rect",
                color: "rgba(0,0,0,0.1)",
                position: {
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%"
                }
              }]), o.addEventListener("click", function (t) {
                i.tapMask();
              }, !1), this.navList.push(r), this.tabbarList.push(o);
            }
          },
          init: function () {
            var n = o(i.default.mark(function n() {
              var e, a, r;
              return i.default.wrap(function (n) {
                while (1) {
                  switch (n.prev = n.next) {
                    case 0:
                      return e = new Promise(function (n, e) {
                        t.getSystemInfo({
                          success: function success(t) {
                            var e;
                            e = t.statusBarHeight + 44, n(e);
                          }
                        });
                      }), n.next = 3, e;

                    case 3:
                      a = n.sent, a = this.nav ? a : 0, r = t.getSystemInfoSync().screenHeight - t.getSystemInfoSync().windowHeight - a, this.creatPlusMask(a, r, .6);

                    case 7:
                    case "end":
                      return n.stop();
                  }
                }
              }, n, this);
            }));

            function e() {
              return n.apply(this, arguments);
            }

            return e;
          }(),
          showPlusMask: function showPlusMask() {
            var t = this,
                n = 0,
                e = setInterval(function () {
              9 == n ? clearInterval(e) : (t.navList[n] && t.navList[n].show(), t.tabbarList[n] && t.tabbarList[n].show(), n++);
            }, 30);
          }
        },
        watch: {
          value: {
            immediate: !0,
            handler: function handler(t, n) {
              if (this.navMask) if (t) this.showPlusMask(.6);else {
                var e = !0,
                    i = !1,
                    a = void 0;

                try {
                  for (var r, o = this.navList[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                    var u = r.value;
                    u.hide();
                  }
                } catch (v) {
                  i = !0, a = v;
                } finally {
                  try {
                    e || null == o.return || o.return();
                  } finally {
                    if (i) throw a;
                  }
                }

                var s = !0,
                    c = !1,
                    l = void 0;

                try {
                  for (var f, h = this.tabbarList[Symbol.iterator](); !(s = (f = h.next()).done); s = !0) {
                    var d = f.value;
                    d.hide();
                  }
                } catch (v) {
                  c = !0, l = v;
                } finally {
                  try {
                    s || null == h.return || h.return();
                  } finally {
                    if (c) throw l;
                  }
                }
              }
            }
          }
        }
      };
      n.default = u;
    }).call(this, e("6e42")["default"]);
  },
  f080: function f080(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("bb24"),
        a = e.n(i);

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    n["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chunLei-modal/chunLei-modal-create-component', {
  'components/chunLei-modal/chunLei-modal-create-component': function componentsChunLeiModalChunLeiModalCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1651"));
  }
}, [['components/chunLei-modal/chunLei-modal-create-component']]]);
});
require('components/chunLei-modal/chunLei-modal.js');
__wxRoute = 'components/mescroll-uni/mescroll-uni';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mescroll-uni/mescroll-uni.js';

define('components/mescroll-uni/mescroll-uni.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mescroll-uni/mescroll-uni"], {
  4583: function _(o, t, n) {
    "use strict";

    var e = function e() {
      var o = this,
          t = o.$createElement;
      o._self._c;
    },
        i = [];

    n.d(t, "a", function () {
      return e;
    }), n.d(t, "b", function () {
      return i;
    });
  },
  "5a40": function a40(o, t, n) {
    "use strict";

    n.r(t);
    var e = n("81d7"),
        i = n.n(e);

    for (var s in e) {
      "default" !== s && function (o) {
        n.d(t, o, function () {
          return e[o];
        });
      }(s);
    }

    t["default"] = i.a;
  },
  "81d7": function d7(o, t, n) {
    "use strict";

    (function (o) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var e = s(n("6058")),
          i = s(n("42bb"));

      function s(o) {
        return o && o.__esModule ? o : {
          default: o
        };
      }

      var u = {
        data: function data() {
          return {
            mescroll: null,
            downHight: 0,
            downRotate: 0,
            downText: "",
            isDownReset: !1,
            isDownLoading: !1,
            isUpLoading: !1,
            isUpNoMore: !1,
            isShowEmpty: !1,
            isShowToTop: !1
          };
        },
        props: {
          down: Object,
          up: Object,
          top: [String, Number],
          bottom: [String, Number]
        },
        computed: {
          optDown: function optDown() {
            return this.mescroll ? this.mescroll.optDown : null;
          },
          optUp: function optUp() {
            return this.mescroll ? this.mescroll.optUp : null;
          },
          optEmpty: function optEmpty() {
            return this.mescroll ? this.mescroll.optUp.empty : null;
          },
          optToTop: function optToTop() {
            return this.mescroll ? this.mescroll.optUp.toTop : null;
          },
          padTop: function padTop() {
            return o.upx2px(Number(this.top) || 0) + "px";
          },
          padBottom: function padBottom() {
            return o.upx2px(Number(this.bottom) || 0) + "px";
          }
        },
        methods: {
          touchstartEvent: function touchstartEvent(o) {
            this.mescroll && this.mescroll.touchstartEvent(o);
          },
          touchmoveEvent: function touchmoveEvent(o) {
            this.mescroll && this.mescroll.touchmoveEvent(o);
          },
          touchendEvent: function touchendEvent(o) {
            this.mescroll && this.mescroll.touchendEvent(o);
          },
          emptyClick: function emptyClick() {
            this.$emit("emptyclick", this.mescroll);
          },
          toTopClick: function toTopClick() {
            this.isShowToTop = !1, o.pageScrollTo({
              scrollTop: 0,
              duration: this.mescroll.optUp.toTop.duration
            }), this.$emit("topclick", this.mescroll);
          }
        },
        mounted: function mounted() {
          var t = this,
              n = {
            down: {
              inOffset: function inOffset(o) {
                t.isDownReset = !1, t.isDownLoading = !1, t.downText = o.optDown.textInOffset;
              },
              outOffset: function outOffset(o) {
                t.isDownReset = !1, t.isDownLoading = !1, t.downText = o.optDown.textOutOffset;
              },
              onMoving: function onMoving(o, n, e) {
                t.downHight = e, t.downRotate = 360 * n;
              },
              showLoading: function showLoading(o, n) {
                t.isDownReset = !0, t.isDownLoading = !0, t.downHight = n, t.downText = o.optDown.textLoading;
              },
              endDownScroll: function endDownScroll(o) {
                t.isDownReset = !0, t.isDownLoading = !1, t.downHight = 0;
              },
              callback: function callback(o) {
                t.$emit("down", o);
              }
            },
            up: {
              showLoading: function showLoading() {
                t.isUpLoading = !0, t.isUpNoMore = !1;
              },
              showNoMore: function showNoMore() {
                t.isUpLoading = !1, t.isUpNoMore = !0;
              },
              hideUpScroll: function hideUpScroll() {
                t.isUpLoading = !1, t.isUpNoMore = !1;
              },
              empty: {
                onShow: function onShow(o) {
                  t.isShowEmpty != o && (t.isShowEmpty = o);
                }
              },
              toTop: {
                onShow: function onShow(o) {
                  t.isShowToTop != o && (t.isShowToTop = o);
                }
              },
              callback: function callback(o) {
                t.$emit("up", o);
              }
            }
          };
          e.default.extend(n, i.default);
          var s = e.default.extend({
            down: t.down ? JSON.parse(JSON.stringify(t.down)) : t.down,
            up: t.up ? JSON.parse(JSON.stringify(t.up)) : t.up
          }, n);
          t.mescroll = new e.default(s), t.$emit("init", t.mescroll), o.getSystemInfo({
            success: function success(o) {
              t.mescroll.setBodyHeight(o.windowHeight);
            }
          });
        }
      };
      t.default = u;
    }).call(this, n("6e42")["default"]);
  },
  dc89: function dc89(o, t, n) {
    "use strict";

    n.r(t);
    var e = n("4583"),
        i = n("5a40");

    for (var s in i) {
      "default" !== s && function (o) {
        n.d(t, o, function () {
          return i[o];
        });
      }(s);
    }

    n("fa13");
    var u = n("2877"),
        c = Object(u["a"])(i["default"], e["a"], e["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  fa13: function fa13(o, t, n) {
    "use strict";

    var e = n("fa1d"),
        i = n.n(e);
    i.a;
  },
  fa1d: function fa1d(o, t, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mescroll-uni/mescroll-uni-create-component', {
  'components/mescroll-uni/mescroll-uni-create-component': function componentsMescrollUniMescrollUniCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("dc89"));
  }
}, [['components/mescroll-uni/mescroll-uni-create-component']]]);
});
require('components/mescroll-uni/mescroll-uni.js');
__wxRoute = 'components/uni-swipe-action-item/uni-swipe-action-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-swipe-action-item/uni-swipe-action-item.js';

define('components/uni-swipe-action-item/uni-swipe-action-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-swipe-action-item/uni-swipe-action-item"], {
  "0750": function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("0877"),
        a = n("6278");

    for (var u in a) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    n("0d4f");
    var i = n("2877"),
        s = n("e11a"),
        l = Object(i["a"])(a["default"], o["a"], o["b"], !1, null, "7b7436eb", null);
    "function" === typeof s["a"] && Object(s["a"])(l), e["default"] = l.exports;
  },
  "0877": function _(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  "0d4f": function d4f(t, e, n) {
    "use strict";

    var o = n("d178"),
        a = n.n(o);
    a.a;
  },
  6278: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("6445"),
        a = n.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    e["default"] = a.a;
  },
  6445: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var o = a(n("c42a"));

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var u = {
      mixins: [o.default],
      props: {
        options: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        disabled: {
          type: Boolean,
          default: !1
        },
        show: {
          type: Boolean,
          default: !1
        },
        autoClose: {
          type: Boolean,
          default: !0
        }
      },
      inject: ["swipeaction"]
    };
    e.default = u;
  },
  d178: function d178(t, e, n) {},
  e11a: function e11a(t, e, n) {
    "use strict";

    var o = function o(t) {
      t.options.wxsCallMethods || (t.options.wxsCallMethods = []), t.options.wxsCallMethods.push("closeSwipe"), t.options.wxsCallMethods.push("change");
    };

    e["a"] = o;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-swipe-action-item/uni-swipe-action-item-create-component', {
  'components/uni-swipe-action-item/uni-swipe-action-item-create-component': function componentsUniSwipeActionItemUniSwipeActionItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0750"));
  }
}, [['components/uni-swipe-action-item/uni-swipe-action-item-create-component']]]);
});
require('components/uni-swipe-action-item/uni-swipe-action-item.js');
__wxRoute = 'components/uni-swipe-action/uni-swipe-action';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-swipe-action/uni-swipe-action.js';

define('components/uni-swipe-action/uni-swipe-action.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-swipe-action/uni-swipe-action"], {
  "0fc4": function fc4(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var i = {
      data: function data() {
        return {};
      },
      provide: function provide() {
        return {
          swipeaction: this
        };
      },
      created: function created() {
        this.children = [];
      },
      methods: {
        closeOther: function closeOther(n) {
          var t = this.children;
          t.forEach(function (t, e) {
            if (n !== t) {
              var i = t.position[0],
                  u = i.show;
              u && (i.show = !1);
            }
          });
        }
      }
    };
    t.default = i;
  },
  6869: function _(n, t, e) {
    "use strict";

    var i = function i() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    e.d(t, "a", function () {
      return i;
    }), e.d(t, "b", function () {
      return u;
    });
  },
  "8e4f": function e4f(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("6869"),
        u = e("b005");

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    var o = e("2877"),
        c = Object(o["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  b005: function b005(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("0fc4"),
        u = e.n(i);

    for (var r in i) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(r);
    }

    t["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-swipe-action/uni-swipe-action-create-component', {
  'components/uni-swipe-action/uni-swipe-action-create-component': function componentsUniSwipeActionUniSwipeActionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8e4f"));
  }
}, [['components/uni-swipe-action/uni-swipe-action-create-component']]]);
});
require('components/uni-swipe-action/uni-swipe-action.js');
__wxRoute = 'components/w-picker/w-picker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/w-picker/w-picker.js';

define('components/w-picker/w-picker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/w-picker/w-picker"], {
  "1b4e": function b4e(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("eed9"),
        s = e.n(r);

    for (var n in r) {
      "default" !== n && function (a) {
        e.d(t, a, function () {
          return r[a];
        });
      }(n);
    }

    t["default"] = s.a;
  },
  "24d4": function d4(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("6e3b"),
        s = e("1b4e");

    for (var n in s) {
      "default" !== n && function (a) {
        e.d(t, a, function () {
          return s[a];
        });
      }(n);
    }

    e("cb05");
    var d = e("2877"),
        l = Object(d["a"])(s["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = l.exports;
  },
  "6e3b": function e3b(a, t, e) {
    "use strict";

    var r = function r() {
      var a = this,
          t = a.$createElement;
      a._self._c;
    },
        s = [];

    e.d(t, "a", function () {
      return r;
    }), e.d(t, "b", function () {
      return s;
    });
  },
  cb05: function cb05(a, t, e) {
    "use strict";

    var r = e("e326"),
        s = e.n(r);
    s.a;
  },
  e326: function e326(a, t, e) {},
  eed9: function eed9(a, t, e) {
    "use strict";

    (function (a, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var s = i(e("adf7")),
          n = i(e("d0f1")),
          d = i(e("0acb")),
          l = i(e("766a"));

      function i(a) {
        return a && a.__esModule ? a : {
          default: a
        };
      }

      function u(a) {
        return o(a) || h(a) || c();
      }

      function c() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function h(a) {
        if (Symbol.iterator in Object(a) || "[object Arguments]" === Object.prototype.toString.call(a)) return Array.from(a);
      }

      function o(a) {
        if (Array.isArray(a)) {
          for (var t = 0, e = new Array(a.length); t < a.length; t++) {
            e[t] = a[t];
          }

          return e;
        }
      }

      function f(a, t) {
        for (var e = 0; e < t.length; e++) {
          if (a === t[e]) return !0;
        }

        throw new Error("mode无效，请选择有效的mode!");
      }

      var m = {
        data: function data() {
          return {
            result: [],
            data: {},
            checkArr: [],
            checkValue: [],
            pickVal: [],
            showPicker: !1,
            resultStr: "",
            itemHeight: "height: ".concat(a.upx2px(88), "px;"),
            confirmFlag: !0
          };
        },
        computed: {},
        props: {
          mode: {
            type: String,
            validator: function validator(a) {
              var t = ["half", "date", "dateTime", "yearMonth", "time", "region", "selector", "limit", "limitHour", "range", "linkage"];
              return f(a, t);
            },
            default: function _default() {
              return "date";
            }
          },
          themeColor: {
            type: String,
            default: function _default() {
              return "#f5a200";
            }
          },
          startYear: {
            type: [String, Number],
            default: function _default() {
              return "1970";
            }
          },
          endYear: {
            type: [String, Number],
            default: function _default() {
              return new Date().getFullYear() + "";
            }
          },
          defaultVal: {
            type: [Array, String],
            default: ""
          },
          areaCode: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          hideArea: {
            type: Boolean,
            default: !1
          },
          step: {
            type: [String, Number],
            default: 1
          },
          current: {
            type: Boolean,
            default: !1
          },
          selectList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          dayStep: {
            type: [String, Number],
            default: 7
          },
          startHour: {
            type: [String, Number],
            default: 8
          },
          endHour: {
            type: [String, Number],
            default: 20
          },
          minuteStep: {
            type: [String, Number],
            default: 10
          },
          afterStep: {
            type: [String, Number],
            default: 30
          },
          disabledAfter: {
            type: Boolean,
            default: !1
          },
          linkList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          value: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          level: {
            type: [Number, String],
            default: 2
          },
          timeout: {
            type: Boolean,
            default: !1
          }
        },
        watch: {
          mode: function mode() {
            this.initData();
          },
          selectList: function selectList() {
            this.initData();
          },
          linkList: function linkList() {
            this.initData();
          },
          defaultVal: function defaultVal(a) {
            this.initData(), console.log(r(a, " at components\\w-picker\\w-picker.vue:311"));
          },
          areaCode: function areaCode() {
            this.initData();
          },
          value: function value() {
            this.initData();
          }
        },
        methods: {
          touchStart: function touchStart() {
            this.timeout && (this.confirmFlag = !1);
          },
          touchEnd: function touchEnd() {
            var a = this;
            this.timeout && setTimeout(function () {
              a.confirmFlag = !0;
            }, 500);
          },
          getLinkageVal: function getLinkageVal(a, t) {
            var e = [],
                r = this.linkList,
                s = this.level,
                n = a,
                d = 0,
                l = [],
                i = [],
                u = "",
                c = [];

            switch (s) {
              case 2:
                e = [0, 0];
                break;

              case 3:
                e = [0, 0, 0];
                break;
            }

            var h = function a(r, d, h) {
              if (d < s) {
                if (c.push(r), n) r.map(function (r, s) {
                  (t ? r.value == n[d] : r.label == n[d]) && (e[d] = s, l.push(r.label), i.push(r.value), u += r.label, r.children && a(r.children, d += 1));
                });else {
                  var o = r[0];
                  l.push(o.label), i.push(o.value), u += o.label, o.children && a(o.children, d += 1);
                }
                return {
                  data: c,
                  dval: e,
                  checkArr: l,
                  checkValue: i,
                  resultStr: u
                };
              }

              return !1;
            };

            return h(r, d);
          },
          getRegionVal: function getRegionVal(a, t) {
            var e = a[0],
                r = a[1],
                l = 0,
                i = 0,
                u = 0,
                c = [],
                h = this;
            if (s.default.map(function (a, r) {
              (t ? a.value == e : a.label == e) && (l = r);
            }), n.default[l].map(function (a, e) {
              (t ? a.value == r : a.label == r) && (i = e);
            }), h.hideArea) c = [l, i];else {
              var o = a[2];
              d.default[l][i].map(function (a, e) {
                (t ? a.value == o : a.label == o) && (u = e);
              }), c = [l, i, u];
            }
            return c;
          },
          useCurrent: function useCurrent() {
            var a = new Date(),
                t = a.getFullYear().toString(),
                e = this.formatNum(a.getMonth() + 1).toString(),
                r = this.formatNum(a.getDate()).toString(),
                s = this.formatNum(a.getHours()).toString(),
                n = this.formatNum(a.getMinutes()).toString(),
                d = this.formatNum(a.getSeconds()).toString();
            if (!this.current && this.defaultVal) return this.defaultVal;

            switch (this.mode) {
              case "range":
                return [t + "-" + e + "-" + r, t + "-" + e + "-" + r];

              case "date":
                return t + "-" + e + "-" + r;

              case "yearMonth":
                return t + "-" + e;

              case "time":
                return s + ":" + (Math.floor(n / this.step) * this.step).toString() + ":" + d;

              default:
                return t + "-" + e + "-" + r + " " + s + ":" + (Math.floor(n / this.step) * this.step).toString() + ":" + d;
            }
          },
          formatNum: function formatNum(a) {
            return a < 10 ? "0" + a : a + "";
          },
          maskTap: function maskTap() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          show: function show() {
            this.showPicker = !0;
          },
          hide: function hide() {
            this.showPicker = !1;
          },
          pickerCancel: function pickerCancel() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          pickerConfirm: function pickerConfirm(t) {
            if (this.confirmFlag) {
              switch (this.mode) {
                case "range":
                  var e = this.checkArr,
                      r = new Date(e[0], e[1], e[2]),
                      s = new Date(e[3], e[4], e[5]),
                      n = this.pickVal;
                  r > s ? (this.checkArr = [e[3], e[4], e[5], e[0], e[1], e[2]], this.pickVal = [n[4], n[5], n[6], 0, n[0], n[1], n[2]], this.$emit("confirm", {
                    checkArr: u(this.checkArr),
                    from: e[3] + "-" + e[4] + "-" + e[5],
                    to: e[0] + "-" + e[1] + "-" + e[2],
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  })) : this.$emit("confirm", {
                    checkArr: u(this.checkArr),
                    from: e[0] + "-" + e[1] + "-" + e[2],
                    to: e[3] + "-" + e[4] + "-" + e[5],
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;

                case "limit":
                  var d = new Date().getTime(),
                      l = new Date(this.resultStr.replace(/-/g, "/")).getTime();
                  if (d > l) return void a.showModal({
                    title: "提示",
                    content: "选择时间必须大于当前时间",
                    confirmColor: this.themeColor
                  });
                  this.$emit("confirm", {
                    checkArr: u(this.checkArr),
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;

                case "region":
                case "linkage":
                  this.$emit("confirm", {
                    checkArr: u(this.checkArr),
                    checkValue: u(this.checkValue),
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;

                case "selector":
                  this.$emit("confirm", {
                    checkArr: this.checkArr,
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;

                default:
                  this.$emit("confirm", {
                    checkArr: [this.checkArr],
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;
              }

              this.showPicker = !1;
            }
          },
          bindChange: function bindChange(a) {
            var t,
                e,
                r,
                s,
                i,
                u,
                c,
                h,
                o,
                f = this,
                m = a.detail.value,
                y = "",
                g = "",
                k = "",
                b = "",
                v = "",
                p = "",
                A = f.checkArr,
                S = [],
                V = [],
                w = [],
                D = [],
                H = [],
                M = [],
                Y = f.mode;
            new Date().getTime();

            switch (Y) {
              case "limitHour":
                if (s = f.data.date[m[0]], i = f.data.areas[m[1]], f.data.hours[m[2]], s.value != A[0].value) {
                  m[1] = 0, m[2] = 0;
                  var N = l.default.limitHour.initAreas(s);
                  f.data.areas = N;
                  var E = l.default.limitHour.initHours(s, f.data.areas[m[1]]);
                  f.data.hours = E;
                }

                if (i.value != A[1].value) {
                  m[2] = 0;
                  var C = l.default.limitHour.initHours(s, f.data.areas[m[1]]);
                  f.data.hours = C;
                }

                u = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], c = f.data.areas[m[1]] || f.data.areas[f.data.areas.length - 1], h = f.data.hours[m[2]] || f.data.hours[f.data.hours.length - 1], f.checkArr = [u, c, h], f.resultStr = "".concat(u.value + " " + c.label + " " + h.label + "时");
                break;

              case "limit":
                if (s = f.data.date[m[0]], i = f.data.hours[m[1]], s.value != A[0].value) {
                  var T = l.default.limit.initHours(f.startHour, f.endHour, f.minuteStep, f.afterStep, s.value),
                      L = l.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, s.value, i.value);
                  f.data.hours = T, f.data.minutes = L;
                }

                if (i.value != A[1].value) {
                  var $ = l.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, s.value, i.value);
                  f.data.minutes = $;
                }

                u = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], h = f.data.hours[m[1]] || f.data.hours[f.data.hours.length - 1], o = f.data.minutes[m[2]] || f.data.minutes[f.data.minutes.length - 1], f.checkArr = [u, h, o], f.resultStr = "".concat(u.value + " " + h.value + ":" + o.value + ":00");
                break;

              case "range":
                var P = f.data.fyears[m[0]] || f.data.fyears[f.data.fyears.length - 1],
                    x = f.data.fmonths[m[1]] || f.data.fmonths[f.data.fmonths.length - 1],
                    F = f.data.fdays[m[2]] || f.data.fdays[f.data.fdays.length - 1],
                    _ = f.data.tyears[m[4]] || f.data.tyears[f.data.tyears.length - 1],
                    j = f.data.tmonths[m[5]] || f.data.tmonths[f.data.tmonths.length - 1],
                    B = f.data.tdays[m[6]] || f.data.tdays[f.data.tdays.length - 1];

                P != A[0] && (m[4] = 0, m[5] = 0, m[6] = 0, M = l.default.range.initStartDays(P, x), w = l.default.range.initEndYears(P, f.startYear, f.endYear), D = l.default.range.initEndMonths(x), H = l.default.range.initEndDays(P, x, F, _, j), f.data.fdays = M, f.data.tyears = w, f.data.tmonths = D, f.data.tdays = H, _ = f.data.tyears[0], A[3] = f.data.tyears[0], j = f.data.tmonths[0], A[4] = f.data.tmonths[0], B = f.data.tdays[0], A[5] = f.data.tdays[0]), x != A[1] && (m[4] = 0, m[5] = 0, m[6] = 0, M = l.default.range.initStartDays(P, x), w = l.default.range.initEndYears(P, f.startYear, f.endYear), D = l.default.range.initEndMonths(x), H = l.default.range.initEndDays(P, x, F, _, j), f.data.fdays = M, f.data.tyears = w, f.data.tmonths = D, f.data.tdays = H, _ = f.data.tyears[0], A[3] = f.data.tyears[0], j = f.data.tmonths[0], A[4] = f.data.tmonths[0], B = f.data.tdays[0], A[5] = f.data.tdays[0]), F != A[2] && (m[4] = 0, m[5] = 0, m[6] = 0, w = l.default.range.initEndYears(P, f.startYear, f.endYear), D = l.default.range.initEndMonths(x), H = l.default.range.initEndDays(P, x, F, _, j), f.data.tyears = w, f.data.tmonths = D, f.data.tdays = H, _ = f.data.tyears[0], A[3] = f.data.tyears[0], j = f.data.tmonths[0], A[4] = f.data.tmonths[0], B = f.data.tdays[0], A[5] = f.data.tdays[0]), _ != A[3] && (m[5] = 0, m[6] = 0, D = l.default.range.initToMonths(P, x, F, _), H = l.default.range.initEndDays(P, x, F, _, j), f.data.tmonths = D, f.data.tdays = H, j = f.data.tmonths[0], A[4] = f.data.tmonths[0], B = f.data.tdays[0], A[5] = f.data.tdays[0]), j != A[4] && (m[6] = 0, H = l.default.range.initToDays(P, x, F, _, j), f.data.tdays = H, B = f.data.tdays[0], A[5] = f.data.tdays[0]), f.checkArr = [P, x, F, _, j, B], f.resultStr = "".concat(P + "-" + x + "-" + F + "至" + _ + "-" + j + "-" + B);
                break;

              case "half":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], r = f.data.areas[m[3]] || f.data.areas[f.data.areas.length - 1], y != A[0] && (V = l.default.date.initMonths(y, f.disabledAfter), S = l.default.date.initDays(y, g, f.disabledAfter), f.disabledAfter && (m[1] = m[1] > V.length - 1 ? V.length - 1 : m[1], m[2] = m[2] > S.length - 1 ? S.length - 1 : m[2], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1]), f.data.days = S, f.data.months = V), g != A[1] && (S = l.default.date.initDays(y, g, f.disabledAfter), m[2] = m[2] > S.length - 1 ? S.length - 1 : m[2], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], f.data.days = S), f.checkArr = [y, g, k, r], f.resultStr = "".concat(y + "-" + g + "-" + k + r.label);
                break;

              case "date":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], y != A[0] && (V = l.default.date.initMonths(y, f.disabledAfter), S = l.default.date.initDays(y, g, f.disabledAfter), f.disabledAfter && (m[1] = m[1] > V.length - 1 ? V.length - 1 : m[1], m[2] = m[2] > S.length - 1 ? S.length - 1 : m[2], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1]), f.data.days = S, f.data.months = V), g != A[1] && (S = l.default.date.initDays(y, g, f.disabledAfter), m[2] = m[2] > S.length - 1 ? S.length - 1 : m[2], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], f.data.days = S), f.checkArr = [y, g, k], f.resultStr = "".concat(y + "-" + g + "-" + k);
                break;

              case "yearMonth":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], y != A[0] && (f.disabledAfter && (m[1] = m[1] > V.length - 1 ? V.length - 1 : m[1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1]), V = l.default.date.initMonths(y, f.disabledAfter), f.data.months = V), f.checkArr = [y, g], f.resultStr = "".concat(y + "-" + g);
                break;

              case "dateTime":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], b = f.data.hours[m[3]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[4]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[5]] || f.data.seconds[f.data.seconds.length - 1], y != A[0] && (m[2] = 0, S = l.default.date.initDays(y, g), k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], f.data.days = S), g != A[1] && (m[2] = 0, S = l.default.date.initDays(y, g), k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], f.data.days = S), f.checkArr = [y, g, k, b, v, p], f.resultStr = "".concat(y + "-" + g + "-" + k + " " + b + ":" + v + ":" + p);
                break;

              case "time":
                b = f.data.hours[m[0]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[1]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[2]] || f.data.seconds[f.data.seconds.length - 1], f.checkArr = [b, v, p], f.resultStr = "".concat(b + ":" + v + ":" + p);
                break;

              case "linkage":
                var O,
                    R,
                    J,
                    I = this.linkList;
                O = f.data[0][m[0]] || f.data[0][0], R = f.data[1][m[1]] || f.data[1][0], 3 == this.level ? (J = f.data[2][m[2]] || f.data[2][0], O.label != A[0] && (m[1] = 0, m[2] = 0, f.data[1] = I[m[0]].children, f.data[2] = I[m[0]].children[m[1]].children, R = f.data[1][m[1]] || f.data[1][0], J = f.data[2][m[2]] || f.data[2][0]), R.label != A[1] && (m[2] = 0, f.data[2] = I[m[0]].children[m[1]].children, J = f.data[2][m[2]] || f.data[2][0]), f.checkArr = [O.label, R.label, J.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value, f.data[2][m[2]] ? f.data[2][m[2]].value : f.data[2][0].value], f.resultStr = O.label + R.label + J.label) : (O.label != A[0] && (f.data[1] = I[m[0]].children, m[1] = 0, R = f.data[1][m[1]] || f.data[1][0]), f.checkArr = [O.label, R.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value], f.resultStr = O.label + R.label);
                break;

              case "region":
                t = f.data.provinces[m[0]] || f.data.provinces[0], e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0]), t.label != A[0] && (f.data.citys = n.default[m[0]] || n.default[0], f.hideArea || (f.data.areas = d.default[m[0]][0] || d.default[0][0]), m[1] = 0, m[2] = 0, e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0])), e.label == A[1] || f.hideArea || (f.data.areas = d.default[m[0]][m[1]] || d.default[0][0], m[2] = 0, r = f.data.areas[m[2]] || f.data.areas[0]), f.hideArea ? (f.checkArr = [t.label, e.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value], f.resultStr = t.label + e.label) : (f.checkArr = [t.label, e.label, r.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value, f.data.areas[m[2]] ? f.data.areas[m[2]].value : f.data.areas[0].value], f.resultStr = t.label + e.label + r.label);
                break;

              case "selector":
                f.checkArr = f.data[m[0]] || f.data[f.data.length - 1], f.resultStr = f.data[m[0]] ? f.data[m[0]].label : f.data[f.data.length - 1].label;
                break;
            }

            f.$nextTick(function () {
              f.pickVal = m;
            });
          },
          initData: function initData() {
            var a,
                t,
                e,
                r,
                i,
                c,
                h,
                o,
                f,
                m,
                y,
                g,
                k = this,
                b = this,
                v = {},
                p = b.mode,
                A = [];

            switch (p) {
              case "linkage":
                var S;
                S = b.value ? b.getLinkageVal(b.value, !0) : b.getLinkageVal(b.defaultVal), A = S.dval, v = S.data, b.checkArr = S.checkArr, b.checkValue = S.checkValue, b.resultStr = S.resultStr;
                break;

              case "region":
                A = b.areaCode ? b.getRegionVal(b.areaCode, !0) : b.getRegionVal(b.defaultVal), v = b.hideArea ? {
                  provinces: s.default,
                  citys: n.default[A[0]]
                } : {
                  provinces: s.default,
                  citys: n.default[A[0]],
                  areas: d.default[A[0]][A[1]]
                };
                break;

              case "selector":
                var V = 0;
                v = u(b.selectList), b.selectList.map(function (a, t) {
                  a.label == k.defaultVal && (V = t);
                }), A = [V];
                break;

              case "limit":
                v = l.default.limit.init(b.dayStep, b.startHour, b.endHour, b.minuteStep, b.afterStep, this.defaultVal), A = v.defaultVal || b.defaultVal;
                break;

              case "limitHour":
                v = l.default.limitHour.init(b.dayStep, this.defaultVal), A = v.defaultVal || b.defaultVal;
                break;

              case "range":
                v = l.default.range.init(b.startYear, b.endYear, b.useCurrent(), b.current), A = v.defaultVal || b.defaultVal;
                break;

              default:
                v = l.default.date.init(b.startYear, b.endYear, b.mode, b.step, b.useCurrent(), b.current, b.disabledAfter), A = v.defaultVal || b.defaultVal;
                break;
            }

            switch (b.data = v, p) {
              case "limitHour":
                m = v.date[A[0]] || v.date[v.date.length - 1], y = v.areas[A[2]] || v.areas[v.areas.length - 1], g = v.hours[A[1]] || v.hours[v.hours.length - 1], b.checkArr = [m, y, g], b.resultStr = "".concat(m.value + " " + y.label + " " + g.label + "时");
                break;

              case "limit":
                m = v.date[A[0]] || v.date[v.date.length - 1], y = v.hours[A[1]] || v.hours[v.hours.length - 1], g = v.minutes[A[2]] || v.minutes[v.minutes.length - 1], b.checkArr = [m, y, g], b.resultStr = "".concat(m.value + " " + y.value + ":" + g.value + ":00");
                break;

              case "range":
                var w = v.fyears[A[0]] || v.fyears[v.fyears.length - 1],
                    D = v.fmonths[A[1]] || v.fmonths[v.fmonths.length - 1],
                    H = v.fdays[A[2]] || v.fdays[v.fdays.length - 1],
                    M = v.tyears[A[4]] || v.tyears[v.tyears.length - 1],
                    Y = v.tmonths[A[5]] || v.tmonths[v.tmonths.length - 1],
                    N = v.tdays[A[6]] || v.tdays[v.tdays.length - 1];
                b.checkArr = [w, D, H, M, Y, N], b.resultStr = "".concat(w + "-" + D + "-" + H + "至" + M + "-" + Y + "-" + N);
                break;

              case "half":
                a = v.years[A[0]] || v.years[v.years.length - 1], t = v.months[A[1]] || v.months[v.months.length - 1], e = v.days[A[2]] || v.days[v.days.length - 1], f = v.areas[A[3]] || v.areas[v.areas.length - 1], b.checkArr = [a, t, e, f], b.resultStr = "".concat(a + "-" + t + "-" + e + " " + f.label);
                break;

              case "date":
                a = v.years[A[0]] || v.years[v.years.length - 1], t = v.months[A[1]] || v.months[v.months.length - 1], e = v.days[A[2]] || v.days[v.days.length - 1], b.checkArr = [a, t, e], b.resultStr = "".concat(a + "-" + t + "-" + e);
                break;

              case "yearMonth":
                a = v.years[A[0]] || v.years[v.years.length - 1], t = v.months[A[1]] || v.months[v.months.length - 1], b.checkArr = [a, t], b.resultStr = "".concat(a + "-" + t);
                break;

              case "dateTime":
                a = v.years[A[0]] || v.years[v.years.length - 1], t = v.months[A[1]] || v.months[v.months.length - 1], e = v.days[A[2]] || v.days[v.days.length - 1], r = v.hours[A[3]] || v.hours[v.hours.length - 1], i = v.minutes[A[4]] || v.minutes[v.minutes.length - 1], c = v.seconds[A[5]] || v.seconds[v.seconds.length - 1], b.resultStr = "".concat(a + "-" + t + "-" + e + " " + r + ":" + i + ":" + c), b.checkArr = [a, t, e, r, i];
                break;

              case "time":
                r = v.hours[A[0]] || v.hours[v.hours.length - 1], i = v.minutes[A[1]] || v.minutes[v.minutes.length - 1], c = v.seconds[A[2]] || v.seconds[v.seconds.length - 1], b.checkArr = [r, i, c], b.resultStr = "".concat(r + ":" + i + ":" + c);
                break;

              case "region":
                h = v.provinces[A[0]], o = v.citys[A[1]], b.hideArea ? (b.checkArr = [h.label, o.label], b.checkValue = [h.value, o.value], b.resultStr = h.label + o.label) : (f = v.areas[A[2]], b.checkArr = [h.label, o.label, f.label], b.checkValue = [h.value, o.value, f.value], b.resultStr = h.label + o.label + f.label);
                break;

              case "selector":
                b.checkArr = v[A[0]] || v[v.length - 1], b.resultStr = v[A[0]].label || v[v.length - 1].label;
                break;
            }

            b.$nextTick(function () {
              b.pickVal = u(A);
            });
          }
        },
        mounted: function mounted() {
          this.initData();
        }
      };
      t.default = m;
    }).call(this, e("6e42")["default"], e("0de9")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/w-picker/w-picker-create-component', {
  'components/w-picker/w-picker-create-component': function componentsWPickerWPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("24d4"));
  }
}, [['components/w-picker/w-picker-create-component']]]);
});
require('components/w-picker/w-picker.js');

__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"16df":function(e,t,n){"use strict";n.r(t);var a=n("b8b5"),o=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);t["default"]=o.a},"312b":function(e,t,n){},"4dbd":function(e,t,n){"use strict";(function(e){n("2448"),n("921b");a(n("66fd"));var t=a(n("a23f"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a23f:function(e,t,n){"use strict";n.r(t);var a=n("c0a5"),o=n("16df");for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);n("e237");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"c94299a0",null);t["default"]=i.exports},b8b5:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("131d"),o=s(n("5264"));function s(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{call:"",pass:"",check:!0,version:""}},onShow:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(n){e.setStorageSync("appversion",n.version),t.version=n.version}),e.setStorageSync("os",e.getSystemInfoSync().platform),e.setStorageSync("osversion",e.getSystemInfoSync().system),e.getStorageSync("call")&&(this.call=e.getStorageSync("call")),e.getStorageSync("pass")&&(this.pass=e.getStorageSync("pass")),e.getStorageSync("token")&&e.redirectTo({url:"/pages/index/index"})},methods:{goRead:function(){this.check=!this.check},goIndex:function(){var t=this;if(""!=this.pass)if(this.check){var n={account:this.call,password:this.pass,os:e.getSystemInfoSync().platform,osversion:e.getSystemInfoSync().system,appversion:t.version};o.default.showLoading("登陆中...",function(){var s={url:"/api/CompanyUser/login",data:n,success:function(n){0==n.data.Code?(o.default.hideLoading(),e.setStorageSync("token",n.data.Customerdata.token),e.setStorageSync("call",t.call),e.setStorageSync("pass",t.pass),e.redirectTo({url:"/pages/index/index"})):(o.default.hideLoading(),o.default.showToast(n.data.Description))}};(0,a.ajax)(s)})}else o.default.showToast("请勾选协议");else o.default.showToast("密码不能为空")},goAgree:function(){e.navigateTo({url:"/pages/read/read"})},goForget:function(){e.getStorageSync("id")?e.navigateTo({url:"/pages/modify/modify"}):o.default.showToast("使用本系统前请联系客服人员开户")}}};t.default=r}).call(this,n("6e42")["default"])},c0a5:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=(e._self._c,n("d97c")),o=n("09ef"),s=n("f86e"),r=n("ef3d");e.$mp.data=Object.assign({},{$root:{m0:a,m1:o,m2:s,m3:r}})},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},e237:function(e,t,n){"use strict";var a=n("312b"),o=n.n(a);o.a}},[["4dbd","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0654":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("131d"),i=s(n("5264"));function s(t){return t&&t.__esModule?t:{default:t}}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/chunLei-modal/chunLei-modal")]).then(n.bind(null,"1651"))},d={data:function(){return{StatusBar:this.StatusBar,autoplay:!0,interval:5e3,message:{},count:0,swiperList:[],list:[],time:"",value:!1,ids:"",inputData:{content:[{title:"货物重量：",content:"",type:"number",placeholder:""}]},type1:"input"}},components:{chunLeiModal:c},onHide:function(){clearInterval(this.time)},onUnload:function(){clearInterval(this.time)},onShow:function(){this.init()},computed:{style:function(){var t=this.StatusBar,e="padding-top:".concat(t,"px;");return e}},methods:{init:function(){var e=this;if(t.getStorageSync("cid")&&null!=t.getStorageSync("cid")){var n=t.getStorageSync("cid");this.getCid(n)}else var s=setInterval(function(){var n=plus.push.getClientInfo();"null"!=n.clientid&&n.clientid&&null!=n.clientid&&(t.setStorageSync("cid",n.clientid),clearInterval(s),e.getCid(n.clientid))},300);var c={token:t.getStorageSync("token"),os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var n={url:"/api/CompanyUser/account",data:c,success:function(n){console.log(a(JSON.stringify(n)," at pages\\index\\index.vue:158")),0==n.data.Code?(i.default.hideLoading(),e.message=n.data.Customerdata,t.setStorageSync("cnname",n.data.Customerdata.cnname),t.setStorageSync("job",n.data.Customerdata.job),t.setStorageSync("id",n.data.Customerdata.companyid),t.setStorageSync("jobid",n.data.Customerdata.jobid),t.setStorageSync("enable",n.data.Customerdata.editable),e.time=setInterval(function(){e.getNotice(n.data.Customerdata.companyid,n.data.Customerdata.account)},2e3),n.data.Customerdata.appbanner.forEach(function(t){e.swiperList.push(t)})):-2==n.data.Code||-1==n.data.Code?(i.default.hideLoading(),i.default.showToast(n.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(n.data.Description))}};(0,o.ajax)(n)});var d={token:t.getStorageSync("token"),begintime:"",endtime:"",pageno:1,pagesize:5,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var n={url:"/api/Truck/AllRecords",data:d,success:function(n){0==n.data.Code?(i.default.hideLoading(),e.list=n.data.Customerdata):-2==n.data.Code||-1==n.data.Code?(i.default.hideLoading(),i.default.showToast(n.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(n.data.Description))}};(0,o.ajax)(n)})},getCid:function(e){plus.device.getInfo({success:function(n){console.log(a("getDeviceInfo success: "+JSON.stringify(n)," at pages\\index\\index.vue:231"));var i=n.uuid,s={token:t.getStorageSync("token"),cid:e,deviceid:i,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")},c={url:"/api/CompanyUser/Updcid",data:s,success:function(t){console.log(a(JSON.stringify(t)," at pages\\index\\index.vue:245"))}};(0,o.ajax)(c)},fail:function(t){console.log(a("getDeviceInfo failed: "+JSON.stringify(t)," at pages\\index\\index.vue:251"))}})},getNotice:function(e,n){var i=this,s={companyid:e,account:n,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")},c={url:"/api/Notice/NewNoticeCounter",data:s,success:function(t){console.log(a(JSON.stringify(t)," at pages\\index\\index.vue:269")),0==t.data.Code&&(t.data.Customerdata.cnt>99?i.count="99+":i.count=t.data.Customerdata.cnt)}};(0,o.ajax)(c)},goTell:function(){t.navigateTo({url:"/pages/user/user"})},goMessage:function(){t.navigateTo({url:"/pages/message/message"})},goProduct:function(){t.navigateTo({url:"/pages/product/product"})},goReport:function(){t.navigateTo({url:"/pages/report/report"})},goSet:function(){t.navigateTo({url:"/pages/set/set"})},goLook:function(){t.navigateTo({url:"/pages/look/look"})},goUrl:function(e,n){""!=n&&null!=n&&t.navigateTo({url:"/pages/text/text?title="+e+"&url="+n})},changeWeight:function(e){0!=t.getStorageSync("enable")&&(this.value=!0,this.ids=e)},onConfirm3:function(e){var n=this,a={token:t.getStorageSync("token"),id:this.ids,goodsjsweight:e[0].content,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var e={url:"/api/Truck/ModifyRecords",data:a,success:function(e){0==e.data.Code?(i.default.hideLoading(),i.default.showToast("修改成功"),n.init()):-2==e.data.Code||-1==e.data.Code?(i.default.hideLoading(),i.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(e.data.Description))}};(0,o.ajax)(e)})},cancel3:function(){},onBackPress:function(t){this.value=!1}}};e.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},1365:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=(t._self._c,n("7422")),o=n("133f"),i=n("5091"),s=n("52f3"),c=n("9e20"),d=n("9d63"),r=n("37fa"),u=n("e88d");t.$mp.data=Object.assign({},{$root:{m0:a,m1:o,m2:i,m3:s,m4:c,m5:d,m6:r,m7:u}})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"24b5":function(t,e,n){"use strict";var a=n("ce5b"),o=n.n(a);o.a},"6f76":function(t,e,n){"use strict";(function(t){n("2448"),n("921b");a(n("66fd"));var e=a(n("717a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"717a":function(t,e,n){"use strict";n.r(e);var a=n("1365"),o=n("9ccc");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("24b5");var s=n("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"f8bcbdb2",null);e["default"]=c.exports},"9ccc":function(t,e,n){"use strict";n.r(e);var a=n("0654"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},ce5b:function(t,e,n){}},[["6f76","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"24e1":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("131d"),i=s(n("5264"));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(){return n.e("components/uni-swipe-action/uni-swipe-action").then(n.bind(null,"8e4f"))},r=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-swipe-action-item/uni-swipe-action-item")]).then(n.bind(null,"0750"))},d={data:function(){return{Color:"#333",show:!0,list:[],options:[{text:"编辑",style:{backgroundColor:"#00AAEF"}},{text:"重置密码",style:{backgroundColor:"#FE9C01"}},{text:"删除",style:{backgroundColor:"#dd524d"}}],jobid:0}},components:{uniSwipeAction:u,uniSwipeActionItem:r},onShow:function(){this.jobid=e.getStorageSync("jobid"),this.init()},methods:{init:function(){var t=this,n={token:e.getStorageSync("token"),os:e.getSystemInfoSync().platform,osversion:e.getSystemInfoSync().system,appversion:e.getStorageSync("appversion")};i.default.showLoading("",function(){var o={url:"/api/CompanyUser/UserListByCompany",data:n,success:function(n){0==n.data.Code?(i.default.hideLoading(),n.data.Customerdata.length>0?(t.list=n.data.Customerdata,t.show=!0):t.show=!1):-2==n.data.Code||-1==n.data.Code?(i.default.hideLoading(),i.default.showToast(n.data.Description),e.removeStorageSync("token"),setTimeout(function(){e.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(n.data.Description))}};(0,a.ajax)(o)})},goCall:function(t){e.makePhoneCall({phoneNumber:t})},goAdd:function(){e.navigateTo({url:"/pages/addUser/addUser?type=0"})},onClick:function(t,n,s,u){if(0==t.index)e.navigateTo({url:"/pages/addUser/addUser?type=1&id="+s});else if(1==t.index)e.navigateTo({url:"/pages/reset/reset?tel="+u});else if(2==t.index){var r=this;e.showModal({title:"提示",content:"确认删除此职工吗",success:function(t){if(t.confirm){var s={token:e.getStorageSync("token"),account:u,os:e.getSystemInfoSync().platform,osversion:e.getSystemInfoSync().system,appversion:e.getStorageSync("appversion")};i.default.showLoading("",function(){var t={url:"/api/CompanyUser/DeleteCompanyUser",data:s,success:function(t){0==t.data.Code?(i.default.hideLoading(),r.list.splice(n,1),i.default.showToast("删除成功")):-2==t.data.Code||-1==t.data.Code?(i.default.hideLoading(),i.default.showToast(t.data.Description),e.removeStorageSync("token"),setTimeout(function(){e.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(t.data.Description))}};(0,a.ajax)(t)})}else t.cancel&&console.log(o("用户点击取消"," at pages\\user\\user.vue:167"))}})}}}};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},"97ba":function(e,t,n){},a64a:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},ca43:function(e,t,n){"use strict";n.r(t);var o=n("24e1"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},ddca:function(e,t,n){"use strict";n.r(t);var o=n("a64a"),a=n("ca43");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("ee66");var s=n("2877"),u=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,"23286a95",null);t["default"]=u.exports},ee66:function(e,t,n){"use strict";var o=n("97ba"),a=n.n(o);a.a},f0b4:function(e,t,n){"use strict";(function(e){n("2448"),n("921b");o(n("66fd"));var t=o(n("ddca"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["f0b4","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/message/message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/message/message.js';

define('pages/message/message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/message"],{"12b5":function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("131d"),s=i(o("5264"));function i(t){return t&&t.__esModule?t:{default:t}}var c=function(){return Promise.all([o.e("common/vendor"),o.e("components/mescroll-uni/mescroll-uni")]).then(o.bind(null,"dc89"))},l={data:function(){return{Color:"#333",list:[],mescroll:null,downOption:{use:!0,auto:!0,autoShowLoading:!0,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ..."},upOption:{use:!0,auto:!0,isLock:!1,isBoth:!0,page:{num:0,size:4,time:null},noMoreSize:6,textLoading:"加载中 ...",textNoMore:"-- 没有更多数据 --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png",tip:"没有进出记录数据"}}}},components:{MescrollUni:c},onUnload:function(){this.mescroll=null},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},methods:{mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.list=[],this.mescroll.resetUpScroll()},upCallback:function(t){t.num,t.size;var e=this;e.init(t)},topClick:function(){console.log(t("点击了回到顶部按钮"," at pages\\message\\message.vue:115"))},init:function(t){var e=this,o={token:n.getStorageSync("token"),begintime:"",endtime:"",pageno:1,pagesize:10,os:n.getSystemInfoSync().platform,osversion:n.getSystemInfoSync().system,appversion:n.getStorageSync("appversion")},i={url:"/api/Notice/allnotice",data:o,success:function(o){0==o.data.Code?o.data.Customerdata.forEach(function(t){e.list.push(t)}):-2==o.data.Code||-1==o.data.Code?(s.default.showToast(o.data.Description),n.removeStorageSync("token"),setTimeout(function(){n.redirectTo({url:"/pages/login/login"})},500)):s.default.showToast(o.data.Description);var a=o.data.Customerdata,i=o.data.Extra.Recordcount;t.endByPage(a.length,i)}};(0,a.ajax)(i)}}};e.default=l}).call(this,o("0de9")["default"],o("6e42")["default"])},"6dbe":function(t,e,o){"use strict";o.r(e);var n=o("12b5"),a=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"7d9d":function(t,e,o){"use strict";var n=o("e1f4"),a=o.n(n);a.a},"993c":function(t,e,o){"use strict";(function(t){o("2448"),o("921b");n(o("66fd"));var e=n(o("a59b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},a59b:function(t,e,o){"use strict";o.r(e);var n=o("bb40"),a=o("6dbe");for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);o("7d9d");var i=o("2877"),c=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,"aa58213e",null);e["default"]=c.exports},bb40:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,n=(t._self._c,o("9cad"));t.$mp.data=Object.assign({},{$root:{m0:n}})},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},e1f4:function(t,e,o){}},[["993c","common/runtime","common/vendor"]]]);
});
require('pages/message/message.js');
__wxRoute = 'pages/product/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/product.js';

define('pages/product/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{2762:function(t,e,o){"use strict";(function(t){o("2448"),o("921b");n(o("66fd"));var e=n(o("35f4"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"35f4":function(t,e,o){"use strict";o.r(e);var n=o("4567"),a=o("c1ab");for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);o("ff47");var i=o("2877"),r=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,"6b2b7264",null);e["default"]=r.exports},4567:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,n=(t._self._c,o("7dd3")),a=o("0fdf"),s=o("0fdf");t.$mp.data=Object.assign({},{$root:{m0:n,m1:a,m2:s}})},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},"60d6":function(t,e,o){},c1ab:function(t,e,o){"use strict";o.r(e);var n=o("c59a"),a=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},c59a:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("131d"),s=i(o("5264"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return Promise.all([o.e("common/vendor"),o.e("components/mescroll-uni/mescroll-uni")]).then(o.bind(null,"dc89"))},c=function(){return Promise.all([o.e("common/vendor"),o.e("components/w-picker/w-picker")]).then(o.bind(null,"24d4"))},l={data:function(){return{Color:"#333",show1:!1,val:"",date1:"",date2:"2019-12-31",list:[],total:"",totalPage:0,mescroll:null,downOption:{use:!0,auto:!0,autoShowLoading:!0,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ..."},upOption:{use:!0,auto:!0,isLock:!1,isBoth:!0,page:{num:0,size:4,time:null},noMoreSize:6,textLoading:"加载中 ...",textNoMore:"-- 没有更多数据 --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png",tip:"没有进出记录数据"}},type:0}},onLoad:function(){var t=new Date,e=t.getMonth()+1>9?t.getMonth()+1:"0"+(t.getMonth()+1),o=t.getDate()>9?t.getDate():"0"+t.getDate();this.date2=t.getFullYear()+"-"+e+"-"+o;var n=new Date(t-6048e5),a=n.getFullYear(),s=n.getMonth()+1>9?n.getMonth()+1:"0"+(n.getMonth()+1),i=n.getDate()>9?n.getDate():"0"+n.getDate();this.date1=a+"-"+s+"-"+i},components:{MescrollUni:r,wPicker:c},onUnload:function(){this.mescroll=null},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},methods:{mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.list=[],this.mescroll.resetUpScroll()},upCallback:function(t){t.num,t.size;var e=this;e.init(t)},topClick:function(){console.log(t("点击了回到顶部按钮"," at pages\\product\\product.vue:168"))},init:function(e){var o=this,i={};i=0==this.type?{token:n.getStorageSync("token"),begintime:this.date1,endtime:this.date2,pageno:1,pagesize:6,os:n.getSystemInfoSync().platform,osversion:n.getSystemInfoSync().system,appversion:n.getStorageSync("appversion")}:{token:n.getStorageSync("token"),begintime:this.date1,endtime:this.date2,goodsname:this.val,pageno:1,pagesize:6,os:n.getSystemInfoSync().platform,osversion:n.getSystemInfoSync().system,appversion:n.getStorageSync("appversion")};var r={url:"/api/product/AllRecords",data:i,success:function(a){console.log(t(JSON.stringify(a)," at pages\\product\\product.vue:202")),0==a.data.Code?(a.data.Customerdata.forEach(function(t){o.list.push(t)}),o.total=a.data.Extra.Summary):-2==a.data.Code||-1==a.data.Code?(s.default.showToast(a.data.Description),n.removeStorageSync("token"),setTimeout(function(){n.redirectTo({url:"/pages/login/login"})},500)):s.default.showToast(a.data.Description);var i=a.data.Customerdata,r=a.data.Extra.Recordcount;e.endByPage(i.length,r)}};(0,a.ajax)(r)},goCar:function(){this.type=1,this.list=[],this.mescroll.resetUpScroll()},choiceDate1:function(){this.$refs.picker1.show()},choiceDate2:function(){this.$refs.picker2.show()},onConfirm1:function(t){this.date1=t.result;var e=new Date(t.result);e.setDate(e.getDate()+7);var o=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),n=e.getDate()>9?e.getDate():"0"+e.getDate();this.date2=e.getFullYear()+"-"+o+"-"+n},onConfirm2:function(t){var e=this.date1.replace(/-/g,"/"),o=t.result;o=o.replace(/-/g,"/"),e=Date.parse(e),o=Date.parse(o),e>=o?s.default.showToast("结束日期不能小于开始日期"):(this.date2=t.result,this.list=[],this.mescroll.resetUpScroll())},goTotal:function(){n.navigateTo({url:"/pages/carsCount/carsCount"})}}};e.default=l}).call(this,o("0de9")["default"],o("6e42")["default"])},ff47:function(t,e,o){"use strict";var n=o("60d6"),a=o.n(n);a.a}},[["2762","common/runtime","common/vendor"]]]);
});
require('pages/product/product.js');
__wxRoute = 'pages/report/report';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/report/report.js';

define('pages/report/report.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/report"],{"002f":function(t,e,o){"use strict";(function(t){o("2448"),o("921b");n(o("66fd"));var e=n(o("d427"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"289e":function(t,e,o){"use strict";o.r(e);var n=o("f0c7"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},"2bc2":function(t,e,o){"use strict";var n=o("61c2"),a=o.n(n);a.a},"61c2":function(t,e,o){},d427:function(t,e,o){"use strict";o.r(e);var n=o("e01d"),a=o("289e");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("2bc2");var s=o("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"dd4ff126",null);e["default"]=r.exports},e01d:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,n=(t._self._c,o("7dd3")),a=o("0fdf"),i=o("0fdf");t.$mp.data=Object.assign({},{$root:{m0:n,m1:a,m2:i}})},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},f0c7:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("131d"),i=s(o("5264"));function s(t){return t&&t.__esModule?t:{default:t}}var r=function(){return Promise.all([o.e("common/vendor"),o.e("components/mescroll-uni/mescroll-uni")]).then(o.bind(null,"dc89"))},c=function(){return Promise.all([o.e("common/vendor"),o.e("components/w-picker/w-picker")]).then(o.bind(null,"24d4"))},l=function(){return Promise.all([o.e("common/vendor"),o.e("components/chunLei-modal/chunLei-modal")]).then(o.bind(null,"1651"))},u={data:function(){return{Color:"#333",show1:!1,val:"",date1:"",date2:"",value:!1,ids:"",inputData:{content:[{title:"货物重量：",content:"",type:"number",placeholder:""}]},type1:"input",list:[],total:"",totalPage:0,mescroll:null,downOption:{use:!0,auto:!0,autoShowLoading:!0,isLock:!1,isBoth:!0,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ..."},upOption:{use:!0,auto:!0,isLock:!1,isBoth:!0,page:{num:0,size:4,time:null},noMoreSize:6,textLoading:"加载中 ...",textNoMore:"-- 没有更多数据 --",toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png",tip:"没有进出记录数据"}},type:0}},onLoad:function(){var t=new Date,e=t.getMonth()+1>9?t.getMonth()+1:"0"+(t.getMonth()+1),o=t.getDate()>9?t.getDate():"0"+t.getDate();this.date2=t.getFullYear()+"-"+e+"-"+o;var n=new Date(t-6048e5),a=n.getFullYear(),i=n.getMonth()+1>9?n.getMonth()+1:"0"+(n.getMonth()+1),s=n.getDate()>9?n.getDate():"0"+n.getDate();this.date1=a+"-"+i+"-"+s},components:{MescrollUni:r,wPicker:c,chunLeiModal:l},onUnload:function(){this.mescroll=null,this.value=!1},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},methods:{mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.list=[],this.mescroll.resetUpScroll()},upCallback:function(t){t.num,t.size;var e=this;e.init(t)},topClick:function(){console.log(t("点击了回到顶部按钮"," at pages\\report\\report.vue:192"))},init:function(e){var o=this,s={};s=0==this.type?{token:n.getStorageSync("token"),begintime:this.date1,endtime:this.date2,pageno:1,pagesize:6,os:n.getSystemInfoSync().platform,osversion:n.getSystemInfoSync().system,appversion:n.getStorageSync("appversion")}:{token:n.getStorageSync("token"),begintime:this.date1,endtime:this.date2,carnum:this.val,pageno:1,pagesize:6,os:n.getSystemInfoSync().platform,osversion:n.getSystemInfoSync().system,appversion:n.getStorageSync("appversion")};var r={url:"/api/Truck/AllRecords",data:s,success:function(a){console.log(t(JSON.stringify(a)," at pages\\report\\report.vue:226")),0==a.data.Code?(a.data.Customerdata.forEach(function(t){o.list.push(t)}),o.total=a.data.Extra.Summary):-2==a.data.Code||-1==a.data.Code?(i.default.showToast(a.data.Description),n.removeStorageSync("token"),setTimeout(function(){n.redirectTo({url:"/pages/login/login"})},500)):i.default.showToast(a.data.Description);var s=a.data.Customerdata,r=a.data.Extra.Recordcount;e.endByPage(s.length,r)}};(0,a.ajax)(r)},goCar:function(){this.type=1,this.list=[],this.mescroll.resetUpScroll()},choiceDate1:function(){this.$refs.picker1.show()},choiceDate2:function(){this.$refs.picker2.show()},onConfirm1:function(t){this.date1=t.result;var e=new Date(t.result);e.setDate(e.getDate()+7);var o=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),n=e.getDate()>9?e.getDate():"0"+e.getDate();this.date2=e.getFullYear()+"-"+o+"-"+n},onConfirm2:function(t){var e=this.date1.replace(/-/g,"/"),o=t.result;o=o.replace(/-/g,"/"),e=Date.parse(e),o=Date.parse(o),e>=o?i.default.showToast("结束日期不能小于开始日期"):(this.date2=t.result,this.list=[],this.mescroll.resetUpScroll())},goTotal:function(){n.navigateTo({url:"/pages/carsCount/carsCount"})},changeWeight:function(t){0!=n.getStorageSync("enable")&&(this.value=!0,this.ids=t)},onConfirm3:function(t){var e=this,o={token:n.getStorageSync("token"),id:this.ids,goodsjsweight:t[0].content,os:n.getSystemInfoSync().platform,osversion:n.getSystemInfoSync().system,appversion:n.getStorageSync("appversion")};i.default.showLoading("",function(){var t={url:"/api/Truck/ModifyRecords",data:o,success:function(t){0==t.data.Code?(i.default.hideLoading(),i.default.showToast("修改成功"),e.list=[],e.mescroll.resetUpScroll()):-2==t.data.Code||-1==t.data.Code?(i.default.hideLoading(),i.default.showToast(t.data.Description),n.removeStorageSync("token"),setTimeout(function(){n.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(t.data.Description))}};(0,a.ajax)(t)})},cancel3:function(){},onBackPress:function(t){this.value=!1}}};e.default=u}).call(this,o("0de9")["default"],o("6e42")["default"])}},[["002f","common/runtime","common/vendor"]]]);
});
require('pages/report/report.js');
__wxRoute = 'pages/set/set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/set.js';

define('pages/set/set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"0d90":function(t,e,a){"use strict";var o=a("3230"),n=a.n(o);n.a},"17dd":function(t,e,a){"use strict";(function(t){a("2448"),a("921b");o(a("66fd"));var e=o(a("18aa"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"18aa":function(t,e,a){"use strict";a.r(e);var o=a("7b09"),n=a("e4ae");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("0d90");var s=a("2877"),d=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"3e07a356",null);e["default"]=d.exports},3230:function(t,e,a){},"37ec":function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("131d"),i=s(a("5264"));function s(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{Color:"#333",val:"",cnname:"",job:"",company:"",count:1,call:"",show:!1,check1:!1,check2:!1,modalName:null,radio:"0",oldRadio:"0",select:0,ids:"",version:"",navList:[]}},onShow:function(){t.getStorageSync("cnname")&&(this.cnname=t.getStorageSync("cnname")),t.getStorageSync("job")&&(this.job=t.getStorageSync("job")),this.version=t.getStorageSync("appversion"),this.init()},methods:{init:function(){var e=this,a={token:t.getStorageSync("token"),companyid:t.getStorageSync("id"),os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var o={url:"/api/CompanyUser/GetAppSetting",data:a,success:function(a){0==a.data.Code?(i.default.hideLoading(),e.company=a.data.Customerdata.companysetting.companyname,e.call=a.data.Customerdata.companysetting.tel,a.data.Customerdata.companysetting.companycount>1&&(e.count=a.data.Customerdata.companysetting.companycount,e.navList=a.data.Customerdata.companys,e.navList.forEach(function(t){1==t.isdefault&&(e.ids=t.id)}),e.show=!0),0==a.data.Customerdata.companysetting.notice_track?e.check1=!1:e.check1=!0,0==a.data.Customerdata.companysetting.notice_product?e.check2=!1:e.check2=!0):-2==a.data.Code||-1==a.data.Code?(i.default.hideLoading(),i.default.showToast(a.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(a.data.Description))}};(0,n.ajax)(o)})},change1:function(){this.check1=!this.check1;var e=0,a=0;this.check1&&(e=1),this.check2&&(a=1);var o={token:t.getStorageSync("token"),companyid:this.ids,notice_track:e,notice_product:a,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var e={url:"/api/CompanyUser/SaveAppSetting",data:o,success:function(e){0==e.data.Code?(i.default.hideLoading(),i.default.showToast("修改成功")):-2==e.data.Code||-1==e.data.Code?(i.default.hideLoading(),i.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(e.data.Description))}};(0,n.ajax)(e)})},change2:function(){this.check2=!this.check2;var e=0,a=0;this.check1&&(e=1),this.check2&&(a=1);var o={token:t.getStorageSync("token"),companyid:this.ids,notice_track:e,notice_product:a,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var e={url:"/api/CompanyUser/SaveAppSetting",data:o,success:function(e){0==e.data.Code?(i.default.hideLoading(),i.default.showToast("修改成功")):-2==e.data.Code||-1==e.data.Code?(i.default.hideLoading(),i.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(e.data.Description))}};(0,n.ajax)(e)})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.radio=this.oldRadio,this.modalName=null},RadioChange:function(t){this.oldRadio=this.radio,this.radio=t.detail.value},goSure:function(){this.select=this.radio,this.modalName=null;var e=this,a={token:t.getStorageSync("token"),companyid:this.radio,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var o={url:"/api/CompanyUser/ChangeDefaultCompany",data:a,success:function(a){0==a.data.Code?(i.default.hideLoading(),i.default.showToast("切换成功"),e.ids=e.radio,t.setStorageSync("id",e.radio),t.setStorageSync("token",a.data.Customerdata.token),e.init()):-2==a.data.Code||-1==a.data.Code?(i.default.hideLoading(),i.default.showToast(a.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(a.data.Description))}};(0,n.ajax)(o)})},modifyPass:function(){t.navigateTo({url:"/pages/modify/modify"})},goRead:function(){t.navigateTo({url:"/pages/read/read"})},goLoginout:function(){t.removeStorageSync("token"),t.redirectTo({url:"/pages/login/login"})},goVersion:function(){var e=this,a={token:t.getStorageSync("token"),os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var s={url:"/api/Upgrade/Req",data:a,success:function(a){console.log(o(JSON.stringify(a)," at pages\\set\\set.vue:341")),0==a.data.Code?(i.default.hideLoading(),0==a.data.Customerdata.isforce?t.showModal({content:a.data.Customerdata.Trips,success:function(t){t.confirm?(plus.nativeUI.showWaiting("下载最新文件中,请稍候..."),plus.downloader.createDownload(a.data.Customerdata.apk,{filename:"_doc/update/"},function(t,a){200==a?(plus.nativeUI.closeWaiting(),console.log(o("下载wgt成功："+t.filename," at pages\\set\\set.vue:355")),e.installWgt(t.filename)):(console.log(o("下载wgt失败！"," at pages\\set\\set.vue:358")),plus.nativeUI.alert("下载APP失败！"))}).start()):t.cancel&&console.log(o("用户点击取消"," at pages\\set\\set.vue:363"))}}):t.showModal({content:a.data.Customerdata.Trips,showCancel:!1,success:function(t){t.confirm?(plus.nativeUI.showWaiting("下载最新文件中,请稍候..."),plus.downloader.createDownload(a.data.Customerdata.apk,{filename:"_doc/update/"},function(t,a){200==a?(plus.nativeUI.closeWaiting(),console.log(o("下载wgt成功："+t.filename," at pages\\set\\set.vue:379")),e.installWgt(t.filename)):(console.log(o("下载wgt失败！"," at pages\\set\\set.vue:382")),plus.nativeUI.alert("下载APP失败！"))}).start()):t.cancel&&console.log(o("用户点击取消"," at pages\\set\\set.vue:387"))}})):-1==a.data.Code?(i.default.hideLoading(),i.default.showToast(a.data.Description)):-2==a.data.Code?(i.default.hideLoading(),i.default.showToast(a.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(a.data.Description))}};(0,n.ajax)(s)})},installWgt:function(t){plus.nativeUI.showWaiting("正在安装..."),plus.runtime.install(t,{force:!0},function(){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("APP更新完成！",function(){plus.runtime.restart()})},function(t){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("安装失败："+t.message)})}}};e.default=d}).call(this,a("6e42")["default"],a("0de9")["default"])},"7b09":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=(t._self._c,a("e88d")),n=a("e88d");t.$mp.data=Object.assign({},{$root:{m0:o,m1:n}})},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},e4ae:function(t,e,a){"use strict";a.r(e);var o=a("37ec"),n=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);e["default"]=n.a}},[["17dd","common/runtime","common/vendor"]]]);
});
require('pages/set/set.js');
__wxRoute = 'pages/modify/modify';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/modify/modify.js';

define('pages/modify/modify.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modify/modify"],{"142b":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a("131d"),s=n(a("5264"));function n(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{Color:"#333",tel:"",code:"",pass:"",btnState:!1,rTime:"获取验证码"}},methods:{getValidate:function(){if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel)){var e=this;this.rTime=60;this.rTime;this.btnState=!0;var a=setInterval(function(){--e.rTime<=0&&(e.rTime="获取验证码",clearInterval(a),e.btnState=!1)},1e3),n={mobile:this.tel,type:1,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};s.default.showLoading("",function(){var e={url:"/api/sms/sendsms",data:n,success:function(e){0==e.data.Code?(s.default.hideLoading(),s.default.showToast("发送成功")):-2==e.data.Code||-1==e.data.Code?(s.default.hideLoading(),s.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(s.default.hideLoading(),s.default.showToast(e.data.Description))}};(0,o.ajax)(e)})}else s.default.showToast("手机号格式不正确");else s.default.showToast("手机号不能为空")},sure:function(){if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel))if(""!=this.code){var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;if(!e.test(this.pass)||this.pass.length<6||this.pass.length>12)s.default.showToast("密码只能是字母和数字组合6-12位");else{var a={mobile:this.tel,companyid:t.getStorageSync("id"),type:1,smscode:this.code,password:this.pass,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};s.default.showLoading("",function(){var e={url:"/api/companyuser/ChangePswd",data:a,success:function(e){0==e.data.Code?(s.default.hideLoading(),s.default.showToast("修改密码成功"),setTimeout(function(){t.navigateBack({delta:1})},500)):-2==e.data.Code||-1==e.data.Code?(s.default.hideLoading(),s.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(s.default.hideLoading(),s.default.showToast(e.data.Description))}};(0,o.ajax)(e)})}}else s.default.showToast("验证码不能为空");else s.default.showToast("手机号格式不正确");else s.default.showToast("手机号不能为空")}}};e.default=i}).call(this,a("6e42")["default"])},"2a0b":function(t,e,a){"use strict";var o=a("b342"),s=a.n(o);s.a},"2ffe":function(t,e,a){"use strict";a.r(e);var o=a("b1dc"),s=a("427f");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("2a0b");var i=a("2877"),d=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,"5aa9bae4",null);e["default"]=d.exports},"427f":function(t,e,a){"use strict";a.r(e);var o=a("142b"),s=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);e["default"]=s.a},9912:function(t,e,a){"use strict";(function(t){a("2448"),a("921b");o(a("66fd"));var e=o(a("2ffe"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},b1dc:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return s})},b342:function(t,e,a){}},[["9912","common/runtime","common/vendor"]]]);
});
require('pages/modify/modify.js');
__wxRoute = 'pages/look/look';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/look/look.js';

define('pages/look/look.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/look/look"],{"31af":function(t,e,n){"use strict";(function(t){n("2448"),n("921b");o(n("66fd"));var e=o(n("415f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"404e":function(t,e,n){"use strict";var o=n("d726"),a=n.n(o);a.a},"415f":function(t,e,n){"use strict";n.r(e);var o=n("9903"),a=n("e1a0");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("404e");var u=n("2877"),r=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,"6e696f68",null);e["default"]=r.exports},9903:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,o=(t._self._c,n("7dd3")),a=n("2fd5");t.$mp.data=Object.assign({},{$root:{m0:o,m1:a}})},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},d726:function(t,e,n){},e192:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("131d"),i=u(n("5264"));function u(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{Color:"#333",val:"",show:!0,list:[]}},onShow:function(){this.init()},methods:{init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=this,u={token:t.getStorageSync("token"),carnum:e,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var e={url:"/api/truck/truckinfolist",data:u,success:function(e){console.log(o(JSON.stringify(e)," at pages\\look\\look.vue:68")),0==e.data.Code?(i.default.hideLoading(),e.data.Customerdata.length>0?(n.list=e.data.Customerdata,n.show=!0):n.show=!1):-2==e.data.Code||-1==e.data.Code?(i.default.hideLoading(),i.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(e.data.Description))}};(0,a.ajax)(e)})},goSearch:function(){this.init(this.val)},goCount:function(e){var n=JSON.stringify(e);t.navigateTo({url:"/pages/editor/editor?item="+n})}}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},e1a0:function(t,e,n){"use strict";n.r(e);var o=n("e192"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a}},[["31af","common/runtime","common/vendor"]]]);
});
require('pages/look/look.js');
__wxRoute = 'pages/read/read';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/read/read.js';

define('pages/read/read.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/read/read"],{"314b":function(e,t,n){"use strict";var a=n("e6e8"),u=n.n(a);u.a},"6ebe":function(e,t,n){"use strict";n.r(t);var a=n("e331"),u=n("9170");for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);n("314b");var o=n("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,"8c9afb76",null);t["default"]=c.exports},9170:function(e,t,n){"use strict";n.r(t);var a=n("b942"),u=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=u.a},a152:function(e,t,n){"use strict";(function(e){n("2448"),n("921b");a(n("66fd"));var t=a(n("6ebe"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},b942:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{Color:"#333"}},onLoad:function(t){var n=plus.webview.create("","custom-webview",{plusrequire:"none","uni-app":"none",top:e.getSystemInfoSync().statusBarHeight+36});n.loadURL("http://47.104.203.20:8084/Page/Agree");var a=this.$mp.page.$getAppWebview();a.append(n)}};t.default=n}).call(this,n("6e42")["default"])},e331:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},e6e8:function(e,t,n){}},[["a152","common/runtime","common/vendor"]]]);
});
require('pages/read/read.js');
__wxRoute = 'pages/addUser/addUser';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/addUser/addUser.js';

define('pages/addUser/addUser.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addUser/addUser"],{2396:function(t,e,a){"use strict";a.r(e);var o=a("7aaa"),n=a("849a");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("4605");var i=a("2877"),d=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,"547f1096",null);e["default"]=d.exports},4605:function(t,e,a){"use strict";var o=a("b748"),n=a.n(o);n.a},"7aaa":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},"849a":function(t,e,a){"use strict";a.r(e);var o=a("cd84"),n=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e["default"]=n.a},"8d50":function(t,e,a){"use strict";(function(t){a("2448"),a("921b");o(a("66fd"));var e=o(a("2396"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},b748:function(t,e,a){},cd84:function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("131d"),s=i(a("5264"));function i(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{title:"新增成员",Color:"#333",user:"",tel:"",name:"",navList:[{id:"1",name:"董事长"},{id:"2",name:"管理员"},{id:"3",name:"员工"}],radio:"1",pass:"",check:!1,check1:!1,check2:!1,check3:!1,check4:!1,type:0,ids:""}},onLoad:function(t){1==t.type?(this.title="修改信息",this.type=t.type,this.ids=t.id,this.check4=!1,this.init(t.id)):0==t.type&&(this.check4=!0)},methods:{init:function(e){var a=this,o={token:t.getStorageSync("token"),id:e,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};s.default.showLoading("",function(){var e={url:"/api/CompanyUser/GetUserInfo",data:o,success:function(e){0==e.data.Code?(s.default.hideLoading(),a.user=e.data.Customerdata.account,a.tel=e.data.Customerdata.mobile,a.name=e.data.Customerdata.cnname,a.radio=e.data.Customerdata.jobid,a.check1=!0,a.check2=!0,a.check3=!0,1==e.data.Customerdata.enabled&&(a.check=!0)):-2==e.data.Code||-1==e.data.Code?(s.default.hideLoading(),s.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(s.default.hideLoading(),s.default.showToast(e.data.Description))}};(0,n.ajax)(e)})},change:function(){this.check=!this.check},RadioChange:function(t){this.radio=t.detail.value},goSubmit:function(){var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;if(!e.test(this.user)||this.user.length<6||this.user.length>12)s.default.showToast("账号只能是字母和数字组合6-12位");else if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel)){var a=/^[\u2E80-\u9FFF]+$/;if(!a.test(this.name)||this.name.length>6||0==this.name.length)s.default.showToast("请输入6位以内的汉字");else{var i=this;if(1==this.type){var d={token:t.getStorageSync("token"),id:i.ids,cnname:this.name,jobid:i.radio,enabled:i.check?1:0,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};s.default.showLoading("",function(){var e={url:"/api/CompanyUser/ModifyInfo",data:d,success:function(e){console.log(o(JSON.stringify(e)," at pages\\addUser\\addUser.vue:181")),0==e.data.Code?(s.default.hideLoading(),s.default.showToast("修改成功"),setTimeout(function(){t.navigateBack({delta:1})},500)):-2==e.data.Code||-1==e.data.Code?(s.default.hideLoading(),s.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(s.default.hideLoading(),s.default.showToast(e.data.Description))}};(0,n.ajax)(e)})}else{if(!e.test(this.pass)||this.pass.length<6||this.pass.length>12)return void s.default.showToast("密码只能是字母和数字组合6-12位");var u={token:t.getStorageSync("token"),account:this.user,password:this.pass,mobileno:this.tel,cnname:this.name,isuse:this.check?1:0,jobid:this.radio,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};s.default.showLoading("",function(){var e={url:"/api/CompanyUser/AddCompanyUser",data:u,success:function(e){console.log(o(JSON.stringify(e)," at pages\\addUser\\addUser.vue:230")),0==e.data.Code?(s.default.hideLoading(),s.default.showToast("添加成功"),setTimeout(function(){t.navigateBack({delta:1})},500)):-2==e.data.Code||-1==e.data.Code?(s.default.hideLoading(),s.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(s.default.hideLoading(),s.default.showToast(e.data.Description))}};(0,n.ajax)(e)})}}}else s.default.showToast("手机号格式不正确");else s.default.showToast("手机号不能为空")}}};e.default=d}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["8d50","common/runtime","common/vendor"]]]);
});
require('pages/addUser/addUser.js');
__wxRoute = 'pages/reset/reset';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reset/reset.js';

define('pages/reset/reset.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reset/reset"],{"08f4":function(t,e,a){"use strict";var n=a("13bf"),o=a.n(n);o.a},"13bf":function(t,e,a){},"2cbe":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("131d"),o=s(a("5264"));function s(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{Color:"#333",tel:"",repeat:"",pass:""}},onLoad:function(t){this.tel=t.tel},methods:{sure:function(){var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;if(!e.test(this.pass)||this.pass.length<6||this.pass.length>12)o.default.showToast("密码只能是字母和数字组合6-12位");else if(this.pass==this.repeat){var a={token:t.getStorageSync("token"),account:this.tel,password:this.pass,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};o.default.showLoading("",function(){var e={url:"/api/CompanyUser/ResetPassword",data:a,success:function(e){0==e.data.Code?(o.default.hideLoading(),o.default.showToast("重置密码成功"),setTimeout(function(){t.navigateBack({delta:1})},500)):-2==e.data.Code||-1==e.data.Code?(o.default.hideLoading(),o.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(o.default.hideLoading(),o.default.showToast(e.data.Description))}};(0,n.ajax)(e)})}else o.default.showToast("两次密码输入不一致")}}};e.default=u}).call(this,a("6e42")["default"])},"451e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"68dc":function(t,e,a){"use strict";a.r(e);var n=a("2cbe"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},a9d1:function(t,e,a){"use strict";a.r(e);var n=a("451e"),o=a("68dc");for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);a("08f4");var u=a("2877"),i=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,"90556eea",null);e["default"]=i.exports},e902:function(t,e,a){"use strict";(function(t){a("2448"),a("921b");n(a("66fd"));var e=n(a("a9d1"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["e902","common/runtime","common/vendor"]]]);
});
require('pages/reset/reset.js');
__wxRoute = 'pages/carsCount/carsCount';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/carsCount/carsCount.js';

define('pages/carsCount/carsCount.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/carsCount/carsCount"],{"210c":function(t,e,n){"use strict";(function(t){n("2448"),n("921b");a(n("66fd"));var e=a(n("d4e0"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2f09":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("5264")),i=r(n("209e")),c=n("131d");function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u,d=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"24d4"))},l=null,f={data:function(){return{Color:"#333",itemIndex:0,val:"",tab:["入库","出库"],cWidth:"",cHeight:"",pixelRatio:1,date:"",type:1,summary:"",list:[]}},components:{wPicker:d},onLoad:function(){var e=new Date,n=e.getFullYear(),a=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1);this.val="".concat(n,"年").concat(a,"月"),this.date="".concat(n,"-").concat(a),u=this,t.getSystemInfo({success:function(t){t.pixelRatio>1&&(u.pixelRatio=1)}}),this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.init()},methods:{init:function(){var e=this,n={token:t.getStorageSync("token"),month:this.date,type:this.type,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};o.default.showLoading("",function(){var i={url:"/api/product/Report",data:n,success:function(n){if(console.log(a(JSON.stringify(n)," at pages\\carsCount\\carsCount.vue:101")),0==n.data.Code){o.default.hideLoading(),e.list=n.data.Customerdata,e.summary=n.data.Extra.Summary;var i={categories:[],series:[]},c=[];e.list.forEach(function(t){i.categories.unshift(t.addmonth.substr(5)),console.log(a(e.date," at pages\\carsCount\\carsCount.vue:113")),e.date==t.addmonth?c.unshift({value:t.weight,color:"#53bb6e",textColor:"#ffffff"}):c.unshift({value:t.weight,color:"#CBEBD4",textColor:"#ffffff"})}),1==e.type?i.series=[{name:"入库量",data:c}]:i.series=[{name:"出库量",data:c}],u.showColumn("canvasColumn",i)}else-2==n.data.Code||-1==n.data.Code?(o.default.hideLoading(),o.default.showToast(n.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(o.default.hideLoading(),o.default.showToast(n.data.Description))}};(0,c.ajax)(i)})},showColumn:function(t,e){var n;l=new i.default((n={$this:u,canvasId:t,type:"column",padding:[15,5,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:12,background:"#FFFFFF",pixelRatio:u.pixelRatio,animation:!0,dataLabel:!1,categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{data:[{position:"left",axisLine:!1,format:function(t){return t.toFixed(0)+"吨"}}]}},s(n,"dataLabel",!0),s(n,"width",u.cWidth*u.pixelRatio),s(n,"height",u.cHeight*u.pixelRatio),s(n,"extra",{column:{type:"group",width:u.cWidth*u.pixelRatio*.45/e.categories.length}}),n))},touchColumn:function(t){l.scrollStart(t)},moveColumn:function(t){l.scroll(t)},touchEndColumn:function(t){l.scrollEnd(t),l.touchLegend(t,{animation:!0}),l.showToolTip(t,{format:function(t,e){return"object"===typeof t.data?e+" "+t.name+":"+t.data.value:e+" "+t.name+":"+t.data}})},changeTab:function(t){this.type!=t+1&&(this.itemIndex=t,this.type=t+1,this.init())},showType:function(){this.$refs.picker1.show()},onConfirm1:function(t){console.log(a(JSON.stringify(t)," at pages\\carsCount\\carsCount.vue:233")),this.val="".concat(t.checkArr[0][0],"年").concat(t.checkArr[0][1],"月"),this.date=t.result,this.init()}}};e.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},c5a6:function(t,e,n){"use strict";var a=n("ca60"),o=n.n(a);o.a},ca60:function(t,e,n){},d4e0:function(t,e,n){"use strict";n.r(e);var a=n("e566"),o=n("d692");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("c5a6");var c=n("2877"),r=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,"0d2e1de2",null);e["default"]=r.exports},d692:function(t,e,n){"use strict";n.r(e);var a=n("2f09"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},e566:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=(t._self._c,n("0fdf"));t.$mp.data=Object.assign({},{$root:{m0:a}})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}},[["210c","common/runtime","common/vendor"]]]);
});
require('pages/carsCount/carsCount.js');
__wxRoute = 'pages/editor/editor';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/editor/editor.js';

define('pages/editor/editor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/editor/editor"],{"0bd0":function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o("131d"),i=n(o("5264"));function n(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{Color:"#333",ids:"",user:"",tel:"",passport:"",weight:0}},onLoad:function(t){var e=JSON.parse(t.item);this.ids=e.id,this.user=e.owner,this.tel=e.ownermobile,this.passport=e.passportnum,this.weight=e.weight},methods:{goSubmit:function(){var e=/^[\u2E80-\u9FFF]+$/;if(!e.test(this.user)||this.user.length>6||0==this.user.length)i.default.showToast("请输入6位以内的汉字");else if(""!=this.tel)if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.tel))if(""!=this.passport)if(""==this.weight||this.weight<=0)i.default.showToast("自重必须大于0");else{var o={token:t.getStorageSync("token"),id:this.ids,owner:this.user,ownermobile:this.tel,passportnum:this.passport,weight:this.weight,os:t.getSystemInfoSync().platform,osversion:t.getSystemInfoSync().system,appversion:t.getStorageSync("appversion")};i.default.showLoading("",function(){var e={url:"/api/truck/updtruckinfo",data:o,success:function(e){console.log(a(JSON.stringify(e)," at pages\\editor\\editor.vue:100")),0==e.data.Code?(i.default.hideLoading(),i.default.showToast("修改成功"),setTimeout(function(){t.navigateBack({delta:1})},500)):-2==e.data.Code||-1==e.data.Code?(i.default.hideLoading(),i.default.showToast(e.data.Description),t.removeStorageSync("token"),setTimeout(function(){t.redirectTo({url:"/pages/login/login"})},500)):(i.default.hideLoading(),i.default.showToast(e.data.Description))}};(0,s.ajax)(e)})}else i.default.showToast("行车证不能为空");else i.default.showToast("手机号格式不正确");else i.default.showToast("手机号不能为空")}}};e.default=u}).call(this,o("6e42")["default"],o("0de9")["default"])},"0fcb":function(t,e,o){"use strict";o.r(e);var a=o("b018"),s=o("da77");for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);o("c048");var n=o("2877"),u=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"a15265a6",null);e["default"]=u.exports},a0e6:function(t,e,o){},b018:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},s=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return s})},c048:function(t,e,o){"use strict";var a=o("a0e6"),s=o.n(a);s.a},da77:function(t,e,o){"use strict";o.r(e);var a=o("0bd0"),s=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=s.a},f93d:function(t,e,o){"use strict";(function(t){o("2448"),o("921b");a(o("66fd"));var e=a(o("0fcb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["f93d","common/runtime","common/vendor"]]]);
});
require('pages/editor/editor.js');
__wxRoute = 'pages/text/text';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/text/text.js';

define('pages/text/text.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/text/text"],{"2bf2":function(t,e,n){},"4ad4":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"5df6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{Color:"#333",title:""}},onLoad:function(e){this.title=e.title;var n=plus.webview.create("","custom-webview",{plusrequire:"none","uni-app":"none",top:t.getSystemInfoSync().statusBarHeight+36});n.loadURL(e.url);var u=this.$mp.page.$getAppWebview();u.append(n)}};e.default=n}).call(this,n("6e42")["default"])},"6c2d":function(t,e,n){"use strict";n.r(e);var u=n("4ad4"),a=n("de28");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("7a7b");var o=n("2877"),i=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,"3dfdf9cc",null);e["default"]=i.exports},"7a68":function(t,e,n){"use strict";(function(t){n("2448"),n("921b");u(n("66fd"));var e=u(n("6c2d"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"7a7b":function(t,e,n){"use strict";var u=n("2bf2"),a=n.n(u);a.a},de28:function(t,e,n){"use strict";n.r(e);var u=n("5df6"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a}},[["7a68","common/runtime","common/vendor"]]]);
});
require('pages/text/text.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);
