# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in ui_customization/__init__.py
from ui_customization import __version__ as version

setup(
	name='ui_customization',
	version=version,
	description='ui_customization',
	author='bizmap',
	author_email='suraj787@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
