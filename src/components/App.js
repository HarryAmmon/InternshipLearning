import React from 'react';
import Styles from './App.module.css';
import Footer from './Footer.js';
import Header from './Header.js';

export default function App(){
    return(
        <div className={Styles.root}>
            <Header />
            <main>
                <article>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut pulvinar tellus. Sed commodo nulla justo, quis dapibus eros placerat non. Etiam nec nulla risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse gravida sapien mauris, ut fringilla purus viverra ut. Ut bibendum convallis leo, non mattis arcu convallis ut. Donec quis est a ex euismod rutrum ac id urna. Integer vitae nulla ultrices, elementum metus nec, maximus massa. Maecenas ipsum felis, mollis sed condimentum ut, facilisis sed nunc. Donec fermentum consequat ligula. Nunc ut blandit justo. Pellentesque auctor pellentesque sapien ut aliquet.
                        In fermentum ligula eget ligula dapibus, feugiat pretium dui volutpat. Phasellus elementum mauris sit amet tortor aliquet condimentum. Maecenas sem erat, eleifend quis ante vitae, commodo vulputate dolor. Mauris lacinia diam at malesuada ultricies. Integer elit arcu, ullamcorper sit amet augue nec, iaculis condimentum urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vulputate massa nisl, ac scelerisque orci porttitor vitae. Curabitur tincidunt hendrerit mauris, vitae pharetra nibh imperdiet at. Vestibulum dolor velit, consequat quis quam nec, interdum efficitur libero. Ut erat massa, vehicula vel vestibulum vitae, viverra eu elit. Nulla lobortis vestibulum neque, ac viverra neque efficitur vitae. Maecenas tempor, turpis posuere facilisis dictum, erat risus fermentum velit, in viverra ex velit nec elit. Maecenas pellentesque enim vel massa pharetra consequat. Aliquam non nulla diam. Sed nisi diam, fringilla porttitor sem cursus, pharetra porta arcu.
                        Phasellus ut ante porta, auctor velit vitae, consequat enim. Donec tincidunt et erat eget fermentum. Vivamus molestie mi eu felis vehicula fermentum. Nunc finibus, nibh vel cursus malesuada, leo justo molestie libero, eget aliquet ligula turpis id mi. Cras porttitor commodo blandit. Nam ultrices, urna sed fringilla ullamcorper, erat nibh maximus ligula, eget aliquam magna neque condimentum ligula. Sed sit amet ex at velit dictum imperdiet eget facilisis odio. Donec auctor velit sit amet malesuada blandit. Phasellus sodales ligula nec suscipit finibus. Sed eu libero lorem. Quisque at leo quis nunc laoreet tempor. Integer a mollis elit, id rutrum mi. Aenean sit amet nulla neque. Curabitur ligula nisi, malesuada quis turpis et, efficitur hendrerit nunc.
                        Proin molestie ex vitae orci congue pellentesque. Pellentesque ornare volutpat ipsum ac accumsan. Sed id ex quis leo elementum dignissim eu non dui. Fusce et justo sed purus blandit tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium elit quis dolor suscipit mollis. Pellentesque lacinia erat nec nulla blandit, ut ornare leo sodales. Suspendisse leo mauris, fringilla nec pretium et, tincidunt at diam. In vitae neque nisi.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris facilisis luctus turpis eget auctor. Phasellus gravida pharetra vestibulum. Morbi tempus condimentum velit vel pretium. Sed urna tellus, sagittis sed odio rutrum, vestibulum laoreet mi. Mauris nec mollis sapien, sit amet placerat nibh. Sed eget turpis sapien. Donec at diam ullamcorper, finibus augue ut, pretium sem. Nulla at turpis ante. Integer a nisl interdum, dictum diam sed, dictum urna. Pellentesque leo elit, molestie ac magna at, malesuada sollicitudin nisi. Nam euismod eleifend dignissim. 
                    </p>
                </article>
            </main>
            <Footer />
        </div>
    );
}