<template>
  <div class="entry-container mb-3 pointer p-2"
        @click="$router.push( { name: 'entry', params: { id: 10 } } )">

    <!-- TITLE -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="fw-light mx-2">2021, jueves</span>
    </div>

    <div class="entry-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum cupiditate alias magnam voluptatibus minima voluptate consectetur mollitia beatae maxime asperiores cumque, illum aperiam numquam iure labore? Nam, voluptas voluptate!
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 40);
        transition: 0.2s all ease-in;
    }
    .entry.description{
        font-size: 12px;
    }
}


</style>