import React, { Component } from 'react';
import MenuItem from '../menu-items/menu-items';
import './directory.scss';


class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections : [
                {
                    title : "Cakes",
                    imageUrl : "https://www.itl.cat/pngfile/big/42-421036_cake-wallpaper-download-download-birthday-cake-images-hd.jpg",
                    id:1,
                    linkUrl:'shop/cakes'
                },
                {
                    title : "Donuts",
                    imageUrl : "https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
                    id:2,
                    linkUrl:'shop/donuts'
                },
                {
                    title : "Pastry",
                    imageUrl : "https://c4.wallpaperflare.com/wallpaper/953/1020/893/food-dessert-pastry-hd-wallpaper-preview.jpg",
                    id:3,
                    linkUrl:'shop/pastry'
                },
                {
                    title : "Dessert",
                    imageUrl : "https://img5.goodfon.com/wallpaper/nbig/2/70/colorful-macarons-pechene-1.jpg",
                    id:4,
                    size:'large',
                    linkUrl:'shop/dessert'
                },
                {
                    title : "CupCakes",
                    imageUrl : "https://cdn.wallpapersafari.com/98/68/k29Gha.jpg",
                    id:5,
                    size:'large',
                    linkUrl:'shop/cupcake'
                }





            ]
        }
    }
    render() { 
        return (

            <div className="directory-menu">
                {
                    this.state.sections.map(
                        ({id,...otherSectionsProps}) => (
                            <MenuItem key={id} {...otherSectionsProps}/>
                        )
                    )
                }
            </div>

         );
    }
}
 
export default Directory;

