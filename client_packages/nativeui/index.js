!function(e){
    var t={};function i(s){
        if (t[s]) return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports;
    }i.m=e,i.c=t,i.d=function(e,t,s){
        i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s});
    },i.r=function(e){
        'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(e,'__esModule',{value:!0});
    },i.t=function(e,t){
        if (1&t&&(e=i(e)),8&t) return e;if (4&t&&'object'==typeof e&&e&&e.__esModule) return e;var s=Object.create(null);if (i.r(s),Object.defineProperty(s,'default',{enumerable:!0,value:e}),2&t&&'string'!=typeof e) for (var n in e)i.d(s,n,function(t){
            return e[t];
        }.bind(null,n));return s;
    },i.n=function(e){
        var t=e&&e.__esModule?function(){
            return e.default;
        }:function(){
            return e;
        };return i.d(t,'a',t),t;
    },i.o=function(e,t){
        return Object.prototype.hasOwnProperty.call(e,t);
    },i.p='',i(i.s=0);
}([function(e,t,i){
    'use strict';var s;i.r(t),function(e){
        e[e.None=0]='None',e[e.BronzeMedal=1]='BronzeMedal',e[e.GoldMedal=2]='GoldMedal',e[e.SilverMedal=3]='SilverMedal',e[e.Alert=4]='Alert',e[e.Crown=5]='Crown',e[e.Ammo=6]='Ammo',e[e.Armour=7]='Armour',e[e.Barber=8]='Barber',e[e.Clothes=9]='Clothes',e[e.Franklin=10]='Franklin',e[e.Bike=11]='Bike',e[e.Car=12]='Car',e[e.Gun=13]='Gun',e[e.Heart=14]='Heart',e[e.Makeup=15]='Makeup',e[e.Mask=16]='Mask',e[e.Michael=17]='Michael',e[e.Star=18]='Star',e[e.Tatoo=19]='Tatoo',e[e.Trevor=20]='Trevor',e[e.Lock=21]='Lock',e[e.Tick=22]='Tick',e[e.Sale=23]='Sale',e[e.ArrowLeft=24]='ArrowLeft',e[e.ArrowRight=25]='ArrowRight',e[e.Audio1=26]='Audio1',e[e.Audio2=27]='Audio2',e[e.Audio3=28]='Audio3',e[e.AudioInactive=29]='AudioInactive',e[e.AudioMute=30]='AudioMute';
    }(s||(s={}));var n,h=s;!function(e){
        e[e.ChaletLondon=0]='ChaletLondon',e[e.HouseScript=1]='HouseScript',e[e.Monospace=2]='Monospace',e[e.CharletComprimeColonge=4]='CharletComprimeColonge',e[e.Pricedown=7]='Pricedown';
    }(n||(n={}));var o,r=n;class a{
        constructor(e,t,i,s=255){
            this.R=e,this.G=t,this.B=i,this.A=s;
        }
    }a.Empty=new a(0,0,0,0),a.Transparent=new a(0,0,0,0),a.Black=new a(0,0,0,255),a.White=new a(255,255,255,255),a.WhiteSmoke=new a(245,245,245,255);class l{
        constructor(e=0,t=0){
            this.Width=e,this.Height=t;
        }
    } class c{
        constructor(e,t){
            this.X=0,this.Y=0,this.X=e,this.Y=t;
        } static Parse(e){
            if ('object'==typeof e){
                if (e.length) return new c(e[0],e[1]);if (e.X&&e.Y) return new c(e.X,e.Y);
            } else if ('string'==typeof e&&-1!==e.indexOf(',')){
                const t=e.split(',');return new c(parseFloat(t[0]),parseFloat(t[1]));
            } return new c(0,0);
        }
    } class u{
        constructor(){
            this.enabled=!0;
        }
    } class d extends u{
        constructor(e,t,i,s,n,h){
            super(),this.caption=e,this.pos=t,this.scale=i,this.color=s||new a(255,255,255,255),this.font=n||0,this.centered=h||!1;
        }Draw(e,t,i,s,n,h){
            !e||t||i||s||n||h||(t=new c(this.pos.X+e.Width,this.pos.Y+e.Height),i=this.scale,s=this.color,n=this.font,h=this.centered);const o=t.X/1280,r=t.Y/720;mp.game.ui.setTextFont(parseInt(n)),mp.game.ui.setTextScale(i,i),mp.game.ui.setTextColour(s.R,s.G,s.B,s.A),mp.game.ui.setTextCentre(h),mp.game.ui.setTextEntry('THREESTRINGS'),m.AddLongString(e),mp.game.ui.drawText(o,r);
        }
    }exports=d,function(e){
        e[e.Left=0]='Left',e[e.Centered=1]='Centered',e[e.Right=2]='Right';
    }(o||(o={}));class m extends d{
        constructor(e,t,i,s,n,h){
            super(e,t,i,s||new a(255,255,255),n||0,!1),this.TextAlignment=o.Left,this.Wrap=0,h&&(this.TextAlignment=h);
        } get WordWrap(){
            return new l(this.Wrap,0);
        } set WordWrap(e){
            this.Wrap=e.Width;
        }Draw(e,t,i,s,n,h,r,a,u){
            let d=e,f=h,p=h;e||(e=new l(0,0)),e&&!t&&(p=this.TextAlignment,d=this.caption,t=new c(this.pos.X+e.Width,this.pos.Y+e.Height),i=this.scale,s=this.color,n=this.font,1==f||0==f?f=this.centered:(f=void 0,r=this.DropShadow,a=this.Outline,this.WordWrap));const _=1080*(g.width/g.height),I=this.pos.X/_,w=this.pos.Y/1080;if (mp.game.ui.setTextFont(parseInt(n)),mp.game.ui.setTextScale(1,i),mp.game.ui.setTextColour(s.R,s.G,s.B,s.A),void 0!==f)mp.game.ui.setTextCentre(f);else {
                switch (r&&mp.game.ui.setTextDropshadow(2,0,0,0,0),a&&console.warn('outline not working!'),p){
                case o.Centered:mp.game.ui.setTextCentre(!0);break;case o.Right:mp.game.ui.setTextRightJustify(!0),mp.game.ui.setTextWrap(0,I);
                } if (this.Wrap){
                    const e=(this.pos.X+this.Wrap)/_;mp.game.ui.setTextWrap(I,e);
                }
            }mp.game.ui.setTextEntry('THREESTRINGS'),m.AddLongString(d),mp.game.ui.drawText(I,w);
        } static AddLongString(e){
            if (e.length){
                const t=99;for (let i,s=0;s<e.length;s+=t){
                    let n=e.substr(s,s+t),h=s;(n.match(/~/g)||[]).length%2!=0?s-=t-(i=n.lastIndexOf('~')):i=Math.min(t,e.length-h),mp.game.ui.addTextComponentSubstringPlayerName(e.substr(h,i));
                }
            }
        }
    } const f=mp.game.graphics.getScreenActiveResolution(0,0),g={width:f.x,height:f.y,ResolutionMaintainRatio:()=>{
        const e=f.x,t=f.y;return new l(1080*(e/t),1080);
    },getMousePosition:(e=!1)=>{
        const t=g.ResolutionMaintainRatio(),i=mp.gui.cursor.position;let [s,n]=[i[0],i[1]];return e&&([s,n]=[i[0]/t.Width,i[1]/t.Height]),[s,n];
    },IsMouseInBounds:(e,t)=>{
        const [i,s]=g.getMousePosition();return i>=e.X&&i<=e.X+t.Width&&s>e.Y&&s<e.Y+t.Height;
    },GetTextWidth:(e,t,i)=>{
        mp.game.ui.setTextEntryForWidth('THREESTRINGS'),m.AddLongString(e),mp.game.ui.setTextFont(t),mp.game.ui.setTextScale(1,i);const s=mp.game.ui.getTextScreenWidth(!0);return g.ResolutionMaintainRatio().Width*s;
    },GetLineCount:(e,t,i,s,n)=>{
        mp.game.ui.setTextGxtEntry('THREESTRINGS'),m.AddLongString(e);const h=g.ResolutionMaintainRatio(),o=t.X/h.Width,r=t.Y/h.Height;if (mp.game.ui.setTextFont(i),mp.game.ui.setTextScale(1,s),n>0){
            const e=t.X/h.Width+n/h.Width;mp.game.ui.setTextWrap(o,e);
        } return mp.game.invoke('0x9040DFB09BE75706',o,r);
    }};class p{
        constructor(e,t,i,s,n=0,h=new a(255,255,255)){
            this.TextureDict=e,this.TextureName=t,this.pos=i,this.size=s,this.heading=n,this.color=h,this.visible=!0;
        }LoadTextureDictionary(){
            for (mp.game.graphics.requestStreamedTextureDict(this._textureDict,!0);!this.IsTextureDictionaryLoaded;)mp.game.wait(0);
        } set TextureDict(e){
            this._textureDict=e,this.IsTextureDictionaryLoaded||this.LoadTextureDictionary();
        } get TextureDict(){
            return this._textureDict;
        } get IsTextureDictionaryLoaded(){
            return mp.game.graphics.hasStreamedTextureDictLoaded(this._textureDict);
        }Draw(e,t,i,s,n,h,o){
            e=e||this.TextureDict,t=t||this.TextureName,i=i||this.pos,s=s||this.size,n=n||this.heading,h=h||this.color,(o=o||!0)&&(mp.game.graphics.hasStreamedTextureDictLoaded(e)||mp.game.graphics.requestStreamedTextureDict(e,!0));const r=1080*(g.width/g.height),a=this.size.Width/r,l=this.size.Height/1080,c=this.pos.X/r+.5*a,u=this.pos.Y/1080+.5*l;mp.game.graphics.drawSprite(e,t,c,u,a,l,n,h.R,h.G,h.B,h.A);
        }
    } class _{
        constructor(){
            this.handlers=[];
        }on(e){
            this.handlers.push(e);
        }off(e){
            this.handlers=this.handlers.filter(t=>t!==e);
        }emit(...e){
            this.handlers.slice(0).forEach(t=>t(...e));
        }expose(){
            return this;
        }count(){
            return this.handlers.length;
        }
    } class I extends u{
        constructor(e,t,i){
            super(),this.enabled=!0,this.pos=e,this.size=t,this.color=i;
        }Draw(e,t,i){
            e||(e=new l(0,0)),t||i||(e=new c(this.pos.X+e.Width,this.pos.Y+e.Height),t=this.size,i=this.color);const s=t.Width/1280,n=t.Height/720,h=e.X/1280+.5*s,o=e.Y/720+.5*n;mp.game.graphics.drawRect(h,o,s,n,i.R,i.G,i.B,i.A);
        }
    } class w extends I{
        constructor(e,t,i){
            super(e,t,i);
        }Draw(e,t,i){
            e||(e=new l),!e||t||i||(e=new c(this.pos.X+e.Width,this.pos.Y+e.Height),t=this.size,i=this.color);const s=1080*(g.width/g.height),n=t.Width/s,h=t.Height/1080,o=e.X/s+.5*n,r=e.Y/1080+.5*h;mp.game.graphics.drawRect(o,r,n,h,i.R,i.G,i.B,i.A);
        }
    } function x(){
        let e,t='';for (e=0;e<32;e+=1) switch (e){
        case 8:case 20:t+='-',t+=(16*Math.random()|0).toString(16);break;case 12:t+='-',t+='4';break;case 16:t+='-',t+=(4*Math.random()|8).toString(16);break;default:t+=(16*Math.random()|0).toString(16);
            } return t;
    } class S{
        constructor(e,t='',i=null){
            this.Id=x(),this.BackColor=S.DefaultBackColor,this.HighlightedBackColor=S.DefaultHighlightedBackColor,this.ForeColor=S.DefaultForeColor,this.HighlightedForeColor=S.DefaultHighlightedForeColor,this.RightLabel='',this.LeftBadge=h.None,this.RightBadge=h.None,this.Enabled=!0,this.Data=i,this._rectangle=new w(new c(0,0),new l(431,38),new a(150,0,0,0)),this._text=new m(e,new c(8,0),.33,a.WhiteSmoke,r.ChaletLondon,o.Left),this.Description=t,this._selectedSprite=new p('commonmenu','gradient_nav',new c(0,0),new l(431,38)),this._badgeLeft=new p('commonmenu','',new c(0,0),new l(40,40)),this._badgeRight=new p('commonmenu','',new c(0,0),new l(40,40)),this._labelText=new m('',new c(0,0),.35,a.White,0,o.Right);
        } get Text(){
            return this._text.caption;
        } set Text(e){
            this._text.caption=e;
        } get Description(){
            return this._description;
        } set Description(e){
            this._description=e,this.hasOwnProperty('Parent')&&(this.Parent.recalculateDescriptionNextFrame+=1);
        }SetVerticalPosition(e){
            this._rectangle.pos=new c(this.Offset.X,e+144+this.Offset.Y),this._selectedSprite.pos=new c(0+this.Offset.X,e+144+this.Offset.Y),this._text.pos=new c(8+this.Offset.X,e+147+this.Offset.Y),this._badgeLeft.pos=new c(0+this.Offset.X,e+142+this.Offset.Y),this._badgeRight.pos=new c(385+this.Offset.X,e+142+this.Offset.Y),this._labelText.pos=new c(420+this.Offset.X,e+148+this.Offset.Y);
        }addEvent(e,...t){
            this._event={event:e,args:t};
        }fireEvent(){
            this._event&&mp.events.call(this._event.event,this,...this._event.args);
        }Draw(){
            this._rectangle.size=new l(431+this.Parent.WidthOffset,38),this._selectedSprite.size=new l(431+this.Parent.WidthOffset,38),this.Hovered&&!this.Selected&&(this._rectangle.color=new a(255,255,255,20),this._rectangle.Draw()),this._selectedSprite.color=this.Selected?this.HighlightedBackColor:this.BackColor,this._selectedSprite.Draw(),this._text.color=this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148),this.LeftBadge!=h.None?(this._text.pos=new c(35+this.Offset.X,this._text.pos.Y),this._badgeLeft.TextureDict=this.BadgeToSpriteLib(this.LeftBadge),this._badgeLeft.TextureName=this.BadgeToSpriteName(this.LeftBadge,this.Selected),this._badgeLeft.color=this.IsBagdeWhiteSprite(this.LeftBadge)?this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148):a.White,this._badgeLeft.Draw()):this._text.pos=new c(8+this.Offset.X,this._text.pos.Y),this.RightBadge!=h.None&&(this._badgeRight.pos=new c(385+this.Offset.X+this.Parent.WidthOffset,this._badgeRight.pos.Y),this._badgeRight.TextureDict=this.BadgeToSpriteLib(this.RightBadge),this._badgeRight.TextureName=this.BadgeToSpriteName(this.RightBadge,this.Selected),this._badgeRight.color=this.IsBagdeWhiteSprite(this.RightBadge)?this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148):a.White,this._badgeRight.Draw()),this.RightLabel&&''!==this.RightLabel&&(this._labelText.pos=new c(420+this.Offset.X+this.Parent.WidthOffset,this._labelText.pos.Y),this._labelText.caption=this.RightLabel,this._labelText.color=this._text.color=this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148),this._labelText.Draw()),this._text.Draw();
        }SetLeftBadge(e){
            this.LeftBadge=e;
        }SetRightBadge(e){
            this.RightBadge=e;
        }SetRightLabel(e){
            this.RightLabel=e;
        }BadgeToSpriteLib(e){
            switch (e){
            case h.Sale:return 'mpshopsale';case h.Audio1:case h.Audio2:case h.Audio3:case h.AudioInactive:case h.AudioMute:return 'mpleaderboard';default:return 'commonmenu';
            }
        }BadgeToSpriteName(e,t){
            switch (e){
            case h.None:return '';case h.BronzeMedal:return 'mp_medal_bronze';case h.GoldMedal:return 'mp_medal_gold';case h.SilverMedal:return 'medal_silver';case h.Alert:return 'mp_alerttriangle';case h.Crown:return 'mp_hostcrown';case h.Ammo:return t?'shop_ammo_icon_b':'shop_ammo_icon_a';case h.Armour:return t?'shop_armour_icon_b':'shop_armour_icon_a';case h.Barber:return t?'shop_barber_icon_b':'shop_barber_icon_a';case h.Clothes:return t?'shop_clothing_icon_b':'shop_clothing_icon_a';case h.Franklin:return t?'shop_franklin_icon_b':'shop_franklin_icon_a';case h.Bike:return t?'shop_garage_bike_icon_b':'shop_garage_bike_icon_a';case h.Car:return t?'shop_garage_icon_b':'shop_garage_icon_a';case h.Gun:return t?'shop_gunclub_icon_b':'shop_gunclub_icon_a';case h.Heart:return t?'shop_health_icon_b':'shop_health_icon_a';case h.Lock:return 'shop_lock';case h.Makeup:return t?'shop_makeup_icon_b':'shop_makeup_icon_a';case h.Mask:return t?'shop_mask_icon_b':'shop_mask_icon_a';case h.Michael:return t?'shop_michael_icon_b':'shop_michael_icon_a';case h.Star:return 'shop_new_star';case h.Tatoo:return t?'shop_tattoos_icon_b':'shop_tattoos_icon_';case h.Tick:return 'shop_tick_icon';case h.Trevor:return t?'shop_trevor_icon_b':'shop_trevor_icon_a';case h.Sale:return 'saleicon';case h.ArrowLeft:return 'arrowleft';case h.ArrowRight:return 'arrowright';case h.Audio1:return 'leaderboard_audio_1';case h.Audio2:return 'leaderboard_audio_2';case h.Audio3:return 'leaderboard_audio_3';case h.AudioInactive:return 'leaderboard_audio_inactive';case h.AudioMute:return 'leaderboard_audio_mute';default:return '';
            }
        }IsBagdeWhiteSprite(e){
            switch (e){
            case h.Lock:case h.Tick:case h.Crown:return !0;default:return !1;
            }
        }BadgeToColor(e,t){
            switch (e){
            case h.Lock:case h.Tick:case h.Crown:return t?new a(255,0,0,0):new a(255,255,255,255);default:return new a(255,255,255,255);
            }
        }
    }S.DefaultBackColor=a.Empty,S.DefaultHighlightedBackColor=a.White,S.DefaultForeColor=a.WhiteSmoke,S.DefaultHighlightedForeColor=a.Black;class M extends S{
        constructor(e,t=!1,i=''){
            super(e,i),this.OnCheckedChanged=new _,this.Checked=!1;this._checkedSprite=new p('commonmenu','shop_box_blank',new c(410,95),new l(50,50)),this.Checked=t;
        } get CheckedChanged(){
            return this.OnCheckedChanged.expose();
        }SetVerticalPosition(e){
            super.SetVerticalPosition(e),this._checkedSprite.pos=new c(380+this.Offset.X+this.Parent.WidthOffset,e+138+this.Offset.Y);
        }Draw(){
            super.Draw(),this._checkedSprite.pos=this._checkedSprite.pos=new c(380+this.Offset.X+this.Parent.WidthOffset,this._checkedSprite.pos.Y);const e=this.HighlightedForeColor==S.DefaultHighlightedForeColor;this.Selected&&e?this._checkedSprite.TextureName=this.Checked?'shop_box_tickb':'shop_box_blankb':this._checkedSprite.TextureName=this.Checked?'shop_box_tick':'shop_box_blank',this._checkedSprite.color=this.Enabled?this.Selected&&!e?this.HighlightedForeColor:this.ForeColor:new a(163,159,148),this._checkedSprite.Draw();
        }SetRightBadge(e){
            return this;
        }SetRightLabel(e){
            return this;
        }
    } class C{
        constructor(e='',t=null){
            this.Id=x(),this.DisplayText=e,this.Data=t;
        }
    } class O{
        constructor(e){
            if (0===e.length) throw new Error('ItemsCollection cannot be empty');this.items=e;
        }length(){
            return this.items.length;
        }getListItems(){
            const e=[];for (const t of this.items)t instanceof C?e.push(t):'string'==typeof t&&e.push(new C(t.toString()));return e;
        }
    } class T extends S{
        constructor(e,t='',i=new O([]),s=0,n=null){
            super(e,t,n),this.ScrollingEnabled=!0,this.HoldTimeBeforeScroll=200,this.currOffset=0,this.collection=[],this.OnListChanged=new _,this._index=0;this.Collection=i.getListItems(),this.Index=s,this._arrowLeft=new p('commonmenu','arrowleft',new c(110,105),new l(30,30)),this._arrowRight=new p('commonmenu','arrowright',new c(280,105),new l(30,30)),this._itemText=new m('',new c(290,104),.35,a.White,r.ChaletLondon,o.Right);
        } get Collection(){
            return this.collection;
        } set Collection(e){
            if (!e) throw new Error("The collection can't be null");this.collection=e;
        } set SelectedItem(e){
            const t=this.Collection.findIndex(t=>t.Id===e.Id);this.Index=t>0?t:0;
        } get SelectedItem(){
            return this.Collection.length>0?this.Collection[this.Index]:null;
        } get SelectedValue(){
            return null==this.SelectedItem?null:null==this.SelectedItem.Data?this.SelectedItem.DisplayText:this.SelectedItem.Data;
        } get ListChanged(){
            return this.OnListChanged.expose();
        } get Index(){
            return null==this.Collection?-1:null!=this.Collection&&0==this.Collection.length?-1:this._index%this.Collection.length;
        } set Index(e){
            if (null==this.Collection) return;if (null!=this.Collection&&0==this.Collection.length) return;this._index=1e5-1e5%this.Collection.length+e;const t=this.Collection.length>=this.Index?this.Collection[this.Index].DisplayText:' ';this.currOffset=g.GetTextWidth(t,this._itemText&&this._itemText.font?this._itemText.font:0,.35);
        }setCollection(e){
            this.Collection=e.getListItems();
        }setCollectionItem(e,t,i=!0){
            if (e> this.Collection.length) throw new Error('Index out of bounds');'string'==typeof t&&(t=new C(t)),this.Collection.splice(e,1,t),i&&(this.Index=0);
        }SetVerticalPosition(e){
            this._arrowLeft.pos=new c(300+this.Offset.X+this.Parent.WidthOffset,147+e+this.Offset.Y),this._arrowRight.pos=new c(400+this.Offset.X+this.Parent.WidthOffset,147+e+this.Offset.Y),this._itemText.pos=new c(300+this.Offset.X+this.Parent.WidthOffset,e+147+this.Offset.Y),super.SetVerticalPosition(e);
        }SetRightLabel(e){
            return this;
        }SetRightBadge(e){
            return this;
        }Draw(){
            super.Draw();const e=this.Collection.length>=this.Index?this.Collection[this.Index].DisplayText:' ',t=this.currOffset;this._itemText.color=this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148),this._itemText.caption=e,this._arrowLeft.color=this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148),this._arrowRight.color=this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148),this._arrowLeft.pos=new c(390-t+this.Offset.X+this.Parent.WidthOffset,this._arrowLeft.pos.Y),this.Selected?(this._arrowLeft.Draw(),this._arrowRight.Draw(),this._itemText.pos=new c(405+this.Offset.X+this.Parent.WidthOffset,this._itemText.pos.Y)):this._itemText.pos=new c(420+this.Offset.X+this.Parent.WidthOffset,this._itemText.pos.Y),this._itemText.Draw();
        }
    } class D extends S{
        constructor(e,t='',i=0,s=10,n=0,h=null){
            super(e,t,h),this.ScrollingEnabled=!0,this.HoldTimeBeforeScroll=200,this.currOffset=0,this._leftMoveThreshold=1,this._rightMoveThreshold=1,this._lowerThreshold=0,this._upperThreshold=10,this._preText='',this.OnDynamicListChange=new _;this.LowerThreshold=i,this.UpperThreshold=s,this.SelectedValue=n<i||n>s?i:n,this._arrowLeft=new p('commonmenu','arrowleft',new c(110,105),new l(30,30)),this._arrowRight=new p('commonmenu','arrowright',new c(280,105),new l(30,30)),this._itemText=new m('',new c(290,104),.35,a.White,r.ChaletLondon,o.Right);
        } get PreCaptionText(){
            return this._preText;
        } set PreCaptionText(e){
            if (!e) throw new Error("The pre caption text can't be null");if ('string'!=typeof e) throw new Error('The pre caption text must be a string');this._preText=e,this.currOffset=g.GetTextWidth(this.PreCaptionText+this._value.toString(),this._itemText&&this._itemText.font?this._itemText.font:0,.35);
        } get LeftMoveThreshold(){
            return this._leftMoveThreshold;
        } set LeftMoveThreshold(e){
            if (!e) throw new Error("The left threshold can't be null");this._leftMoveThreshold=e;
        } get RightMoveThreshold(){
            return this._rightMoveThreshold;
        } set RightMoveThreshold(e){
            if (!e) throw new Error("The right threshold can't be null");this._rightMoveThreshold=e;
        } get LowerThreshold(){
            return this._lowerThreshold;
        } set LowerThreshold(e){
            if ('number'!=typeof e&&!e) throw new Error("The lower threshold can't be null");this._lowerThreshold=e,this.SelectedValue<e&&(this.SelectedValue=e);
        } get UpperThreshold(){
            return this._upperThreshold;
        } set UpperThreshold(e){
            if ('number'!=typeof e&&!e) throw new Error("The upper threshold can't be null");this._upperThreshold=e,this.SelectedValue>e&&(this.SelectedValue=e);
        } get SelectedValue(){
            return this._value;
        } set SelectedValue(e){
            if (e<this._lowerThreshold||e> this._upperThreshold) throw new Error('The value can not be outside the lower or upper limits');this._value=e,this.currOffset=g.GetTextWidth(this.PreCaptionText+this._value.toString(),this._itemText&&this._itemText.font?this._itemText.font:0,this._itemText&&this._itemText.scale?this._itemText.scale:.35);
        } get DynamicListChange(){
            return this.OnDynamicListChange.expose();
        }SetVerticalPosition(e){
            this._arrowLeft.pos=new c(300+this.Offset.X+this.Parent.WidthOffset,147+e+this.Offset.Y),this._arrowRight.pos=new c(400+this.Offset.X+this.Parent.WidthOffset,147+e+this.Offset.Y),this._itemText.pos=new c(300+this.Offset.X+this.Parent.WidthOffset,e+147+this.Offset.Y),super.SetVerticalPosition(e);
        }SetRightLabel(e){
            return this;
        }SetRightBadge(e){
            return this;
        }Draw(){
            super.Draw();const e=this.currOffset;this._itemText.color=this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148),this._itemText.caption=this.PreCaptionText+this._value.toString(),this._arrowLeft.color=this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148),this._arrowRight.color=this.Enabled?this.Selected?this.HighlightedForeColor:this.ForeColor:new a(163,159,148),this._arrowLeft.pos=new c(390-e+this.Offset.X+this.Parent.WidthOffset,this._arrowLeft.pos.Y),this.Selected?(this._arrowLeft.Draw(),this._arrowRight.Draw(),this._itemText.pos=new c(405+this.Offset.X+this.Parent.WidthOffset,this._itemText.pos.Y)):this._itemText.pos=new c(420+this.Offset.X+this.Parent.WidthOffset,this._itemText.pos.Y),this._itemText.Draw();
        }
    } class R extends S{
        get Index(){
            return this._index%this._items.length;
        } set Index(e){
            this._index=1e8-1e8%this._items.length+e;
        }constructor(e,t,i,s='',n=!1,h=null){
            super(e,s,h);this._items=t,this._arrowLeft=new p('commonmenutu','arrowleft',new c(0,105),new l(15,15)),this._arrowRight=new p('commonmenutu','arrowright',new c(0,105),new l(15,15)),this._rectangleBackground=new w(new c(0,0),new l(150,9),new a(4,32,57,255)),this._rectangleSlider=new w(new c(0,0),new l(75,9),new a(57,116,200,255)),this._rectangleDivider=new w(new c(0,0),new l(2.5,20),n?a.WhiteSmoke:a.Transparent),this.Index=i;
        }SetVerticalPosition(e){
            this._rectangleBackground.pos=new c(250+this.Offset.X+this.Parent.WidthOffset,e+158.5+this.Offset.Y),this._rectangleSlider.pos=new c(250+this.Offset.X+this.Parent.WidthOffset,e+158.5+this.Offset.Y),this._rectangleDivider.pos=new c(323.5+this.Offset.X+this.Parent.WidthOffset,e+153+this.Offset.Y),this._arrowLeft.pos=new c(235+this.Offset.X+this.Parent.WidthOffset,155.5+e+this.Offset.Y),this._arrowRight.pos=new c(400+this.Offset.X+this.Parent.WidthOffset,155.5+e+this.Offset.Y),super.SetVerticalPosition(e);
        }IndexToItem(e){
            return this._items[e];
        }Draw(){
            super.Draw(),this._arrowLeft.color=this.Enabled?this.Selected?a.Black:a.WhiteSmoke:new a(163,159,148),this._arrowRight.color=this.Enabled?this.Selected?a.Black:a.WhiteSmoke:new a(163,159,148);let e=(this._rectangleBackground.size.Width-this._rectangleSlider.size.Width)/(this._items.length-1)*this.Index;this._rectangleSlider.pos=new c(250+this.Offset.X+e+ +this.Parent.WidthOffset,this._rectangleSlider.pos.Y),this.Selected&&(this._arrowLeft.Draw(),this._arrowRight.Draw()),this._rectangleBackground.Draw(),this._rectangleSlider.Draw(),this._rectangleDivider.Draw();
        }SetRightBadge(e){}SetRightLabel(e){}
    } class b extends I{
        constructor(e,t,i){
            super(e,t,i),this.Items=[];
        }addItem(e){
            this.Items.push(e);
        }Draw(e){
            if (!this.enabled) return;e=e||new l;const t=1080*(g.width/g.height),i=this.size.Width/t,s=this.size.Height/1080,n=(this.pos.X+e.Width)/t+.5*i,h=(this.pos.Y+e.Height)/1080+.5*s;for (var o of (mp.game.graphics.drawRect(n,h,i,s,this.color.R,this.color.G,this.color.B,this.color.A),this.Items))o.Draw(new l(this.pos.X+e.Width,this.pos.Y+e.Height));
        }
    } class v{
        static PlaySound(e,t){
            mp.game.audio.playSound(-1,e,t,!1,0,!0);
        }
    }i.d(t,'default',function(){
        return A;
    });let L=[];class A{
        constructor(e,t,i,s,n){
            this.Id=x(),this._visible=!0,this.counterPretext='',this.counterOverride=void 0,this.lastUpDownNavigation=0,this.lastLeftRightNavigation=0,this.extraOffset=0,this.ParentMenu=null,this.ParentItem=null,this._titleScale=1.15,this.WidthOffset=0,this.MouseControlsEnabled=!1,this._justOpened=!0,this._justOpenedFromPool=!1,this._justClosedFromPool=!1,this._poolOpening=null,this.safezoneOffset=new c(0,0),this._activeItem=1e3,this.MaxItemsOnScreen=9,this._maxItem=this.MaxItemsOnScreen,this.recalculateDescriptionNextFrame=1,this.AUDIO_LIBRARY='HUD_FRONTEND_DEFAULT_SOUNDSET',this.AUDIO_UPDOWN='NAV_UP_DOWN',this.AUDIO_LEFTRIGHT='NAV_LEFT_RIGHT',this.AUDIO_SELECT='SELECT',this.AUDIO_BACK='BACK',this.AUDIO_ERROR='ERROR',this.MenuItems=[],this.IndexChange=new _,this.ListChange=new _,this.DynamicListChange=new _,this.SliderChange=new _,this.SliderSelect=new _,this.CheckboxChange=new _,this.ItemSelect=new _,this.MenuOpen=new _,this.MenuClose=new _,this.MenuChange=new _,this.MouseEdgeEnabled=!0,i instanceof c||(i=c.Parse(i)),this.title=e,this.subtitle=t,this.spriteLibrary=s||'commonmenu',this.spriteName=n||'interaction_bgd',this.offset=new c(i.X,i.Y),this.Children=new Map,this._mainMenu=new b(new c(0,0),new l(700,500),new a(0,0,0,0)),this._logo=new p(this.spriteLibrary,this.spriteName,new c(0+this.offset.X,0+this.offset.Y),new l(431,107)),this._mainMenu.addItem(this._title=new m(this.title,new c(215+this.offset.X,20+this.offset.Y),this._titleScale,new a(255,255,255),1,o.Centered)),''!==this.subtitle&&(this._mainMenu.addItem(new w(new c(0+this.offset.X,107+this.offset.Y),new l(431,37),new a(0,0,0,255))),this._mainMenu.addItem(this._subtitle=new m(this.subtitle,new c(8+this.offset.X,110+this.offset.Y),.35,new a(255,255,255),0,o.Left)),this.subtitle.startsWith('~')&&(this.counterPretext=this.subtitle.substr(0,3)),this._counterText=new m('',new c(425+this.offset.X,110+this.offset.Y),.35,new a(255,255,255),0,o.Right),this.extraOffset+=37),this._upAndDownSprite=new p('commonmenu','shop_arrows_upanddown',new c(190+this.offset.X,147+37*(this.MaxItemsOnScreen+1)+this.offset.Y-37+this.extraOffset),new l(50,50)),this._extraRectangleUp=new w(new c(0+this.offset.X,144+38*(this.MaxItemsOnScreen+1)+this.offset.Y-37+this.extraOffset),new l(431,18),new a(0,0,0,200)),this._extraRectangleDown=new w(new c(0+this.offset.X,162+38*(this.MaxItemsOnScreen+1)+this.offset.Y-37+this.extraOffset),new l(431,18),new a(0,0,0,200)),this._descriptionBar=new w(new c(this.offset.X,123),new l(431,4),a.Black),this._descriptionRectangle=new p('commonmenu','gradient_bgd',new c(this.offset.X,127),new l(431,30)),this._descriptionText=new m('',new c(this.offset.X+5,125),.35,new a(255,255,255,255),r.ChaletLondon,o.Left),this._background=new p('commonmenu','gradient_bgd',new c(this.offset.X,144+this.offset.Y-37+this.extraOffset),new l(290,25)),this._visible=!1,mp.events.add('render',this.render.bind(this)),console.log(`Created Native UI! ${this.title}`);
        } get TitleScale(){
            return this._titleScale;
        } set TitleScale(e){
            this._titleScale=e;
        } get Visible(){
            return this._visible;
        } set Visible(e){
            if (this._visible=e,v.PlaySound(this.AUDIO_BACK,this.AUDIO_LIBRARY),e&&this.UpdateDescriptionCaption(),!0!==this._justOpenedFromPool) if (e){
                if (this._justOpened=!0,this.MenuOpen.emit(),null===this.ParentMenu&&!L.includes(this)&&this!==this._poolOpening){
                    const e=L.length?L[L.length-1]:null;L.push(this),e!==this._poolOpening&&null!==e&&(e._justClosedFromPool=!0,e.Visible=!1);
                }
            } else {
                if (!0===this._justClosedFromPool) return void(this._justClosedFromPool=!1);null===this.ParentMenu&&L.includes(this)&&L.length&&(L[L.length-1]===this&&(L.pop(),this._justOpenedFromPool=!0,L.length||(this._poolOpening=null)),L.length&&(this._poolOpening=L[L.length-1],L[L.length-1].Visible=!0)),0===L.length&&mp.game.invoke('0x8DB8CFFD58B62552'.toUpperCase(),1);
            } else this._justOpenedFromPool=!1;
        } get CurrentSelection(){
            return this._activeItem%this.MenuItems.length;
        } set CurrentSelection(e){
            this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!1,this._activeItem=1e3-1e3%this.MenuItems.length+e,this.CurrentSelection> this._maxItem?(this._maxItem=this.CurrentSelection,this._minItem=this.CurrentSelection-this.MaxItemsOnScreen):this.CurrentSelection<this._minItem&&(this._maxItem=this.MaxItemsOnScreen+this.CurrentSelection,this._minItem=this.CurrentSelection),this.UpdateDescriptionCaption();
        }RecalculateDescriptionPosition(){
            const e=this.MenuItems.length> this.MaxItemsOnScreen+1?this.MaxItemsOnScreen+2:this.MenuItems.length;this._descriptionBar.size=new l(431+this.WidthOffset,4),this._descriptionRectangle.size=new l(431+this.WidthOffset,30),this._descriptionBar.pos=new c(this.offset.X,112+this.extraOffset+this.offset.Y),this._descriptionRectangle.pos=new c(this.offset.X,112+this.extraOffset+this.offset.Y),this._descriptionText.pos=new c(this.offset.X+8,118+this.extraOffset+this.offset.Y),this._descriptionBar.pos=new c(this.offset.X,38*e+this._descriptionBar.pos.Y),this._descriptionRectangle.pos=new c(this.offset.X,38*e+this._descriptionRectangle.pos.Y),this._descriptionText.pos=new c(this.offset.X+8,38*e+this._descriptionText.pos.Y);
        }SetMenuWidthOffset(e){
            if (this.WidthOffset=e,null!=this._logo&&(this._logo.size=new l(431+this.WidthOffset,107)),this._mainMenu.Items[0].pos=new c((this.WidthOffset+this.offset.X+431)/2,20+this.offset.Y),this._counterText&&(this._counterText.pos=new c(425+this.offset.X+e,110+this.offset.Y)),this._mainMenu.Items.length>=2){
                this._mainMenu.Items[1].size=new l(431+this.WidthOffset,37);
            }
        }AddItem(e){
            this._justOpened&&(this._justOpened=!1),e.Offset=this.offset,e.Parent=this,e.SetVerticalPosition(25*this.MenuItems.length-37+this.extraOffset),this.MenuItems.push(e),this.RefreshIndex();
        }RemoveItem(e){
            for (let t=0;t<this.MenuItems.length;t++) this.MenuItems[t]===e&&this.MenuItems.splice(t,1);this.RefreshIndex();
        }RefreshIndex(){
            if (0==this.MenuItems.length) return this._activeItem=1e3,this._maxItem=this.MaxItemsOnScreen,void(this._minItem=0);for (let e=0;e<this.MenuItems.length;e++) this.MenuItems[e].Selected=!1;this._activeItem=1e3-1e3%this.MenuItems.length,this._maxItem=this.MaxItemsOnScreen,this._minItem=0,this.recalculateDescriptionNextFrame++;
        }Clear(){
            this.MenuItems=[],this.RecalculateDescriptionPosition();
        }Open(){
            this.Visible=!0;
        }Close(){
            this.Visible=!1,this.RefreshIndex(),this.MenuClose.emit(!0);
        } set Subtitle(e){
            this.subtitle=e,this._subtitle.caption=e;
        }GoLeft(){
            if ((this.MenuItems[this.CurrentSelection]instanceof T||this.MenuItems[this.CurrentSelection]instanceof D||this.MenuItems[this.CurrentSelection]instanceof R)&&this.MenuItems[this.CurrentSelection].Enabled) if (this.MenuItems[this.CurrentSelection]instanceof T){
                const e=this.MenuItems[this.CurrentSelection];if (0==e.Collection.length) return;e.Index--,v.PlaySound(this.AUDIO_LEFTRIGHT,this.AUDIO_LIBRARY),this.ListChange.emit(e,e.Index);
            } else if (this.MenuItems[this.CurrentSelection]instanceof D){
                    const e=this.MenuItems[this.CurrentSelection];e.SelectedValue<=e.LowerThreshold?e.SelectedValue=e.UpperThreshold:e.SelectedValue-=e.LeftMoveThreshold,v.PlaySound(this.AUDIO_LEFTRIGHT,this.AUDIO_LIBRARY),this.DynamicListChange.emit(e,e.SelectedValue);
                } else if (this.MenuItems[this.CurrentSelection]instanceof R){
                    const e=this.MenuItems[this.CurrentSelection];e.Index=e.Index-1,v.PlaySound(this.AUDIO_LEFTRIGHT,this.AUDIO_LIBRARY),this.SliderChange.emit(e,e.Index,e.IndexToItem(e.Index));
                }
        }GoRight(){
            if ((this.MenuItems[this.CurrentSelection]instanceof T||this.MenuItems[this.CurrentSelection]instanceof D||this.MenuItems[this.CurrentSelection]instanceof R)&&this.MenuItems[this.CurrentSelection].Enabled) if (this.MenuItems[this.CurrentSelection]instanceof T){
                const e=this.MenuItems[this.CurrentSelection];if (0==e.Collection.length) return;e.Index++,v.PlaySound(this.AUDIO_LEFTRIGHT,this.AUDIO_LIBRARY),this.ListChange.emit(e,e.Index);
            } else if (this.MenuItems[this.CurrentSelection]instanceof D){
                    const e=this.MenuItems[this.CurrentSelection];e.SelectedValue>=e.UpperThreshold?e.SelectedValue=e.LowerThreshold:e.SelectedValue+=e.RightMoveThreshold,v.PlaySound(this.AUDIO_LEFTRIGHT,this.AUDIO_LIBRARY),this.DynamicListChange.emit(e,e.SelectedValue);
                } else if (this.MenuItems[this.CurrentSelection]instanceof R){
                    const e=this.MenuItems[this.CurrentSelection];e.Index++,v.PlaySound(this.AUDIO_LEFTRIGHT,this.AUDIO_LIBRARY),this.SliderChange.emit(e,e.Index,e.IndexToItem(e.Index));
                }
        }SelectItem(){
            if (!this.MenuItems[this.CurrentSelection].Enabled) return void v.PlaySound(this.AUDIO_ERROR,this.AUDIO_LIBRARY);const e=this.MenuItems[this.CurrentSelection];if (this.MenuItems[this.CurrentSelection]instanceof M)e.Checked=!e.Checked,v.PlaySound(this.AUDIO_SELECT,this.AUDIO_LIBRARY),this.CheckboxChange.emit(e,e.Checked);else if (v.PlaySound(this.AUDIO_SELECT,this.AUDIO_LIBRARY),this.ItemSelect.emit(e,this.CurrentSelection),this.Children.has(e.Id)){
                const t=this.Children.get(e.Id);this.Visible=!1,t.Visible=!0,this.MenuChange.emit(t,!0);
            }e.fireEvent();
        }IsMouseInListItemArrows(e,t,i){
            mp.game.invoke('0x54ce8ac98e120cab'.toUpperCase(),'jamyfafi'),mp.game.ui.addTextComponentSubstringPlayerName(e.Text);let s=g.ResolutionMaintainRatio();let n=1080*(s.Width/s.Height);const h=5+mp.game.invoke('0x85f061da64ed2f67'.toUpperCase(),0)*n*.35+10,o=431-h;return g.IsMouseInBounds(t,new l(h,38))?1:g.IsMouseInBounds(new c(t.X+h,t.Y),new l(o,38))?2:0;
        }ProcessMouse(){
            if (!this.Visible||this._justOpened||0==this.MenuItems.length||!this.MouseControlsEnabled) return void this.MenuItems.filter(e=>e.Hovered).forEach(e=>e.Hovered=!1);mp.gui.cursor.visible||(mp.gui.cursor.visible=!0);let e=this.MenuItems.length-1,t=0;this.MenuItems.length> this.MaxItemsOnScreen+1&&(e=this._maxItem),g.IsMouseInBounds(new c(0,0),new l(30,1080))&&this.MouseEdgeEnabled?(mp.game.cam.setGameplayCamRelativeHeading(mp.game.cam.getGameplayCamRelativeHeading()+5),mp.game.ui.setCursorSprite(6)):g.IsMouseInBounds(new c(g.ResolutionMaintainRatio().Width-30,0),new l(30,1080))&&this.MouseEdgeEnabled?(mp.game.cam.setGameplayCamRelativeHeading(mp.game.cam.getGameplayCamRelativeHeading()-5),mp.game.ui.setCursorSprite(7)):this.MouseEdgeEnabled&&mp.game.ui.setCursorSprite(1);for (let i=this._minItem;i<=e;i++){
                let e=this.offset.X,s=this.offset.Y+144-37+this.extraOffset+38*t,n=(this.offset.Y,this.extraOffset,this.safezoneOffset.Y,this.CurrentSelection,431+this.WidthOffset);const h=38,o=this.MenuItems[i];if (g.IsMouseInBounds(new c(e,s),new l(n,h))){
                    o.Hovered=!0;const t=this.IsMouseInListItemArrows(this.MenuItems[i],new c(e,s),0);if (o.Hovered&&1==t&&(this.MenuItems[i]instanceof T||this.MenuItems[i]instanceof D)&&mp.game.invoke('0x8DB8CFFD58B62552'.toUpperCase(),5),mp.game.controls.isControlJustPressed(0,24)||mp.game.controls.isDisabledControlJustPressed(0,24)) if (o.Selected&&o.Enabled) if ((this.MenuItems[i]instanceof T||this.MenuItems[i]instanceof D)&&this.IsMouseInListItemArrows(this.MenuItems[i],new c(e,s),0)>0) switch (t){
                    case 1:v.PlaySound(this.AUDIO_SELECT,this.AUDIO_LIBRARY),this.MenuItems[i].fireEvent(),this.ItemSelect.emit(this.MenuItems[i],i);break;case 2:let e=this.MenuItems[i];(null==e.Collection?e.Items.Count:e.Collection.Count)>0&&(e.Index++,v.PlaySound(this.AUDIO_LEFTRIGHT,this.AUDIO_LIBRARY),this.ListChange.emit(e,e.Index));
                        } else this.SelectItem();else o.Selected?!o.Enabled&&o.Selected&&v.PlaySound(this.AUDIO_ERROR,this.AUDIO_LIBRARY):(this.CurrentSelection=i,v.PlaySound(this.AUDIO_UPDOWN,this.AUDIO_LIBRARY),this.IndexChange.emit(this.CurrentSelection,this.MenuItems[this._activeItem%this.MenuItems.length]),this.SelectItem(),this.UpdateDescriptionCaption());
                } else o.Hovered=!1;t++;
            } const i=144+38*(this.MaxItemsOnScreen+1)+this.offset.Y-37+this.extraOffset+this.safezoneOffset.Y,s=this.safezoneOffset.X+this.offset.X;this.MenuItems.length<=this.MaxItemsOnScreen+1||(g.IsMouseInBounds(new c(s,i),new l(431+this.WidthOffset,18))?(this._extraRectangleUp.color=new a(30,30,30,255),(mp.game.controls.isControlJustPressed(0,24)||mp.game.controls.isDisabledControlJustPressed(0,24))&&(this.MenuItems.length> this.MaxItemsOnScreen+1?this.GoUpOverflow():this.GoUp())):this._extraRectangleUp.color=new a(0,0,0,200),g.IsMouseInBounds(new c(s,i+18),new l(431+this.WidthOffset,18))?(this._extraRectangleDown.color=new a(30,30,30,255),(mp.game.controls.isControlJustPressed(0,24)||mp.game.controls.isDisabledControlJustPressed(0,24))&&(this.MenuItems.length> this.MaxItemsOnScreen+1?this.GoDownOverflow():this.GoDown())):this._extraRectangleDown.color=new a(0,0,0,200));
        }ProcessControl(){
            this.Visible&&(this._justOpened?this._justOpened=!1:(mp.game.controls.isControlJustReleased(0,177)&&this.GoBack(),0!=this.MenuItems.length&&(mp.game.controls.isControlPressed(0,172)&&this.lastUpDownNavigation+120<Date.now()?(this.lastUpDownNavigation=Date.now(),this.MenuItems.length> this.MaxItemsOnScreen+1?this.GoUpOverflow():this.GoUp()):mp.game.controls.isControlJustReleased(0,172)?this.lastUpDownNavigation=0:mp.game.controls.isControlPressed(0,173)&&this.lastUpDownNavigation+120<Date.now()?(this.lastUpDownNavigation=Date.now(),this.MenuItems.length> this.MaxItemsOnScreen+1?this.GoDownOverflow():this.GoDown()):mp.game.controls.isControlJustReleased(0,173)?this.lastUpDownNavigation=0:mp.game.controls.isControlPressed(0,174)&&this.lastLeftRightNavigation+100<Date.now()?(this.lastLeftRightNavigation=Date.now(),this.GoLeft()):mp.game.controls.isControlJustReleased(0,174)?this.lastLeftRightNavigation=0:mp.game.controls.isControlPressed(0,175)&&this.lastLeftRightNavigation+100<Date.now()?(this.lastLeftRightNavigation=Date.now(),this.GoRight()):mp.game.controls.isControlJustReleased(0,175)?this.lastLeftRightNavigation=0:mp.game.controls.isControlJustPressed(0,201)&&this.SelectItem())));
        }GoUpOverflow(){
            this.MenuItems.length<=this.MaxItemsOnScreen+1||(this._activeItem%this.MenuItems.length<=this._minItem?this._activeItem%this.MenuItems.length==0?(this._minItem=this.MenuItems.length-this.MaxItemsOnScreen-1,this._maxItem=this.MenuItems.length-1,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!1,this._activeItem=1e3-1e3%this.MenuItems.length,this._activeItem+=this.MenuItems.length-1,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!0):(this._minItem--,this._maxItem--,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!1,this._activeItem--,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!0):(this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!1,this._activeItem--,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!0),v.PlaySound(this.AUDIO_UPDOWN,this.AUDIO_LIBRARY),this.IndexChange.emit(this.CurrentSelection,this.MenuItems[this._activeItem%this.MenuItems.length]),this.UpdateDescriptionCaption());
        }GoUp(){
            this.MenuItems.length> this.MaxItemsOnScreen+1||(this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!1,this._activeItem--,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!0,v.PlaySound(this.AUDIO_UPDOWN,this.AUDIO_LIBRARY),this.IndexChange.emit(this.CurrentSelection,this.MenuItems[this._activeItem%this.MenuItems.length]),this.UpdateDescriptionCaption());
        }GoDownOverflow(){
            this.MenuItems.length<=this.MaxItemsOnScreen+1||(this._activeItem%this.MenuItems.length>=this._maxItem?this._activeItem%this.MenuItems.length==this.MenuItems.length-1?(this._minItem=0,this._maxItem=this.MaxItemsOnScreen,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!1,this._activeItem=1e3-1e3%this.MenuItems.length,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!0):(this._minItem++,this._maxItem++,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!1,this._activeItem++,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!0):(this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!1,this._activeItem++,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!0),v.PlaySound(this.AUDIO_UPDOWN,this.AUDIO_LIBRARY),this.IndexChange.emit(this.CurrentSelection,this.MenuItems[this._activeItem%this.MenuItems.length]),this.UpdateDescriptionCaption());
        }GoDown(){
            this.MenuItems.length> this.MaxItemsOnScreen+1||(this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!1,this._activeItem++,this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!0,v.PlaySound(this.AUDIO_UPDOWN,this.AUDIO_LIBRARY),this.IndexChange.emit(this.CurrentSelection,this.MenuItems[this._activeItem%this.MenuItems.length]),this.UpdateDescriptionCaption());
        }GoBack(){
            this.Visible=!1,null!=this.ParentMenu&&(this.ParentMenu.Visible=!0,this.MenuChange.emit(this.ParentMenu,!1)),this.MenuClose.emit(!1);
        }BindMenuToItem(e,t){
            this.MenuItems.includes(t)||this.AddItem(t),e.ParentMenu=this,e.ParentItem=t,this.Children.set(t.Id,e);
        }ReleaseMenuFromItem(e){
            if (!this.Children.has(e.Id)) return !1;const t=this.Children.get(e.Id);return t.ParentItem=null,t.ParentMenu=null,this.Children.delete(e.Id),!0;
        }UpdateDescriptionCaption(){
            const e=this.MenuItems[this._activeItem%this.MenuItems.length].Description;this._descriptionText.caption=e,this._descriptionText.Wrap=400,this.recalculateDescriptionNextFrame++;
        }CalculateDescription(){
            if (this.recalculateDescriptionNextFrame>0&&this.recalculateDescriptionNextFrame--,this.RecalculateDescriptionPosition(),this.MenuItems.length>0&&this._descriptionText.caption&&''!==this.MenuItems[this._activeItem%this.MenuItems.length].Description.trim()){
                const e=g.GetLineCount(this._descriptionText.caption,this._descriptionText.pos,this._descriptionText.font,this._descriptionText.scale,this._descriptionText.Wrap);this._descriptionRectangle.size=new l(431+this.WidthOffset,25*e+15),0===e&&this.recalculateDescriptionNextFrame++;
            }
        }render(){
            if (!this.Visible) return;this._justOpened&&(null==this._logo||this._logo.IsTextureDictionaryLoaded||this._logo.LoadTextureDictionary(),this._background.IsTextureDictionaryLoaded||this._background.LoadTextureDictionary(),this._descriptionRectangle.IsTextureDictionaryLoaded||this._descriptionRectangle.LoadTextureDictionary(),this._upAndDownSprite.IsTextureDictionaryLoaded||this._upAndDownSprite.LoadTextureDictionary(),this.recalculateDescriptionNextFrame||this.recalculateDescriptionNextFrame++),this._mainMenu.Draw(),this.ProcessMouse(),this.ProcessControl(),this._background.size=this.MenuItems.length> this.MaxItemsOnScreen+1?new l(431+this.WidthOffset,38*(this.MaxItemsOnScreen+1)):new l(431+this.WidthOffset,38*this.MenuItems.length),this._background.Draw(),this.recalculateDescriptionNextFrame&&this.CalculateDescription(),this.MenuItems.length>0&&(this.MenuItems[this._activeItem%this.MenuItems.length].Selected=!0,''!==this.MenuItems[this._activeItem%this.MenuItems.length].Description.trim()&&(this._descriptionBar.Draw(),this._descriptionRectangle.Draw(),this._descriptionText.Draw()));let e=0;if (this.MenuItems.length<=this.MaxItemsOnScreen+1){
                for (const t of this.MenuItems)t.SetVerticalPosition(38*e-37+this.extraOffset),t.Draw(),e++;this._counterText&&this.counterOverride&&(this._counterText.caption=this.counterPretext+this.counterOverride,this._counterText.Draw());
            } else {
                for (let t=this._minItem;t<=this._maxItem;t++){
                    let i=this.MenuItems[t];i.SetVerticalPosition(38*e-37+this.extraOffset),i.Draw(),e++;
                } if (this._extraRectangleUp.size=new l(431+this.WidthOffset,18),this._extraRectangleDown.size=new l(431+this.WidthOffset,18),this._upAndDownSprite.pos=new c(190+this.offset.X+this.WidthOffset/2,147+37*(this.MaxItemsOnScreen+1)+this.offset.Y-37+this.extraOffset),this._extraRectangleUp.Draw(),this._extraRectangleDown.Draw(),this._upAndDownSprite.Draw(),this._counterText){
                    if (this.counterOverride) this._counterText.caption=this.counterPretext+this.counterOverride;else {
                        const e=this.CurrentSelection+1+' / '+this.MenuItems.length;this._counterText.caption=this.counterPretext+e;
                    } this._counterText.Draw();
                }
            } this._logo.Draw();
        }
    }exports.Menu=A,exports.UIMenuItem=S,exports.UIMenuListItem=T,exports.UIMenuDynamicListItem=D,exports.UIMenuCheckboxItem=M,exports.UIMenuSliderItem=R,exports.BadgeStyle=h,exports.Point=c,exports.Size=l,exports.Color=a,exports.Font=r,exports.ItemsCollection=O,exports.ListItem=C;
}]);
