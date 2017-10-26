<template>
  <div class="moviedetails" ref="sectionBox">
    <!--{{$route.params.movie_id}}-->
    <div class="section-wrap">
      <SectionHead></SectionHead>
      <SectionBox title="观影提示">
        <SectionTop slot="viewingHints"></SectionTop>
      </SectionBox>
      <SectionBox title="演职人员">
        <TheActors slot="viewingHints"></TheActors>
      </SectionBox>


      <SectionBox title="影片简介">
        <AboutMovie slot="viewingHints"></AboutMovie>
      </SectionBox>
    </div>
    <footer class="section-footer">
        <span>特惠抢票</span>
    </footer>
  </div>
</template>

<script>
import SectionBox from './components/SectionBox'
import SectionTop from './components/SectionTop'
import TheActors from './components/TheActors'
import AboutMovie from './components/AboutMovie'
import SectionHead from './components/SectionHead'
export default {
  name: 'moviedetails',
  data() {
    return {
      
    }
  },
  components: {
    SectionBox,
    SectionTop,
    TheActors,
    AboutMovie,
    SectionHead
  }
}

</script>

<style scoped lang="less">
.moviedetails{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  padding-bottom: 0.55rem;
  background-color: #f5f5f5;
  .section-footer{
    height: 0.55rem;
    background-color: rgb(255, 77, 100);
    line-height: 0.55rem;
    text-align: center;
    color: #fff;
    font-size: 0.18rem;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>