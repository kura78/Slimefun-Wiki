<script>
export default {
    data: () => ({
        giturl: useRuntimeConfig().public.gitURL,
        branch: useRuntimeConfig().public.gitBranch,
        commit: useRuntimeConfig().public.gitCommit,
        commiturl: "",
    }),
    mounted() {
        this.commiturl = this.giturl.replace(".git", "/commit/"+this.commit);
    }
}
</script>

<template>
    <div class="footer">
      <div class="footerContent">
        <div class="footerTop">
          Made by Orchid Development &bull; This website is <a class="footerLink"
            :href="giturl" target="_blank" rel="noopener noreferrer">open source</a> on
          Github.
        </div>
        <div class="footerBottom">
            {{ branch }}@<a :href="commiturl" class="footerLink">{{ commit }}</a> &bull; Open an issue &bull; Fork repository &bull;
        </div>
      </div>
    </div>
  </template>
 