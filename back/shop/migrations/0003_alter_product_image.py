# Generated by Django 4.1.2 on 2022-10-13 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_category_parent_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images', verbose_name='Изображение'),
        ),
    ]
