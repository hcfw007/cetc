<template>
  <div>
    <div v-for=" item in list " :key="item.id " class="search-result-item-container">
      <div flex="dir:top ">
        <h3 class="title">{{item.title}}</h3>
        <div>
          <span class="description-title">摘要：</span>
          <div class="description">
            {{ item.description }}
          </div>
        </div>
        <span class="link">
          {{ item.link }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news-list",
  props: ["list"],
}
</script>

<style lang="stylus" scoped>
div.search-result-item-container
  margin: 15px 0
h3.title
  font-size: 16px
  font-weight: bold
  color: #3683C0
span.description-title, div.description
  color: #A0A1A2
  font-size: 14px
span.link
  color: #7DCC8E
</style>

