<script type="text/javascript">
    window.onscroll = function () { verticalScrollShowProgress() };
    function verticalScrollShowProgress() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-progress-bar").style.width = scrolled + "%";
    }
</script>