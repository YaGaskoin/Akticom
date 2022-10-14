from django.db import models


class Category(models.Model):
    parent_category = models.ForeignKey(
        "Category", verbose_name='Родительская категория',
        related_name='children', null=True, blank=True,
        on_delete=models.CASCADE
    )
    name = models.CharField(verbose_name='Название', max_length=200)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return '{}'.format(self.name)


class Product(models.Model):
    article = models.CharField(verbose_name='Код', max_length=15)
    name = models.CharField(verbose_name='Наименование', max_length=200)
    price = models.DecimalField(verbose_name='Цена', max_digits=100, decimal_places=2)
    special_price = models.DecimalField(verbose_name='Цена специального предложения', max_digits=100, decimal_places=2)
    count = models.IntegerField(verbose_name='Количество')
    measurement = models.CharField(verbose_name='Ед. измерения', max_length=5)
    united_purchases = models.BooleanField(verbose_name='Совместные покупки', default=False)
    image = models.ImageField(verbose_name='Изображение', upload_to='images', null=True, blank=True)
    show_main = models.BooleanField(verbose_name='Отображать на главной', default=False)
    description = models.TextField(verbose_name='Описание')
    category = models.ForeignKey(
        Category, verbose_name='Категория',
        related_name='products', on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def __str__(self):
        return '{}'.format(self.name)


class Properties(models.Model):
    key = models.CharField(verbose_name='Название свойства', max_length=100)
    value = models.CharField(verbose_name='Значение свойства', max_length=100)
    product = models.ForeignKey(
        Product, verbose_name='Продукт', related_name='options',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Опиция'
        verbose_name_plural = 'Опции'

    def __str__(self):
        return '{} - {}:{}'.format(self.product, self.key, self.value)

