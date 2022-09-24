<template>

    <nav>
        <ul>
            <li>
                <router-link :to="{name: 'anasayfa'}">
                    <i class="fas fa-home"></i>ANA SAYFA
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'hakkimizda'}">
                    <i class="fas fa-users"></i>HAKKIMIZDA
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'turlar'}">
                    <i class="fas fa-asterisk"></i>TÜRLER
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'galeri'}">
                    <i class="fas fa-images"></i>GALERİ
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'iletisim'}">
                    <i class="fas fa-address-book"></i>İLETİŞİM
                </router-link>
            </li>
        </ul>
    </nav>

</template>